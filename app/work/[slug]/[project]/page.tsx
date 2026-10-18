import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/components/language-context";
import { WorkProjectPage } from "@/components/work-project";
import { WORK_CATEGORIES, getWork } from "@/lib/portfolio-content";

export function generateStaticParams() {
  return WORK_CATEGORIES.flatMap((c) => c.projects.map((p) => ({ slug: c.slug, project: p.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; project: string }>;
}): Promise<Metadata> {
  const { slug, project } = await params;
  const cat = getWork(slug);
  const item = cat?.projects.find((p) => p.id === project);
  if (!cat || !item) return {};
  return {
    title: `${item.titleEn}, ${cat.nameEn} | PENCIL Studio`,
    description: item.storyEn,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string; project: string }>;
}) {
  const { slug, project } = await params;
  const cat = getWork(slug);
  const item = cat?.projects.find((p) => p.id === project);
  if (!cat || !item) notFound();

  return (
    <LanguageProvider>
      <WorkProjectPage category={cat} project={item} />
    </LanguageProvider>
  );
}
