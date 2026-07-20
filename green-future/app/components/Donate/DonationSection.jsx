"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function DonationSection({ customAmount, setCustomAmount }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const amountValue = Number(customAmount || 0);
  const buttonLabel = amountValue > 0 ? `Donate $${amountValue}` : "Donate now";
  const impactText = amountValue > 0 ? `A gift of $${amountValue} can support ${Math.max(1, Math.round(amountValue * 0.4))} restoration actions.` : "Enter an amount to preview your impact.";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || amountValue <= 0) {
      setStatus({ type: "error", message: "Please add your name, email, and a donation amount." });
      return;
    }

    setLoading(true);
    setStatus(null);

    window.setTimeout(() => {
      setLoading(false);
      setStatus({ type: "success", message: "Thank you — your donation information is ready." });
    }, 1000);
  };

  return (
    <section id="donation-section" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center sm:space-y-8 sm:text-left">
          <div className="inline-flex rounded-full bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-green-300">
            Donation form
          </div>
          <div className="mx-auto max-w-3xl sm:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Donate with a modern, mobile-first experience.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
              Quick, responsive donation flow built for every device — enter your gift, details, and confirm in one place.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.9fr] lg:items-start">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="min-w-0 space-y-6 rounded-4xl border border-white/10 bg-[#081610] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-200">
                Full name
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  className="mt-3 h-14 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 text-white outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                />
              </label>

              <label className="block text-sm font-semibold text-slate-200">
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="mt-3 h-14 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 text-white outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                />
              </label>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-200">
                Donation amount
              </label>
              <div className="flex items-center gap-3 rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3">
                <span className="text-lg font-semibold text-white">$</span>
                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(event) => setCustomAmount(event.target.value)}
                  placeholder="50"
                  className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Your gift</p>
              <p className="mt-2 text-3xl font-semibold text-white">
                {amountValue > 0 ? `$${amountValue}` : "Enter amount"}
              </p>
            </div>

            {status && (
              <div
                className={`rounded-3xl px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "bg-emerald-500/10 text-emerald-200 border border-emerald-500/20"
                    : "bg-rose-500/10 text-rose-200 border border-rose-500/20"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={amountValue <= 0}
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 text-base font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Processing..." : buttonLabel}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="min-w-0 space-y-6 rounded-4xl border border-white/10 bg-slate-950/90 p-6 text-slate-300 shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:p-8"
          >
            <div className="rounded-3xl bg-[#0d2618] p-5 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-green-300">Impact preview</p>
              <p className="mt-4 text-lg font-semibold">{impactText}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Why this works</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                <li>• A focused donation form with no extra clutter.</li>
                <li>• Strong mobile-first layout that feels native on any screen.</li>
                <li>• Smooth, direct support for conservation and communities.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-5 text-sm text-slate-400">
              <div className="flex items-center justify-between gap-3">
                <span>Donation flow</span>
                <span className="font-semibold text-white">Ready</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-2 w-full rounded-full bg-linear-to-r from-green-400 via-emerald-400 to-cyan-400" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2">Secure payments</span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2">Mobile friendly</span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2">Community focused</span>
        </div>
      </div>
    </section>
  );
}
