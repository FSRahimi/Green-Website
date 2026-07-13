import Link from "next/link";
import Image from "next/image";
import { Globe, Leaf, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = ["Home", "Coverage", "Projects", "Videos", "Gallery"];
const aboutLinks = ["About", "Education", "Provinces", "Contact"];
const socials = [Globe, Leaf, Mail, Phone];

export default function Footer() {
  return (
    <footer className="relative mt-32 px-4 pb-8">
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-72 w-72 rounded-full bg-green-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-3xl shadow-2xl">
        <div className="grid gap-12 p-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}

          <div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white/10 p-3 backdrop-blur">
                <Image src="/logo.svg" alt="Logo" width={42} height={42} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Nature Afghanistan
                </h2>

                <p className="text-sm text-white/70">Protect Nature</p>
              </div>
            </div>

            <p className="mt-6 text-white/70 leading-7">
              Together we protect forests, rivers, mountains and wildlife for
              future generations.
            </p>

            <div className="mt-8 flex gap-3">
              {socials.map((Icon, i) => (
                <button
                  key={i}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:scale-110 hover:bg-green-500"
                >
                  <Icon className="text-white" size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            {quickLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="mb-3 block text-white/70 transition hover:translate-x-2 hover:text-green-400"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* About */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">About</h3>

            {aboutLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="mb-3 block text-white/70 transition hover:translate-x-2 hover:text-green-400"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Contact</h3>

            <div className="space-y-5 text-white/70">
              <div className="flex items-center gap-3">
                <MapPin className="text-green-400" />
                Kabul, Afghanistan
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-400" />
                +93 700 000 000
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-green-400" />
                info@nature.af
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 px-10 py-6 text-white/60 md:flex-row">
            <p>© {new Date().getFullYear()} Nature Afghanistan</p>

            <div className="flex gap-6">
              <Link href="#" className="hover:text-green-400">
                Privacy
              </Link>

              <Link href="#" className="hover:text-green-400">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
