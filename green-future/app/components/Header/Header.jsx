"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-xl backdrop-blur-xl transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Nature Afghanistan"
            width={48}
            height={48}
            priority
          />

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-white">Nature Afghanistan</h1>

            <p className="text-xs text-white/70">
              Protect Nature, Protect Life
            </p>
          </div>
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
