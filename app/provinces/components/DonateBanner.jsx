import Link from "next/link";

export default function DonateBanner() {
  return (
    <section className="mx-auto my-16 max-w-6xl px-4">
      <div className="rounded-3xl border border-white/20 bg-emerald-950/15 px-8 py-12 text-center text-white shadow-2xl backdrop-blur-xl sm:px-16">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-light-green">
          Support Our Work
        </p>
        <h2 className="mt-4 text-3xl font-black sm:text-4xl">
          Support our environmental projects across Afghanistan
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Your donation helps fund trees, volunteer tools, awareness
          campaigns, and cleaner public spaces in every province we work in.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about"
            className="rounded-xl border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            Learn More
          </Link>
          <button
            type="button"
            className="rounded-xl bg-primary-green px-8 py-3 font-semibold shadow-xl transition hover:bg-emerald-500"
          >
            Donate
          </button>
        </div>
      </div>
    </section>
  );
}
