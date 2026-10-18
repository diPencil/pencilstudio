import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { PencilGuidesEditorial } from "@/components/pencil-guides-editorial";

export const metadata: Metadata = {
  title: "Pencil Guides & Playbooks",
  description: "Practical Pencil field guides for better briefs, brand projects, content, websites, products, Arabic RTL, feedback, launches, AI workflows and ongoing care.",
  alternates: { canonical: "https://dipencil.com/help/guides" },
};

export default function HelpGuidesPage() {
  return (
    <LanguageProvider>
      <PencilGuidesEditorial />
    </LanguageProvider>
  );
}
