import { useState, useEffect } from "react";

const WORKER_URL = import.meta.env.VITE_REFERRAL_WORKER_URL ?? "https://fsc-referral.YOUR_SUBDOMAIN.workers.dev";
const KEY_REF = "fsc_ref";
const KEY_TOKEN = "fsc_my_token";
const KEY_EMAIL = "fsc_pending_email";

export interface ReferralStatus {
  token: string;
  referralUrl: string;
  referrals: number;
  discount: number;
  spotsLeft: number;
}

export function useReferral() {
  const [status, setStatus] = useState<ReferralStatus | null>(null);

  useEffect(() => {
    // Capture incoming ?ref= param
    const params = new URLSearchParams(window.location.search);
    const incomingRef = params.get("ref");
    if (incomingRef) {
      fetch(`${WORKER_URL}/api/referral/click`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ref: incomingRef }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.valid) localStorage.setItem(KEY_REF, incomingRef);
        })
        .catch(() => {});
    }

    // Load existing status if token saved
    const token = localStorage.getItem(KEY_TOKEN);
    if (token) {
      fetch(`${WORKER_URL}/api/referral/status?token=${token}`)
        .then((r) => r.json())
        .then(setStatus)
        .catch(() => {});
    }
  }, []);

  /** Call after signup — creates a referral token for this user */
  const initReferral = async (email: string): Promise<ReferralStatus | null> => {
    try {
      const res = await fetch(`${WORKER_URL}/api/referral/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem(KEY_TOKEN, data.token);
        setStatus(data);
        return data;
      }
    } catch {}
    return null;
  };

  /** Call on form submit if a ?ref= was present — credits the referrer */
  const recordSignup = async (email: string): Promise<void> => {
    const ref = localStorage.getItem(KEY_REF);
    if (!ref) return;
    try {
      const res = await fetch(`${WORKER_URL}/api/referral/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ref }),
      });
      const data = await res.json();
      if (data.newUserToken) {
        localStorage.setItem(KEY_TOKEN, data.newUserToken);
        localStorage.removeItem(KEY_REF);
      }
    } catch {}
  };

  const getStoredRef = () => localStorage.getItem(KEY_REF);
  const savePendingEmail = (email: string) => localStorage.setItem(KEY_EMAIL, email);
  const getPendingEmail = () => localStorage.getItem(KEY_EMAIL);
  const clearPendingEmail = () => localStorage.removeItem(KEY_EMAIL);

  return {
    status,
    initReferral,
    recordSignup,
    getStoredRef,
    savePendingEmail,
    getPendingEmail,
    clearPendingEmail,
  };
}
