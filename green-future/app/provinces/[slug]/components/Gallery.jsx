import Image from "next/image";

export default function Gallery({ province }) {
  const images = [
    ...(province.gallery || []),
    ...(province.gallery || []),
  ].slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
        Gallery
      </p>
      <h2 className="mt-3 text-4xl font-black">Moments From the Field</h2>

      {/*
        NOTE: each province currently only has 3 real images, so we repeat
        them to fill a 6-image grid. Replace with real photos before launch —
        this is a placeholder, not a bug.
      */}
      <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="group relative aspect-square overflow-hidden rounded-3xl shadow-xl"
          >
            <Image
              src={image}
              alt={`${province.name} gallery image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
