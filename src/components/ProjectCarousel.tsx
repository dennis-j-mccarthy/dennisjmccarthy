"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import type { Project } from "@/lib/projects";

interface Props {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: Props) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setPrev(current);
      setCurrent(index);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 700);
    },
    [current, animating]
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % projects.length);
  }, [current, projects.length, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + projects.length) % projects.length);
  }, [current, projects.length, goTo]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(goNext, 5000);
    return () => clearTimeout(timerRef.current);
  }, [current, goNext]);

  const project = projects[current];

  return (
    <div className="mt-14">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Landscape image with flip-in animation */}
        <Link
          href={`/work/${project.slug}`}
          className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-100"
        >
          {/* Outgoing image — stays in place, fades */}
          {prev !== null && projects[prev].image && (
            <div
              className="absolute inset-0 z-10"
              style={{
                animation: "carousel-out 700ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
              }}
            >
              <Image
                src={projects[prev].image}
                alt={projects[prev].title}
                fill
                className="object-contain"
              />
            </div>
          )}

          {/* Incoming image — flips in from bottom-right */}
          <div
            key={current}
            className="absolute inset-0 z-20"
            style={{
              animation: "carousel-in 700ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
            }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                priority
              />
            ) : (
              <div className="mesh-gradient h-full w-full" />
            )}
          </div>

{/* No overlay — keep full image visible */}
        </Link>

        {/* Content — also animates in */}
        <div key={`content-${current}`} style={{ animation: "content-in 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards" }}>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary-blue/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-blue/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link href={`/work/${project.slug}`}>
            <h3 className="text-3xl font-bold tracking-tight text-primary-blue transition hover:text-accent-green md:text-4xl">
              {project.title}
            </h3>
          </Link>

          <p className="mt-3 text-sm text-neutral-500">{project.summary}</p>

          <p className="mt-4 leading-relaxed text-neutral-600">
            {project.description.split("\n\n")[0]}
          </p>

          <Link
            href={`/work/${project.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-blue transition hover:text-accent-green"
          >
            Read case study
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Navigation */}
          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={goPrev}
              disabled={animating}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 transition-all hover:border-primary-blue hover:bg-primary-blue hover:text-white disabled:opacity-40"
              aria-label="Previous project"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </button>
            <button
              onClick={goNext}
              disabled={animating}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 transition-all hover:border-primary-blue hover:bg-primary-blue hover:text-white disabled:opacity-40"
              aria-label="Next project"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <div className="flex gap-2 ml-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-primary-blue" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            <span className="ml-auto text-sm font-medium text-neutral-400">
              {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
