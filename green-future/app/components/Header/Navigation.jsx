"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Coverage", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Videos", href: "#" },
  { name: "Education", href: "#" },
  { name: "Provinces", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
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
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              link.name === "Home"
                ? "bg-green-600 text-white shadow-lg shadow-green-900/30"
                : "text-white hover:bg-white/10 hover:text-green-300"
            }`}
          >
            {link.name}
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
        className={`absolute left-0 right-0 top-20 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                link.name === "Home"
                  ? "bg-green-600 text-white"
                  : "text-zinc-200 hover:bg-zinc-800 hover:text-green-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
