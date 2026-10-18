"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { WORK_CATEGORIES, type WorkCategory, type WorkProject } from "@/lib/portfolio-content";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const shot = (id: string, n: number, w: number, h: number) =>
  `https://picsum.photos/seed/pencil-${id}-shot${n}/${w}/${h}`;

export function WorkProjectPage({ category, project }: { category: WorkCategory; project: WorkProject }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const idx = category.projects.findIndex((p) => p.id === project.id);
  const prev = category.projects[(idx - 1 + category.projects.length) % category.projects.length];
  const next = category.projects[(idx + 1) % category.projects.length];
  const related = WORK_CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header solid />

      {/* breadcrumb + title */}
      <section className="bg-white pt-28 md:pt-36">
        <div className="container-custom">
          <Reveal>
            <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-neutral-400">
              <Link href="/" className="transition hover:text-neutral-900">{isRtl ? "الرئيسية" : "Home"}</Link>
              <span aria-hidden>/</span>
              <Link href="/#work" className="transition hover:text-neutral-900">{isRtl ? "شغلنا" : "Work"}</Link>
              <span aria-hidden>/</span>
              <Link href={`/work/${category.slug}`} className="transition hover:text-neutral-900">
                {isRtl ? category.nameAr : category.nameEn}
              </Link>
              <span aria-hidden>/</span>
              <span className="text-neutral-900">{isRtl ? project.titleAr : project.titleEn}</span>
            </nav>
          </Reveal>

          <div className="grid gap-8 py-10 md:py-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <div className="flex flex-wrap gap-1.5">
                  {(isRtl ? project.tagsAr : project.tagsEn).map((t) => (
                    <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-bold text-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
                <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                  {isRtl ? project.titleAr : project.titleEn}
                </h1>
                <p className="mt-3 text-lg text-neutral-500">
                  {isRtl ? project.clientAr : project.clientEn} · <span dir="ltr">{project.year}</span>
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-neutral-900 p-6 text-white lg:sticky lg:top-24">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                    {isRtl ? "النتيجة" : "The result"}
                  </p>
                  <p className="mt-2 flex items-start gap-2 font-bold leading-relaxed">
                    <Check size={17} strokeWidth={3} className="mt-1 shrink-0" />
                    {isRtl ? project.resultAr : project.resultEn}
                  </p>
                  <a
                    href="mailto:info@dipencil.com"
                    className="group mt-5 flex items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"
                  >
                    {isRtl ? "عايز نتيجة شبه دي" : "Want a result like this"}
                    <NextIcon size={15} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* cover */}
      <section className="bg-white pb-6">
        <div className="container-custom">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl md:aspect-[21/10]">
              <Image
                src={shot(project.id, 1, 1600, 800)}
                alt={isRtl ? project.titleAr : project.titleEn}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* story + shots */}
      <section className="container-custom grid gap-10 py-10 md:py-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
              {isRtl ? "الحكاية" : "The story"}
            </p>
            <p className="mt-3 text-lg leading-loose text-neutral-700">
              {isRtl ? project.storyAr : project.storyEn}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 space-y-4">
              {[2, 3].map((n) => (
                <div key={n} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-200">
                  <Image
                    src={shot(project.id, n, 1200, 750)}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <div className="space-y-4 lg:sticky lg:top-24">
            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-2xl border border-neutral-200">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={shot(project.id, 4, 800, 1000)}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <p className="text-sm font-bold">{isRtl ? "تفاصيل سريعة" : "Quick facts"}</p>
                <dl className="mt-3 space-y-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-neutral-500">{isRtl ? "العميل" : "Client"}</dt>
                    <dd className="font-bold text-end">{isRtl ? project.clientAr : project.clientEn}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-neutral-500">{isRtl ? "السنة" : "Year"}</dt>
                    <dd className="font-bold" dir="ltr">{project.year}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-neutral-500">{isRtl ? "التصنيف" : "Category"}</dt>
                    <dd className="font-bold text-end">{isRtl ? category.nameAr : category.nameEn}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-neutral-500">{isRtl ? "يبدأ من" : "Starts from"}</dt>
                    <dd className="font-bold" dir="ltr">${category.priceFromUsd}+</dd>
                  </div>
                </dl>
                <a
                  href="https://wa.me/201003778273"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 rounded-full bg-neutral-900 py-3 text-sm font-bold text-white transition hover:bg-neutral-700"
                >
                  <WhatsAppIcon size={16} />
                  {isRtl ? "كلمنا واتساب" : "Chat on WhatsApp"}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* prev / next */}
      <section className="border-t border-neutral-200 bg-white py-12 md:py-16">
        <div className="container-custom">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { p: prev, labelEn: "Previous project", labelAr: "المشروع السابق", icon: <BackIcon size={16} /> },
              { p: next, labelEn: "Next project", labelAr: "المشروع التالي", icon: <NextIcon size={16} /> },
            ].map(({ p, labelEn, labelAr, icon }) => (
              <Link
                key={p.id}
                href={`/work/${category.slug}/${p.id}`}
                className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-4 transition hover:border-neutral-900"
              >
                <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image src={shot(p.id, 1, 200, 200)} alt="" fill className="object-cover" sizes="80px" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    {isRtl ? labelAr : labelEn}
                  </span>
                  <span className="mt-1 block truncate font-bold">{isRtl ? p.titleAr : p.titleEn}</span>
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition group-hover:scale-105">
                  {icon}
                </span>
              </Link>
            ))}
          </div>

          <p className="mb-5 mt-12 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
            {isRtl ? "فئات تانية" : "Other categories"}
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((o) => (
              <Link
                key={o.slug}
                href={`/work/${o.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                <span className="text-sm font-bold">{isRtl ? o.nameAr : o.nameEn}</span>
                <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={`/work/${category.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-bold transition hover:border-neutral-900"
            >
              <BackIcon size={15} />
              {isRtl ? "عودة للمعرض" : "Back to gallery"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
