import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { PencilFaqEditorial } from "@/components/pencil-faq-editorial";

export const metadata: Metadata = {
  title: "Pencil, Answered | FAQs",
  description: "Everything people usually want to ask Pencil before working with us: the studio, services, products, SuperFeliz, process, technology and long-term partnerships.",
  alternates: { canonical: "https://dipencil.com/help/faqs" },
};

export default function HelpFaqsPage() {
  return (
    <LanguageProvider>
      <PencilFaqEditorial />
    </LanguageProvider>
  );
}
