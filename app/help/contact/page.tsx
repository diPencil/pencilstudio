import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-context";
import { PencilContactEditorial } from "@/components/pencil-contact-editorial";

export const metadata: Metadata = {
  title: "Contact Help | PENCIL Studio",
  description: "Tell Pencil what you want to create, improve, fix or launch and shape it into a real project.",
};

export default function HelpContactPage() {
  return (
    <LanguageProvider>
      <PencilContactEditorial />
    </LanguageProvider>
  );
}
