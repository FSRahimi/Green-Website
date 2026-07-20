"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HeartHandshake } from "lucide-react";

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
  { name: "Donate", href: "/donate", cta: true },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (link, mobile = false) => {
    const isActive = pathname === link.href;
    const base = mobile
      ? "rounded-xl px-4 py-3 text-base font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
      : "rounded-full px-3 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200";

    if (link.cta) {
      return `${base} group relative overflow-hidden bg-gradient-to-r from-emerald-400 to-green-600 text-slate-950 shadow-lg shadow-emerald-950/30 hover:-translate-y-0.5 hover:shadow-emerald-500/25 ${mobile ? "mt-2 flex items-center justify-center gap-2" : "px-4 font-bold"}`;
    }

    return `${base} ${isActive ? "bg-white/15 text-emerald-200" : "text-white/75 hover:bg-white/10 hover:text-emerald-200"}`;
  };

  return (
    <>
      <nav aria-label="Primary navigation" className="hidden 2xl:flex items-center gap-0.5">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className={linkClass(link)}
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

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-200 2xl:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`absolute right-0 top-[calc(100%+0.75rem)] w-[min(25rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-white/15 bg-[#0b1d13]/95 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-300 2xl:hidden ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}
      >
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="grid gap-1 p-3 sm:grid-cols-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={linkClass(link, true)}
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
