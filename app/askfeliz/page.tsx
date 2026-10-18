import { Suspense } from "react";
import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { AskFelizPage } from "@/components/ask-feliz";

export const metadata: Metadata = {
  title: "Ask Feliz | PENCIL Studio",
  description:
    "Talk to Feliz Oper and Feliz Tech live. Business and technical answers instantly, in Arabic and English.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <Suspense>
        <AskFelizPage />
      </Suspense>
    </LanguageProvider>
  );
}
