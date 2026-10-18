import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { PencilIssueResolutionPage } from "@/components/pencil-issue-resolution-page";

export const metadata: Metadata = {
  title: "Report an Issue | PENCIL Studio",
  description: "Prepare a clear Pencil issue report with affected service, expected and actual behaviour, practical impact and evidence for email or WhatsApp.",
};

export default function SupportReportPage() {
  return (
    <LanguageProvider>
      <PencilIssueResolutionPage />
    </LanguageProvider>
  );
}
