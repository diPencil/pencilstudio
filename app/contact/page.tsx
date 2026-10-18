import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Contact | PENCIL Studio",
  description: "Talk to PENCIL Studio, Sun to Thu, 10am to 7pm Cairo time. Email, phone, WhatsApp and direct message. English and Arabic.",
};

export default function ContactRoute() {
  return (
    <LanguageProvider>
      <ContactPage />
    </LanguageProvider>
  );
}
