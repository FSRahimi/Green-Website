function formatNumber(value) {
  return new Intl.NumberFormat("en").format(value || 0);
}

export default function ProvinceStats({ province }) {
  const statistics = province.statistics || {};

  return (
    <section className="relative z-20 mx-auto -mt-20 max-w-6xl px-4">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-xl bg-white/70 p-5">
            <p className="text-sm font-semibold text-primary-green">
              Location
            </p>
            <p className="mt-2 text-xl font-bold">{province.location}</p>
          </div>

          <div className="rounded-xl bg-white/70 p-5">
            <p className="text-sm font-semibold text-primary-green">
              Trees Planted
            </p>
            <p className="mt-2 text-3xl font-black">
              {formatNumber(statistics.trees)}
            </p>
          </div>

          <div className="rounded-xl bg-white/70 p-5">
            <p className="text-sm font-semibold text-primary-green">
              Volunteers
            </p>
            <p className="mt-2 text-3xl font-black">
              {formatNumber(statistics.volunteers)}
            </p>
          </div>

          <div className="rounded-xl bg-white/70 p-5">
            <p className="text-sm font-semibold text-primary-green">
              Active Projects
            </p>
            <p className="mt-2 text-3xl font-black">
              {formatNumber(statistics.projects)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
