"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants/nav";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-gold-light/40 bg-maroon text-cream">
      <div className="flex items-center justify-between px-6 py-4 sm:px-12">
        <span className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-wide text-gold-light">
          shadiWalaGhar
        </span>

        <nav className="hidden gap-8 text-sm font-medium sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="solid" className="hidden px-5 py-2 text-sm sm:inline-block">
          Get Started
        </Button>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-cream transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gold-light/30 px-6 pb-4 text-sm font-medium sm:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-2 py-3 transition-colors hover:bg-gold-light/10 hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          <Button variant="solid" className="mt-2 w-full px-5 py-2 text-sm">
            Get Started
          </Button>
        </nav>
      )}
    </header>
  );
}
