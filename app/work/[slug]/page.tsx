import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/components/language-context";
import { WorkDetail } from "@/components/work-detail";
import { WORK_CATEGORIES, getWork } from "@/lib/portfolio-content";

export function generateStaticParams() {
  return WORK_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getWork(slug);
  if (!cat) return {};
  return {
    title: `${cat.nameEn}: Our Work | PENCIL Studio`,
    description: cat.taglineEn,
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getWork(slug);
  if (!cat) notFound();

  return (
    <LanguageProvider>
      <WorkDetail category={cat} />
    </LanguageProvider>
  );
}
