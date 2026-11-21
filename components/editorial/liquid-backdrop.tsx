"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * LiquidBackdrop - the shared animated cobalt "liquid ribbon" canvas used
 * behind the About-style heroes. Two holographic ribbons sway left and right
 * (and gently follow the pointer) over a warm off-white gallery base.
 *
 * Motion stops automatically for visitors who prefer reduced motion, and it
 * reacts live if that preference changes.
 */
export function LiquidBackdrop({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduce = reduceQuery.matches;
    let inViewport = false;

    let animationFrameId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let time = 0;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let curMouseX = 0.5;
    let curMouseY = 0.5;

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Pristine gallery off-white base with subtle warmth
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        width * 0.1,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      bgGrad.addColorStop(0, "#FFFFFF");
      bgGrad.addColorStop(0.7, "#FAFBFD");
      bgGrad.addColorStop(1, "#F3F5F9");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Breathing pulse keeps the ribbon motion clearly perceptible
      const breathe = 0.8 + 0.2 * Math.sin(time * 0.9);

      // 2. Left holographic liquid ribbon (amplified sway)
      ctx.save();
      const leftGrad = ctx.createLinearGradient(0, 0, width * 0.35, height);
      leftGrad.addColorStop(0, "rgba(32, 87, 255, 0.22)");
      leftGrad.addColorStop(0.3, "rgba(99, 102, 241, 0.28)");
      leftGrad.addColorStop(0.6, "rgba(56, 189, 248, 0.25)");
      leftGrad.addColorStop(0.85, "rgba(32, 87, 255, 0.15)");
      leftGrad.addColorStop(1, "transparent");

      ctx.beginPath();
      const leftOffset = Math.sin(time * 1.15 + curMouseY * 2.4) * 72;
      const leftWave = Math.sin(time * 0.7) * 0.05;
      ctx.moveTo(-60, -50);
      ctx.bezierCurveTo(
        width * 0.18 + leftOffset,
        height * (0.2 + leftWave),
        width * 0.22 - leftOffset,
        height * (0.7 - leftWave),
        -40,
        height + 50
      );
      ctx.lineTo(-120, height + 50);
      ctx.lineTo(-120, -50);
      ctx.closePath();
      ctx.fillStyle = leftGrad;
      ctx.filter = "blur(28px)";
      ctx.globalAlpha = breathe;
      ctx.fill();
      ctx.restore();

      // 3. Right holographic liquid ribbon (amplified sway)
      ctx.save();
      const rightGrad = ctx.createLinearGradient(width, 0, width * 0.65, height);
      rightGrad.addColorStop(0, "rgba(32, 87, 255, 0.25)");
      rightGrad.addColorStop(0.35, "rgba(147, 197, 253, 0.35)");
      rightGrad.addColorStop(0.65, "rgba(129, 140, 248, 0.22)");
      rightGrad.addColorStop(0.9, "rgba(32, 87, 255, 0.12)");
      rightGrad.addColorStop(1, "transparent");

      ctx.beginPath();
      const rightOffset = Math.cos(time * 1.05 + curMouseX * 2.4) * 82;
      const rightWave = Math.cos(time * 0.6) * 0.05;
      ctx.moveTo(width + 60, -50);
      ctx.bezierCurveTo(
        width * 0.82 + rightOffset,
        height * (0.25 + rightWave),
        width * 0.78 - rightOffset,
        height * (0.75 - rightWave),
        width + 40,
        height + 50
      );
      ctx.lineTo(width + 120, height + 50);
      ctx.lineTo(width + 120, -50);
      ctx.closePath();
      ctx.fillStyle = rightGrad;
      ctx.filter = "blur(28px)";
      ctx.globalAlpha = breathe;
      ctx.fill();
      ctx.restore();

      // 4. Soft center ambient glow
      const centerGlow = ctx.createRadialGradient(
        width * (0.5 + (curMouseX - 0.5) * 0.1),
        height * (0.35 + (curMouseY - 0.5) * 0.1),
        0,
        width * 0.5,
        height * 0.35,
        width * 0.45
      );
      centerGlow.addColorStop(0, "rgba(32, 87, 255, 0.06)");
      centerGlow.addColorStop(1, "transparent");
      ctx.fillStyle = centerGlow;
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, width, height);
    };

    const loop = () => {
      time += 0.02;
      curMouseX += (targetMouseX - curMouseX) * 0.05;
      curMouseY += (targetMouseY - curMouseY) * 0.05;
      drawFrame();
      animationFrameId = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(animationFrameId);
      if (!inViewport || document.hidden) return;
      if (reduce) {
        targetMouseX = curMouseX = 0.5;
        targetMouseY = curMouseY = 0.5;
        drawFrame();
      } else {
        loop();
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (reduce) drawFrame();
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = event.clientX / window.innerWidth;
      targetMouseY = event.clientY / window.innerHeight;
    };

    const handleReduceChange = (event: MediaQueryListEvent) => {
      reduce = event.matches;
      start();
    };

    const observer = new IntersectionObserver(([entry]) => {
      inViewport = entry.isIntersecting;
      start();
    });
    observer.observe(canvas);
    document.addEventListener("visibilitychange", start);

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    reduceQuery.addEventListener("change", handleReduceChange);

    start();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", start);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      reduceQuery.removeEventListener("change", handleReduceChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full opacity-95 transition-opacity duration-1000",
        className
      )}
    />
  );
}
