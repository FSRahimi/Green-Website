"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { provinceShapes } from "../data/countryoutline";

// Where each card floats relative to its province's real position on the
// map (provinceShapes gives us the real centroid; we offset the card
// outward from it so the card doesn't sit on top of its own shape).
const cardOffsets = {
  herat: { x: -6, y: -14 },
  sarepol: { x: 0, y: -16 },
  balkh: { x: 6, y: -16 },
  ghor: { x: -14, y: 4 },
  daykundi: { x: -12, y: 14 },
  bamyan: { x: 10, y: -2 },
  wardak: { x: 16, y: 2 },
  kabul: { x: 20, y: -4 },
  ghazni: { x: 14, y: 16 },
};

function clampPercent(value) {
  return Math.min(96, Math.max(4, value));
}

export default function AfghanistanMap({
  provinces = [],
  onProvinceClick,
  containerClassName = "mx-auto aspect-[16/10] w-full max-w-5xl",
}) {
  const [hoveredId, setHoveredId] = useState(null);

  const provinceById = provinces.reduce((lookup, province) => {
    lookup[province.id] = province;
    return lookup;
  }, {});

  const nodes = Object.keys(provinceShapes)
    .filter((id) => provinceById[id])
    .map((id, index) => {
      const shape = provinceShapes[id];
      const offset = cardOffsets[id] || { x: 0, y: -14 };

      return {
        id,
        index,
        province: provinceById[id],
        mapX: shape.centroidPercent.x,
        mapY: shape.centroidPercent.y,
        cardX: clampPercent(shape.centroidPercent.x + offset.x),
        cardY: clampPercent(shape.centroidPercent.y + offset.y),
        iconViewBox: shape.iconViewBox,
        iconPath: shape.iconPath,
      };
    });

  function handleActivate(province) {
    onProvinceClick?.(province);
  }

  function handleKeyDown(event, province) {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handleActivate(province);
  }

  return (
    <section id="province-map" className="w-full scroll-mt-6">
      <div className={`relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl ${containerClassName}`}>
        {/* Terrain background photo */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/backgrounds/02back.jfif"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/35" />

        {/* Full province border overlay from the reference SVG */}
        <Image
          src="/maps/afghanistan/interactive.svg"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          unoptimized
          className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-95"
        />

        {/* Connecting lines, drawn from each province's real map location */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {nodes.map((node) => {
            const isActive = hoveredId === node.id;
            return (
              <motion.line
                key={node.id}
                x1={node.mapX}
                y1={node.mapY}
                x2={node.cardX}
                y2={node.cardY}
                stroke={isActive ? "#34d399" : "rgba(255,255,255,0.55)"}
                strokeWidth={isActive ? 0.5 : 0.3}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + node.index * 0.08 }}
              />
            );
          })}

          {/* Small dot marking the real spot on the map for each province */}
          {nodes.map((node) => (
            <motion.circle
              key={`dot-${node.id}`}
              cx={node.mapX}
              cy={node.mapY}
              r={hoveredId === node.id ? 1 : 0.6}
              fill={hoveredId === node.id ? "#34d399" : "#ffffff"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + node.index * 0.08 }}
            />
          ))}
        </svg>

        {/* Province cards */}
        {nodes.map((node) => (
          <motion.button
            key={node.id}
            type="button"
            aria-label={node.province.name}
            onMouseEnter={() => setHoveredId(node.id)}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setHoveredId(node.id)}
            onBlur={() => setHoveredId(null)}
            onClick={() => handleActivate(node.province)}
            onKeyDown={(event) => handleKeyDown(event, node.province)}
            style={{ left: `${node.cardX}%`, top: `${node.cardY}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: hoveredId === node.id ? 1.08 : 1,
            }}
            transition={{
              opacity: { duration: 0.4, delay: 0.5 + node.index * 0.08 },
              scale: { type: "spring", stiffness: 300, damping: 18 },
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border border-white/25 bg-emerald-900/70 px-3 py-2 shadow-xl backdrop-blur-md"
          >
            <svg
              viewBox={node.iconViewBox}
              className="h-6 w-6 flex-shrink-0"
              fill="rgba(255,255,255,0.85)"
            >
              <path d={node.iconPath} />
            </svg>
            <span className="whitespace-nowrap text-sm font-semibold text-white">
              {node.province.name}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
