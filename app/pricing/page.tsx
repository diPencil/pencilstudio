import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { PricingPage } from "@/components/pricing-page";

export const metadata: Metadata = {
  title: "Pricing | PENCIL Studio",
  description: "Launch from $3,500, Manage from $490/mo, Enterprise custom, fixed quotes in writing before we start. English and Arabic.",
};

export default function PricingRoute() {
  return (
    <LanguageProvider>
      <PricingPage />
    </LanguageProvider>
  );
}
