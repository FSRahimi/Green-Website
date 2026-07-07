import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="absolute left-1/2 top-6 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <div className="rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between px-5 py-3 lg:px-8">
          {/* Logo is from priovs site*/}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo1.jpg"
              alt="Nature Afghanistan"
              width={52}
              height={52}
              className="rounded-full object-cover"
            />

            <div className="leading-tight">
              <h1 className="text-lg font-bold text-white">Nature</h1>

              <p className="text-xs tracking-wider text-white/70">
                Afghanistan
              </p>
            </div>
          </Link>

          <Navigation />
        </div>
      </div>
    </header>
  );
};