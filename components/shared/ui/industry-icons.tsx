import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 22, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const TourismIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="8" width="18" height="12" rx="2.5" />
    <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M3 13h18" />
  </Svg>
);

const RealEstateIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    <path d="M9 7.5h2M13 7.5h2M9 11.5h2M13 11.5h2M9 15.5h2M13 15.5h2" />
    <path d="M10 21v-2.5h4V21" />
  </Svg>
);

const RestaurantIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 18.5h16" />
    <path d="M6 18.5a6 6 0 0 1 12 0" />
    <path d="M12 12.5v-2" />
    <circle cx="12" cy="9" r="1" />
  </Svg>
);

const MedicalIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v8M8 12h8" />
  </Svg>
);

const EducationIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4 2 9l10 5 10-5-10-5Z" />
    <path d="M6 11.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-3.5" />
    <path d="M22 9v5" />
  </Svg>
);

const CorporateIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    <path d="M3 12.5h18" />
  </Svg>
);

const EcommerceIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 8h12l-1 12.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 20.5L6 8Z" />
    <path d="M9 10.5V6.5a3 3 0 0 1 6 0v4" />
  </Svg>
);

const CrmIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5" />
    <circle cx="16.8" cy="9" r="2.6" />
    <path d="M15.8 14.6c2.3.2 4 1.6 4.5 4" />
  </Svg>
);

const ICONS: Record<string, (p: IconProps) => ReactElement> = {
  tourism: TourismIcon,
  realestate: RealEstateIcon,
  restaurants: RestaurantIcon,
  medical: MedicalIcon,
  education: EducationIcon,
  corporate: CorporateIcon,
  ecommerce: EcommerceIcon,
  crm: CrmIcon,
};

export function IndustryIcon({ id, size = 22 }: { id: string; size?: number }) {
  const Icon = ICONS[id] ?? CorporateIcon;
  return <Icon size={size} />;
}
