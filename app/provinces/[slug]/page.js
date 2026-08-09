
import { notFound } from "next/navigation";
import ProvinceHero from "./components/ProvinceHero";
import ProvinceStats from "./components/ProvinceStats";
import ProvinceAbout from "./components/ProvinceAbout";
import Projects from "./components/project";
import Gallery from "./components/Gallery";
import Videos from "./components/videos";
import Donation from "./components/Donation";
import RelatedProvinces from "./components/RelatedProvinces";
import provinces from "../data/provinces";

export default async function ProvincePage({ params }) {
  const { slug } = await params;

  const province = provinces.find((p) => p.slug === slug || p.id === slug);

  if (!province) {
    notFound();
  }

  return (
    <main className="relative min-h-screen text-slate-950">
      <ProvinceHero province={province} />
      <ProvinceStats province={province} />
      <ProvinceAbout province={province} />
      <Projects province={province} />
      <Gallery province={province} />
      <Videos province={province} />
      <Donation province={province} />
      <RelatedProvinces currentProvince={province} provinces={provinces} />
    </main>
  );
}
