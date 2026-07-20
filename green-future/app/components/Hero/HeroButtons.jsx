import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
       {/* Firtst Button */}
      <Link
        href="/donate"
        className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-green-600 px-8 text-base font-semibold text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-green-700 hover:shadow-xl hover:shadow-green-500/30 active:scale-95"
      >
        Explore Projects
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Second Button */}
      <Link
        href="#"
        className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/40 hover:bg-white/20 active:scale-95"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-green-500 group-hover:rotate-12">
          <Play size={16} fill="currentColor" />
        </span>
        Watch Video
      </Link>
    </div>
  );
}
