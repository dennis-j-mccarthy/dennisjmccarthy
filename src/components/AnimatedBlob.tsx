"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBlob() {
  const svgRef = useRef<SVGSVGElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const posRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    const animate = () => {
      // Smooth lerp toward cursor
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.03;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.03;

      if (svgRef.current) {
        const tx = (posRef.current.x - 0.5) * 120;
        const ty = (posRef.current.y - 0.5) * 120;
        svgRef.current.style.transform = `translate(${tx}px, ${ty}px)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-30 md:opacity-40">
      <svg
        ref={svgRef}
        viewBox="0 0 600 600"
        className="h-[500px] w-[500px] md:h-[700px] md:w-[700px] will-change-transform"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blob-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#567740" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#46364f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#9a7f65" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="blob-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9a7f65" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#022b4d" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#567740" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <path fill="url(#blob-grad-1)">
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M420,300Q400,420,300,440Q200,460,140,380Q80,300,140,200Q200,100,300,120Q400,140,430,220Q460,300,420,300Z;
              M440,320Q420,440,300,420Q180,400,120,340Q60,280,120,180Q180,80,300,100Q420,120,450,210Q480,300,440,320Z;
              M400,340Q380,460,280,440Q180,420,100,360Q20,300,100,200Q180,100,280,80Q380,60,420,180Q460,300,400,340Z;
              M420,300Q400,420,300,440Q200,460,140,380Q80,300,140,200Q200,100,300,120Q400,140,430,220Q460,300,420,300Z
            "
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
          />
        </path>

        <path fill="url(#blob-grad-2)" opacity="0.6">
          <animate
            attributeName="d"
            dur="16s"
            repeatCount="indefinite"
            values="
              M380,320Q360,440,260,420Q160,400,120,320Q80,240,140,160Q200,80,300,100Q400,120,420,220Q440,320,380,320Z;
              M400,280Q380,400,280,420Q180,440,100,360Q20,280,120,180Q220,80,320,120Q420,160,440,240Q460,320,400,280Z;
              M360,340Q340,460,240,420Q140,380,100,280Q60,180,160,120Q260,60,340,120Q420,180,420,260Q420,340,360,340Z;
              M380,320Q360,440,260,420Q160,400,120,320Q80,240,140,160Q200,80,300,100Q400,120,420,220Q440,320,380,320Z
            "
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
          />
        </path>

        <circle r="60" fill="#567740" opacity="0.15">
          <animate attributeName="cx" dur="10s" repeatCount="indefinite" values="200;260;180;200" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" />
          <animate attributeName="cy" dur="10s" repeatCount="indefinite" values="200;280;240;200" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" />
        </circle>
      </svg>
    </div>
  );
}
