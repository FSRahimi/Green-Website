"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-green-500/15 bg-[#08170f]/95 p-10 shadow-2xl shadow-black/40"
      >
        <div className="grid gap-8 lg:grid-cols-[1.45fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">Support our mission</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Give now to protect critical landscapes and empower local communities.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Every donation brings stronger forests, safer wildlife habitats, and sustainable livelihoods.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Trusted</p>
                <p className="mt-3 text-lg font-semibold text-white">Secure gifts</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Impact</p>
                <p className="mt-3 text-lg font-semibold text-white">Local projects</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Simple</p>
                <p className="mt-3 text-lg font-semibold text-white">Easy support</p>
              </div>
            </div>
          </div>

          <a
            href="/donate"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-green-600 px-8 text-base font-semibold text-white shadow-lg shadow-green-950/30 transition hover:bg-green-700"
          >
            Donate today
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
