import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { WorkIndex } from "@/components/work/work-index";

export const metadata: Metadata = {
  title: "Our Work: Real Production Projects | PENCIL Studio",
  description:
    "Explore our battle-tested portfolio across websites, mobile apps, identities, social media growth, and cinematic video.",
};

export default function WorksAliasPage() {
  return (
    <LanguageProvider>
      <WorkIndex />
    </LanguageProvider>
  );
}

