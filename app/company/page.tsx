import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { CompanyPage } from "@/components/company/company-page";

export const metadata: Metadata = {
  title: "Pencil Company | Why Us",
  description:
    "Why Pencil Studio & Company: A decade of engineering bespoke software, brand systems, and strategic enterprise partnerships across Egypt, Saudi Arabia, GCC, and Europe.",
};

export default function CompanyRoute() {
  return (
    <LanguageProvider>
      <CompanyPage />
    </LanguageProvider>
  );
}

