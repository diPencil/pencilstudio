import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { MethodPage } from "@/components/method/method-page";
import { METHOD_CONTENT } from "@/lib/method-content";

export const metadata: Metadata = {
  title: "Build & Launch: Systems Ready for Daily Business | PENCIL Studio",
  description:
    "Next.js websites, booking systems and apps with 90+ PageSpeed, Arabic CMS, backups and 30-day hypercare after launch.",
};

export default function BuildLaunchPage() {
  return (
    <LanguageProvider>
      <MethodPage content={METHOD_CONTENT.build} />
    </LanguageProvider>
  );
}
