import Image from "next/image";
import Link from "next/link";

export default function Projects({ province }) {
  const projects = [
    {
      title: "Tree Planting Campaign",
      description:
        "Community volunteers plant and care for trees in public spaces and local neighborhoods.",
      image: province.gallery?.[0] || province.heroImage,
    },
    {
      title: "Environmental Awareness",
      description:
        "Youth and community sessions focused on cleaner streets, greener habits, and shared responsibility.",
      image: province.gallery?.[1] || province.heroImage,
    },
    {
      title: "Community Clean-up",
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
            className="group overflow-hidden rounded-2xl border border-white/70 bg-white/65 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
              </p>
              <Link
                href={`/provinces/${province.slug || province.id}`}
                className="mt-5 inline-flex font-bold text-primary-green transition hover:text-emerald-500"
              >
                Learn More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
