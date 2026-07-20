import Link from "next/link";
import Image from "next/image";
import { Globe2, Leaf, Mail, MapPin, Phone, Send } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our projects", href: "#" },
  { label: "Stories", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Donate", href: "/donate" },
];

const aboutLinks = ["About us", "Education", "Our provinces", "Contact"];
const socialLinks = [
  { label: "Visit our website", icon: Globe2 },
  { label: "Explore our environmental work", icon: Leaf },
  { label: "Email Nature Afghanistan", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 px-4 pb-5 sm:mt-32 sm:px-6 sm:pb-8">
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center overflow-hidden">
        <div className="h-72 w-72 rounded-full bg-emerald-500/15 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] shadow-2xl shadow-black/20 backdrop-blur-2xl sm:rounded-[2.5rem]">
        <div className="grid gap-10 p-7 sm:p-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr] lg:gap-8">
          <div className="max-w-sm">
            <Link href="/" className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200">
              <span className="rounded-2xl border border-white/10 bg-white/10 p-2.5"><Image src="/logo.svg" alt="" width={37} height={37} className="transition-transform duration-300 group-hover:rotate-6" /></span>
              <span><span className="block text-lg font-bold text-white">Nature Afghanistan</span><span className="mt-0.5 block text-xs text-emerald-200/70">Protect Nature, Protect Life</span></span>
            </Link>
            <p className="mt-6 text-sm leading-7 text-white/65 sm:text-base">Together, we protect forests, rivers, mountains, and wildlife for generations to come.</p>
            <div className="mt-7 flex gap-2.5">
              {socialLinks.map(({ label, icon: Icon }) => <a key={label} href="#" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-1 hover:border-emerald-200/40 hover:bg-emerald-400 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-200"><Icon size={18} aria-hidden="true" /></a>)}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-200">Explore</h2>
            <ul className="mt-5 space-y-3">{quickLinks.map(({ label, href }) => <li key={label}><Link href={href} className="inline-flex text-sm text-white/65 transition hover:translate-x-1 hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-200">{label}</Link></li>)}</ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-200">About</h2>
            <ul className="mt-5 space-y-3">{aboutLinks.map((item) => <li key={item}><Link href="#" className="inline-flex text-sm text-white/65 transition hover:translate-x-1 hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-200">{item}</Link></li>)}</ul>
          </div>

          <address className="not-italic">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-200">Stay in touch</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/65"><li className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-emerald-300" size={18} aria-hidden="true" /><span>Kabul, Afghanistan</span></li><li><a href="tel:+93700000000" className="flex items-center gap-3 transition hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-200"><Phone className="shrink-0 text-emerald-300" size={18} aria-hidden="true" />+93 700 000 000</a></li><li><a href="mailto:info@nature.af" className="flex items-center gap-3 transition hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-200"><Send className="shrink-0 text-emerald-300" size={18} aria-hidden="true" />info@nature.af</a></li></ul>
          </address>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 px-7 py-5 text-center text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:text-left">
          <p>© {new Date().getFullYear()} Nature Afghanistan. All rights reserved.</p>
          <div className="flex justify-center gap-5"><Link href="#" className="transition hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-200">Privacy</Link><Link href="#" className="transition hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-200">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
