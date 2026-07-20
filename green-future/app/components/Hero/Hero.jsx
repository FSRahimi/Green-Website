import HeroContent from "./HeroContent";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <Image src="/background.jpeg" alt="Sunrise over green mountain forests" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#06140d]/95 via-[#0a2115]/78 to-[#07130d]/50" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_30%,rgba(163,230,53,0.18),transparent_23%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <HeroContent />

          <aside className="hidden justify-end lg:flex" aria-label="Nature quote">
            <div className="hero-float">
              <div className="group relative w-80 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl transition-all duration-500 ease-out hover:scale-[1.03] hover:border-green-400/40 hover:shadow-[0_35px_80px_rgba(34,197,94,0.18)]">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-500/20 blur-3xl transition-all duration-500 group-hover:scale-150" />

              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              {/* Icon */}
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                <Quote size={28} className="text-green-400" />
              </div>

              {/* Text */}
              <p className="relative text-lg leading-8 text-white">
                Nature is not a place to visit.
                <br />
                It is home.
              </p>
              <div className="my-6 h-px bg-linear-to-r from-green-400 via-white/20 to-transparent" />
              <span className="text-sm tracking-wider text-green-300">
                — Gary Snyder
              </span>

              {/* Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-green-500 via-emerald-400 to-lime-300" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
