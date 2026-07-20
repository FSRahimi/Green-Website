"use client";

import { motion } from "motion/react";
import { ArrowRight, Leaf } from "lucide-react";

export default function DonateHero() {
  return (
    <section className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#07140d] p-6 sm:p-8 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8 min-w-0"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-green-300">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-300">
              <Leaf size={14} />
            </span>
            Nature Afghanistan
          </span>

          <div className="max-w-3xl">
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Give today to protect
              <span className="mt-2 block bg-linear-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                nature and communities.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Make a simple, secure contribution that supports forests, wildlife, and people across Afghanistan.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#donation-section"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-green-600 px-8 text-base font-semibold text-white shadow-lg shadow-green-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
            >
              Donate now
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
        >
          <div className="rounded-3xl bg-[#06160f] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-green-300">Impact snapshot</p>
                <p className="mt-4 text-2xl font-semibold text-white">Forest stewardship</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-green-500/15 text-green-300">
                <Leaf size={24} />
              </div>
            </div>

            <div className="mt-8 space-y-4 rounded-[1.75rem] border border-white/10 bg-[#07140d]/95 p-5">
              <div className="rounded-3xl border border-white/10 bg-[#08150f]/90 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Conservation score</p>
                <p className="mt-3 text-3xl font-semibold text-white">92%</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#08150f]/90 p-4">
                  <p className="text-sm text-slate-400">Forest health index</p>
                  <p className="mt-3 text-xl font-semibold text-white">Strong</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#08150f]/90 p-4">
                  <p className="text-sm text-slate-400">Community reach</p>
                  <p className="mt-3 text-xl font-semibold text-white">Local</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
