"use client";

import { motion } from "framer-motion";
import AfghanistanMap from "./AfghanistanMap";

export default function HeroSection({ provinces = [], onProvinceClick }) {
  return (
    <section className="relative w-full overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-black/30 via-black/10 to-black/40" />

      <AfghanistanMap
        provinces={provinces}
        onProvinceClick={onProvinceClick}
        containerClassName="h-[100dvh] min-h-[540px] w-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="pointer-events-none absolute left-3 top-4 z-20 max-w-[65%] sm:left-8 sm:top-10 sm:max-w-xs md:max-w-sm lg:left-12 lg:top-14 lg:max-w-md"
      >
        <span className="mb-1.5 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-emerald-200 sm:mb-2 sm:px-2.5 sm:text-xs sm:tracking-[0.2em]">
          Green future
        </span>
        <h1 className="text-base font-semibold tracking-wide text-white sm:text-lg sm:tracking-wider md:text-xl lg:text-2xl">
          Explore Afghanistan through its provinces and local impact.
        </h1>
        <p className="mt-1.5 hidden text-xs leading-5 text-slate-300 sm:mt-2 sm:block sm:text-sm">
          Discover the stories, challenges, and opportunities shaping a greener tomorrow across the country.
        </p>
      </motion.div>
    </section>
  );
}