import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, Users, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { ReferralStatus } from "../hooks/useReferral";

interface Props {
  status: ReferralStatus;
  animationDelay?: number;
}

const MAX_REFERRALS = 5;

export function ReferralWidget({ status, animationDelay = 0.65 }: Props) {
  const [copied, setCopied] = useState(false);
  const { referralUrl, referrals, discount, spotsLeft } = status;

  const copy = () => {
    navigator.clipboard.writeText(referralUrl).catch(() => {
      const el = document.createElement("textarea");
      el.value = referralUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tweetText = encodeURIComponent(
    `I just got a free custom website from FreeSite Company — way better than Squarespace or Wix and saves you up to $300/year. Use my link: ${referralUrl}`
  );

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: animationDelay }}
      className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8 md:p-10 mb-8"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Users className="h-6 w-6 text-emerald-400" />
        <h2 className="text-2xl font-bold">Refer a Friend, Save Money</h2>
      </div>
      <p className="text-zinc-400 mb-8">
        Get{" "}
        <span className="text-emerald-400 font-semibold">$1 off/month</span>{" "}
        for every friend who signs up — up to{" "}
        <span className="font-semibold text-white">$5/month</span> off your
        hosting.
      </p>

      {/* Progress dots */}
      <div className="flex items-center gap-3 mb-3">
        {Array.from({ length: MAX_REFERRALS }, (_, i) => {
          const earned = i < referrals;
          return (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: animationDelay + 0.05 * i }}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-all ${
                earned
                  ? "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30"
                  : "bg-zinc-800 text-zinc-600 border border-zinc-700"
              }`}
            >
              {earned ? (
                <DollarSign className="h-4 w-4" />
              ) : (
                <span className="text-xs">{i + 1}</span>
              )}
            </motion.div>
          );
        })}
      </div>
      <p className="text-sm text-zinc-400 mb-8">
        {referrals} of {MAX_REFERRALS} referrals ·{" "}
        <span className="text-emerald-400 font-semibold">
          ${discount}/month saved
        </span>
        {spotsLeft > 0
          ? ` · ${spotsLeft} spot${spotsLeft > 1 ? "s" : ""} left`
          : " · Max discount reached!"}
      </p>

      {/* Referral link */}
      <p className="text-sm font-semibold text-zinc-300 mb-3">
        Your referral link:
      </p>
      <div className="flex gap-3 mb-6">
        <input
          readOnly
          value={referralUrl}
          className="flex-1 bg-zinc-800/80 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-300 outline-none min-w-0"
        />
        <Button
          onClick={copy}
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/50 gap-2 shrink-0"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>

      {/* Share buttons */}
      <div className="flex gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${tweetText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-3 rounded-lg bg-black text-white text-sm font-bold hover:bg-zinc-900 transition-colors"
        >
          Share on X
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-3 rounded-lg bg-[#1877f2] text-white text-sm font-bold hover:bg-blue-700 transition-colors"
        >
          Share on Facebook
        </a>
      </div>
    </motion.div>
  );
}
