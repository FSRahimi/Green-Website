"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import ProvinceLegend from "./components/ProvinceLegend";
import ProvincePopup from "./components/ProvincePopup";
import DonateBanner from "./components/DonateBanner";
import provinces from "./data/provinces";

export default function ProvincesPage() {
  const [selectedProvince, setSelectedProvince] = useState(null);

  return (
    <main>
      <HeroSection
        provinces={provinces}
        onProvinceClick={setSelectedProvince}
      />

      <SearchBar provinces={provinces} onSelect={setSelectedProvince} />

      <ProvinceLegend />

      <ProvincePopup
        province={selectedProvince}
        onClose={() => setSelectedProvince(null)}
      />

      <DonateBanner />
    </main>
  );
}
