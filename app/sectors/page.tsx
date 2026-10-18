import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { SectorsPage } from "@/components/sectors-page";

export const metadata: Metadata = {
  title: "Business Sectors | PENCIL Studio",
  description: "Tourism, real estate, restaurants, clinics, education, retail, digital systems built on your sector's logic. English and Arabic.",
};

export default function SectorsRoute() {
  return (
    <LanguageProvider>
      <SectorsPage />
    </LanguageProvider>
  );
}
