import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { HelpEditorialPage } from "@/components/help-editorial-page";

export const metadata: Metadata = {
  title: "Help Center | PENCIL Studio",
  description:
    "Enter the Pencil ecosystem: Pencil Studio, SuperFeliz, the Feliz family, our capabilities, business contexts, working method and experience since 2014.",
  alternates: { canonical: "https://dipencil.com/help" },
  openGraph: {
    title: "PENCIL Studio Help Center",
    description: "A complete editorial introduction to Pencil, Pencil Studio, SuperFeliz, our work, technology, AI products and ways of thinking.",
    type: "website",
    url: "https://dipencil.com/help",
  },
};

export default function HelpPage() {
  return (
    <LanguageProvider>
      <HelpEditorialPage />
    </LanguageProvider>
  );
}
