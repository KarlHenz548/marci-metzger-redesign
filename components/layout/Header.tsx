"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-360 items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 flex-col"
          aria-label="Marci Metzger - Home"
        >
          <span className="font-(family-name:--font-playfair) text-xl font-semibold tracking-tight sm:text-2xl">
            MARCI METZGER
          </span>

          <span className="mt-1 text-[9px] font-medium tracking-[0.25em] text-muted sm:text-[10px]">
            THE RIDGE REALTY GROUP
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-10"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop contact button */}
        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-medium text-white transition-colors duration-500 hover:scale-105  lg:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-white lg:hidden"
        >
          {isMenuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-5 py-4 sm:px-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-360 flex-col">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-border/70 py-4 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-foreground"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
