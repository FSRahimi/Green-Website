"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {X, TreePine,Sprout, HeartHandshake} from "lucide-react";

export default function ProvincePopup({ province, onClose }) {
  const stats = province?.statistics || {};

  return (
    <AnimatePresence>
      {province && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="province-popup-title"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-emerald-900/40 text-white shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div  className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <h2 id="province-info-title" className="text-lg font-semibold">{province.name || "Province Info"}</h2>
            <button  type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
                </div>
                <div className="relative mx-5 mt-4 h-32 overflow-hidden rounded-xl">
              <Image
                src={province.heroImage || province.image}
                alt={province.name}
                fill
                sizes="360px"
                className="object-cover"
              />
            </div>

            <div className="mx-5 mt-4 grid grid-cols-3 gap-2">
              <StatChip icon={TreePine} value={stats.trees ? 0 : 0} label="trees Planted" />
               <StatChip icon={Sprout} value={stats.projects ?? 0} label="Greening Projects" />
               <StatChip icon={HeartHandshake} value={stats.volunteers ?? 0} label="Community Support" />
            </div>
              <div className="px-5 pt-4">
                <h3 className="text-base font-semibold">Our Impact</h3>
                <p className="mt-1 text-sm leading-6 text-white/80">
                {province.shortDescription}
              </p>
              </div>
                <div className="flex gap-3 px-5 pb-5 pt-4">
              <Link
                href={`/provinces/${province.slug || province.id}`}
                className="flex-1 rounded-lg border border-white/25 bg-white/5 py-2.5 text-center text-sm font-semibold transition hover:bg-white/10"
              >
                Learn More
              </Link>
              <Link
                href={`/provinces/${province.slug || province.id}#donate`}
                onClick={onClose}
                className="flex-1 rounded-lg bg-gradient-to-b from-emerald-400 to-emerald-600 py-2.5 text-center text-sm font-semibold shadow-lg shadow-emerald-500/40 transition hover:from-emerald-300 hover:to-emerald-500"
              >
                Donate
              </Link>
            </div>

                {/* <div className="rounded-2xl bg-white/10 p-3 text-center">
                  <small>Volunteers</small>
                  <div className="text-xl font-bold">
                    {statistics.volunteers || 0}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-3 text-center">
                  <small>Projects</small>
                  <div className="text-xl font-bold">
                    {statistics.projects || 0}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href={`/provinces/${province.slug || province.id}`}
                  className="flex-1 rounded-xl bg-emerald-600 py-3 text-center font-semibold transition hover:bg-emerald-500"
                >
                  View Details
                </Link>

                <Link
                  href={`/provinces/${province.slug || province.id}#donate`}
                  onClick={onClose}
                  className="rounded-xl border border-white/20 px-5 py-3 text-center"
                >
                  Donate
                </Link>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
function StatChip({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/10 px-2 py-3 text-center">
      <Icon className="h-5 w-5 text-emerald-300" />
      <div className="mt-1 text-sm font-bold">{value}</div>
      <div className="text-[10px] leading-tight text-white/70">{label}</div>
    </div>
  );
}