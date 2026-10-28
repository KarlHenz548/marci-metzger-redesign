"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink, Phone } from "lucide-react";

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

            {/* Social profiles */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/MarciHomes/"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 transition-colors hover:text-white"
                aria-label="Marci Metzger on Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.655 9.108 8.438 9.867v-6.987h-2.54V12h2.54v-2.61c0-3.371 1.392-4.87 4.078-4.87 1.233 0 2.371.21 2.371.21v2.41h-1.26c-1.173 0-1.41.753-1.41 1.41v2.29h2.77l-.443 2.61h-2.33v6.987C18.345 21.108 22 16.991 22 12" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/marcimetzger_theridge/"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 transition-colors hover:text-white"
                aria-label="Marci Metzger on Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.071 3.252.144 4.771 1.691 4.919 4.919.059 1.265.071 1.645.071 4.85s-.012 3.584-.071 4.85c-.144 3.228-1.691 4.772-4.919 4.919-1.265.059-1.645.071-4.85.071s-3.584-.012-4.85-.071-3.228-1.691-4.772-4.919c-.059-1.265-.071-1.645-.071-4.85s.012-3.584.071-4.85c.144-3.228 1.691-4.772 4.919-4.919 1.265-.059 1.645-.071 4.85-.071 1.266 0 1.646.012 4.85.071m0-2.163c-3.259 0-3.657.014-4.953.082-3.38.17-4.932 1.831-5.064 5.064-.068 1.296-.082 1.694-.082 4.953s.014 3.657.082 4.953c.17 3.38 1.831 4.932 5.064 5.064 1.296.068 1.694.082 4.953.082s3.657-.014 4.953-.082c3.38-.17 4.932-1.831 5.064-5.064.068-1.296.082-1.694.082-4.953s-.014-3.657-.082-4.953c-.17-3.38-1.831-4.932-5.064-5.064-1.296-.068-1.694-.082-4.953-.082m0 9.886c-2.517 0-2.919-.016-3.696-.093-1.674-.16-2.974-1.396-3.119-3.085-.065-1.4-.079-1.807-.079-3.695s.014-2.296.079-3.695c.144-1.688 1.445-2.925 3.119-3.085.777-.077 1.179-.093 3.696-.093s2.919.016 3.696.093c1.674.16 2.975 1.396 3.119 3.085.065 1.4.079 1.807.079 3.695s-.014 2.296-.079 3.695c-.144 1.688-1.445 2.925-3.119 3.085-.776.077-1.178.093-3.696.093zm0-2.163c-1.416 0-1.605.009-2.163.048-.939.068-1.554.682-1.637 1.637-.038.558-.048.747-.048 2.163s.009 1.605.048 2.163c.082.955.698 1.569 1.637 1.637.558.038.747.048 2.163.048s1.605-.009 2.163-.048c.939-.068 1.554-.682 1.637-1.637.038-.558.048-.747.048-2.163s-.009-1.605-.048-2.163c-.082-.955-.698-1.569-1.637-1.637-.559-.038-1.606-.048-2.163-.048zm6.516-3.767c0 1.378-1.122 2.49-2.503 2.49-1.378 0-2.503-1.112-2.503-2.49s1.122-2.49 2.503-2.49c1.383 0 2.503 1.112 2.503 2.49" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/marci-metzger-30642496/"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 transition-colors hover:text-white"
                aria-label="Marci Metzger on LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065m1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.272V1.729C24 .774 23.2 0 22.225 0" />
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 transition-colors hover:text-white"
                aria-label="Marci Metzger on Yelp"
              >
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            </div>
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
