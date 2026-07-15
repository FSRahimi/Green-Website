import Image from "next/image";
import Link from "next/link";

export default function Projects({ province }) {
  const projects = [
    {
      title: "Tree Planting Campaign",
      slug: "tree-planting-campaign", // 👈 Added slug
      description:
        "Community volunteers plant and care for trees in public spaces and local neighborhoods.",
      image: province.gallery?.[0] || province.heroImage,
    },
    {
      title: "Environmental Awareness",
      slug: "environmental-awareness", // 👈 Added slug
      description:
        "Youth and community sessions focused on cleaner streets, greener habits, and shared responsibility.",
      image: province.gallery?.[1] || province.heroImage,
    },
    {
      title: "Community Clean-up",
      slug: "community-clean-up", // 👈 Added slug
      description:
        "Local clean-up activities that bring residents together to protect their environment.",
      image: province.gallery?.[2] || province.heroImage,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
            Our Projects
          </p>
          <h2 className="mt-3 text-4xl font-black">Current Work</h2>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative h-96 overflow-hidden rounded-2xl border border-white/20 bg-slate-900/10 shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Dark Tint */}
            <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/40" />

            {/* Glassy Bottom Overlay */}
            <div className="absolute inset-x-3 bottom-3 flex flex-col justify-end rounded-xl border border-white/20 bg-white/10 p-5 text-white shadow-lg backdrop-blur-md transition-all duration-500 group-hover:bg-white/20">
              <h3 className="text-xl font-bold">{project.title}</h3>

              <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="text-sm leading-6 text-slate-100">
                    {project.description}
                  </p>
                  
                  {/* 👈 Updated Link to point to the new dynamic folder route */}
                  <Link
                    href={`/provinces/${province.slug || province.id}/projects/${project.slug}`}
                    className="ml-4 inline-flex font-bold text-primary-green transition hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}