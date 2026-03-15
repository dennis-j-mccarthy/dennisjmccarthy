import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Case Studies | Dennis J McCarthy",
  description: "Recent and notable web development and digital marketing projects.",
};

export default function WorkPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-blue via-dark-blue to-primary-blue px-6 pt-36 pb-24">
        <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-tan">
            Portfolio
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Case Studies
          </h1>
          <p className="mt-4 max-w-lg text-lg text-neutral-400">
            Over 100 sites &amp; projects delivered. Here are some of the most
            recent and notable.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-24">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                {/* Image */}
                <div
                  className={`relative h-72 overflow-hidden rounded-2xl bg-neutral-100 md:h-96 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="mesh-gradient h-full w-full" />
                  )}
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary-blue/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-blue/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-blue transition group-hover:text-accent-green md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm text-neutral-500">{project.summary}</p>
                  <p className="mt-4 leading-relaxed text-neutral-600">
                    {project.description.split("\n\n")[0]}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-blue transition-colors group-hover:text-accent-green">
                    Read case study
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
