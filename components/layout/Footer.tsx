"use client";

import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About Marci", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#392b25] text-[#f7f3ed]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="inline-block transition-opacity hover:opacity-80"
              aria-label="Marci Metzger home"
            >
              <span className="block font-serif text-3xl tracking-tight">
                Marci Metzger
              </span>

              <span className="mt-2 block text-[10px] uppercase tracking-[0.25em] text-[#d6b9a5]">
                Real Estate Professional
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Helping you find your place in Pahrump with local knowledge,
              personal service, and guidance throughout your real estate
              journey.
            </p>

            <Link
              href="tel:+12069196886"
              className="mt-6 inline-flex items-center gap-2 text-sm transition-colors hover:text-[#d6a17f]"
            >
              <Phone size={16} aria-hidden="true" />
              <span>(206) 919-6886</span>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b9a5]">
              Explore
            </h2>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={13}
                        aria-hidden="true"
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact call-to-action */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b9a5]">
              Let&apos;s Connect
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/70">
              Thinking about buying or selling a home? Let&apos;s talk about
              your goals and the next steps.
            </p>

            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 border border-white/30 px-5 py-3 text-sm transition-colors hover:border-[#d6a17f] hover:bg-[#d6a17f] hover:text-[#392b25]"
            >
              Get in Touch
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Marci Metzger. All rights reserved.</p>

          <a href="#home" className="w-fit transition-colors hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
