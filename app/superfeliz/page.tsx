import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { SuperFelizPage } from "@/components/superfeliz-page";

export const metadata: Metadata = {
  title: "SuperFeliz | PENCIL Studio",
  description:
    "SuperFeliz is Pencil's AI-powered business and creative intelligence platform. One family, four specialized minds: Oper, Tech, Gen, and SuperFeliz.",
};

export default function Page() {
  return (
    <LanguageProvider>
      <SuperFelizPage />
    </LanguageProvider>
  );
}
