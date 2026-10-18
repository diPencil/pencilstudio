import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "About | PENCIL Studio",
  description: "A Cairo studio in the market since 2014, Egypt, the Middle East, the Gulf and Europe. 890+ projects delivered. English and Arabic.",
};

export default function AboutRoute() {
  return (
    <LanguageProvider>
      <AboutPage />
    </LanguageProvider>
  );
}
