export default function Videos({ province }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
        Watch Our Work
      </p>
      <h2 className="mt-3 text-4xl font-black">Project Videos</h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {(province.videos || []).map((video, index) => (
          <div
            key={`${video}-${index}`}
            className="overflow-hidden rounded-2xl bg-slate-950 shadow-2xl"
          >
            <video
              src={video}
              controls
              className="aspect-video w-full"
              title={`${province.name} project video ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
