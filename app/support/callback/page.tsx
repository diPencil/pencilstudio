import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { PencilConsultationPage } from "@/components/pencil-consultation-page";

export const metadata: Metadata = {
  title: "Consultation, Demo & Callback | PENCIL Studio",
  description: "Request a focused Pencil consultation, product demo, SuperFeliz demo, subscription follow-up or custom solution call.",
};

export default function SupportCallbackPage() {
  return (
    <LanguageProvider>
      <PencilConsultationPage />
    </LanguageProvider>
  );
}
