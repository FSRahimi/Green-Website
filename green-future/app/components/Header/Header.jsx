"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-[#0b1d13]/75 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:rounded-full sm:px-5">
        <Link
          href="/"
          aria-label="Nature Afghanistan home"
          className="group flex min-w-0 items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200 sm:gap-3"
        >
          <Image
            src="/logo.svg"
            alt="Nature Afghanistan"
            width={42}
            height={42}
            priority
            className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
          />

          <div className="hidden min-[420px]:block">
            <p className="text-sm font-bold leading-none text-white sm:text-base">Nature Afghanistan</p>
            <p className="mt-1 text-[11px] leading-none text-white/60 sm:text-xs">
              Protect Nature, Protect Life
            </p>
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
