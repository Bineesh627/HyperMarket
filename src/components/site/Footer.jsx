import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Mail, Clock } from "lucide-react";
import { stores, BRAND } from "@/lib/gateData";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0B1A22] text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-white/60 leading-relaxed">
              A growing hypermarket chain serving Dubai and Ajman with fresh halls, seasonal
              campaigns and neighbourhood value.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-3 transition-colors hover:bg-[#E65100]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-3 transition-colors hover:bg-[#E65100]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-full bg-white/10 p-3 transition-colors hover:bg-[#E65100]">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-white/45">@gatehypermarket</p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#4CC9F0]">
              Our Stores
            </h4>
            <ul className="mt-6 space-y-3">
              {stores.map((s) => (
                <li key={s.slug}>
                  <Link to={`/stores/${s.slug}`} className="text-white/70 transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#4CC9F0]">
              Customer Service
            </h4>
            <ul className="mt-6 space-y-3 text-white/70">
              <li><Link to="/contact" className="transition-colors hover:text-white">Contact Us</Link></li>
              <li><Link to="/promotions" className="transition-colors hover:text-white">Current Flyers</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-white">About Gate</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-white">Blog & Guides</Link></li>
              <li>
                <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Phone className="h-4 w-4" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="h-4 w-4" /> {BRAND.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#4CC9F0]">
              Operating Hours
            </h4>
            <ul className="mt-6 space-y-4">
              {stores.map((s) => (
                <li key={s.slug} className="text-white/70">
                  <span className="block font-semibold text-white">{s.name.replace("Gate — ", "")}</span>
                  <span className="inline-flex items-center gap-2 text-sm">
                    <Clock className="h-3.5 w-3.5" /> {s.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gate Hypermarket. All rights reserved.</p>
          <p>Promotions valid in-store only, while stocks last.</p>
        </div>
      </div>
    </footer>
  );
}