import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { PencilSupportHub } from "@/components/pencil-support-hub";

export const metadata: Metadata = {
  title: "Support | PENCIL Studio",
  description: "Explore continuing Pencil support across creative production, websites, systems, infrastructure, AI, company accounts and new project phases.",
};

export default function SupportPage() {
  return (
    <LanguageProvider>
      <PencilSupportHub />
    </LanguageProvider>
  );
}
