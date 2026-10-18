"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Clock, Mail, PhoneCall, Siren } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { PENCIL } from "@/components/pencil-ui";
import { CinematicPageHero } from "@/components/cinematic-page-hero";
import { ContactRadarMotionBg } from "@/components/page-motion-backgrounds";
import { cn } from "@/lib/utils";
import { ContactDepth } from "@/components/page-upgrades";

export function ContactPage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError(isRtl ? "اكتب اسمك الأول على الأقل." : "Please write at least your first name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(isRtl ? "الإيميل شكله غلط. راجعه." : "That email looks off. Please check it.");
      return;
    }
    if (message.trim().length < 10) {
      setError(isRtl ? "احكيلنا محتاج إيه في سطرين على الأقل." : "Tell us what you need in at least two lines.");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={cn("min-h-screen text-neutral-900", PENCIL.paper)}>
      <Header />

      <CinematicPageHero
        isRtl={isRtl}
        badge={isRtl ? "تواصل مباشر" : "Direct Connection"}
        breadcrumb={[
          { label: isRtl ? "الرئيسية" : "Home", href: "/" },
          { label: isRtl ? "تواصل معنا" : "Contact" },
        ]}
        titleSolid={isRtl ? "تواصل مع قيادة بنسل." : "Start The Conversation."}
        titleOutline={isRtl ? "فكرتك تبدأ من هنا." : "Direct Access, Zero Friction."}
        subtitle={
          isRtl
            ? "شاركنا أهدافك وتفاصيل مشروعك. نرد عليك باهتمام واحترافية خلال ساعات العمل الرسمية."
            : "Tell us about your next initiative. Our leadership team responds promptly with clear strategic next steps."
        }
        bgMotion={<ContactRadarMotionBg />}
        metrics={[
          {
            value: isRtl ? "خلال 4 ساعات" : "< 4 Hours",
            label: isRtl ? "سرعة الرد والمراجعة التنفيذية" : "Executive Response Time",
          },
          {
            value: isRtl ? "تواصل مباشر" : "Direct Access",
            label: isRtl ? "نقاش مع قيادة الاستوديو مباشرة" : "Talk with Studio Leadership",
          },
          {
            value: isRtl ? "الرياض والقاهرة" : "Riyadh & Cairo",
            label: isRtl ? "حضور محلي وتغطية إقليمية" : "Regional Studio Presence",
          },
          {
            value: isRtl ? "جلسة استكشاف" : "Free Discovery",
            label: isRtl ? "تحليل استراتيجي أولي لفرصتك" : "Strategic Initial Assessment",
          },
        ]}
      />

      <section className="container-custom grid gap-6 py-12 md:py-16 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="rounded-3xl border border-neutral-200 bg-white p-7 md:p-9">
            {!done ? (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">{isRtl ? "الاسم" : "Name"}</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isRtl ? "مثال: أحمد سمير" : "e.g. Ahmed Samir"}
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">{isRtl ? "الإيميل" : "Email"}</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      dir="ltr"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
                      style={{ textAlign: isRtl ? "right" : "left" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold">{isRtl ? "احكيلنا" : "Your message"}</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder={isRtl ? "مثال: عندي مطعم وعايز منيو أونلاين ونظام كاشير..." : "e.g. I run a restaurant and need an online menu plus POS..."}
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
                  />
                </div>
                {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
                <button type="submit" className="w-full rounded-full bg-neutral-900 py-4 text-sm font-bold text-white transition hover:bg-neutral-700">
                  {isRtl ? "ابعت الرسالة" : "Send the message"}
                </button>
                <p className="text-center text-xs text-neutral-500">
                  {isRtl ? "بتفضل الإيميل المباشر؟ " : "Prefer direct email? "}
                  <a href="mailto:info@dipencil.com" className="font-bold text-neutral-900 underline underline-offset-4" dir="ltr">info@dipencil.com</a>
                </p>
              </form>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Check size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold">{isRtl ? "وصلت رسالتك." : "Message received."}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {isRtl ? "هنرد عليك في أول وقت شغل. لو مستعجل، الواتساب تحت أسرع." : "We reply within work hours. In a hurry? WhatsApp below is faster."}
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-2">
          <div className="flex h-full flex-col gap-4">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6">
              <p className="inline-flex items-center gap-2 text-sm font-bold text-neutral-500">
                <Clock size={14} /> {isRtl ? "مواعيد الشغل" : "Work hours"}
              </p>
              <p className="mt-1 font-bold">{isRtl ? "الأحد للخميس، 10ص ل7م" : "Sun to Thu, 10am to 7pm"}</p>
              <p className="text-sm text-neutral-500">{isRtl ? "بتوقيت القاهرة" : "Cairo time"}</p>
              <div className="mt-4 space-y-2.5 text-sm">
                <a href="mailto:info@dipencil.com" className="flex items-center gap-2.5 font-bold transition hover:opacity-70">
                  <Mail size={16} className="shrink-0 text-neutral-400" />
                  <span dir="ltr">info@dipencil.com</span>
                </a>
                <a href="tel:+201003778273" className="flex items-center gap-2.5 font-bold transition hover:opacity-70">
                  <PhoneCall size={16} className="shrink-0 text-neutral-400" />
                  <span dir="ltr">+20 100 377 8273</span>
                </a>
                <a href="https://wa.me/201003778273" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-bold transition hover:opacity-70">
                  <WhatsAppIcon size={16} className="shrink-0 text-neutral-400" />
                  <span dir="ltr">WhatsApp: +20 100 377 8273</span>
                </a>
              </div>
            </div>
            <a href="tel:+201003778273" className="flex items-center gap-3 rounded-3xl border border-red-200 bg-red-50 p-6 transition hover:border-red-400">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                <Siren size={18} />
              </span>
              <span>
                <span className="block font-bold text-red-900">{isRtl ? "حاجة واقعة دلوقتي؟" : "Something down right now?"}</span>
                <span className="block text-sm text-red-800">{isRtl ? "كلمنا فورًا. مش فورم." : "Call now. Not a form."}</span>
              </span>
            </a>
            <div className="rounded-3xl bg-neutral-950 p-6 text-white">
              <p className="font-bold">{isRtl ? "عميل عندنا؟" : "Already a client?"}</p>
              <p className="mt-1 text-sm text-white/60">
                {isRtl ? "الفواتير والتذاكر والخدمات كلها في البانل." : "Invoices, tickets and services all live in your panel."}
              </p>
              <a
                href="https://panel.dipencil.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-full bg-white px-5 py-2.5 text-center text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"
              >
                {isRtl ? "افتح البانل" : "Open your panel"}
              </a>
              <Link href="/support" className="mt-2.5 block text-center text-sm font-bold text-white/70 underline underline-offset-4 hover:text-white">
                {isRtl ? "أو روح للدعم" : "Or visit support"}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <ContactDepth />

      <Footer />
    </div>
  );
}


