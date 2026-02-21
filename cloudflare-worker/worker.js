/**
 * FreeSite Company — Referral + Upload Worker
 * Cloudflare Worker + KV + R2
 *
 * Endpoints:
 *   POST /api/referral/create   — generate a referral token for a customer
 *   POST /api/referral/click    — log a referral link click
 *   POST /api/referral/signup   — record a new signup via referral
 *   GET  /api/referral/status   — get referral stats for a token or email
 *   POST /api/upload            — upload files to R2 (multipart/form-data)
 *   GET  /api/file/*            — serve a file from R2
 *
 * KV Keys:
 *   ref:{token}    → { token, email, createdAt, referrals: [], discount }
 *   email:{email}  → token  (reverse lookup)
 *
 * R2 Keys:
 *   uploads/{submissionId}/{filename}
 */

const ALLOWED_ORIGINS = [
  'https://freesitecompany.com',
  'https://www.freesitecompany.com',
  'http://localhost:5173',
];

const MAX_DISCOUNT = 5;   // $5/month max
const PER_REFERRAL = 1;   // $1 off per referral

// ── Helpers ──────────────────────────────────────────────────────────────────

function getCors(request) {
  const origin = request.headers.get('Origin') ?? '';
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function json(data, status = 200, cors = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}

function err(msg, status = 400, cors = {}) {
  return json({ error: msg }, status, cors);
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
    const CORS = getCors(request);

    // Preflight
    if (method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    // POST /api/upload
    // Body: multipart/form-data with files[] and submission_id
    // Returns: { files: [{ name, key }] }
    if (path === '/api/upload' && method === 'POST') {
      let formData;
      try {
        formData = await request.formData();
      } catch {
        return err('Invalid form data', 400, CORS);
      }

      const submissionId = (formData.get('submission_id') ?? `upload-${Date.now()}`)
        .toString()
        .replace(/[^a-zA-Z0-9._-]/g, '-')
        .slice(0, 80);

      const files = formData.getAll('files');
      if (!files.length) return err('No files provided', 400, CORS);

      const uploaded = [];
      for (const file of files) {
        if (!(file instanceof File)) continue;
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const key = `uploads/${submissionId}/${Date.now()}-${safeName}`;
        await env.UPLOADS.put(key, file.stream(), {
          httpMetadata: { contentType: file.type },
        });
        uploaded.push({ name: file.name, key });
      }

      return json({ files: uploaded }, 200, CORS);
    }

    // GET /api/file/*  — serve a file from R2
    if (path.startsWith('/api/file/') && method === 'GET') {
      const key = decodeURIComponent(path.slice('/api/file/'.length));
      if (!key) return err('No file key provided', 400, CORS);

      const object = await env.UPLOADS.get(key);
      if (!object) return err('File not found', 404, CORS);

      const headers = new Headers(CORS);
      object.writeHttpMetadata(headers);
      headers.set('etag', object.httpEtag);
      return new Response(object.body, { headers });
    }

    // POST /api/referral/create
    if (path === '/api/referral/create' && method === 'POST') {
      const body = await request.json().catch(() => null);
      if (!body?.email) return err('email is required', 400, CORS);

      const email = normalizeEmail(body.email);

      const existingToken = await env.REFERRALS.get(`email:${email}`);
      if (existingToken) {
        const record = JSON.parse(await env.REFERRALS.get(`ref:${existingToken}`));
        return json({
          token: existingToken,
          referralUrl: `https://freesitecompany.com?ref=${existingToken}`,
          discount: record.discount,
          referrals: record.referrals.length,
        }, 200, CORS);
      }

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
      }, 200, CORS);
    }

    // POST /api/referral/click
    if (path === '/api/referral/click' && method === 'POST') {
      const body = await request.json().catch(() => null);
      if (!body?.ref) return err('ref token is required', 400, CORS);

      const raw = await env.REFERRALS.get(`ref:${body.ref}`);
      if (!raw) return err('Invalid referral token', 404, CORS);

      return json({ valid: true }, 200, CORS);
    }

    // POST /api/referral/signup
    if (path === '/api/referral/signup' && method === 'POST') {
      const body = await request.json().catch(() => null);
      if (!body?.email || !body?.ref) return err('email and ref are required', 400, CORS);

      const newEmail = normalizeEmail(body.email);
      const ref = body.ref;

      const referrerRaw = await env.REFERRALS.get(`ref:${ref}`);
      if (!referrerRaw) return err('Invalid referral token', 404, CORS);
      const referrer = JSON.parse(referrerRaw);

      if (referrer.email === newEmail) return err('Cannot refer yourself', 400, CORS);

      const alreadyReferred = referrer.referrals.some(r => r.email === newEmail);
      if (alreadyReferred) return err('This email was already referred', 400, CORS);

      referrer.referrals.push({ email: newEmail, date: new Date().toISOString() });
      referrer.discount = Math.min(referrer.referrals.length * PER_REFERRAL, MAX_DISCOUNT);

      await env.REFERRALS.put(`ref:${ref}`, JSON.stringify(referrer));

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
      }, 200, CORS);
    }

    // GET /api/referral/status?token=TOKEN  or  ?email=EMAIL
    if (path === '/api/referral/status' && method === 'GET') {
      let token = url.searchParams.get('token');
      const email = url.searchParams.get('email');

      if (!token && email) {
        token = await env.REFERRALS.get(`email:${normalizeEmail(email)}`);
      }

      if (!token) return err('token or email is required', 400, CORS);

      const raw = await env.REFERRALS.get(`ref:${token}`);
      if (!raw) return err('Referral record not found', 404, CORS);

      const record = JSON.parse(raw);

      return json({
        token: record.token,
        referralUrl: `https://freesitecompany.com?ref=${record.token}`,
        referrals: record.referrals.length,
        discount: record.discount,
        maxDiscount: MAX_DISCOUNT,
        spotsLeft: Math.max(0, MAX_DISCOUNT - record.referrals.length),
      }, 200, CORS);
    }

    return err('Not found', 404, CORS);
  },
};
