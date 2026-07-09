import Image from "next/image";

export default function Donation({ province }) {
  return (
    <section id="donate" className="pb-20">
      <div className="relative min-h-[380px] overflow-hidden">
        <Image
          src={province.heroImage || province.image}
          alt={`${province.name} donation background`}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/65 backdrop-blur-sm" />

        <div className="relative z-10 mx-auto flex min-h-[380px] max-w-6xl items-center px-4">
          <div className="w-full rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-xl sm:p-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-100">
                Help This Province
              </p>
              <h2 className="mt-3 max-w-2xl text-5xl font-black leading-tight">
                Help Us Build a Greener {province.name}
              </h2>
              <p className="mt-5 max-w-2xl text-white/80">
                Your donation helps fund trees, volunteer tools, awareness
                campaigns, and cleaner public spaces.
              </p>
            </div>

            <button className="mt-8 rounded-xl bg-primary-green px-8 py-4 font-bold text-white shadow-2xl transition hover:bg-emerald-500">
              Donate Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
