import Image from "next/image";

export default function Gallery({ province }) {
  const images = [
    ...(province.gallery || []),
    ...(province.gallery || []),
  ].slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
          Gallery
        </p>
        <h2 className="mt-3 text-4xl font-black">Moments From the Field</h2>
      </div>

      {/*
        NOTE: each province currently only has 3 real images, so we repeat
        them to fill a 6-image grid. Replace with real photos before launch —
        this is a placeholder, not a bug.
      */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="group relative aspect-square overflow-hidden rounded-3xl border border-white/20 bg-slate-900/10 p-2.5 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/40 hover:bg-slate-900/20 hover:shadow-2xl"
          >
            {/* Ambient background glow effect on hover */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-primary-green/0 via-primary-green/10 to-emerald-500/0 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

            {/* Image Container with Inner Glass Border */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-inner">
              <Image
                src={image}
                alt={`${province.name} gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Subtle dark gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Glassy Floating Index Pill on Hover */}
              <div className="absolute bottom-3 right-3 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-white shadow-lg backdrop-blur-md">
                  0{index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}