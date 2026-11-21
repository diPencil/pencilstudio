"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Lock,
  MessageCircleMore,
  UserCheck,
  Wrench,
  Sparkles,
  PhoneCall,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* -------------------------------------------------------------------
     PHYSICAL SKEUOMORPHIC MATERIALS (Restored 3D Depth)
  ---------------------------------------------------------------------- */
  
  .text-3d-matte {
      color: #0F172A;
      text-shadow: 
          0 10px 30px rgba(15, 23, 42, 0.15), 
          0 2px 4px rgba(15, 23, 42, 0.08);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, #0F172A 0%, rgba(15, 23, 42, 0.45) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 10px 20px rgba(15, 23, 42, 0.15)) 
          drop-shadow(0px 2px 4px rgba(15, 23, 42, 0.08));
  }

  /* INSIDE THE CARD: Hardcoded Silver/White for the dark background, deep rich shadows */
  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) 
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  /* Deep Physical Card with Dynamic Mouse Lighting */
  .premium-depth-card {
      background: linear-gradient(145deg, #132A6B 0%, #080E1D 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.25),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.08) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  /* Realistic iPhone Mockup Hardware */
  .iphone-bezel {
      background-color: #111;
      box-shadow: 
          inset 0 0 0 2px #52525B, 
          inset 0 0 0 7px #000, 
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow: 
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }
  
  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
      box-shadow: 
          0 10px 20px rgba(0,0,0,0.35),
          inset 0 1px 1px rgba(255,255,255,0.08),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.05);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%);
      backdrop-filter: blur(24px); 
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 
          0 0 0 1px rgba(255, 255, 255, 0.15),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.25),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  /* Physical Tactile Buttons */
  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
      color: #0F172A;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.02);
  }
  .btn-modern-dark {
      background: linear-gradient(180deg, #2057FF 0%, #163ECC 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.4), 0 12px 24px -4px rgba(32,87,255,0.5), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(0,0,0,0.5);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #2E65FF 0%, #1B44DB 100%);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.3), 0 6px 12px -2px rgba(0,0,0,0.5), 0 20px 32px -6px rgba(32,87,255,0.7), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.5);
  }
  .btn-modern-dark:active {
      transform: translateY(1px);
      background: #163ECC;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), inset 0 3px 8px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  badgeText?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricPrefix?: string;
  metricSuffix?: string;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  isRtl?: boolean;
}

function FelizIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 608 619.3"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M525.2,318.1l79-23.2-80.6-17.2c-66-13.9-103.3-84.3-77.8-146.8l31.1-76.3-63.6,52.4c-52.2,42.9-130.4,28.1-163.4-30.8L209.7,4.4l1.2,82.4c1,67.4-59.2,119.4-125.9,108.6L3.8,182l65.3,50.4c53.4,41.2,56.5,120.8,6.4,166.1l-61.1,55.2,80-19.5c65.6-16,129.7,31.1,133.8,98.5l5.1,82.2,34.6-74.8c28.3-61.3,105.2-82,160.5-43.2l67.4,47.3-36.9-73.7c-30.2-60.4,1.6-133.4,66.3-152.5ZM334.3,355.6c-19.2,5.6-28.7,27.3-19.7,45.2l11,21.8-20-14c-16.4-11.5-39.2-5.3-47.6,12.8l-10.3,22.2-1.5-24.4c-1.2-20-20.3-34-39.7-29.3l-23.7,5.8,18.1-16.4c14.8-13.4,13.9-37-1.9-49.3l-19.3-14.9,24.1,3.9c19.7,3.3,37.6-12.1,37.3-32.1l-.3-24.5,11.9,21.3c9.8,17.5,33,21.9,48.4,9.1l18.9-15.6-9.2,22.7c-7.6,18.6,3.5,39.5,23.1,43.6l23.9,5.1-23.4,7Z" />
    </svg>
  );
}

export function CinematicHero({
  brandName = "SUPERFELIZ",
  tagline1,
  tagline2,
  badgeText,
  cardHeading,
  cardDescription,
  metricValue = 100,
  metricPrefix = "",
  metricSuffix = "%",
  metricLabel,
  ctaHeading,
  ctaDescription,
  primaryCtaText,
  primaryCtaLink = "/superfeliz",
  secondaryCtaText,
  secondaryCtaLink = "/support/callback?intent=ai",
  isRtl = false,
  className,
  ...props
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  // Resolved dynamic texts based on isRtl if not provided explicitly
  const resolvedTagline1 =
    tagline1 ??
    (isRtl
      ? "الذكاء الاصطناعي كأصل استراتيجي للمؤسسات،"
      : "AI as a Strategic Enterprise Asset,");
  const resolvedTagline2 =
    tagline2 ??
    (isRtl
      ? "مبني ومُدار بإشراف بشري مستمر."
      : "Engineered & Supervised by Humans.");
  const resolvedBadgeText =
    badgeText ??
    (isRtl
      ? "كيف تقدم بينسل خدمة فيليز لشركتك؟"
      : "Feliz as a Managed Enterprise Solution");
  const resolvedCardHeading =
    cardHeading ??
    (isRtl
      ? "اشتراك وإشراف شهري كامل.. نشر فوري ومراقبة بشرية مستمرة"
      : "Turnkey AI Deployment & Ongoing Human Supervision");
  const resolvedCardDescription =
    cardDescription ??
    (isRtl
      ? "لا نتركك تتعامل مع أكواد معقدة أو واجهات API مبهمة. نحن نقوم بتغذية النموذج ببيانات شركتك، ربطه بقنواتك، وتدريبه وصيانته شهرياً لضمان دقة الإجابات بنسبة 100% وحماية سرية بياناتك."
      : "We handle the entire lifecycle: knowledge ingestion, system integration, continuous prompt refinement, and weekly human-in-the-loop audit so your AI never embarrasses your brand.");
  const resolvedMetricLabel =
    metricLabel ?? (isRtl ? "نسبة دقة النموذج والإشراف" : "Accuracy SLA & Audit");
  const resolvedCtaHeading =
    ctaHeading ??
    (isRtl
      ? "هل أنت مستعد لدمج فيليز في شركتك؟"
      : "Ready to Deploy Feliz for Your Enterprise?");
  const resolvedCtaDescription =
    ctaDescription ??
    (isRtl
      ? "احجز جلسة استكشافية عملية نوضح لك فيها كيف يمكن لسوبر فيليز توفير مئات الساعات ومضاعفة المبيعات."
      : "Book a practical 20-minute demo to see how Feliz automates your recurring operational workflows with zero hallucinations.");
  const resolvedPrimaryCtaText =
    primaryCtaText ??
    (isRtl ? "استكشف عائلة فيليز بالتفصيل" : "Explore Feliz Family");
  const resolvedSecondaryCtaText =
    secondaryCtaText ??
    (isRtl ? "طلب استشارة لدمج فيليز" : "Consult on Feliz Deployment");

  // 1. High-Performance Mouse Interaction Logic (Using requestAnimationFrame)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 4) return;

      cancelAnimationFrame(requestRef.current);

      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // 2. Complex Cinematic Scroll Timeline
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", {
        autoAlpha: 0,
        y: 60,
        scale: 0.85,
        filter: "blur(20px)",
        rotationX: -20,
      });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 150, autoAlpha: 1 });
      gsap.set(
        [
          ".card-left-text",
          ".card-right-text",
          ".mockup-scroll-wrapper",
          ".floating-badge",
          ".phone-widget",
        ],
        { autoAlpha: 0 }
      );
      gsap.set(".cta-wrapper", {
        autoAlpha: 0,
        scale: 0.8,
        filter: "blur(30px)",
      });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
      introTl
        .to(".text-track", {
          duration: 1.8,
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          rotationX: 0,
          ease: "expo.out",
        })
        .to(
          ".text-days",
          { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" },
          "-=1.0"
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to(
          [".hero-text-wrapper", ".bg-grid-theme"],
          {
            scale: 1.15,
            filter: "blur(20px)",
            opacity: 0.2,
            ease: "power2.inOut",
            duration: 2,
          },
          0
        )
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", {
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          ease: "power3.inOut",
          duration: 1.5,
        })
        .fromTo(
          ".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          {
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            autoAlpha: 1,
            scale: 1,
            ease: "expo.out",
            duration: 2.5,
          },
          "-=0.8"
        )
        .fromTo(
          ".phone-widget",
          { y: 40, autoAlpha: 0, scale: 0.95 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            stagger: 0.15,
            ease: "back.out(1.2)",
            duration: 1.5,
          },
          "-=1.5"
        )
        .to(
          ".progress-ring",
          { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" },
          "-=1.2"
        )
        .to(
          ".counter-val",
          {
            innerHTML: metricValue,
            snap: { innerHTML: 1 },
            duration: 2,
            ease: "expo.out",
          },
          "-=2.0"
        )
        .fromTo(
          ".floating-badge",
          { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            rotationZ: 0,
            ease: "back.out(1.5)",
            duration: 1.5,
            stagger: 0.2,
          },
          "-=2.0"
        )
        .fromTo(
          ".card-left-text",
          { x: -50, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 },
          "-=1.5"
        )
        .fromTo(
          ".card-right-text",
          { x: 50, autoAlpha: 0, scale: 0.8 },
          { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 },
          "<"
        )
        .to({}, { duration: 2.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to(
          [
            ".mockup-scroll-wrapper",
            ".floating-badge",
            ".card-left-text",
            ".card-right-text",
          ],
          {
            scale: 0.9,
            y: -40,
            z: -200,
            autoAlpha: 0,
            ease: "power3.in",
            duration: 1.2,
            stagger: 0.05,
          }
        )
        // Responsive card pullback sizing
        .to(
          ".main-card",
          {
            width: isMobile ? "92vw" : "85vw",
            height: isMobile ? "92vh" : "85vh",
            borderRadius: isMobile ? "32px" : "40px",
            ease: "expo.inOut",
            duration: 1.8,
          },
          "pullback"
        )
        .to(
          ".cta-wrapper",
          { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 },
          "pullback"
        )
        .to(".main-card", {
          y: -window.innerHeight - 300,
          ease: "power3.in",
          duration: 1.5,
        });
    }, containerRef);

    // Refresh triggers to ensure precise geometry
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [metricValue, isRtl]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-screen overflow-hidden flex items-center justify-center bg-white text-neutral-900 font-sans antialiased selection:bg-blue-600 selection:text-white",
        className
      )}
      style={{ perspective: "1500px" }}
      dir={isRtl ? "rtl" : "ltr"}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div
        className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-40"
        aria-hidden="true"
      />

      {/* BACKGROUND LAYER 1: Hero Texts in Pencil Signature Style */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full max-w-5xl px-6 will-change-transform transform-style-3d pointer-events-none">
        <h2 className="text-track gsap-reveal text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black tracking-tight text-neutral-950 leading-[1.08] mb-2">
          {resolvedTagline1}
        </h2>
        <h2 className="text-days gsap-reveal text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light italic tracking-tight text-neutral-500 leading-[1.08]">
          {resolvedTagline2}
        </h2>
      </div>

      {/* BACKGROUND LAYER 2: Tactile CTA in Pencil Signature Style */}
      <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl px-6 gsap-reveal pointer-events-auto will-change-transform">
        <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2057ff] inline-block">
          {resolvedBadgeText}
        </span>
        <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black mb-4 tracking-tight text-neutral-950 leading-[1.08] max-w-3xl">
          {isRtl ? (
            <>
              هل أنت مستعد لدمج فيليز؟{" "}
              <span className="font-light italic text-neutral-400">
                احجز جلستك العملية الآن.
              </span>
            </>
          ) : (
            <>
              Ready to Deploy Feliz?{" "}
              <span className="font-light italic text-neutral-400">
                Experience Autonomous Velocity.
              </span>
            </>
          )}
        </h3>
        <p className="text-neutral-600 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
          {resolvedCtaDescription}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto">
          <Link
            href={primaryCtaLink}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#2057ff] px-8 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#1a49d6] hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <FelizIcon className="h-4 w-4 shrink-0 text-white fill-white" />
            <span className="whitespace-nowrap">{resolvedPrimaryCtaText}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </Link>
          <Link
            href={secondaryCtaLink}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-neutral-300 bg-white px-8 py-4 text-sm font-bold text-neutral-800 shadow-sm transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-400 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <PhoneCall className="h-4 w-4 text-[#2057ff] shrink-0" />
            <span className="whitespace-nowrap">{resolvedSecondaryCtaText}</span>
          </Link>
        </div>
      </div>

      {/* FOREGROUND LAYER: The Physical Deep Blue Card */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{ perspective: "1500px" }}
      >
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[86vw] h-[90vh] md:h-[85vh] rounded-[28px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          {/* DYNAMIC RESPONSIVE GRID */}
          <div className="relative w-full h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-12 items-center lg:gap-8 z-10 py-6 lg:py-0">
            {/* 1. BRAND EMBOSS / HEADING (TOP on mobile / RIGHT on desktop) */}
            <div className="card-right-text gsap-reveal order-1 lg:order-3 lg:col-span-3 flex flex-col items-center lg:items-end justify-center z-20 w-full text-center lg:text-right">
              {/* Large SuperFeliz Emblem in the top-right empty space */}
              <div className="relative mb-4 sm:mb-6 lg:mb-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2057ff]/40 via-[#00d2ff]/30 to-transparent blur-2xl transform scale-125 pointer-events-none" />
                <Image
                  src="/macosdock/superfeliz.svg"
                  alt="SuperFeliz"
                  width={140}
                  height={140}
                  priority
                  className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain drop-shadow-[0_15px_30px_rgba(32,87,255,0.5)] transition-transform duration-500 hover:scale-105 select-none"
                />
              </div>

              <span className="text-[11px] font-mono tracking-[0.25em] text-blue-300 uppercase font-bold mb-1">
                PENCIL AI CORE
              </span>
              <h3 className="text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black uppercase tracking-tighter text-card-silver-matte leading-none">
                {brandName}
              </h3>
              <div className="mt-3 flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isRtl ? "نظام مدار 24/7" : "Managed 24/7"}</span>
              </div>
            </div>

            {/* 2. CENTER: IPHONE HARDWARE MOCKUP */}
            <div
              className="mockup-scroll-wrapper order-2 lg:order-2 lg:col-span-5 relative w-full h-[360px] sm:h-[420px] lg:h-[600px] flex items-center justify-center z-10"
              style={{ perspective: "1000px" }}
            >
              {/* Inner wrapper for CSS scaling */}
              <div className="relative w-full h-full flex items-center justify-center transform scale-[0.62] sm:scale-75 md:scale-85 lg:scale-100">
                {/* The iPhone Bezel */}
                <div
                  ref={mockupRef}
                  className="relative w-[285px] h-[585px] rounded-[3.2rem] iphone-bezel flex flex-col will-change-transform transform-style-3d"
                  dir="ltr"
                >
                  {/* Physical Hardware Buttons */}
                  <div
                    className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]"
                    aria-hidden="true"
                  />

                  {/* Inner Screen Container */}
                  <div className="absolute inset-[7px] bg-[#070D1E] rounded-[2.6rem] overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,1)] text-white z-10 flex flex-col">
                    <div
                      className="absolute inset-0 screen-glare z-40 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Dynamic Island Notch */}
                    <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[105px] h-[28px] bg-black rounded-full z-50 flex items-center justify-between px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.15)]">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold text-neutral-400">PENCIL</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
                    </div>

                    {/* App Interface */}
                    <div className="relative w-full h-full pt-11 px-4 pb-6 flex flex-col justify-between select-none">
                      {/* Top Header */}
                      <div className="phone-widget flex justify-between items-center mb-3">
                        <div className="flex flex-col text-left">
                          <span className="text-[9px] text-blue-300 font-mono tracking-widest uppercase font-bold">
                            Live Enterprise
                          </span>
                          <span className="text-base font-black tracking-tight text-white flex items-center gap-1.5">
                            SuperFeliz
                            <span className="rounded bg-blue-500/20 px-1 py-0.2 text-[8px] font-bold text-blue-300 border border-blue-400/30">
                              v3.5
                            </span>
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-300 flex items-center justify-center font-bold text-xs border border-blue-400/30 shadow-md">
                          AI
                        </div>
                      </div>

                      {/* Circular SLA Metric */}
                      <div className="phone-widget relative w-36 h-36 mx-auto flex items-center justify-center my-1 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                          <circle
                            cx="72"
                            cy="72"
                            r="54"
                            fill="none"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="10"
                          />
                          <circle
                            className="progress-ring"
                            cx="72"
                            cy="72"
                            r="54"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="10"
                          />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                          <div className="flex items-baseline justify-center">
                            <span className="text-xs text-blue-300 font-bold mr-0.5">
                              {metricPrefix}
                            </span>
                            <span className="counter-val text-3xl font-black tracking-tight text-white">
                              0
                            </span>
                            <span className="text-base font-bold text-blue-400">
                              {metricSuffix}
                            </span>
                          </div>
                          <span className="text-[7.5px] text-blue-200/70 uppercase tracking-[0.1em] font-bold mt-0.5">
                            {resolvedMetricLabel}
                          </span>
                        </div>
                      </div>

                      {/* 3 Live Widgets inside Phone */}
                      <div className="space-y-2 text-left">
                        {/* Widget 1: Data Vault */}
                        <div className="phone-widget widget-depth rounded-xl p-2.5 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0 border border-violet-400/30">
                            <Lock className="w-3.5 h-3.5 text-violet-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-white truncate">
                                Private Data Vault
                              </span>
                              <span className="text-[8px] font-mono text-emerald-400">
                                Isolated
                              </span>
                            </div>
                            <span className="text-[8px] text-neutral-400 truncate block">
                              Zero public model training
                            </span>
                          </div>
                        </div>

                        {/* Widget 2: WhatsApp & Web Hookup */}
                        <div className="phone-widget widget-depth rounded-xl p-2.5 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/30">
                            <MessageCircleMore className="w-3.5 h-3.5 text-emerald-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-white truncate">
                                WhatsApp & Webhook
                              </span>
                              <span className="text-[8px] font-mono text-emerald-400">
                                24/7 Live
                              </span>
                            </div>
                            <span className="text-[8px] text-neutral-400 truncate block">
                              Concurrent multi-chats
                            </span>
                          </div>
                        </div>

                        {/* Widget 3: Human SLA */}
                        <div className="phone-widget widget-depth rounded-xl p-2.5 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-400/30">
                            <UserCheck className="w-3.5 h-3.5 text-amber-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-white truncate">
                                Pencil AI Engineers
                              </span>
                              <span className="text-[8px] font-mono text-amber-300">
                                Weekly SLA
                              </span>
                            </div>
                            <span className="text-[8px] text-neutral-400 truncate block">
                              Continuous prompt tuning
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom home indicator */}
                      <div className="w-[100px] h-[3px] bg-white/20 rounded-full mx-auto shadow-sm" />
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badges */}
                <div
                  className={cn(
                    "floating-badge absolute flex floating-ui-badge rounded-2xl p-3 sm:p-4 items-center gap-3 z-30",
                    isRtl
                      ? "top-4 lg:top-8 right-[-15px] lg:right-[-70px]"
                      : "top-4 lg:top-8 left-[-15px] lg:left-[-70px]"
                  )}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-blue-500/30 to-blue-900/20 flex items-center justify-center border border-blue-400/40 shadow-inner shrink-0">
                    <ShieldCheck className="h-5 w-5 text-blue-300" />
                  </div>
                  <div className={isRtl ? "text-right" : "text-left"}>
                    <p className="text-white text-xs sm:text-sm font-bold tracking-tight">
                      {isRtl ? "عزل مشفر تام" : "100% Private Isolation"}
                    </p>
                    <p className="text-blue-200/60 text-[10px] sm:text-xs font-medium">
                      {isRtl ? "حماية سرية البيانات" : "Zero public data leakage"}
                    </p>
                  </div>
                </div>

                <div
                  className={cn(
                    "floating-badge absolute flex floating-ui-badge rounded-2xl p-3 sm:p-4 items-center gap-3 z-30",
                    isRtl
                      ? "bottom-8 lg:bottom-14 left-[-15px] lg:left-[-70px]"
                      : "bottom-8 lg:bottom-14 right-[-15px] lg:right-[-70px]"
                  )}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-emerald-500/30 to-emerald-900/20 flex items-center justify-center border border-emerald-400/40 shadow-inner shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div className={isRtl ? "text-right" : "text-left"}>
                    <p className="text-white text-xs sm:text-sm font-bold tracking-tight">
                      {isRtl ? "إشراف بشري أسبوعي" : "Human-in-the-Loop SLA"}
                    </p>
                    <p className="text-emerald-200/60 text-[10px] sm:text-xs font-medium">
                      {isRtl ? "مراجعة وضبط دقيق" : "Engineering weekly audit"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. CARD CONTENT / 4 PILLARS (BOTTOM on mobile / LEFT on desktop) */}
            <div
              className={cn(
                "card-left-text gsap-reveal order-3 lg:order-1 lg:col-span-4 flex flex-col justify-center z-20 w-full px-2 sm:px-4 lg:px-0",
                isRtl ? "text-center lg:text-right" : "text-center lg:text-left"
              )}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#60a5fa] mb-2.5 inline-block">
                {resolvedBadgeText}
              </span>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black mb-3 tracking-tight leading-snug">
                {isRtl ? (
                  <>
                    اشتراك وإشراف شهري كامل..{" "}
                    <span className="font-light italic text-blue-200/80">
                      الذكاء الاصطناعي كأصل استراتيجي.
                    </span>
                  </>
                ) : (
                  <>
                    Turnkey AI Deployment..{" "}
                    <span className="font-light italic text-blue-200/80">
                      Ongoing Human Supervision.
                    </span>
                  </>
                )}
              </h3>
              <p className="text-blue-100/80 text-xs sm:text-sm font-normal leading-relaxed mb-5 line-clamp-3 md:line-clamp-none">
                {resolvedCardDescription}
              </p>

              {/* 4 Feature Pills */}
              <div className="grid grid-cols-2 gap-2 text-left" dir={isRtl ? "rtl" : "ltr"}>
                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-blue-300 mb-1">
                    <Lock size={13} />
                    <span className="text-[11px] font-bold">
                      {isRtl ? "عزل البيانات" : "Data Isolation"}
                    </span>
                  </div>
                  <p className="text-[9.5px] text-neutral-300 leading-tight">
                    {isRtl ? "تشفير سحابي خاص" : "Private enterprise vault"}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-emerald-300 mb-1">
                    <MessageCircleMore size={13} />
                    <span className="text-[11px] font-bold">
                      {isRtl ? "واتساب والموقع" : "WhatsApp Sync"}
                    </span>
                  </div>
                  <p className="text-[9.5px] text-neutral-300 leading-tight">
                    {isRtl ? "تفاعل فوري 24/7" : "Instant 24/7 responses"}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-amber-300 mb-1">
                    <UserCheck size={13} />
                    <span className="text-[11px] font-bold">
                      {isRtl ? "إشراف بشري" : "Human Audit"}
                    </span>
                  </div>
                  <p className="text-[9.5px] text-neutral-300 leading-tight">
                    {isRtl ? "فريق بينسل أسبوعياً" : "Weekly engineer SLA"}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-sky-300 mb-1">
                    <Wrench size={13} />
                    <span className="text-[11px] font-bold">
                      {isRtl ? "تخصيص الأدوار" : "Fine-Tuning"}
                    </span>
                  </div>
                  <p className="text-[9.5px] text-neutral-300 leading-tight">
                    {isRtl ? "مطابق لطبيعة مجالك" : "Tailored to your domain"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinematicHero;
