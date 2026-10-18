import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { MethodPage } from "@/components/method/method-page";
import { METHOD_CONTENT } from "@/lib/method-content";

export const metadata: Metadata = {
  title: "Design & Experience: Interfaces That Sell | PENCIL Studio",
  description:
    "Mobile-first, Arabic-first UX and UI: tested prototypes, visual systems and templates your team can actually use.",
};

export default function DesignExperiencePage() {
  return (
    <LanguageProvider>
      <MethodPage content={METHOD_CONTENT.design} />
    </LanguageProvider>
  );
}
