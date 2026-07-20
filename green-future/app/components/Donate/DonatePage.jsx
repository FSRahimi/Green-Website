"use client";

import { useState } from "react";
import DonateHero from "./DonateHero";
import DonationSection from "./DonationSection";

export default function DonatePage() {
  const [customAmount, setCustomAmount] = useState("");

  return (
    <div className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <DonateHero />

        <DonationSection customAmount={customAmount} setCustomAmount={setCustomAmount} />
      </div>
    </div>
  );
}
