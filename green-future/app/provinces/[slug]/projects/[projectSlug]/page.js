import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import provinces from "../../../data/provinces";

export default async function ProjectDetailPage({ params }) {
  const { slug, projectSlug } = await params;

  // 1. Find the province
  const province = provinces.find((p) => p.slug === slug || p.id === slug);

  if (!province) {
    notFound();
  }

  // 2. Setup details for your three campaigns
  const projectsData = {
    "tree-planting-campaign": {
      title: "Tree Planting Campaign",
      description: "Community volunteers plant and care for trees in public spaces and local neighborhoods.",
      fullDetails: "Our Tree Planting Campaign focuses on restoring urban canopy cover and reviving degraded green spaces. Volunteers gather to plant indigenous saplings, establish irrigation systems, and ensure long-term maintenance. This project not only beautifies neighborhoods but also helps combat urban heat islands and improves local air quality.",
      image: province.gallery?.[0] || province.heroImage,
    },
    "environmental-awareness": {
      title: "Environmental Awareness",
      description: "Youth and community sessions focused on cleaner streets, greener habits, and shared responsibility.",
      fullDetails: "We conduct interactive workshops in local schools, community centers, and public parks to educate residents on sustainable living. Topics include waste reduction, recycling best practices, and the importance of biodiversity. By empowering youth and local leaders, we build a sustainable culture of environmental stewardship.",
      image: province.gallery?.[1] || province.heroImage,
    },
    "community-clean-up": {
      title: "Community Clean-up",
      description: "Local clean-up activities that bring residents together to protect their environment.",
      fullDetails: "Regular community clean-up drives mobilize residents to clear litter from streets, riverbanks, and parks. Equipped with biodegradable bags and safety gear, volunteers work alongside local municipal teams to properly sort and recycle waste, immediately transforming public spaces into cleaner, safer environments.",
      image: province.gallery?.[2] || province.heroImage,
    },
  };

  const project = projectsData[projectSlug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 pb-20 pt-28 text-white selection:bg-primary-green selection:text-black">
      <div className="mx-auto max-w-4xl px-4">
        {/* Back Link */}
        <Link
          href={`/provinces/${province.slug || province.id}`}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:bg-white/20 hover:text-white"
        >
          ← Back to {province.name}
        </Link>

        {/* Glassy Detail Panel */}
        <article className="overflow-hidden rounded-3xl border border-white/20 bg-slate-900/30 p-6 shadow-2xl backdrop-blur-xl md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
            {province.name} Initiative
          </p>
          <h1 className="mt-2 text-3xl font-black md:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg font-medium text-slate-300">{project.description}</p>

          {/* Banner Image */}
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-inner">
            <Image
              src={project.image || "/placeholder-hero.jpg"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Long Description Body */}
          <div className="mt-8 space-y-4 border-t border-white/10 pt-8 text-base leading-relaxed text-slate-200 md:text-lg">
            <h2 className="text-xl font-bold text-white">About This Campaign</h2>
            <p>{project.fullDetails}</p>
          </div>
        </article>
      </div>
    </main>
  );
}