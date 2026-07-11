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
                ? "bg-green-600 text-white"
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
        className="lg:hidden rounded-full p-2 text-white hover:bg-white/10 transition"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute left-4 right-4 top-20 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-2xl p-4 transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-xl px-4 py-3 font-medium transition ${
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
    </>
  );
}
