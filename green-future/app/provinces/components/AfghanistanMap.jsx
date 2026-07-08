"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const provinceIdSelector = "#provinces path[id]";

function normalizeProvinceId(id) {
  return id.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function AfghanistanMap({ provinces = [], onProvinceClick }) {
  const mapRef = useRef(null);
  const [svgMarkup, setSvgMarkup] = useState("");
  const [hoveredProvince, setHoveredProvince] = useState(null);

  const provinceByMapId = useMemo(() => {
    return provinces.reduce((lookup, province) => {
      lookup[normalizeProvinceId(province.name)] = province;
      lookup[province.id] = province;
      return lookup;
    }, {});
  }, [provinces]);

  useEffect(() => {
    let isMounted = true;

    fetch("/maps/afghanistan/interactive.svg")
      .then((response) => response.text())
      .then((markup) => {
        if (isMounted) setSvgMarkup(markup);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
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
      path.setAttribute("tabindex", "0");
      path.setAttribute("role", "button");
      path.setAttribute("aria-label", path.id);
      path.classList.add(
        "cursor-pointer",
        "fill-emerald-100",
        "stroke-emerald-700",
        "outline-none",
        "transition-colors",
        "duration-150",
        "hover:fill-emerald-400",
        "focus:fill-emerald-400"
      );
    });
  }, [svgMarkup]);

  function getProvinceFromPath(path) {
    if (!path?.id) return null;

    return (
      provinceByMapId[normalizeProvinceId(path.id)] || {
        id: normalizeProvinceId(path.id),
        name: path.id,
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
