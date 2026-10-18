import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { PencilClientPartnershipPage } from "@/components/pencil-client-partnership-page";

export const metadata: Metadata = {
  title: "Customer Support | PENCIL Studio",
  description: "Work with Pencil as an extension of your team across active projects, recurring creative production, maintenance, product improvements and company partnerships.",
};

export default function SupportCustomerPage() {
  return (
    <LanguageProvider>
      <PencilClientPartnershipPage />
    </LanguageProvider>
  );
}
