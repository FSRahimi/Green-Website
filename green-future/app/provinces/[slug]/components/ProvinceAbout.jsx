export default function ProvinceAbout({ province }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary-green">
          About {province.name}
        </p>
        <h2 className="mt-5 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
          Building cleaner communities, one project at a time.
        </h2>
      </div>

      <div className="mt-10 grid gap-8 text-xl leading-9 text-slate-700 md:grid-cols-2">
        <p>{province.about}</p>
        <p>
          Through local volunteers, awareness campaigns, and planting programs,
          Green Future helps communities protect public spaces and grow
          long-term environmental responsibility.
        </p>
      </div>
    </section>
  );
}
