"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "메뉴", href: "#menu", highlight: true },
  { label: "이야기", href: "#story" },
  { label: "공간", href: "#space" },
  { label: "지점", href: "#locations" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm"
          : "bg-ivory/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-xl italic font-bold text-brown tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Lees Cafe
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                l.highlight
                  ? "text-burgundy font-bold border-b border-burgundy pb-0.5"
                  : "text-brown-mid hover:text-burgundy"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#locations"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-burgundy text-cream text-[10px] tracking-[0.2em] uppercase hover:bg-burgundy-lt transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          지점 안내
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="메뉴 열기"
        >
          <span
            className={`block w-5 h-[2px] bg-brown transition-transform ${open ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-5 h-[2px] bg-brown transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-[2px] bg-brown transition-transform ${open ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ivory/95 backdrop-blur-md border-t border-ivory-dark px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-xs tracking-[0.15em] uppercase ${
                l.highlight ? "text-burgundy font-bold" : "text-brown-mid"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#locations"
            onClick={() => setOpen(false)}
            className="inline-flex items-center mt-2 px-5 py-2.5 bg-burgundy text-cream text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            지점 안내
          </a>
        </div>
      )}
    </nav>
  );
}
