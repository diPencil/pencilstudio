"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollFillTextProps {
  text: string;
  isRtl?: boolean;
  className?: string;
  /** Optional custom gradient, defaults to royal sapphire blue */
  gradient?: string;
  glowColor?: string;
}

/**
 * ScrollFillText: Hollow outlined text that fills horizontally from the side
 * with a sleek gradient as the user scrolls down, and empties on scroll up.
 */
export function ScrollFillText({
  text,
  isRtl = false,
  className = "",
  gradient,
  glowColor = "rgba(37, 99, 235, 0.6)",
}: ScrollFillTextProps) {
  const { scrollY } = useScroll();

  // Scroll range [10px -> 200px]: fill goes from 0% to 100% smoothly
  const fill = useTransform(scrollY, [10, 200], [0, 100]);

  // Horizontal fill direction: RTL fills right-to-left, LTR fills left-to-right
  const direction = isRtl ? "to left" : "to right";

  const defaultGradient = `#93c5fd 0%, #3b82f6 35%, #2563eb 70%, #1d4ed8`;
  const activeGradient = gradient || defaultGradient;

  const backgroundImage = useTransform(fill, (v) => {
    const clamped = Math.max(0, Math.min(100, Math.round(v)));
    if (clamped <= 1) {
      return `linear-gradient(${direction}, transparent 0%, transparent 100%)`;
    }
    return `linear-gradient(${direction}, ${activeGradient} ${clamped}%, transparent ${clamped}%, transparent 100%)`;
  });

  const filter = useTransform(fill, (v) => {
    if (v <= 5) return "none";
    const blur = (v / 100) * 16;
    return `drop-shadow(0 0 ${blur}px ${glowColor})`;
  });

  return (
    <motion.span
      className={`inline-block select-none ${className}`}
      style={{
        WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.9)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        backgroundImage,
        filter,
      }}
    >
      {text}
    </motion.span>
  );
}
