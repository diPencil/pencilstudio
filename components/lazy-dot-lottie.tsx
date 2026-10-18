"use client"

import dynamic from "next/dynamic"
import { type ReactNode, useEffect, useRef, useState } from "react"

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
)

interface LazyDotLottieProps {
  src: string
  loop?: boolean
  autoplay?: boolean
  className?: string
  fallback?: ReactNode
  rootMargin?: string
  ariaHidden?: boolean
}

export function LazyDotLottie({
  src,
  loop = true,
  autoplay = true,
  className,
  fallback = null,
  rootMargin = "240px",
  ariaHidden = true,
}: LazyDotLottieProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || shouldLoad) return

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, shouldLoad])

  return (
    <span ref={ref} className={className} aria-hidden={ariaHidden}>
      {shouldLoad ? <DotLottieReact src={src} loop={loop} autoplay={autoplay} className="h-full w-full" /> : fallback}
    </span>
  )
}
