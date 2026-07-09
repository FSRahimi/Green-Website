// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import ProvinceAbout from "./components/ProvinceAbout";
// import ProvinceHero from "./components/ProvinceHero";
// import ProvinceStats from "./components/ProvinceStats";
// import provinces from "../data/provinces";

// export default async function ProvincePage({ params }) {
//   const { slug } = await params;

//   const province = provinces.find((p) => p.slug === slug || p.id === slug);

//   if (!province) {
//     notFound();
//   }

//   const otherProvinces = provinces.filter((item) => item.id !== province.id);
//   const projects = [
//     {
//       title: "Tree Planting Campaign",
//       description:
//         "Community volunteers plant and care for trees in public spaces and local neighborhoods.",
//       image: province.gallery?.[0] || province.heroImage,
//     },
//     {
//       title: "Environmental Awareness",
//       description:
//         "Youth and community sessions focused on cleaner streets, greener habits, and shared responsibility.",
//       image: province.gallery?.[1] || province.heroImage,
//     },
//     {
//       title: "Community Clean-up",
//       description:
//         "Local clean-up activities that bring residents together to protect their environment.",
//       image: province.gallery?.[2] || province.heroImage,
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-page-background text-slate-950">
//       <ProvinceHero province={province} />
//       <ProvinceStats province={province} />
//       <ProvinceAbout province={province} />

//       <section className="mx-auto max-w-6xl px-4 pb-20">
//         <div className="mb-8 flex items-end justify-between gap-4">
//           <div>
//             <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
//               Our Projects
//             </p>
//             <h2 className="mt-3 text-4xl font-black">Current Work</h2>
//           </div>
//         </div>

//         <div className="grid gap-5 md:grid-cols-3">
//           {projects.map((project) => (
//             <article
//               key={project.title}
//               className="group overflow-hidden rounded-2xl border border-white/70 bg-white/65 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover transition duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-5">
//                 <h3 className="text-xl font-bold">{project.title}</h3>
//                 <p className="mt-3 text-sm leading-6 text-slate-600">
//                   {project.description}
//                 </p>
//                 <Link
//                   href={`/provinces/${province.slug || province.id}`}
//                   className="mt-5 inline-flex font-bold text-primary-green transition hover:text-emerald-500"
//                 >
//                   Learn More →
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       <section className="mx-auto max-w-6xl px-4 pb-20">
//         <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
//           Gallery
//         </p>
//         <h2 className="mt-3 text-4xl font-black">Moments From the Field</h2>

//         <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3">
//           {[
//             ...(province.gallery || []),
//             ...(province.gallery || []),
//           ].slice(0, 6).map((image, index) => (
//             <div
//               key={`${image}-${index}`}
//               className="group relative aspect-square overflow-hidden rounded-3xl shadow-xl"
//             >
//               <Image
//                 src={image}
//                 alt={`${province.name} gallery image ${index + 1}`}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 33vw"
//                 className="object-cover transition duration-500 group-hover:scale-110"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="mx-auto max-w-6xl px-4 pb-20">
//         <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
//           Watch Our Work
//         </p>
//         <h2 className="mt-3 text-4xl font-black">Project Videos</h2>

//         <div className="mt-8 grid gap-5 md:grid-cols-2">
//           {(province.videos || []).map((video, index) => (
//             <div
//               key={`${video}-${index}`}
//               className="overflow-hidden rounded-2xl bg-slate-950 shadow-2xl"
//             >
//               <video
//                 src={video}
//                 controls
//                 className="aspect-video w-full"
//                 title={`${province.name} project video ${index + 1}`}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="pb-20">
//         <div className="relative min-h-[380px] overflow-hidden">
//           <Image
//             src={province.heroImage || province.image}
//             alt={`${province.name} donation background`}
//             fill
//             sizes="100vw"
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-emerald-950/65 backdrop-blur-sm" />

//           <div className="relative z-10 mx-auto flex min-h-[380px] max-w-6xl items-center px-4">
//             <div className="w-full rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-xl sm:p-12">
//               <div>
//                 <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-100">
//                   Help This Province
//                 </p>
//                 <h2 className="mt-3 max-w-2xl text-5xl font-black leading-tight">
//                   Help Us Build a Greener {province.name}
//                 </h2>
//                 <p className="mt-5 max-w-2xl text-white/80">
//                   Your donation helps fund trees, volunteer tools, awareness
//                   campaigns, and cleaner public spaces.
//                 </p>
//               </div>

//               <button className="mt-8 rounded-xl bg-primary-green px-8 py-4 font-bold text-white shadow-2xl transition hover:bg-emerald-500">
//                 Donate Today
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-6xl px-4 pb-24">
//         <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
//           Other Provinces
//         </p>
//         <h2 className="mt-3 text-4xl font-black">Explore More</h2>

//         <div className="mt-8 flex gap-5 overflow-x-auto pb-4">
//           {otherProvinces.map((item) => (
//             <Link
//               key={item.id}
//               href={`/provinces/${item.slug}`}
//               className="group min-w-64 overflow-hidden rounded-2xl bg-white shadow-xl"
//             >
//               <div className="relative h-36">
//                 <Image
//                   src={item.heroImage || item.image}
//                   alt={`${item.name} province`}
//                   fill
//                   sizes="256px"
//                   className="object-cover transition duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-bold">{item.name}</h3>
//                 <p className="mt-1 text-sm text-slate-600">{item.location}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
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
    <main className="min-h-screen bg-page-background text-slate-950">
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
