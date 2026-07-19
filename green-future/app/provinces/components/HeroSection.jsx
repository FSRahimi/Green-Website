"use client";

import { motion } from "framer-motion";
import AfghanistanMap from "./AfghanistanMap";

export default function HeroSection({ provinces = [], onProvinceClick }) {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_38%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-6 max-w-2xl"
        >
          <span className="mb-3 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium uppercase tracking-[0.24em] text-emerald-200">
            Green future
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Explore Afghanistan through its provinces and local impact.
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-300 sm:text-lg">
            Discover the stories, challenges, and opportunities shaping a greener tomorrow across the country.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-emerald-500/20 via-cyan-400/10 to-slate-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 p-2 shadow-[0_30px_90px_rgba(2,8,23,0.55)] backdrop-blur-xl sm:p-3">
            <AfghanistanMap
              provinces={provinces}
              onProvinceClick={onProvinceClick}
              containerClassName="min-h-[60vh] max-w-none rounded-[1.5rem] border-0 shadow-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
