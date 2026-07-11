import HeroContent from "./HeroContent";
import { Quote, Mouse } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6 pt-24">
        <HeroContent />

        {/* Quote Card */}
        <div className="hidden lg:block">
          <div className="w-80 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl animate-bounce">
            <Quote className="mb-4 text-green-400" size={35} />

            <p className="text-lg leading-8 text-white">
              Nature is not a place to visit.
              <br />
              It is home.
            </p>

            <span className="mt-5 block text-sm text-green-300">
              — Gary Snyder
            </span>
          </div>
        </div>
      </div>

      {/* Scroll  */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white animate-pulse">
        <Mouse className="mx-auto mb-2" size={26} />

        <p className="text-sm tracking-widest uppercase">Scroll</p>
      </div>
    </section>
  );
}
