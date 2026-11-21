"use client"

import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react"

type ViewportVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "autoPlay" | "preload"> & {
  src: string
  active?: boolean
  preloadPreview?: boolean
}

/** Decorative videos load and play only while their visible card is active. */
export function ViewportVideo({ src, active = true, preloadPreview = false, ...props }: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
    }, { threshold: 0.01 })
    const handleVisibility = () => setPageVisible(!document.hidden)

    observer.observe(video)
    handleVisibility()
    document.addEventListener("visibilitychange", handleVisibility)
    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (!inView || !pageVisible) {
      video.pause()
      return
    }
    // Fan carousels show inactive cards too. Load their first frame without
    // playing every visible video, so newly mounted side cards aren't blank.
    if (!hasLoaded) {
      if (active || preloadPreview) setHasLoaded(true)
      return
    }
    if (!active) {
      video.pause()
      return
    }
    void video.play().catch(() => {})
  }, [inView, active, pageVisible, hasLoaded, src, preloadPreview])

  return (
    <video
      {...props}
      ref={videoRef}
      src={hasLoaded ? src : undefined}
      preload={preloadPreview ? "metadata" : "none"}
      onLoadedMetadata={(event) => {
        // Seeking a paused video decodes a real preview frame even on browsers
        // that only fetch metadata until playback starts.
        const video = event.currentTarget
        if (preloadPreview && !active && video.currentTime === 0) {
          video.currentTime = 0.001
        }
        props.onLoadedMetadata?.(event)
      }}
      muted
      loop
      playsInline
    />
  )
}
