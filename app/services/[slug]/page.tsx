import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/components/language-context";
import { ServiceDetail } from "@/components/service-detail";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.nameEn} | PENCIL Studio`,
    description: service.taglineEn,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <LanguageProvider>
      <ServiceDetail service={service} />
    </LanguageProvider>
  );
}
