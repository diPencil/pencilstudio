import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { CloudHostingPage } from "@/components/cloud-hosting-page";

export const metadata: Metadata = {
  title: "Cloud & Hosting | PENCIL Studio",
  description: "VPS, domains, business email, SSL, backups and store publishing, managed from one panel at panel.dipencil.com. English and Arabic.",
};

export default function CloudHostingRoute() {
  return (
    <LanguageProvider>
      <CloudHostingPage />
    </LanguageProvider>
  );
}


