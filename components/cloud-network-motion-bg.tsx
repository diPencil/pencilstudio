"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export function CloudNetworkMotionBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Calm, spacious node count (reduced for clean, uncluttered aesthetic)
    const nodeCount = Math.min(18, Math.max(10, Math.floor((width * height) / 52000)));
    const colors = ["#2057ff", "#3b82f6", "#60a5fa", "#1d4ed8"];
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22, // Slow gentle drift
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 1.6 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Occasional subtle data packets
    const packets: Packet[] = [];
    const maxPackets = 6;

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw faint, elegant network links between close nodes
      const connectionDist = Math.min(140, width / 7);
      const activeConnections: [number, number][] = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            activeConnections.push([i, j]);
          }
        }
      }

      // Spawn subtle packets sparingly
      if (packets.length < maxPackets && activeConnections.length > 0 && Math.random() < 0.035) {
        const conn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
        packets.push({
          fromNode: conn[0],
          toNode: conn[1],
          progress: 0,
          speed: Math.random() * 0.009 + 0.005,
          color: "#93c5fd",
        });
      }

      // Update & render packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        if (!from || !to) {
          packets.splice(i, 1);
          continue;
        }

        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Cyber Radial Background Vignette */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* 2. Soft Minimal Perspective Server Grid */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 50% 45%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 40%, transparent 80%)",
        }}
      />

      {/* 3. Subtle Ambient Laser Scan Line (Gentle & Slow) */}
      <motion.div
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/35 to-transparent"
        style={{
          boxShadow: "0 0 16px rgba(32, 87, 255, 0.4)",
        }}
        animate={{
          top: ["12%", "88%", "12%"],
          opacity: [0.05, 0.28, 0.05],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 4. Canvas Simulation of Active Server Nodes & Fiber Data Packets (Calm & Spacious) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-50"
      />

      {/* 5. Deep Ambient Volumetric Blue Glows */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/18 blur-[140px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-1/4 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"
        animate={{
          x: [0, 20, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 h-[340px] w-[340px] translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-[120px]"
        animate={{
          x: [0, -20, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Smooth Gradient Transition into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
    </div>
  );
}
