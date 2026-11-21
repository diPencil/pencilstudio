"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Pencil Studio Button Variants
 * Designed to embody the creative, high-performance identity of Pencil Studio.
 */
export const pencilButtonVariants = cva(
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold select-none cursor-pointer transition-all duration-300 ease-out active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-[#2057ff] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:transform-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#2057ff] text-white hover:bg-[#1848dc] shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 border border-blue-400/30",
        default:
          "bg-[#2057ff] text-white hover:bg-[#1848dc] shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 border border-blue-400/30",
        secondary:
          "bg-[#2057ff] text-white hover:bg-[#1848dc] shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 border border-blue-400/30",
        blue:
          "bg-[#2057ff] text-white hover:bg-[#1848dc] shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 border border-blue-400/30",
        white:
          "bg-white text-neutral-900 hover:bg-neutral-100 shadow-sm hover:shadow-md border border-neutral-200/90",
        dark:
          "bg-neutral-950 text-white hover:bg-neutral-900 shadow-md shadow-black/25 border border-white/10",
        outline:
          "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 shadow-2xs",
        ghost:
          "bg-transparent text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-sm shadow-red-500/20 border border-red-500/30",
      },
      size: {
        sm: "h-9 px-4 text-xs gap-1.5",
        default: "h-11 px-6 text-sm gap-2",
        md: "h-11 px-6 text-sm gap-2",
        lg: "h-13 px-8 text-sm sm:text-base gap-2.5",
        xl: "h-14 sm:h-15 px-8 sm:px-10 text-base sm:text-lg gap-3 font-bold",
        icon: "h-10 w-10 p-0 rounded-full",
        "icon-sm": "h-8 w-8 p-0 rounded-full",
        "icon-lg": "h-12 w-12 p-0 rounded-full",
      },
      fullWidth: {
        true: "w-full flex",
        false: "inline-flex",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface PencilButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pencilButtonVariants> {
  href?: string;
  target?: string;
  rel?: string;
  hoverLabel?: React.ReactNode;
  icon?: React.ReactNode;
  iconType?: "pencil" | "superfeliz";
  iconColor?: "auto" | "white" | "original";
  showPencilIcon?: boolean;
  pencilAnimation?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

/**
 * Authentic Pencil icon from public/macosdock/pencil.svg
 * Rendered with currentColor (pure white on text-white buttons) for ultra-crisp contrast.
 */
function PencilIconSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 453 453"
      fill="currentColor"
      className={cn("pointer-events-none select-none shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M341.5,24.3c-25.9-9.6-52.8-16-81.1-16l-130.5.2c-66.3,0-117.8,56.1-120.9,121.3l.4,55.8c33.5-55.2,91.3-88.3,156.9-88l90,.7c48.3,1,92.5-11.5,134.3-35.2,0,0,2.5-1.7,6.1-4.1-15.2-14.9-33.8-26.8-55.1-34.7Z" />
      <path d="M441.8,149.3c-.6-3.6-.7-4.4-1.4-7.9-6.5-32.3-21.7-60.6-43.9-82.3-3,2.8-4.1,4-4.1,4-31.8,30.5-76.5,42.3-120,48.7-36,3.7-70,1.9-106.3,2.7-70.2,1.6-132.6,42.5-157.4,107.4l.6,86.7c35.2-47.4,87.7-77.3,147.7-77.8,0,0,106.4,2.3,106.4,2.3,27,.6,55.2-5.2,80.3-14.8,13.3-5.1,26.3-11.1,38.3-18.8s19.6-14.4,29-22.1,22.2-17.3,30.7-28.1Z" />
      <path d="M390.1,200.7c-37.7,27.7-80.4,35.7-125.1,41.6l-102.1,4.7c-72.6,2.8-136.6,53.8-152.7,125.1-5.3,23.4-.3,46.6-1,72.7,36.7-46.5,88.2-78.5,148.3-78.8l99.7-.5c35.7-.2,69.4-9.1,100.5-25.5,70.8-37.3,96.6-112.4,84.5-189.5-21.3,27.5-52.1,50.3-52.1,50.3Z" />
    </svg>
  );
}

/**
 * Authentic Pencil icon in its original 3 brand colors:
 * #dd3126 (red), #53ab47 (green), #3467ae (blue)
 */
export function PencilOriginalIconSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 453 453"
      className={cn("pointer-events-none select-none shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path fill="#dd3126" d="M341.5,24.3c-25.9-9.6-52.8-16-81.1-16l-130.5.2c-66.3,0-117.8,56.1-120.9,121.3l.4,55.8c33.5-55.2,91.3-88.3,156.9-88l90,.7c48.3,1,92.5-11.5,134.3-35.2,0,0,2.5-1.7,6.1-4.1-15.2-14.9-33.8-26.8-55.1-34.7Z" />
      <path fill="#53ab47" d="M441.8,149.3c-.6-3.6-.7-4.4-1.4-7.9-6.5-32.3-21.7-60.6-43.9-82.3-3,2.8-4.1,4-4.1,4-31.8,30.5-76.5,42.3-120,48.7-36,3.7-70,1.9-106.3,2.7-70.2,1.6-132.6,42.5-157.4,107.4l.6,86.7c35.2-47.4,87.7-77.3,147.7-77.8,0,0,106.4,2.3,106.4,2.3,27,.6,55.2-5.2,80.3-14.8,13.3-5.1,26.3-11.1,38.3-18.8s19.6-14.4,29-22.1,22.2-17.3,30.7-28.1Z" />
      <path fill="#3467ae" d="M390.1,200.7c-37.7,27.7-80.4,35.7-125.1,41.6l-102.1,4.7c-72.6,2.8-136.6,53.8-152.7,125.1-5.3,23.4-.3,46.6-1,72.7,36.7-46.5,88.2-78.5,148.3-78.8l99.7-.5c35.7-.2,69.4-9.1,100.5-25.5,70.8-37.3,96.6-112.4,84.5-189.5-21.3,27.5-52.1,50.3-52.1,50.3Z" />
    </svg>
  );
}

/**
 * Authentic SuperFeliz icon from public/macosdock/superfeliz.svg
 * Used automatically for any Feliz/SuperFeliz related action buttons.
 */
function SuperFelizIconSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 608 619.3"
      fill="currentColor"
      className={cn("pointer-events-none select-none shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M525.2,318.1l79-23.2-80.6-17.2c-66-13.9-103.3-84.3-77.8-146.8l31.1-76.3-63.6,52.4c-52.2,42.9-130.4,28.1-163.4-30.8L209.7,4.4l1.2,82.4c1,67.4-59.2,119.4-125.9,108.6L3.8,182l65.3,50.4c53.4,41.2,56.5,120.8,6.4,166.1l-61.1,55.2,80-19.5c65.6-16,129.7,31.1,133.8,98.5l5.1,82.2,34.6-74.8c28.3-61.3,105.2-82,160.5-43.2l67.4,47.3-36.9-73.7c-30.2-60.4,1.6-133.4,66.3-152.5ZM334.3,355.6c-19.2,5.6-28.7,27.3-19.7,45.2l11,21.8-20-14c-16.4-11.5-39.2-5.3-47.6,12.8l-10.3,22.2-1.5-24.4c-1.2-20-20.3-34-39.7-29.3l-23.7,5.8,18.1-16.4c14.8-13.4,13.9-37-1.9-49.3l-19.3-14.9,24.1,3.9c19.7,3.3,37.6-12.1,37.3-32.1l-.3-24.5,11.9,21.3c9.8,17.5,33,21.9,48.4,9.1l18.9-15.6-9.2,22.7c-7.6,18.6,3.5,39.5,23.1,43.6l23.9,5.1-23.4,7Z" />
    </svg>
  );
}

/**
 * SuperFeliz icon in its original cyan-blue gradient from public/macosdock/superfeliz.svg
 */
function SuperFelizOriginalIconSvg({ className }: { className?: string }) {
  const gradientId = React.useId();
  return (
    <svg
      viewBox="0 0 608 619.3"
      className={cn("pointer-events-none select-none shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="3.8" y1="309.6" x2="604.2" y2="309.6" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2057ff" />
          <stop offset="1" stopColor="#00d2ff" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d="M525.2,318.1l79-23.2-80.6-17.2c-66-13.9-103.3-84.3-77.8-146.8l31.1-76.3-63.6,52.4c-52.2,42.9-130.4,28.1-163.4-30.8L209.7,4.4l1.2,82.4c1,67.4-59.2,119.4-125.9,108.6L3.8,182l65.3,50.4c53.4,41.2,56.5,120.8,6.4,166.1l-61.1,55.2,80-19.5c65.6-16,129.7,31.1,133.8,98.5l5.1,82.2,34.6-74.8c28.3-61.3,105.2-82,160.5-43.2l67.4,47.3-36.9-73.7c-30.2-60.4,1.6-133.4,66.3-152.5ZM334.3,355.6c-19.2,5.6-28.7,27.3-19.7,45.2l11,21.8-20-14c-16.4-11.5-39.2-5.3-47.6,12.8l-10.3,22.2-1.5-24.4c-1.2-20-20.3-34-39.7-29.3l-23.7,5.8,18.1-16.4c14.8-13.4,13.9-37-1.9-49.3l-19.3-14.9,24.1,3.9c19.7,3.3,37.6-12.1,37.3-32.1l-.3-24.5,11.9,21.3c9.8,17.5,33,21.9,48.4,9.1l18.9-15.6-9.2,22.7c-7.6,18.6,3.5,39.5,23.1,43.6l23.9,5.1-23.4,7Z" />
    </svg>
  );
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export const PencilButton = React.forwardRef<HTMLButtonElement, PencilButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      fullWidth = false,
      href,
      target,
      rel,
      hoverLabel,
      icon,
      iconType,
      iconColor,
      showPencilIcon = true,
      pencilAnimation = true,
      loading = false,
      disabled,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    // Check if the current environment/document is RTL
    const [isRtl, setIsRtl] = React.useState(false);

    React.useEffect(() => {
      if (typeof document !== "undefined") {
        const checkRtl = () => {
          const dir = document.documentElement.dir || document.body.dir;
          setIsRtl(dir === "rtl" || document.documentElement.classList.contains("rtl"));
        };
        checkRtl();
        const observer = new MutationObserver(checkRtl);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir", "class"] });
        return () => observer.disconnect();
      }
    }, []);

    // Detect if this is an extra-wide / full-width button
    const isWide = Boolean(
      fullWidth ||
      className?.includes("w-full") ||
      className?.includes("flex-1")
    );

    const buttonRef = React.useRef<HTMLElement | null>(null);
    const placeholderRef = React.useRef<HTMLSpanElement | null>(null);
    const [wideIconOffset, setWideIconOffset] = React.useState<number | null>(null);
    const [hasMeasured, setHasMeasured] = React.useState(false);

    // Icon dimensions based on size
    const iconSizeClasses =
      size === "sm"
        ? "h-3.5 w-3.5"
        : size === "lg" || size === "xl"
        ? "h-5 w-5"
        : "h-4 w-4";

    const isIconOnly = size === "icon" || size === "icon-sm" || size === "icon-lg";
    const shouldAnimate = pencilAnimation && !isIconOnly && !loading;

    // Dynamic measurement for wide/full-width buttons so the default icon sits naturally adjacent to the centered label
    useIsomorphicLayoutEffect(() => {
      if (!isWide || !shouldAnimate) {
        if (wideIconOffset !== null) setWideIconOffset(null);
        if (hasMeasured) setHasMeasured(false);
        return;
      }

      const measure = () => {
        if (!buttonRef.current || !placeholderRef.current) return;
        const btnRect = buttonRef.current.getBoundingClientRect();
        const iconRect = placeholderRef.current.getBoundingClientRect();
        if (btnRect.width > 0 && iconRect.width > 0) {
          const offset = isRtl
            ? btnRect.right - iconRect.right
            : iconRect.left - btnRect.left;
          if (offset > 0) {
            setWideIconOffset(Math.round(offset));
            setHasMeasured(true);
          }
        }
      };

      measure();

      window.addEventListener("resize", measure);
      const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
      if (ro && buttonRef.current) {
        ro.observe(buttonRef.current);
      }

      return () => {
        window.removeEventListener("resize", measure);
        ro?.disconnect();
      };
    }, [isWide, isRtl, shouldAnimate, children, size, className]);

    const setRefs = React.useCallback(
      (node: HTMLElement | null) => {
        buttonRef.current = node;
        if (typeof ref === "function") {
          ref(node as HTMLButtonElement);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node as HTMLButtonElement;
        }
      },
      [ref]
    );

    // Responsive CSS Custom Properties for sweep motion & sizing
    const sizeStyles: React.CSSProperties = React.useMemo(() => {
      switch (size) {
        case "sm":
          return {
            "--btn-icon-start": "1rem",
            "--btn-icon-end": "1.85rem",
            "--btn-icon-scale": "2.7",
            "--btn-gap": "0.375rem",
          } as React.CSSProperties;
        case "lg":
          return {
            "--btn-icon-start": "2rem",
            "--btn-icon-end": "2.85rem",
            "--btn-icon-scale": "2.85",
            "--btn-gap": "0.625rem",
          } as React.CSSProperties;
        case "xl":
          return {
            "--btn-icon-start": "2rem",
            "--btn-icon-end": "3.25rem",
            "--btn-icon-scale": "3.0",
            "--btn-gap": "0.75rem",
          } as React.CSSProperties;
        case "default":
        case "md":
        default:
          return {
            "--btn-icon-start": "1.5rem",
            "--btn-icon-end": "2.35rem",
            "--btn-icon-scale": "2.85",
            "--btn-gap": "0.5rem",
          } as React.CSSProperties;
      }
    }, [size]);

    // Derived hover label if not explicitly provided
    const resolvedHoverLabel =
      hoverLabel ?? (
        <span className="inline-flex items-center gap-1.5">
          <span>{children}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
          >
            {isRtl ? "←" : "→"}
          </span>
        </span>
      );

    // Auto-detect Feliz / SuperFeliz context from props, href, or text content
    const isFelizContext =
      iconType === "superfeliz" ||
      (iconType === undefined &&
        ((href && /feliz/i.test(href)) ||
          (typeof children === "string" && /feliz|فيليز/i.test(children))));

    const resolvedIconType = iconType ?? (isFelizContext ? "superfeliz" : "pencil");

    // Preserve authentic original colored assets (#dd3126, #53ab47, #3467ae) by default.
    // Only use white/currentColor if explicitly requested via iconColor="white".
    const resolvedIconColor = iconColor ?? "original";

    // Branded Icon Element
    const brandIconElement =
      icon !== undefined ? (
        icon
      ) : showPencilIcon && !isIconOnly ? (
        resolvedIconType === "superfeliz" ? (
          resolvedIconColor === "original" ? (
            <SuperFelizOriginalIconSvg className={iconSizeClasses} />
          ) : (
            <SuperFelizIconSvg className={iconSizeClasses} />
          )
        ) : resolvedIconColor === "original" ? (
          <PencilOriginalIconSvg className={iconSizeClasses} />
        ) : (
          <PencilIconSvg className={iconSizeClasses} />
        )
      ) : null;

    const buttonClasses = cn(
      pencilButtonVariants({ variant, size, fullWidth }),
      shouldAnimate && "pencil-btn-pill",
      loading && "opacity-80 pointer-events-none",
      className
    );

    const combinedStyle = React.useMemo(() => {
      const dynamicStyles: Record<string, string> = {};
      if (isWide && wideIconOffset !== null) {
        dynamicStyles["--btn-icon-start"] = `${wideIconOffset}px`;
      }
      return { ...sizeStyles, ...dynamicStyles, ...props.style };
    }, [isWide, wideIconOffset, sizeStyles, props.style]);

    const innerContent = (
      <>
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin text-current" />
            <span>{children}</span>
          </span>
        ) : shouldAnimate ? (
          <>
            {/* Layer 0: Invisible Layout Ghost Sizer (maintains exact button width & height without shifting) */}
            <span
              className="invisible pointer-events-none select-none inline-flex items-center gap-2 opacity-0"
              aria-hidden="true"
            >
              {brandIconElement && <span className={cn(iconSizeClasses, "shrink-0")} />}
              <span className="grid grid-cols-1">
                <span className="col-start-1 row-start-1 whitespace-nowrap">{children}</span>
                <span className="col-start-1 row-start-1 whitespace-nowrap">{resolvedHoverLabel}</span>
              </span>
            </span>

            {/* Layer 1: Dedicated Sweeping Brand Icon Wrapper */}
            {brandIconElement && (
              <span
                className={cn(
                  "pencil-btn-icon-wrapper",
                  iconSizeClasses,
                  isWide && !hasMeasured && "opacity-0 pointer-events-none"
                )}
                style={
                  isWide && !hasMeasured
                    ? { transition: "none", opacity: 0 }
                    : undefined
                }
                aria-hidden="true"
              >
                {brandIconElement}
              </span>
            )}

            {/* Layer 2: Outgoing Default Content Layer */}
            <span
              className="pencil-btn-outgoing-label absolute inset-0 flex items-center justify-center"
              aria-hidden={false}
            >
              {brandIconElement && (
                <span
                  ref={placeholderRef}
                  className={cn(
                    iconSizeClasses,
                    "shrink-0",
                    isWide && !hasMeasured ? "inline-flex items-center justify-center" : "invisible"
                  )}
                  aria-hidden="true"
                >
                  {brandIconElement}
                </span>
              )}
              <span className="whitespace-nowrap">{children}</span>
            </span>

            {/* Layer 3: Incoming Alternate / Hover Label */}
            <span
              aria-hidden="true"
              className="pencil-btn-incoming-label font-bold"
            >
              {resolvedHoverLabel}
            </span>
          </>
        ) : (
          <span className="inline-flex items-center gap-2">
            {brandIconElement}
            <span>{children}</span>
          </span>
        )}
      </>
    );

    // If an href is supplied, render a semantic Link or anchor tag
    if (href && !disabled && !loading) {
      const isExternal =
        href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

      if (isExternal) {
        return (
          <a
            ref={setRefs as any}
            href={href}
            target={target}
            rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
            className={buttonClasses}
            data-rtl={isRtl ? "true" : undefined}
            style={combinedStyle}
            {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {innerContent}
          </a>
        );
      }

      return (
        <Link
          ref={setRefs as any}
          href={href}
          target={target}
          rel={rel}
          className={buttonClasses}
          data-rtl={isRtl ? "true" : undefined}
          style={combinedStyle}
          {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {innerContent}
        </Link>
      );
    }

    return (
      <button
        ref={setRefs as any}
        type={type}
        disabled={disabled || loading}
        className={buttonClasses}
        data-rtl={isRtl ? "true" : undefined}
        style={combinedStyle}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

PencilButton.displayName = "PencilButton";

