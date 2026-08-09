import Image from "next/image";

export default function ProvinceHero({ province }) {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src={province.heroImage || province.image}
        alt={`${province.name} province landscape`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/70" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-5xl px-4 text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-light-green">
            Green Future Province
          </p>
          <h1 className="text-6xl font-black uppercase sm:text-7xl lg:text-8xl">
            {province.name}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-white/85">
            Growing a Greener Future
          </p>
          <div className="mt-12 text-sm font-semibold text-white/80">
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
