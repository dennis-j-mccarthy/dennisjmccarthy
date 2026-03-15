import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBlob from "@/components/AnimatedBlob";
import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/lib/projects";

const skills = [
  "Web Development",
  "SEO",
  "Email Marketing",
  "E-commerce",
  "Agile Methodology",
  "Design Sprint",
  "Interaction Design",
  "User Experience",
  "No-Code",
  "Webflow",
  "Shopify",
  "BigCommerce",
  "Content Strategy",
  "Google Ads",
  "CRM Integration",
];

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ─── Hero ─── */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-dark-blue via-dark-blue to-primary-blue">
        <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-60" />
        <AnimatedBlob />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
          <div className="animate-fade-up inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              Available for projects
            </span>
          </div>

          <h1 className="animate-fade-up animate-delay-100 mt-8 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-8xl">
            Freelance web development
            <br />
            <span className="gradient-text">&amp; digital marketing</span>
          </h1>

          <p className="animate-fade-up animate-delay-200 mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
            Web designer and digital marketing expert from Southwest Florida
            and Colorado with over{" "}
            <span className="text-white">15 years</span> of industry experience
            and <span className="text-white">100+ sites &amp; projects</span> delivered.
          </p>

          <div className="animate-fade-up animate-delay-300 mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-blue transition-all hover:bg-neutral-100"
            >
              View my work
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="glass rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>

          <div className="animate-fade-up animate-delay-400 mt-20 flex items-center gap-3 text-neutral-500">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-neutral-700 p-1.5">
              <div className="h-2 w-1 animate-bounce rounded-full bg-neutral-500" />
            </div>
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ─── Stats Marquee ─── */}
      <section className="overflow-hidden border-y border-neutral-200 bg-white py-6">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6">
              <span className="text-sm font-medium text-neutral-400">100+ Projects</span>
              <span className="text-accent-green">&#9679;</span>
              <span className="text-sm font-medium text-neutral-400">15+ Years Experience</span>
              <span className="text-accent-green">&#9679;</span>
              <span className="text-sm font-medium text-neutral-400">Southwest Florida &amp; Colorado</span>
              <span className="text-accent-green">&#9679;</span>
              <span className="text-sm font-medium text-neutral-400">Web Development</span>
              <span className="text-accent-green">&#9679;</span>
              <span className="text-sm font-medium text-neutral-400">SEO &amp; Digital Marketing</span>
              <span className="text-accent-green">&#9679;</span>
              <span className="text-sm font-medium text-neutral-400">E-commerce</span>
              <span className="text-accent-green">&#9679;</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── About / Featured Photo ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-primary-blue/10">
                <Image
                  src="/images/dennis.avif"
                  alt="Dennis J McCarthy"
                  width={600}
                  height={700}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -right-4 -bottom-4 rounded-2xl bg-dark-blue px-6 py-4 shadow-xl md:-right-8 md:-bottom-8">
                <p className="text-3xl font-bold text-white">100+</p>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">Projects delivered</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
                About me
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-primary-blue md:text-5xl">
                Dennis J<br />McCarthy
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                Web designer and digital marketing expert from Southwest Florida
                and Colorado with over 15 years of industry experience.
              </p>
              <p className="mt-4 leading-relaxed text-neutral-500">
                Expertise extends to web development, SEO, and e-commerce — with
                a wide range of digital marketing skills spanning content strategy,
                email marketing, Google Ads, and more.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary-blue">15+</p>
                  <p className="text-sm text-neutral-500">Years experience</p>
                </div>
                <div className="h-12 w-px bg-neutral-200" />
                <div>
                  <p className="text-3xl font-bold text-primary-blue">100+</p>
                  <p className="text-sm text-neutral-500">Sites &amp; projects</p>
                </div>
                <div className="h-12 w-px bg-neutral-200" />
                <div>
                  <p className="text-3xl font-bold text-primary-blue">6+</p>
                  <p className="text-sm text-neutral-500">Platforms mastered</p>
                </div>
              </div>
              <Link
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-blue px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Work with me
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Work — Carousel ─── */}
      <section className="bg-neutral-50 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
                Portfolio
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-primary-blue md:text-5xl">
                Recent &amp; notable
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden text-sm font-semibold text-primary-blue transition hover:text-accent-green md:inline-flex md:items-center md:gap-1"
            >
              View all
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <ProjectCarousel projects={projects} />

          <div className="mt-10 text-center md:hidden">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue">
              View all projects
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-blue via-dark-blue to-primary-blue py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-40" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-tan">
            Capabilities
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Skills &amp; expertise
          </h2>
          <p className="mt-4 max-w-lg text-neutral-400">
            A full-stack approach to digital — from design and development to
            marketing and optimization.
          </p>

          <div className="mt-14 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-green">
            Ready to start?
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-primary-blue md:text-6xl">
            Let&apos;s build something
            <br />
            <span className="gradient-text">extraordinary</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-neutral-500">
            Whether you need a new website, an e-commerce platform, or a
            complete digital marketing strategy — I&apos;d love to hear about your project.
          </p>
          <div className="mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-blue px-10 py-4 text-sm font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Start a conversation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
