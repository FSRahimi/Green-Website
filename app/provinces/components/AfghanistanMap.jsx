"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { provinceShapes } from "../data/countryoutline";

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
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const offsetScale = isCompact ? 0.55 : 1;

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
        color: provinceById[id].color,
        mapX: shape.centroidPercent.x,
        mapY: shape.centroidPercent.y,
        cardX: clampPercent(shape.centroidPercent.x + offset.x * offsetScale),
        cardY: clampPercent(shape.centroidPercent.y + offset.y * offsetScale),
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
      <div className={`relative overflow-hidden border border-white/10 shadow-2xl ${containerClassName}`}>
        {/* Terrain background photo — fills the whole hero, behind everything */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/backgrounds/02back.jfif"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-black/35" />

        {/* Stage: locked to the map's real aspect ratio (625:482) and
            centered in the hero. Outline, connector lines, and cards all
            live inside here so their percentage coordinates always line
            up with where the map is actually drawn — not with the
            outer box's shape, which can be a totally different ratio
            on a phone vs. a desktop. */}
        <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
          <div className="relative aspect-[625/482] max-h-full w-full">
            <Image
              src="/maps/afghanistan/interactive.svg"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              unoptimized
              className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-95"
            />

            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <g className="pointer-events-none">
                {nodes.map((node) => (
                  <motion.line
                    key={`${node.id}-connector`}
                    x1={`${node.mapX}%`}
                    y1={`${node.mapY}%`}
                    x2={`${node.cardX}%`}
                    y2={`${node.cardY}%`}
                    stroke={node.color}
                    strokeWidth="0.35"
                    strokeLinecap="round"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.85, pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + node.index * 0.05 }}
                  />
                ))}
              </g>
            </svg>

            {nodes.map((node) => {
              const isActive = hoveredId === node.id;
              return (
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
                  style={{
                    left: `${node.cardX}%`,
                    top: `${node.cardY}%`,
                    backgroundColor: isActive ? `${node.color}33` : "rgba(255,255,255,0.10)",
                    borderColor: isActive ? node.color : "rgba(255,255,255,0.25)",
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: isActive ? 1.08 : 1 }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.5 + node.index * 0.08 },
                    scale: { type: "spring", stiffness: 300, damping: 18 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-start gap-0.5 rounded-lg border px-2 py-1 shadow-xl backdrop-blur-md transition-colors sm:gap-1 sm:rounded-xl sm:px-3 sm:py-2"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg viewBox={node.iconViewBox} className="h-3.5 w-3.5 flex-shrink-0 drop-shadow sm:h-5 sm:w-5 md:h-6 md:w-6" fill={node.color}>
                      <path d={node.iconPath} />
                    </svg>
                    <span className="whitespace-nowrap text-[10px] font-semibold text-white drop-shadow sm:text-xs md:text-sm">
                      {node.province.name}
                    </span>
                  </div>
                  <span
                    className="h-0.5 w-full rounded-full"
                    style={{ backgroundColor: node.color, opacity: isActive ? 1 : 0.6 }}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}