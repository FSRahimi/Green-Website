import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5">
      <Link
        href="#"
        className="btn rounded-full border-none bg-green-600 px-8 text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-green-700"
      >
        Explore Projects
        <ArrowRight size={18} />
      </Link>

      <Link
        href="#"
        className="btn rounded-full border border-white/20 bg-white/10 px-8 text-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/20"
      >
        <Play size={18} />
        Watch Video
      </Link>
    </div>
  );
}
