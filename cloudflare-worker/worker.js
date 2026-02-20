/**
 * FreeSite Company — Referral Worker
 * Cloudflare Worker + KV
 *
 * Endpoints:
 *   POST /api/referral/create   — generate a referral token for a customer
 *   POST /api/referral/click    — log a referral link click
 *   POST /api/referral/signup   — record a new signup via referral
 *   GET  /api/referral/status   — get referral stats for a token or email
 *
 * KV Keys:
 *   ref:{token}    → { token, email, createdAt, referrals: [], discount }
 *   email:{email}  → token  (reverse lookup)
 */

const CORS = {
  'Access-Control-Allow-Origin': 'https://freesitecompany.com',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const MAX_DISCOUNT = 5;   // $5/month max
const PER_REFERRAL = 1;   // $1 off per referral

// ── Helpers ──────────────────────────────────────────────────────────────────

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  });
}

function err(msg, status = 400) {
  return json({ error: msg }, status);
}

function generateToken() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const arr = new Uint8Array(10);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => chars[b % chars.length]).join('');
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

// ── Route Handler ─────────────────────────────────────────────────────────────

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // Preflight
    if (method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    // POST /api/referral/create
    // Body: { email }
    // Returns: { token, referralUrl, discount, referrals }
    if (path === '/api/referral/create' && method === 'POST') {
      const body = await request.json().catch(() => null);
      if (!body?.email) return err('email is required');

      const email = normalizeEmail(body.email);

      // Check if this email already has a token
      const existingToken = await env.REFERRALS.get(`email:${email}`);
      if (existingToken) {
        const record = JSON.parse(await env.REFERRALS.get(`ref:${existingToken}`));
        return json({
          token: existingToken,
          referralUrl: `https://freesitecompany.com?ref=${existingToken}`,
          discount: record.discount,
          referrals: record.referrals.length,
        });
      }

      // Create new record
      const token = generateToken();
      const record = {
        token,
        email,
        createdAt: new Date().toISOString(),
        referrals: [],
        discount: 0,
      };

      await env.REFERRALS.put(`ref:${token}`, JSON.stringify(record));
      await env.REFERRALS.put(`email:${email}`, token);

      return json({
        token,
        referralUrl: `https://freesitecompany.com?ref=${token}`,
        discount: 0,
        referrals: 0,
      });
    }

    // POST /api/referral/click
    // Body: { ref }  — just logs a click on a referral link
    if (path === '/api/referral/click' && method === 'POST') {
      const body = await request.json().catch(() => null);
      if (!body?.ref) return err('ref token is required');

      const raw = await env.REFERRALS.get(`ref:${body.ref}`);
      if (!raw) return err('Invalid referral token', 404);

      // We don't need to do anything here beyond confirming it's valid.
      // The client stores the ref in localStorage and sends it on signup.
      return json({ valid: true });
    }

    // POST /api/referral/signup
    // Body: { email, ref }  — called when a referred user completes signup
    // Gives the referrer $1 off (up to $5/month max)
    if (path === '/api/referral/signup' && method === 'POST') {
      const body = await request.json().catch(() => null);
      if (!body?.email || !body?.ref) return err('email and ref are required');

      const newEmail = normalizeEmail(body.email);
      const ref = body.ref;

      // Look up referrer
      const referrerRaw = await env.REFERRALS.get(`ref:${ref}`);
      if (!referrerRaw) return err('Invalid referral token', 404);
      const referrer = JSON.parse(referrerRaw);

      // Don't allow self-referral
      if (referrer.email === newEmail) return err('Cannot refer yourself');

      // Don't allow duplicate referrals from same email
      const alreadyReferred = referrer.referrals.some(r => r.email === newEmail);
      if (alreadyReferred) return err('This email was already referred');

      // Record referral
      referrer.referrals.push({
        email: newEmail,
        date: new Date().toISOString(),
      });

      // Calculate new discount (cap at MAX_DISCOUNT)
      referrer.discount = Math.min(referrer.referrals.length * PER_REFERRAL, MAX_DISCOUNT);

      await env.REFERRALS.put(`ref:${ref}`, JSON.stringify(referrer));

      // Also create a referral record for the new signup so they get their own link
      const newToken = generateToken();
      const newRecord = {
        token: newToken,
        email: newEmail,
        createdAt: new Date().toISOString(),
        referredBy: ref,
        referrals: [],
        discount: 0,
      };
      await env.REFERRALS.put(`ref:${newToken}`, JSON.stringify(newRecord));
      await env.REFERRALS.put(`email:${newEmail}`, newToken);

      return json({
        success: true,
        referrerDiscount: referrer.discount,
        referrerReferrals: referrer.referrals.length,
        newUserToken: newToken,
        newUserReferralUrl: `https://freesitecompany.com?ref=${newToken}`,
      });
    }

    // GET /api/referral/status?token=TOKEN  or  ?email=EMAIL
    if (path === '/api/referral/status' && method === 'GET') {
      let token = url.searchParams.get('token');
      const email = url.searchParams.get('email');

      if (!token && email) {
        token = await env.REFERRALS.get(`email:${normalizeEmail(email)}`);
      }

      if (!token) return err('token or email is required');

      const raw = await env.REFERRALS.get(`ref:${token}`);
      if (!raw) return err('Referral record not found', 404);

      const record = JSON.parse(raw);

      return json({
        token: record.token,
        referralUrl: `https://freesitecompany.com?ref=${record.token}`,
        referrals: record.referrals.length,
        discount: record.discount,
        maxDiscount: MAX_DISCOUNT,
        spotsLeft: Math.max(0, MAX_DISCOUNT - record.referrals.length),
      });
    }

    return err('Not found', 404);
  },
};
