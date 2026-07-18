"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, HeartHandshake } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "Coverage", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Videos", href: "#" },
  { name: "Education", href: "#" },
  { name: "Provinces", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Donate", href: "#", cta: true },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={link.cta ? "group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50" : link.active ? "rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-green-900/30 transition-all duration-300" : "rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-green-300"}
          >
            {link.cta ? (
              <>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative z-10 flex items-center gap-2">
                  <HeartHandshake size={16} />
                  {link.name}
                </span>
              </>
            ) : (
              link.name
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white transition-all duration-300 hover:bg-zinc-800 lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-20 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-300 lg:hidden ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}
      >
        <nav className="flex flex-col gap-1 p-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={link.cta ? "mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-3 font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-[1.02]" : link.active ? "rounded-xl bg-green-600 px-4 py-3 text-base font-medium text-white" : "rounded-xl px-4 py-3 text-base font-medium text-zinc-200 transition-all duration-300 hover:bg-zinc-800 hover:text-green-300"}
            >
              {link.cta && <HeartHandshake size={18} />}
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
