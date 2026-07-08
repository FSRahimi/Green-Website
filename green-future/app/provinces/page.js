"use client";

import { useState } from "react";
import Hero from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import AfghanistanMap from "./components/AfghanistanMap";
import ProvincePopup from "./components/ProvincePopup";
import provinces from "./data/provinces";

export default function ProvincesPage() {
  const [selectedProvince, setSelectedProvince] = useState(null);

  return (
    <main>

      <Hero />

      <SearchBar />

      <AfghanistanMap
        provinces={provinces}
        onProvinceClick={setSelectedProvince}
      />

      <ProvincePopup
        province={selectedProvince}
        onClose={() => setSelectedProvince(null)}
      />

    </main>
  );
}
