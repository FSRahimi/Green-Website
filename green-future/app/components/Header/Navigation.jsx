"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

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
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      <nav className="hidden lg:flex items-center gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              link.name === "Home"
                ? "bg-green-600 text-white"
                : "text-white hover:bg-white/10 hover:text-green-300"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Tablet */}
      <div className="hidden md:flex lg:hidden items-center gap-2 relative">
        {navLinks.slice(0, 5).map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`rounded-full px-3 py-2 text-sm transition ${
              link.name === "Home"
                ? "bg-green-600 text-white"
                : "text-white hover:bg-white/10"
            }`}
          >
            {link.name}
          </Link>
        ))}

        <button
          onClick={() => setMoreOpen(!moreOpen)}
          className="flex items-center gap-1 rounded-full px-3 py-2 text-white hover:bg-white/10"
        >
          More
          <ChevronDown
            size={16}
            className={`transition ${moreOpen ? "rotate-180" : ""}`}
          />
        </button>

        {moreOpen && (
          <div className="absolute right-0 top-12 w-44 rounded-2xl border border-white/10 bg-black/70 p-2 backdrop-blur-xl">
            {navLinks.slice(5).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-lg px-4 py-2 text-white hover:bg-white/10"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 text-white hover:bg-white/10"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-20 rounded-3xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 transition ${
                    link.name === "Home"
                      ? "bg-green-600 text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}