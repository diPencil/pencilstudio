"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ============================================================================
// 1. SOLUTIONS: Orbiting Solution Constellation (Strategy, Design, Code, AI)
// ============================================================================
export function SolutionsOrbitMotionBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Deep Volumetric Ambient Glow */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/18 blur-[140px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 h-[380px] w-[380px] rounded-full bg-indigo-600/12 blur-[120px]"
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Concentric Rotating Solution Orbit Rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Outer Orbit */}
        <motion.div
          className="relative h-[680px] w-[680px] rounded-full border border-blue-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" />
          <span className="absolute -bottom-1 left-1/3 h-2 w-2 rounded-full bg-cyan-400/80 shadow-[0_0_10px_#22d3ee]" />
        </motion.div>

        {/* Middle Orbit */}
        <motion.div
          className="absolute inset-[90px] rounded-full border border-indigo-500/12"
          animate={{ rotate: -360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute top-1/4 -right-1 h-2.5 w-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]" />
          <span className="absolute bottom-1/4 -left-1 h-2 w-2 rounded-full bg-blue-400/70" />
        </motion.div>

        {/* Inner Core Orbit */}
        <motion.div
          className="absolute inset-[190px] rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
        </motion.div>
      </div>

      {/* Subtle Perspective Star Mesh Floor */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
    </div>
  );
}

// ============================================================================
// 2. SECTORS: Industry Matrix & Geometric Sector Coordinates
// ============================================================================
export function SectorsMatrixMotionBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Ambient Blue/Cyan Hues */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/16 blur-[140px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/4 bottom-1/4 h-[350px] w-[350px] rounded-full bg-cyan-600/12 blur-[120px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Architectural Isometric Grid Floor */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at 50% 45%, black 35%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 35%, transparent 75%)",
        }}
      />

      {/* Gentle Floating Sector Coordinate Blips */}
      <div className="absolute inset-0">
        {[
          { top: "25%", left: "18%", delay: 0 },
          { top: "35%", right: "20%", delay: 1.5 },
          { bottom: "35%", left: "22%", delay: 3 },
          { bottom: "28%", right: "18%", delay: 2 },
        ].map((pt, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:block"
            style={{ top: pt.top, left: pt.left, right: pt.right }}
            animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: pt.delay }}
          >
            <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
            <div className="mt-1 h-px w-8 bg-gradient-to-r from-blue-400/50 to-transparent" />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
    </div>
  );
}

// ============================================================================
// 3. ENTERPRISE: Executive Obsidian Vault & High-Availability Monolith
// ============================================================================
export function EnterpriseVaultMotionBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Deep Majestic Indigo & Subtle Gold Horizon */}
      <motion.div
        className="absolute left-1/2 top-1/4 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700/18 blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/3 top-1/2 h-[360px] w-[360px] rounded-full bg-amber-500/8 blur-[130px]"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vertical High-Security Architectural Columns */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "72px 100%",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
        }}
      />

      {/* Slow Executive Horizon Scanner */}
      <motion.div
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/35 to-transparent"
        style={{ boxShadow: "0 0 16px rgba(59, 130, 246, 0.35)" }}
        animate={{ top: ["15%", "85%", "15%"], opacity: [0.08, 0.35, 0.08] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
    </div>
  );
}

// ============================================================================
// 4. PRICING: Transparent Specular Light Ribbons & Value Prisms
// ============================================================================
export function PricingSpectrumMotionBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Calm Azure / Emerald Value Horizon */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/18 blur-[140px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/4 top-1/2 h-[340px] w-[340px] rounded-full bg-emerald-500/10 blur-[120px]"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Clean Diamond Prism Mesh */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 35%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 35%, transparent 75%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
    </div>
  );
}

// ============================================================================
// 5. ABOUT: Studio Craftsmanship & Kinetic Architectural Blueprint
// ============================================================================
export function AboutBlueprintMotionBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Craft Deep Warm Blue / Indigo Ambience */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700/16 blur-[140px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Precision Drafting Grid Floor */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
        }}
      />

      {/* Kinetic Compass Drafting Arc */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="h-[540px] w-[540px] rounded-full border border-dashed border-blue-400/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-[80px] rounded-full border border-white/8"
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
    </div>
  );
}

// ============================================================================
// 6. CONTACT: Direct Signal & Global Radar Beacon Waves
// ============================================================================
export function ContactRadarMotionBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Direct Connection Electric Cobalt Ambience */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/18 blur-[140px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 h-[340px] w-[340px] rounded-full bg-cyan-600/12 blur-[120px]"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pulsing Concentric Radar Beacon Rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        {[0, 1.8, 3.6].map((delay, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-blue-500/25"
            initial={{ width: 120, height: 120, opacity: 0.8 }}
            animate={{ width: 700, height: 700, opacity: 0 }}
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: "easeOut",
              delay,
            }}
          />
        ))}
        {/* Core Beacon Center Dot */}
        <div className="h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_14px_#38bdf8]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
    </div>
  );
}
