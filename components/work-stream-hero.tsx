"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface StreamImage {
  src: string;
  alt: string;
}

/**
 * Perspective image-stream hero (21st.dev image-stream-hero idea):
 * rails of images ride out of the vanishing point at the centre
 * and sweep to both edges, growing as they approach.
 * Growth comes from real 3D perspective (translateZ).
 * The loop never stops.
 */
function Lane({
  images,
  dir,
  speed,
}: {
  images: StreamImage[];
  dir: -1 | 1;
  speed: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let raf = 0;

    const loop = (now: number) => {
      const t = (now - start) / 1000;
      const scope = el.parentElement?.parentElement;
      const W = scope instanceof HTMLElement ? scope.clientWidth : window.innerWidth;
      const spread = Math.max(320, W * 0.52);
      const depth = 620;
      const items = el.querySelectorAll<HTMLElement>("[data-stream-item]");
      const n = Math.max(1, items.length);
      items.forEach((node, i) => {
        const p = reduced ? (i + 0.5) / n : (((t * speed + i / n) % 1) + 1) % 1;
        const x = dir * p * spread;
        const z = -depth + p * depth;
        node.style.transform = `translate3d(${x.toFixed(1)}px, 0, ${z.toFixed(1)}px)`;
        node.style.opacity = (p < 0.12 ? p / 0.12 : 1).toFixed(2);
        node.style.zIndex = String(Math.round(p * 20));
      });
      if (!reduced) raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [dir, speed]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-x-0 top-1/2 h-0" aria-hidden>
      {images.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          data-stream-item={i}
          className="absolute left-1/2 top-1/2 will-change-transform"
        >
          <div className="w-[240px] -translate-x-1/2 -translate-y-1/2 max-md:w-[168px]">
            <div
              className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl"
              style={{ aspectRatio: "4 / 2.6" }}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="240px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function WorkStreamHero({
  images,
  children,
  className,
}: {
  images: StreamImage[];
  children: ReactNode;
  className?: string;
}) {
  // two rows; each row has a left rail and a right rail with offset phases
  const lanes = [0, 1].flatMap((row) =>
    ([-1, 1] as const).map((dir) => ({
      key: `${row}-${dir}`,
      row,
      dir,
      imgs: Array.from({ length: 6 }, (_, i) => images[(i + row * 3 + (dir === 1 ? 4 : 0)) % images.length]),
    }))
  );

  return (
    <section
      className={cn("relative flex min-h-screen items-center overflow-hidden bg-neutral-950 text-white", className)}
      style={{ perspective: "1100px" }}
    >
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(255,255,255,0.08),transparent_70%)]" />
        {lanes.map((lane) => (
          <div
            key={lane.key}
            className="absolute inset-x-0"
            style={{ top: lane.row === 0 ? "30%" : "68%", transformStyle: "preserve-3d" }}
          >
            <Lane images={lane.imgs} dir={lane.dir} speed={0.055} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/30 to-neutral-950/85" />
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
