import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-emerald-950 px-6 text-center">
      <Image
        src="/images/backgrounds/03`back.jfif"
        alt="Afghanistan landscape"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-emerald-950/80" />

      <div className="relative z-10 max-w-3xl">
        <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-2 text-white backdrop-blur-xl">
          Green Future Afghanistan
        </span>
        <h1 className="mt-4 text-5xl font-black text-white sm:text-6xl">
          Growing a Greener Future,{" "}
          <span className="text-light-green">Province by Province</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
          Explore the environmental projects, communities, and volunteers
          behind our work across Afghanistan.
        </p>

        <Link
          href="/provinces"
          className="mt-10 inline-flex rounded-full bg-primary-green px-8 py-4 text-lg font-semibold text-white shadow-2xl transition hover:scale-105 hover:bg-emerald-600"
        >
          Explore the Provinces →
        </Link>
      </div>
    </main>
  );
}
