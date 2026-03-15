import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects, getProject } from "@/lib/projects";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Dennis J McCarthy`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-blue via-dark-blue to-primary-blue px-6 pt-36 pb-24">
        <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-40" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All Case Studies
          </Link>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-neutral-400">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="glass rounded-full px-4 py-1.5 text-xs font-medium text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl shadow-primary-blue/10">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="h-auto w-full"
                priority
              />
            ) : (
              <div className="mesh-gradient aspect-[4/3] w-full" />
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          {project.description.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="mt-6 text-lg leading-[1.8] text-neutral-600 first:mt-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="border-t border-neutral-100 bg-neutral-50/50 px-6 py-16">
        <div className="mx-auto flex max-w-5xl justify-between">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 transition-all group-hover:border-primary-blue group-hover:bg-primary-blue">
                <svg
                  className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                  Previous
                </span>
                <p className="text-lg font-semibold text-primary-blue transition group-hover:text-accent-green">
                  {prevProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center gap-4 text-right"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                  Next
                </span>
                <p className="text-lg font-semibold text-primary-blue transition group-hover:text-accent-green">
                  {nextProject.title}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 transition-all group-hover:border-primary-blue group-hover:bg-primary-blue">
                <svg
                  className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
