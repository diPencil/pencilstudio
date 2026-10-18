import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { MethodPage } from "@/components/method/method-page";
import { METHOD_CONTENT } from "@/lib/method-content";

export const metadata: Metadata = {
  title: "Strategy & Direction: From Idea to Decision | PENCIL Studio",
  description:
    "A 5-day strategy sprint: positioning, competitor teardown, sitemap and 90-day metrics in Arabic and English, before a single pixel is drawn.",
};

export default function StrategyDirectionPage() {
  return (
    <LanguageProvider>
      <MethodPage content={METHOD_CONTENT.strategy} />
    </LanguageProvider>
  );
}
