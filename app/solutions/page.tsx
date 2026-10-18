import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { SolutionsPage } from "@/components/solutions-page";

export const metadata: Metadata = {
  title: "Solutions | PENCIL Studio",
  description: "Integrated business and digital solutions engineered for growth, operational efficiency, and revenue acceleration. English and Arabic.",
};

export default function SolutionsRoute() {
  return (
    <LanguageProvider>
      <SolutionsPage />
    </LanguageProvider>
  );
}
