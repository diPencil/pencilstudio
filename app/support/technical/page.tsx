import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { PencilTechnicalCarePage } from "@/components/pencil-technical-care-page";

export const metadata: Metadata = {
  title: "Technical Support | PENCIL Studio",
  description: "Explore Pencil's technical depth and request help with websites, systems, data, integrations, access, hosting, deployment and creative production.",
};

export default function SupportTechnicalPage() {
  return (
    <LanguageProvider>
      <PencilTechnicalCarePage />
    </LanguageProvider>
  );
}
