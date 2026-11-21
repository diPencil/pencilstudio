"use client";

import * as React from "react";

export function useCareReducedMotion() {
  const [reduce, setReduce] = React.useState(false);
  React.useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  return reduce;
}

export function PencilCareAccessibility() {
  return <style>{`
    .pencil-help-page { letter-spacing: 0; }
    .pencil-help-page h1, .pencil-help-page h2, .pencil-help-page h3 { letter-spacing: 0; }
    .pencil-help-page[dir="rtl"] h1,
    .pencil-help-page[dir="rtl"] h2,
    .pencil-help-page[dir="rtl"] h3 { line-height: 1.4; }
    @media (max-width: 767px) {
      .pencil-help-page h1 { font-size: 36px; }
      .pencil-help-page[dir="rtl"] h1 { line-height: 1.25; }
      .pencil-help-page section:first-of-type > .container-custom { padding-bottom: 40px; }
      .pencil-help-page section:first-of-type > .container-custom > p { line-height: 24px; }
      .pencil-help-page header > div > div { height: 104px; padding-top: 48px; }
      .pencil-help-page header > div > div > .absolute { top: 24px; }
      .pencil-help-page header > div { padding-inline: 16px; }
      .pencil-help-page header > div > div > .flex { gap: 4px; }
      .pencil-help-page header button[aria-haspopup] { min-width: 44px; min-height: 44px; }
    }
    @media (prefers-reduced-motion: reduce) {
      [data-pencil-care] *, [data-pencil-care] *::before, [data-pencil-care] *::after {
        animation: none !important; transition-duration: 0s !important; scroll-behavior: auto !important;
      }
      [data-pencil-care] [style*="opacity"] { opacity: 1 !important; }
      .pencil-help-page section:first-of-type > [aria-hidden="true"] { display: none; }
      .pencil-help-page .help-sector-frame { overflow-x: auto; }
    }
  `}</style>;
}
