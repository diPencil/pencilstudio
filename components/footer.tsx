"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    style={{ width: "16px", height: "16px" }}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
    style={{ width: "14px", height: "14px" }}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
import { useLanguage } from "@/components/language-context"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Register ScrollTrigger safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES FOR CINEMATIC FOOTER
// -------------------------------------------------------------------------
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  
  /* Dynamic Variables using shadcn / tailwind v4 color tokens */
  --pill-bg-1: color-mix(in oklch, var(--color-neutral-900) 3%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--color-neutral-900) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--color-white) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--color-neutral-900) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--color-white) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--color-neutral-900) 8%, transparent);
  
  --pill-bg-1-hover: color-mix(in oklch, var(--color-neutral-900) 8%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--color-neutral-900) 2%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--color-neutral-900) 20%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--color-white) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--color-neutral-900) 20%, transparent);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
}

@keyframes footer-scroll-marquee-ltr {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-scroll-marquee-rtl {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 3px rgba(220, 38, 38, 0.3)); }
  15%, 45% { transform: scale(1.15); filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.6)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee-ltr {
  animation: footer-scroll-marquee-ltr 40s linear infinite;
}

.animate-footer-scroll-marquee-rtl {
  animation: footer-scroll-marquee-rtl 40s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, color-mix(in oklch, var(--color-neutral-900) 3%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--color-neutral-900) 3%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
}

/* Aurora Glow centered */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    var(--pencil-accent-soft) 0%, 
    rgba(11, 11, 11, 0.03) 50%, 
    transparent 80%
  );
}

/* Glass Pill styling */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 8px 24px -8px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 16px 32px -8px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
}

/* Giant background text */
.footer-giant-bg-text {
  font-size: 24vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--color-neutral-900) 4%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--color-neutral-900) 8%, transparent) 0%, transparent 70%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Headline metallic text glow */
.footer-text-glow {
  background: linear-gradient(180deg, var(--color-neutral-900) 0%, color-mix(in oklch, var(--color-neutral-900) 50%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 15px color-mix(in oklch, var(--color-neutral-900) 8%, transparent));
}
`

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType
  }

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null)

    useEffect(() => {
      if (typeof window === "undefined") return
      const element = localRef.current
      if (!element) return

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect()
          const h = rect.width / 2
          const w = rect.height / 2
          const x = e.clientX - rect.left - h
          const y = e.clientY - rect.top - w

          gsap.to(element, {
            x: x * 0.35,
            y: y * 0.35,
            rotationX: -y * 0.1,
            rotationY: x * 0.1,
            scale: 1.03,
            ease: "power2.out",
            duration: 0.3,
          })
        }

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.0,
          })
        }

        element.addEventListener("mousemove", handleMouseMove as any)
        element.addEventListener("mouseleave", handleMouseLeave)

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any)
          element.removeEventListener("mouseleave", handleMouseLeave)
        }
      }, element)

      return () => ctx.revert()
    }, [])

    return (
      <Component
        ref={(node: HTMLElement) => {
          ;(localRef as any).current = node
          if (typeof forwardedRef === "function") forwardedRef(node)
          else if (forwardedRef) (forwardedRef as any).current = node
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
MagneticButton.displayName = "MagneticButton"

// -------------------------------------------------------------------------
// 3. MAIN CINEMATIC FOOTER
// -------------------------------------------------------------------------
export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t, locale } = useLanguage()
  const isRtl = locale === "ar"

  const wrapperRef = useRef<HTMLDivElement>(null)
  const giantTextRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!wrapperRef.current) return

    const ctx = gsap.context(() => {
      // Giant background text parallax scroll entry
      gsap.fromTo(
        giantTextRef.current,
        { y: "8vh", scale: 0.9, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 90%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      )

      // Content staggered fade-in
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 60%",
            end: "bottom bottom",
            scrub: 1.2,
          },
        }
      )
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Localized marquee items
  const marqueeItems = isRtl
    ? [
        "أنظمة للعلامات التجارية",
        "موقع إلكتروني",
        "تطبيق جوال",
        "منصة حجز",
        "لوحة تحكم",
        "دعم تقني",
        "منتج رقمي",
        "توجيه إبداعي",
      ]
    : [
        "Brand Systems",
        "Websites",
        "Mobile Apps",
        "Booking Platforms",
        "Business Dashboards",
        "Technical Support",
        "Digital Products",
        "Creative Direction",
      ]

  const MarqueeItem = () => (
    <div className={cn("flex items-center space-x-12 px-6", isRtl && "space-x-reverse")}>
      {marqueeItems.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className={cn(isRtl ? "ml-12" : "mr-0")}>{item}</span>
          <span className="text-neutral-400 font-normal">✦</span>
        </React.Fragment>
      ))}
    </div>
  )

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/dipencilcom/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/dipencilcom/" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/dipencilcom" },
    { name: "X", icon: XIcon, href: "https://x.com/dipencilcom" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@dipencilcom" },
    { name: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@dipencilcom" },
  ]

  // Dynamic lists mapping to i18n entries
  const servicesLinks = [
    { name: t("footer.link.branding"), href: "#featured-products" },
    { name: t("footer.link.web"), href: "#featured-products" },
    { name: t("footer.link.apps"), href: "#featured-products" },
    { name: t("footer.link.ai"), href: "#featured-products" },
    { name: t("footer.link.booking"), href: "#featured-products" },
    { name: t("footer.link.support"), href: "#featured-products" },
  ]

  const studioLinks = [
    { name: t("footer.link.story"), href: "#about" },
    { name: t("footer.link.materials"), href: "#about" },
    { name: t("footer.link.projects"), href: "#featured-products" },
    { name: t("footer.link.careers"), href: "#contact" },
    { name: t("footer.link.contact"), href: "#contact" },
  ]

  const sectorsLinks = [
    { name: t("footer.link.tourism"), href: "#business-sectors" },
    { name: t("footer.link.realestate"), href: "#business-sectors" },
    { name: t("footer.link.restaurants"), href: "#business-sectors" },
    { name: t("footer.link.medical"), href: "#business-sectors" },
    { name: t("footer.link.education"), href: "#business-sectors" },
    { name: t("footer.link.corporate"), href: "#business-sectors" },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Cinematic Reveal Wrapper */}
      <div
        ref={wrapperRef}
        className="relative h-[110vh] md:h-screen w-full mt-20"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* Fixed Footer Content (Sitting underneath) */}
        <footer
          dir={isRtl ? "rtl" : "ltr"}
          className="fixed bottom-0 left-0 flex h-[110vh] md:h-screen w-full flex-col justify-between overflow-hidden bg-neutral-50 text-neutral-900 border-t border-neutral-200 cinematic-footer-wrapper select-none z-0"
        >
          {/* Ambient Lighting & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[70vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[100px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background typography */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[2vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none font-black"
          >
            PENCIL
          </div>

          {/* 1. Curved Sleek Marquee Banner */}
          <div className="absolute top-10 md:top-14 left-0 w-full overflow-hidden border-y border-neutral-200 bg-white/75 backdrop-blur-md py-3.5 z-10 -rotate-1 scale-105 shadow-sm">
            <div
              className={cn(
                "flex w-max text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase",
                isRtl ? "animate-footer-scroll-marquee-rtl" : "animate-footer-scroll-marquee-ltr"
              )}
            >
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Content Stack */}
          <div
            ref={contentRef}
            className="relative z-10 flex flex-1 flex-col justify-center px-6 md:px-12 mt-28 md:mt-24 w-full max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:items-start text-start">
              {/* Brand Col */}
              <div className="lg:col-span-4 flex flex-col items-start">
                <div className="mb-4">
                  <a href="/" aria-label={t("brand.logo")}>
                    <Image
                      src="/logoblack.png"
                      alt={t("brand.logo")}
                      width={140}
                      height={32}
                      className="h-6 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
                    />
                  </a>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-sm">
                  {t("footer.desc")}
                </p>
                
                {/* Social links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <MagneticButton
                      key={social.name}
                      as="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 footer-glass-pill rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 border border-neutral-300 bg-white/40"
                      aria-label={social.name}
                    >
                      <social.icon size={16} />
                    </MagneticButton>
                  ))}
                </div>
              </div>

              {/* Links Col 1: Services */}
              <div className="col-span-1 sm:col-span-3 lg:col-span-2 lg:ps-6">
                <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900 mb-4">
                  {t("footer.sec.shop")}
                </h4>
                <ul className="space-y-2.5">
                  {servicesLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links Col 2: Studio */}
              <div className="col-span-1 sm:col-span-3 lg:col-span-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900 mb-4">
                  {t("footer.sec.studio")}
                </h4>
                <ul className="space-y-2.5">
                  {studioLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links Col 3: Sectors */}
              <div className="col-span-1 sm:col-span-3 lg:col-span-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900 mb-4">
                  {t("footer.sec.support")}
                </h4>
                <ul className="space-y-2.5">
                  {sectorsLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Col */}
              <div className="lg:col-span-2 flex flex-col gap-3.5 items-stretch min-w-[160px]">
                <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900 mb-1">
                  {t("footer.headline")}
                </h4>
                <MagneticButton
                  as="a"
                  href="#contact"
                  className="footer-glass-pill py-3 px-4 rounded-full text-center text-xs font-bold text-neutral-900 bg-white/60 border border-neutral-300"
                >
                  {t("footer.cta.project")}
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#solutions"
                  className="footer-glass-pill py-3 px-4 rounded-full text-center text-xs font-bold text-neutral-900 bg-white/60 border border-neutral-300"
                >
                  {t("footer.cta.solutions")}
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Row credits */}
          <div className="relative z-20 w-full pb-6 pt-4 border-t border-neutral-200/50 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-neutral-500 text-[10px] md:text-xs font-semibold tracking-wider">
              © {currentYear} {t("brand.logo")}. {t("footer.rights")}
            </div>

            {/* Right side group: Crafted pill + Back to top */}
            <div className="flex items-center gap-3">
              {/* Micro heart badge */}
              <div className="footer-glass-pill px-4 py-2 rounded-full flex items-center gap-2 cursor-default border-neutral-300/40 bg-white/30 text-[10px] md:text-xs">
                <span className="text-neutral-500 font-semibold uppercase tracking-wider">
                  {t("footer.crafted_by_agent")}
                </span>
                <Image
                  src="/macosdock/superfeliz.svg"
                  alt="SuperFeliz AI Agent"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain animate-footer-heartbeat"
                />
                <span className="text-neutral-900 font-black tracking-normal">
                  {t("footer.agent_name")}
                </span>
              </div>

              {/* Back to top */}
              <MagneticButton
                as="button"
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full footer-glass-pill flex items-center justify-center text-neutral-500 hover:text-neutral-900 bg-white/40 border border-neutral-300 group"
                aria-label="Back to Top"
              >
                <svg
                  className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  ></path>
                </svg>
              </MagneticButton>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
