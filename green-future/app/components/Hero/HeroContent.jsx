import { Leaf } from "lucide-react";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="max-w-3xl text-center lg:text-left">
      <div className="mb-6">
        <span className="group inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-green-500/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-green-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-green-300/50 hover:bg-green-500/20">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-green-500/30">
            <Leaf size={14} />
          </span>

          <span>Our Nature • Our Future</span>
        </span>
      </div>
  {/* Hedaer */}
      <h1 className="text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
        Protect
        <span className="mt-2 block bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
          Nature.
        </span>
        <span className="block">Protect Life.</span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg lg:mx-0 lg:text-xl">
        Together we can protect Afghanistan's forests, wildlife, rivers, and
        mountains while creating a greener future for generations to come.
      </p>

      {/* Buttons */}
      <div className="mt-10">
        <HeroButtons />
      </div>
    </div>
  );
}
