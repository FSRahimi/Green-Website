import HeroContent from "./HeroContent";
import { Quote } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_340px]">
          {/* Left */}
          <HeroContent />

          {/* Right */}
          <aside className="hidden lg:flex justify-end">
            <div
              className="
                group
                relative
                w-80
                overflow-hidden
                rounded-3xl
                border border-white/20
                bg-white/10
                p-8
                backdrop-blur-2xl
                shadow-2xl

                transition-all
                duration-500
                ease-out

                hover:-translate-y-4
                hover:scale-[1.03]
                hover:border-green-400/40
                hover:shadow-[0_35px_80px_rgba(34,197,94,0.18)]
              "
            >
              {/* Soft Glow */}
              <div
                className="
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-green-500/20
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:scale-150
                "
              />

              {/* Shine */}
              <div
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-full
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-green-500/15
                  transition-all
                  duration-500
                  group-hover:rotate-12
                  group-hover:scale-110
                "
              >
                <Quote
                  size={28}
                  className="text-green-400"
                />
              </div>

              {/* Text */}
              <p className="relative text-lg leading-8 text-white">
                Nature is not a place to visit.
                <br />
                It is home.
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-green-400 via-white/20 to-transparent" />

              {/* Author */}
              <span className="text-sm tracking-wider text-green-300">
                — Gary Snyder
              </span>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 via-emerald-400 to-lime-300" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}