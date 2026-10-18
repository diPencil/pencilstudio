import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { EnterprisePage } from "@/components/enterprise-page";

export const metadata: Metadata = {
  title: "Enterprise | PENCIL Studio",
  description: "Dedicated managers, SLAs, monthly operations and the Pro AI gateway for companies and institutions. English and Arabic.",
};

export default function EnterpriseRoute() {
  return (
    <LanguageProvider>
      <EnterprisePage />
    </LanguageProvider>
  );
}
