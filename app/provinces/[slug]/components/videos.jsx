export default function Videos({ province }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
          Watch Our Work
        </p>
        <h2 className="mt-3 text-4xl font-black text-white">Project Videos</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {(province.videos || []).map((video, index) => (
          <div
            key={`${video}-${index}`}
            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/10 p-3 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/40 hover:bg-slate-900/20 hover:shadow-2xl"
          >
            {/* Ambient background glow effect on hover */}
            <div className="absolute -inset-1 -z-10 rounded-2xl bg-linear-to-r from-primary-green/0 via-primary-green/10 to-emerald-500/0 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

            {/* Video Player Frame */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-inner">
              <video
                src={video}
                controls
                className="aspect-video w-full object-cover"
                title={`${province.name} project video ${index + 1}`}
              />
            </div>

            {/* Glassy Footer Bar inside the card */}
            <div className="mt-3 flex items-center justify-between px-2 py-1 text-sm text-slate-300">
              <span className="font-semibold tracking-wide text-white">
                {province.name || "Project"} Showcase
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-medium text-primary-green backdrop-blur-md">
                Video 0{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}