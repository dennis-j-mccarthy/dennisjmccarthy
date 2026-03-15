import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-dark-blue text-white">

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center text-2xl font-bold tracking-tight">
              DJM
              <span className="ml-1 inline-block h-2 w-2 rounded-full bg-accent-green" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              Freelance web development &amp; full-stack digital marketing from
              Southwest Florida &amp; Colorado.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/work", label: "Work" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Get in touch
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <p className="text-sm text-neutral-400">
                Ready to discuss your next project?
              </p>
              <Link
                href="#contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                Let&apos;s talk
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Dennis J McCarthy. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
