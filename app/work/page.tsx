import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { WorkIndex } from "@/components/work-index";

export const metadata: Metadata = {
  title: "Our Work: 30 Real Projects | PENCIL Studio",
  description:
    "Browse thirty real PENCIL projects across social media, identities, video, websites and apps. Search it like Pinterest, open any piece for its story.",
};

export default function WorkLandingPage() {
  return (
    <LanguageProvider>
      <WorkIndex />
    </LanguageProvider>
  );
}
