"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export interface MacOSDockItem {
  label: string
  icon: string
  href: string
}

interface MacOSDockProps {
  items: MacOSDockItem[]
  className?: string
}

export function MacOSDock({ items, className = "" }: MacOSDockProps) {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)
  const [mouseX, setMouseX] = useState<number | null>(null)
  const [currentScales, setCurrentScales] = useState<number[]>(items.map(() => 1))
  const [currentPositions, setCurrentPositions] = useState<number[]>([])
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  
  const dockRef = useRef<HTMLDivElement>(null)
  const iconRefs = useRef<(HTMLDivElement | null)[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)
  const lastMouseMoveTime = useRef<number>(0)

  // Trigger mounted state on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Responsive size calculations based on viewport
  const getResponsiveConfig = useCallback(() => {
    if (typeof window === "undefined") {
      return { baseIconSize: 30, maxScale: 1.55, effectWidth: 240 }
    }

    const smallerDimension = Math.min(window.innerWidth, window.innerHeight)
    
    if (smallerDimension < 480) {
      // Mobile phones
      return {
        baseIconSize: Math.max(26, smallerDimension * 0.08),
        maxScale: 1.25,
        effectWidth: smallerDimension * 0.35
      }
    } else if (smallerDimension < 768) {
      // Tablets
      return {
        baseIconSize: Math.max(30, smallerDimension * 0.07),
        maxScale: 1.4,
        effectWidth: smallerDimension * 0.35
      }
    } else if (smallerDimension < 1024) {
      // Small laptops
      return {
        baseIconSize: Math.max(30, smallerDimension * 0.06),
        maxScale: 1.5,
        effectWidth: smallerDimension * 0.3
      }
    } else {
      // Desktop and large screens
      return {
        baseIconSize: 30,
        maxScale: 1.55,
        effectWidth: 240
      }
    }
  }, [])

  const [config, setConfig] = useState(getResponsiveConfig)
  const { baseIconSize, maxScale, effectWidth } = config
  const minScale = 1.0
  const baseSpacing = Math.max(12, baseIconSize * 0.20)

  useEffect(() => {
    if (!mounted) return
    const handleResize = () => {
      setConfig(getResponsiveConfig())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [getResponsiveConfig, mounted])

  // Authentic macOS cosine-based magnification algorithm
  const calculateTargetMagnification = useCallback((mousePosition: number | null) => {
    if (mousePosition === null) {
      return items.map(() => minScale)
    }

    return items.map((_, index) => {
      const normalIconCenter = (index * (baseIconSize + baseSpacing)) + (baseIconSize / 2)
      const minX = mousePosition - (effectWidth / 2)
      const maxX = mousePosition + (effectWidth / 2)
      
      if (normalIconCenter < minX || normalIconCenter > maxX) {
        return minScale
      }
      
      const theta = ((normalIconCenter - minX) / effectWidth) * 2 * Math.PI
      const cappedTheta = Math.min(Math.max(theta, 0), 2 * Math.PI)
      const scaleFactor = (1 - Math.cos(cappedTheta)) / 2
      
      return minScale + (scaleFactor * (maxScale - minScale))
    })
  }, [items, baseIconSize, baseSpacing, effectWidth, maxScale, minScale])

  // Calculate positions based on current scales
  const calculatePositions = useCallback((scales: number[]) => {
    let currentX = 0
    
    return scales.map((scale) => {
      const scaledWidth = baseIconSize * scale
      const centerX = currentX + (scaledWidth / 2)
      currentX += scaledWidth + baseSpacing
      return centerX
    })
  }, [baseIconSize, baseSpacing])

  // Initialize positions
  useEffect(() => {
    if (!mounted) return
    const initialScales = items.map(() => minScale)
    const initialPositions = calculatePositions(initialScales)
    setCurrentScales(initialScales)
    setCurrentPositions(initialPositions)
  }, [items, calculatePositions, minScale, config, mounted])

  // Animation loop
  const animateToTarget = useCallback(() => {
    if (!mounted) return
    const targetScales = calculateTargetMagnification(mouseX)
    const targetPositions = calculatePositions(targetScales)
    const lerpFactor = mouseX !== null ? 0.2 : 0.12

    setCurrentScales(prevScales => {
      return prevScales.map((currentScale, index) => {
        const diff = targetScales[index] - currentScale
        return currentScale + (diff * lerpFactor)
      })
    })

    setCurrentPositions(prevPositions => {
      return prevPositions.map((currentPos, index) => {
        const diff = targetPositions[index] - currentPos
        return currentPos + (diff * lerpFactor)
      })
    })

    const scalesNeedUpdate = currentScales.some((scale, index) => 
      Math.abs(scale - targetScales[index]) > 0.002
    )
    const positionsNeedUpdate = currentPositions.some((pos, index) => 
      Math.abs(pos - targetPositions[index]) > 0.1
    )
    
    if (scalesNeedUpdate || positionsNeedUpdate || mouseX !== null) {
      animationFrameRef.current = requestAnimationFrame(animateToTarget)
    }
  }, [mouseX, calculateTargetMagnification, calculatePositions, currentScales, currentPositions, mounted])

  // Start/stop animation loop
  useEffect(() => {
    if (!mounted) return
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    animationFrameRef.current = requestAnimationFrame(animateToTarget)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animateToTarget, mounted])

  // Throttled mouse movement handler
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = performance.now()
    
    if (now - lastMouseMoveTime.current < 16) {
      return
    }
    
    lastMouseMoveTime.current = now
    
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect()
      const padding = Math.max(8, baseIconSize * 0.12)
      setMouseX(e.clientX - rect.left - padding)
    }
  }, [baseIconSize])

  const handleMouseLeave = useCallback(() => {
    setMouseX(null)
    setHoveredIdx(null)
  }, [])

  const createBounceAnimation = (element: HTMLElement) => {
    const bounceHeight = Math.max(-8, -baseIconSize * 0.15)
    element.style.transition = "transform 0.2s ease-out"
    element.style.transform = `translateY(${bounceHeight}px)`
    
    setTimeout(() => {
      element.style.transform = "translateY(0px)"
    }, 200)
  }

  const handleAppClick = (href: string, index: number) => {
    if (iconRefs.current[index]) {
      createBounceAnimation(iconRefs.current[index]!)
    }
    
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        window.history.pushState(null, "", href)
      }
    } else {
      window.location.href = href
    }
  }

  // Calculate content width
  const contentWidth = currentPositions.length > 0 
    ? Math.max(...currentPositions.map((pos, index) => 
        pos + (baseIconSize * currentScales[index]) / 2
      ))
    : (items.length * (baseIconSize + baseSpacing)) - baseSpacing

  const padding = Math.max(8, baseIconSize * 0.12)

  // 1. SSR / Initial Static Hydration Safe State
  if (!mounted) {
    const staticBaseSize = 30
    const staticSpacing = 12
    const staticPadding = 6
    const staticContentWidth = (items.length * (staticBaseSize + staticSpacing)) - staticSpacing

    return (
      <div className="w-full max-w-full px-4 flex justify-center overflow-x-auto no-scrollbar py-6">
        <div 
          className={cn("backdrop-blur-md relative flex justify-center items-center overflow-visible select-none", className)}
          style={{
            width: `${staticContentWidth + staticPadding * 2}px`,
            background: "rgba(20, 20, 20, 0.38)",
            borderRadius: `${Math.max(12, staticBaseSize * 0.4)}px`,
            border: "1px solid rgba(255, 255, 255, 0.22)",
            boxShadow: `
              0 18px 45px rgba(0, 0, 0, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.18),
              inset 0 -1px 0 rgba(255, 255, 255, 0.08)
            `,
            padding: `${staticPadding}px`,
            height: `${staticBaseSize + staticPadding * 2}px`
          }}
        >
          <div 
            className="flex items-center gap-1 overflow-visible h-full"
            style={{
              height: `${staticBaseSize}px`
            }}
          >
            {items.map((app, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center justify-center rounded-xl"
                style={{
                  width: `${staticBaseSize}px`,
                  height: `${staticBaseSize}px`,
                  background: "rgba(255, 255, 255, 0.96)",
                  border: "1px solid rgba(255, 255, 255, 0.75)",
                  boxShadow: "0 6px 14px rgba(0, 0, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                  padding: `${staticBaseSize * 0.18}px`
                }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={app.icon}
                    alt={app.label}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // 2. Client Render Animated Interactive State
  return (
    <div className="w-full max-w-full px-4 flex justify-center overflow-x-auto md:overflow-visible no-scrollbar py-6">
      <div 
        ref={dockRef}
        className={cn("backdrop-blur-md relative flex justify-center overflow-visible select-none", className)}
        style={{
          width: `${contentWidth + padding * 2}px`,
          background: "rgba(20, 20, 20, 0.38)",
          borderRadius: `${Math.max(12, baseIconSize * 0.4)}px`,
          border: "1px solid rgba(255, 255, 255, 0.22)",
          boxShadow: `
            0 18px 45px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 0 rgba(255, 255, 255, 0.08)
          `,
          padding: `${padding}px`
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="relative overflow-visible"
          style={{
            height: `${baseIconSize}px`,
            width: "100%"
          }}
        >
          {items.map((app, index) => {
            const scale = currentScales[index] || 1
            const position = currentPositions[index] || 0
            const scaledSize = baseIconSize * scale
            
            return (
              <div
                key={index}
                ref={(el) => { iconRefs.current[index] = el; }}
                className="absolute cursor-pointer flex flex-col items-center justify-end overflow-visible"
                onClick={() => handleAppClick(app.href, index)}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  left: `${position - scaledSize / 2}px`,
                  bottom: "0px",
                  width: `${scaledSize}px`,
                  height: `${scaledSize}px`,
                  transformOrigin: "bottom center",
                  zIndex: Math.round(scale * 10),
                  background: "rgba(255, 255, 255, 0.96)",
                  border: "1px solid rgba(255, 255, 255, 0.75)",
                  borderRadius: `${scaledSize * 0.25}px`,
                  boxShadow: "0 6px 14px rgba(0, 0, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: `${scaledSize * 0.18}px`
                }}
              >
                {/* Tooltip */}
                {hoveredIdx === index && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/80 px-2.5 py-1.5 text-[11px] font-medium text-white border border-white/10 backdrop-blur-sm pointer-events-none z-[99] shadow-lg"
                    style={{
                      bottom: `${scaledSize + 12}px`,
                    }}
                  >
                    {app.label}
                  </div>
                )}

                <div className="w-full h-full relative select-none pointer-events-none">
                  <Image
                    src={app.icon}
                    alt={app.label}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MacOSDock