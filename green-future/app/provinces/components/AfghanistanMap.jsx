"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const provinceIdSelector = "#provinces path[id]";
const supportedProvinceIds = new Set([
  "bamyan",
  "wardak",
  "ghazni",
  "kabul",
  "daykundi",
  "ghor",
  "balkh",
  "herat",
  "sar-e-pol",
]);

const provinceDisplayNames = {
  "sar-e-pol": "Sarepol",
  balkh: "Balk",
};

function normalizeProvinceId(id) {
  return id.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function isSupportedProvince(id) {
  return supportedProvinceIds.has(normalizeProvinceId(id));
}

export default function AfghanistanMap({ provinces = [], onProvinceClick }) {
  const mapRef = useRef(null);
  const [svgMarkup, setSvgMarkup] = useState("");
  const [hoveredProvince, setHoveredProvince] = useState(null);

  const provinceByMapId = useMemo(() => {
    return provinces.reduce((lookup, province) => {
      lookup[normalizeProvinceId(province.name)] = province;
      lookup[province.id] = province;

      if (province.svgId) {
        lookup[normalizeProvinceId(province.svgId)] = province;
      }

      return lookup;
    }, {});
  }, [provinces]);

  useEffect(() => {
    let mounted = true;

    async function loadMap() {
      try {
        const response = await fetch("/maps/afghanistan/interactive.svg");

        if (!response.ok) {
          throw new Error("Failed to load SVG");
        }

        const markup = await response.text();

        if (mounted) {
          setSvgMarkup(markup);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadMap();

    return () => {
      mounted = false;
    };
  }, []);

  useLayoutEffect(() => {
    if (!mapRef.current) return;

    const svg = mapRef.current.querySelector("svg");
    if (!svg) return;

    svg.setAttribute("viewBox", "0 0 625 482");
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Interactive map of Afghanistan provinces");
    svg.classList.add("h-auto", "w-full", "max-w-5xl");

    const provincePaths = svg.querySelectorAll(provinceIdSelector);
    provincePaths.forEach((path) => {
      const isSupported = isSupportedProvince(path.id);

      path.setAttribute("aria-label", path.id);
      path.classList.add(
        "outline-none",
        "transition-colors",
        "duration-150"
      );

      if (isSupported) {
        path.setAttribute("tabindex", "0");
        path.setAttribute("role", "button");
        path.classList.add(
          "cursor-pointer",
          "fill-emerald-100",
          "stroke-green-800",
          "hover:fill-green-800",
          "focus:fill-green-800"
        );
      } else {
        path.setAttribute("tabindex", "-1");
        path.removeAttribute("role");
        path.classList.add(
          "cursor-default",
          "fill-gray-300",
          "stroke-gray-400"
        );
      }
    });
  });

  function getProvinceFromPath(path) {
    if (!path?.id) return null;
    if (!isSupportedProvince(path.id)) return null;

    const normalizedId = normalizeProvinceId(path.id);

    return (
      provinceByMapId[normalizedId] || {
        id: normalizedId,
        name: provinceDisplayNames[normalizedId] || path.id,
        shortDescription: "Province details are coming soon.",
      }
    );
  }

  function handlePointerMove(event) {
    const path = event.target.closest?.(provinceIdSelector);
    setHoveredProvince(getProvinceFromPath(path));
  }

  function handlePointerLeave() {
    setHoveredProvince(null);
  }

  function handleClick(event) {
    const path = event.target.closest?.(provinceIdSelector);
    const province = getProvinceFromPath(path);

    if (!province) return;

    console.log(province.name);
    onProvinceClick?.(province);
  }

  function handleKeyDown(event) {
    if (event.key !== "Enter" && event.key !== " ") return;

    const province = getProvinceFromPath(event.target);
    if (!province) return;

    event.preventDefault();
    console.log(province.name);
    onProvinceClick?.(province);
  }

  if (!svgMarkup) {
    return (
      <div className="flex h-[500px] items-center justify-center">
        Loading Afghanistan map...
      </div>
    );
  }

  return (
    <section className="w-full">
      <div
        ref={mapRef}
        className="flex w-full justify-center rounded-lg border border-emerald-200 bg-white p-4 shadow-sm"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />

      <div className="mt-4 min-h-8 text-center text-lg font-semibold text-emerald-950">
        Province: {hoveredProvince ? hoveredProvince.name : "-"}
      </div>
    </section>
  );
}
