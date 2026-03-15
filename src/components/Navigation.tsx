"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-primary-blue" : "text-white"
          }`}
        >
          DJM
          <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-green" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? scrolled
                      ? "bg-primary-blue/5 text-primary-blue"
                      : "bg-white/10 text-white"
                    : scrolled
                      ? "text-neutral-500 hover:text-primary-blue hover:bg-neutral-100/60"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Link
              href="#contact"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-primary-blue text-white hover:bg-primary-blue/90"
                  : "bg-white text-primary-blue hover:bg-white/90"
              }`}
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: mobileOpen
              ? "rgba(2,43,77,0.1)"
              : scrolled
                ? "rgba(2,43,77,0.05)"
                : "rgba(255,255,255,0.1)",
          }}
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] w-5 transition-all duration-300 ${
                mobileOpen
                  ? "translate-y-[6.5px] rotate-45 bg-primary-blue"
                  : scrolled
                    ? "bg-primary-blue"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                    ? "bg-primary-blue"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 transition-all duration-300 ${
                mobileOpen
                  ? "-translate-y-[6.5px] -rotate-45 bg-primary-blue"
                  : scrolled
                    ? "bg-primary-blue"
                    : "bg-white"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-white transition-all duration-500 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-semibold text-primary-blue transition hover:text-accent-green"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
