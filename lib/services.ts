export type ServiceSlug =
  | "brand-identity"
  | "websites-platforms"
  | "mobile-apps-saas"
  | "business-systems"
  | "marketing-growth"
  | "hosting-cloud";

export interface ServiceFeature {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export interface ServiceStep {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  durationEn: string;
  durationAr: string;
}

export interface ServiceStat {
  value: string;
  labelEn: string;
  labelAr: string;
}

export interface ServiceFaq {
  qEn: string;
  aEn: string;
  qAr: string;
  aAr: string;
}

export interface Service {
  slug: ServiceSlug;
  id: string;
  badgeEn: "Core" | "Elite";
  badgeAr: string;
  priceEn: string;
  priceAr: string;
  priceUsd: number;
  monthly: boolean;
  heroImage: string;
  gallery: string[];
  videoPoster: string;
  videoDurationEn: string;
  videoDurationAr: string;
  stack: string[];
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  introEn: string;
  introAr: string;
  storyEn: string[];
  storyAr: string[];
  forWhoEn: string[];
  forWhoAr: string[];
  features: ServiceFeature[];
  deliverablesEn: string[];
  deliverablesAr: string[];
  steps: ServiceStep[];
  stats: ServiceStat[];
  faq: ServiceFaq[];
  relatedSectorsEn: string[];
  relatedSectorsAr: string[];
}

export const serviceSlugById: Record<string, ServiceSlug> = {
  "1": "brand-identity",
  "2": "websites-platforms",
  "3": "mobile-apps-saas",
  "4": "business-systems",
  "5": "marketing-growth",
  "6": "hosting-cloud",
};

export const services: Service[] = [
  {
    slug: "brand-identity",
    id: "1",
    badgeEn: "Core",
    badgeAr: "أساسي",
    priceEn: "From $3,500",
    priceAr: "يبدأ من $3,500",
    priceUsd: 3500,
    monthly: false,
    heroImage: "/hero-section.jpg",
    gallery: [
      "/business-sectors/corporate-websites.jpg",
      "/business-sectors/e-commerce.jpg",
      "/business-sectors/real-estate.jpg",
    ],
    videoPoster: "/hero-section.jpg",
    videoDurationEn: "2:40 min, how we sketch a brand",
    videoDurationAr: "دقيقتان و40 ثانية، بنرسم الهوية إزاي",
    stack: ["Figma", "Illustrator", "After Effects", "Brand Guidelines PDF", "SVG System"],
    nameEn: "Brand Identity & Creative Design",
    nameAr: "الهوية البصرية والتصميم الإبداعي",
    taglineEn: "A logo is not a brand. We build the whole system behind it.",
    taglineAr: "اللوجو لوحده مش براند. إحنا بنبني السيستم الكامل اللي وراه.",
    introEn:
      "Most clients come to us with a logo made in a hurry, stretched on a billboard, pixelated on Instagram, different color every time. We fix that from the root: strategy first, then a visual system you can actually use every day without calling a designer.",
    introAr:
      "أغلب اللي بييجي لنا بيكون معاه لوجو معمول بسرعة، مشدود على يافطة، ومبكسل على إنستجرام، وكل مرة بلون شكل. إحنا بنحل ده من الجدر: الأول نفهم البيزنس والجمهور، وبعدين نبني نظام بصري تعرف تستخدمه كل يوم من غير ما تحتاج مصمم جنبك.",
    storyEn: [
      "We start on paper, literally. In the first workshop we sketch 40–60 rough directions with you, no polished mockups yet. It feels messy, and that is the point. By the end of day two, we usually kill 90% of them and keep the two directions that actually feel like you.",
      "Then we build. Typography, color palette with real usage rules (not just hex codes), icon style, photography direction, and templates for the stuff you post daily: price lists, stories, invoices, packaging. One restaurant client in Cairo told us his delivery packaging finally looked the same as his storefront, that is when it clicked for him.",
    ],
    storyAr: [
      "بنبدأ على ورق بجد. في أول ورشة بنرسم معاك من 40 لـ 60 اتجاه مبدئي، من غير أي تجميل. الموضوع بيبان ملخبط، وهو ده المقصود. على آخر تاني يوم بنكون شيلنا 90% منهم ومخلّيين الاتجاهين اللي شبهك فعلاً.",
      "وبعدين نبني. خطوط، وألوان بقواعد استخدام حقيقية (مش مجرد أكواد)، وستايل أيقونات، واتجاه تصوير، وقوالب للحاجات اللي بتنزلها كل يوم: المنيو، الستوري، الفواتير، التغليف. عميل مطعم في القاهرة قال لنا إن علب الدليفري بقت شبه المحل بالظبط، ساعتها حس بقيمة الموضوع.",
    ],
    forWhoEn: [
      "New businesses starting from zero and need everything",
      "Existing brands whose logo and social look like two different companies",
      "Restaurants, clinics, real estate and shops that print and package daily",
    ],
    forWhoAr: [
      "مشروع جديد بيبدأ من الصفر ومحتاج كل حاجة",
      "براند شغال بس اللوجو حاجة والسوشيال حاجة تانية خالص",
      "مطاعم وعيادات وعقارات ومحلات بتطبع وتغلّف كل يوم",
    ],
    features: [
      {
        titleEn: "Strategy before pixels",
        titleAr: "إستراتيجية قبل الألوان",
        descEn: "One-page positioning: who you serve, why you are different, how you sound. We write it with you so the design has something to stand on.",
        descAr: "صفحة واحدة فيها التموضع: بتخدم مين، ومختلف في إيه، وبتتكلم إزاي. بنكتبها معاك عشان التصميم يبقى واقف على أرض صلبة.",
      },
      {
        titleEn: "Logo system, not a single file",
        titleAr: "منظومة لوجو مش ملف واحد",
        descEn: "Primary, secondary and icon versions + clear-space and minimum-size rules. Works on a favicon and on a truck.",
        descAr: "نسخة أساسية وثانوية وأيقونة + قواعد المساحة وأقل مقاس. يشتغل على أيقونة موقع وعلى عربية نقل.",
      },
      {
        titleEn: "Arabic + Latin typography",
        titleAr: "خطوط عربي ولاتيني مع بعض",
        descEn: "We pair fonts that actually match in weight and mood, Alexandria / Inter is our default, so your Arabic never looks like an afterthought.",
        descAr: "بنركّب خطوط وزنها وروحها ماشية مع بعض، Alexandria مع Inter غالباً، عشان العربي ميبانش ملزوق في الآخر.",
      },
      {
        titleEn: "Daily-use templates",
        titleAr: "قوالب للشغل اليومي",
        descEn: "Menu, price list, story covers, invoice header, packaging die-lines. You edit text in Figma or Canva without breaking the design.",
        descAr: "منيو، ليستة أسعار، أغلفة ستوري، ترويسة فواتير، مقاسات تغليف. بتغيّر الكلام بنفسك من غير ما تبوّظ التصميم.",
      },
      {
        titleEn: "Brand book you will open",
        titleAr: "كتيب هتفتحه بجد",
        descEn: "30–50 pages, no fluff. Do / don't examples with your real photos, not stock. New employees understand it in one sitting.",
        descAr: "من 30 لـ 50 صفحة من غير حشو. أمثلة صح وغلط بصورك الحقيقية مش صور جاهزة. أي موظف جديد يفهمه من قعدة واحدة.",
      },
      {
        titleEn: "Launch kit",
        titleAr: "عدّة الإطلاق",
        descEn: "Profile pictures, covers, opening-post designs and a short motion intro so day one looks intentional.",
        descAr: "صور بروفايل وأغلفة وبوستات الافتتاح وفيديو تعريفي قصير، عشان أول يوم يبان مقصود مش مرتجل.",
      },
    ],
    deliverablesEn: [
      "Logo suite: SVG, PDF, PNG, favicon + monochrome versions",
      "Color + typography system with usage rules",
      "Icon set (20–30 icons) + pattern / texture",
      "Brand book PDF 30–50 pages",
      "Social + print templates (Figma + Canva)",
      "Motion intro 5–8 seconds for reels and website",
    ],
    deliverablesAr: [
      "منظومة اللوجو: SVG وPDF وPNG وأيقونة موقع ونسخ أحادية",
      "نظام الألوان والخطوط بقواعد الاستخدام",
      "مجموعة أيقونات (20–30) + نقشة أو خامة خاصة",
      "كتيب الهوية PDF من 30 لـ 50 صفحة",
      "قوالب سوشيال ومطبوعات (Figma + Canva)",
      "مقدمة موشن 5–8 ثواني للريلز والموقع",
    ],
    steps: [
      {
        titleEn: "Workshop & direction",
        titleAr: "ورشة وتحديد الاتجاه",
        descEn: "Half-day with you: audience, competitors, references. We sketch live and agree on 2 directions.",
        descAr: "نص يوم معاك: الجمهور والمنافسين وأمثلة عاجباك. بنرسم لايف ونتفق على اتجاهين.",
        durationEn: "Week 1",
        durationAr: "الأسبوع 1",
      },
      {
        titleEn: "Design & iteration",
        titleAr: "التصميم والتعديل",
        descEn: "Two revision rounds with real applications, your menu, your storefront photo, not lorem ipsum.",
        descAr: "جولتين تعديل بتطبيقات حقيقية، المنيو بتاعك وصورة محلك، مش كلام تجريبي.",
        durationEn: "Weeks 2–3",
        durationAr: "الأسبوع 2–3",
      },
      {
        titleEn: "System & templates",
        titleAr: "النظام والقوالب",
        descEn: "We build the full kit and test it: print one box, post three stories, print one invoice.",
        descAr: "بنبني العدّة كاملة ونجربها: نطبع علبة، وننزل 3 ستوري، ونطبع فاتورة.",
        durationEn: "Week 4",
        durationAr: "الأسبوع 4",
      },
      {
        titleEn: "Handover & launch",
        titleAr: "التسليم والإطلاق",
        descEn: "Recorded walkthrough + organized files. We stay 14 days after launch for small fixes.",
        descAr: "شرح مسجّل + ملفات مترتبة. وبنفضل معاك 14 يوم بعد الإطلاق لأي تظبيط صغير.",
        durationEn: "Week 5",
        durationAr: "الأسبوع 5",
      },
    ],
    stats: [
      { value: "60+", labelEn: "identities shipped", labelAr: "هوية اتسلّمت" },
      { value: "5 wks", labelEn: "average timeline", labelAr: "متوسط المدة" },
      { value: "14 days", labelEn: "free post-launch tweaks", labelAr: "تظبيط مجاني بعد الإطلاق" },
    ],
    faq: [
      {
        qEn: "We already have a logo. Can you just fix it?",
        aEn: "Yes, often we keep the name and redraw the mark, then build the system around it. If the current logo is truly unsalvageable we will tell you honestly in the workshop, we don't sell redesigns you don't need.",
        qAr: "عندنا لوجو already. ممكن تظبطوه بس؟",
        aAr: "أيوه، وساعات بنحتفظ بالاسم ونعيد رسم العلامة ونبني النظام حواليها. ولو اللوجو الحالي مفيش منه أمل هنقولك بصراحة في الورشة، مش بنبيع إعادة تصميم انت مش محتاجها.",
      },
      {
        qEn: "Do you handle printing and packaging production?",
        aEn: "We prepare print-ready files and talk to your printer directly. In Egypt we work with 3 printers we trust; outside Egypt we supervise remotely with proofs before mass printing.",
        qAr: "بتتابعوا الطباعة والتغليف؟",
        aAr: "بنجهز ملفات جاهزة للطباعة وبنكلم المطبعة بنفسنا. في مصر بنتعامل مع 3 مطابع نثق فيهم، وبره مصر بنتابع عن بُعد بالبروفات قبل طباعة الكمية.",
      },
      {
        qEn: "Will our Arabic look as good as the English?",
        aEn: "That is the whole point of our pairing method. We test headlines in both languages side by side, if the Arabic feels weaker, we change the font pairing, not just the size.",
        qAr: "العربي هيطلع حلو زي الإنجليزي؟",
        aAr: "هو ده أساس شغلنا. بنجرب العناوين باللغتين جنب بعض، لو العربي أضعف بنغيّر تركيبة الخطوط نفسها مش المقاس بس.",
      },
      {
        qEn: "What if we don't like any direction?",
        aEn: "Hasn't happened yet, because we sketch with you in the room. But the contract includes a full re-direction once, we restart the sketch phase instead of patching something you hate.",
        qAr: "لو معجبناش ولا اتجاه؟",
        aAr: "محصلتش قبل كده لأننا بنرسم وانت معانا. بس العقد فيه إعادة اتجاه كاملة مرة واحدة، بنبدأ مرحلة الرسم من جديد بدل ما نرقّع حاجة انت مش طايقها.",
      },
    ],
    relatedSectorsEn: ["Restaurants & POS", "E-Commerce", "Real Estate"],
    relatedSectorsAr: ["المطاعم ونقاط البيع", "التجارة الإلكترونية", "العقارات"],
  },
  {
    slug: "websites-platforms",
    id: "2",
    badgeEn: "Core",
    badgeAr: "أساسي",
    priceEn: "From $4,800",
    priceAr: "يبدأ من $4,800",
    priceUsd: 4800,
    monthly: false,
    heroImage: "/hero-section.jpg",
    gallery: [
      "/business-sectors/corporate-websites.jpg",
      "/business-sectors/tourism-booking.jpg",
      "/business-sectors/e-commerce.jpg",
    ],
    videoPoster: "/business-sectors/corporate-websites.jpg",
    videoDurationEn: "3:10 min, from Figma to 90+ PageSpeed",
    videoDurationAr: "3 دقائق، من التصميم لسرعة 90+",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Headless CMS", "Vercel / AWS"],
    nameEn: "Websites & Digital Platforms",
    nameAr: "المواقع والمنصات الرقمية",
    taglineEn: "Fast, bilingual, and easy to edit, without calling us for every comma.",
    taglineAr: "سريع، عربي وإنجليزي، وتعرف تعدّله بنفسك من غير ما تكلمنا على كل فاصلة.",
    introEn:
      "Your website has two jobs: load instantly and make the visitor act. Most agency sites fail the first and decorate the second. We build Next.js sites that open in under 1.5 seconds on a mid-range phone in Cairo, with an edit panel your team will actually use.",
    introAr:
      "الموقع بتاعك ليه شغلتين: يفتح بسرعة ويخلّي الزائر ياخد خطوة. أغلب مواقع الشركات بتسقط في الأولى وبتزوّق التانية. إحنا بنبني مواقع Next.js بتفتح في أقل من ثانية ونص على موبايل متوسط في القاهرة، ولوحة تحكم فريقك هيستخدمها فعلاً.",
    storyEn: [
      "We design desktop and mobile at the same time, mobile first is not a slogan here, 70% of your traffic is a phone. Every page gets a real Arabic version, not a mirrored copy with broken numbers and dates. Phone numbers stay LTR, prices format correctly, forms validate Arabic names without complaining.",
      "Under the hood it is boring on purpose: static generation where possible, images compressed to AVIF/WebP, zero heavy page-builders. A tourism client went from a 9-second WordPress homepage to 1.1 seconds, same photos, same text. Bookings from mobile doubled in two months. That was the speed, not a redesign trick.",
    ],
    storyAr: [
      "بنصمم الموبايل والكمبيوتر مع بعض، الموبايل أولاً مش شعار عندنا، 70% من زياراتك موبايل. وكل صفحة ليها نسخة عربي حقيقية مش مجرد مراية مكسورة الأرقام والتواريخ. أرقام التليفونات بتفضل من الشمال لليمين، والأسعار بتتكتب صح، والفورم بيقبل الأسماء العربي من غير ما يشتكي.",
      "ومن جوه ممل عن قصد: توليد ثابت قد ما نقدر، وصور مضغوطة AVIF/WebP، ومن غير إضافات تقيلة. عميل سياحة كان موقعه الووردبريس بيفتح في 9 ثواني بقى 1.1 ثانية، بنفس الصور ونفس الكلام. حجوزات الموبايل اتضاعفت في شهرين. دي كانت السرعة مش حيلة تصميم.",
    ],
    forWhoEn: [
      "Companies whose current site is slow or embarrassing on mobile",
      "Tourism, real estate, clinics needing booking / lead forms",
      "Teams that want to edit content without a developer",
    ],
    forWhoAr: [
      "شركات موقعها الحالي بطيء أو يكسف على الموبايل",
      "سياحة وعقارات وعيادات محتاجة حجز أو فورم عملاء",
      "فرق عايزة تعدّل المحتوى من غير مبرمج",
    ],
    features: [
      {
        titleEn: "Sub-second mindset",
        titleAr: "عقلية أقل من ثانية",
        descEn: "90+ PageSpeed on mobile is in the contract. We show you the score on your actual phone before launch.",
        descAr: "سرعة 90+ على الموبايل مكتوبة في العقد. وبنوريك النتيجة على موبايلك انت قبل الإطلاق.",
      },
      {
        titleEn: "Real bilingual build",
        titleAr: "لغتين بجد مش ترجمة جوجل",
        descEn: "Separate Arabic typesetting, RTL layout mirroring, Eastern vs Western numerals per section. You control both versions.",
        descAr: "تنسيق عربي مستقل، وعكس كامل للاتجاه، وأرقام مشرقية أو غربية حسب السكشن. وانت بتتحكم في النسختين.",
      },
      {
        titleEn: "CMS your staff gets",
        titleAr: "لوحة تحكم فريقك يفهمها",
        descEn: "Headless CMS with Arabic labels. Add a room, a doctor, a property in 3 minutes. Recorded training included.",
        descAr: "نظام محتوى بتسميات عربي. تضيف غرفة أو دكتور أو عقار في 3 دقايق. ومعاه شرح مسجّل.",
      },
      {
        titleEn: "SEO baked in",
        titleAr: "سيو مبني جواه",
        descEn: "Arabic slugs, meta in both languages, sitemap, schema for business / FAQ / booking. No plugin soup.",
        descAr: "روابط عربي، وميتا باللغتين، وخريطة موقع، وبيانات منظمة للبيزنس والأسئلة والحجز. من غير إضافات ملخبطة.",
      },
      {
        titleEn: "Forms that reach you",
        titleAr: "فورم بيوصلك فعلاً",
        descEn: "WhatsApp + email + sheet notifications, spam-filtered, with auto-reply in the visitor's language.",
        descAr: "تنبيه واتساب وإيميل وشيت، بفلتر سبام، ورد تلقائي بلغة الزائر.",
      },
      {
        titleEn: "Analytics you read",
        titleAr: "تحليلات هتقراها",
        descEn: "Simple dashboard: where visitors came from, which button they pressed, which page lost them. Monthly 15-min review call.",
        descAr: "داشبورد بسيطة: جم منين، وداسوا على إيه، وأنهي صفحة طفشتهم. ومكالمة مراجعة 15 دقيقة كل شهر.",
      },
    ],
    deliverablesEn: [
      "Next.js website 8–20 pages, AR + EN",
      "Headless CMS + 2 training videos",
      "Booking / quote / contact flows with WhatsApp",
      "SEO setup + Google Business + Search Console",
      "Speed report + 30-day bug-fix window",
      "Handover docs + hosting guide",
    ],
    deliverablesAr: [
      "موقع Next.js من 8 لـ 20 صفحة عربي وإنجليزي",
      "نظام محتوى + فيديوهين شرح",
      "مسارات حجز وعروض أسعار وتواصل مربوطة بواتساب",
      "تهيئة سيو + جوجل بيزنس + سيرش كونسول",
      "تقرير سرعة + شهر إصلاح أخطاء",
      "ملف تسليم + دليل استضافة",
    ],
    steps: [
      {
        titleEn: "Sitemap & copy",
        titleAr: "الخريطة والمحتوى",
        descEn: "We map every page and write first-draft Arabic + English with you. No design before words.",
        descAr: "بنرسم كل صفحة وبنكتب مسودة عربي وإنجليزي معاك. مفيش تصميم قبل الكلام.",
        durationEn: "Week 1",
        durationAr: "الأسبوع 1",
      },
      {
        titleEn: "Design in browser",
        titleAr: "التصميم على المتصفح",
        descEn: "You click a real staging link on your phone from week 2, not screenshots.",
        descAr: "بتدوس على لينك حقيقي من موبايلك من الأسبوع التاني، مش سكرينشوتات.",
        durationEn: "Weeks 2–3",
        durationAr: "الأسبوع 2–3",
      },
      {
        titleEn: "Build & CMS",
        titleAr: "البرمجة ولوحة التحكم",
        descEn: "Development + CMS + forms + SEO. You add 3 real items yourself to test it.",
        descAr: "برمجة + محتوى + فورم + سيو. وانت بنفسك بتضيف 3 عناصر حقيقية عشان تجرب.",
        durationEn: "Weeks 3–5",
        durationAr: "الأسبوع 3–5",
      },
      {
        titleEn: "Speed & launch",
        titleAr: "السرعة والإطلاق",
        descEn: "PageSpeed, domain, SSL, backups, analytics. Launch on a Tuesday morning, never Friday night.",
        descAr: "السرعة والدومين والشهادة والنسخ والتحليلات. الإطلاق صباح التلات، عمره ما كان ليلة جمعة.",
        durationEn: "Week 6",
        durationAr: "الأسبوع 6",
      },
    ],
    stats: [
      { value: "1.2s", labelEn: "median mobile load", labelAr: "متوسط فتح الموبايل" },
      { value: "2x", labelEn: "mobile inquiries after rebuild", labelAr: "تضاعف استفسارات الموبايل" },
      { value: "AR+EN", labelEn: "every page, both ways", labelAr: "كل صفحة باللغتين" },
    ],
    faq: [
      {
        qEn: "Can we keep our WordPress and just redesign?",
        aEn: "If your WordPress is fast and clean, yes, we'll theme it. But if it has 30 plugins and a 9-second load, we'll show you the test and recommend a rebuild. We won't decorate a slow foundation.",
        qAr: "ينفع نفضل ووردبريس ونغيّر الشكل بس؟",
        aAr: "لو الووردبريس عندك سريع ونضيف أيوه هنعمل ثيم. بس لو عليه 30 إضافة وبيفتح في 9 ثواني هنوريك الاختبار وننصح بإعادة بناء. مش هنزوّق أساس بطيء.",
      },
      {
        qEn: "Who writes the Arabic content?",
        aEn: "We write the first draft from your voice notes and old brochures, you correct the tone. Final approval is always yours, we don't publish Arabic we haven't read out loud.",
        qAr: "مين بيكتب المحتوى العربي؟",
        aAr: "إحنا بنكتب المسودة من فويساتك وبروشوراتك القديمة وانت بتصحح اللهجة. الاعتماد النهائي ليك دايماً، مش بننشر عربي مقريناهوش بصوت عالي.",
      },
      {
        qEn: "What happens if we need a new page later?",
        aEn: "You build it from blocks in the CMS, hero, gallery, form, FAQ. If you want something custom, small pages are a fixed $250–$600, quoted before we touch code.",
        qAr: "لو احتجنا صفحة جديدة بعدين؟",
        aAr: "بتبنيها بنفسك من بلوكات، عنوان وصور وفورم وأسئلة. ولو عايز حاجة مخصوصة، الصفحات الصغيرة بسعر ثابت 250–600 دولار بنتفق عليه قبل ما نلمس الكود.",
      },
      {
        qEn: "Do you take care of domain and hosting?",
        aEn: "Yes. We move or buy the domain in your account (never ours), set SSL, daily backups and uptime monitoring. You own everything.",
        qAr: "بتستلموا الدومين والاستضافة؟",
        aAr: "أيوه. بننقل أو نشتري الدومين في حسابك انت (عمره ما بيكون باسمنا)، ونظبط الشهادة والنسخ اليومي والمراقبة. كل حاجة ملكك.",
      },
    ],
    relatedSectorsEn: ["Tourism & Booking", "Real Estate", "Corporate Websites"],
    relatedSectorsAr: ["السياحة والحجوزات", "العقارات", "مواقع الشركات"],
  },
  {
    slug: "mobile-apps-saas",
    id: "3",
    badgeEn: "Elite",
    badgeAr: "نخبة",
    priceEn: "From $8,500",
    priceAr: "يبدأ من $8,500",
    priceUsd: 8500,
    monthly: false,
    heroImage: "/signature-capabilities/Mobile-Apps-SaaS-Products.jpg",
    gallery: [
      "/signature-capabilities/Mobile-Apps-SaaS-Products.jpg",
      "/business-sectors/crm-automation.jpg",
      "/business-sectors/restaurant-pos.jpg",
    ],
    videoPoster: "/signature-capabilities/Mobile-Apps-SaaS-Products.jpg",
    videoDurationEn: "4:00 min, one codebase, iOS + Android",
    videoDurationAr: "4 دقائق، كود واحد لآيفون وأندرويد",
    stack: ["React Native", "Expo", "TypeScript", "Supabase / Firebase", "Push + Offline"],
    nameEn: "Mobile Apps & SaaS Products",
    nameAr: "تطبيقات الموبايل ومنتجات SaaS",
    taglineEn: "One team, one codebase, both stores, built for daily use, not demos.",
    taglineAr: "فريق واحد وكود واحد للمتجرين، مبني للاستخدام اليومي مش للعرض.",
    introEn:
      "An app that crashes on a delivery driver's old Android is a failed app. We build React Native apps with offline-first logic, real Arabic input handling, and push notifications people don't mute, then we stay through store review hell with you.",
    introAr:
      "تطبيق بيهنّج على موبايل دليفري قديم يبقى تطبيق فاشل. إحنا بنبني تطبيقات React Native بتشتغل أوفلاين الأول، وبتتعامل مع العربي صح، وإشعاراتها الناس مبتعملهاش ميوت، وبنفضل معاك في رخامة مراجعة المتاجر لحد النشر.",
    storyEn: [
      "We prototype in week one on your actual phones, TestFlight and APK, not a Figma mirror. A restaurant owner tapped through his ordering flow while standing in his own kitchen and found three steps his staff would never do. We cut them the same day. That only happens with a real build in hand.",
      "For SaaS we think in subscriptions from day one: roles, limits, invoices in Arabic and English, grace periods when cards fail. One education client sells monthly plans to parents, failed payments retry quietly and the kid never gets locked out mid-lesson. Details like that are the product.",
    ],
    storyAr: [
      "بنعمل نموذج شغال من أول أسبوع على موبايلاتكم الحقيقية، TestFlight وAPK مش صورة فيجما. صاحب مطعم جرّب دورة الطلب وهو واقف في مطبخه ولقى 3 خطوات الموظفين عمرهم ما هيعملوها. شيلناها نفس اليوم. ده مبيحصلش غير لما تمسك نسخة شغالة بإيدك.",
      "وفي منتجات الاشتراكات بنفكر في الفلوس من أول يوم: صلاحيات وحدود وفواتير عربي وإنجليزي وفترة سماح لما الكارت يفشل. عميل تعليم بيبيع اشتراكات شهرية لأولياء الأمور، الدفع الفاشل بيتحاول في صمت والطفل عمره ما بيتقفل عليه في نص الحصة. التفاصيل دي هي المنتج.",
    ],
    forWhoEn: [
      "Restaurants, clinics, gyms needing ordering / booking apps",
      "Startups validating an MVP in 6–8 weeks",
      "Businesses turning an Excel + WhatsApp mess into a product",
    ],
    forWhoAr: [
      "مطاعم وعيادات وجيم محتاجة تطبيق طلب أو حجز",
      "ستارت أب بتجرب MVP في 6–8 أسابيع",
      "بيزنس عايز يحوّل عكّ الإكسل والواتساب لمنتج",
    ],
    features: [
      {
        titleEn: "Offline-first",
        titleAr: "أوفلاين أولاً",
        descEn: "Orders and forms save on the device and sync when the network returns. No 'no internet' dead-ends.",
        descAr: "الطلبات والفورم بتتحفظ على الجهاز وتتبعت لما النت يرجع. مفيش طريق مسدود بتاع مفيش إنترنت.",
      },
      {
        titleEn: "Arabic that works",
        titleAr: "عربي شغال بجد",
        descEn: "RTL layouts, Arabic search that ignores hamza differences, Hijri + Gregorian dates where needed.",
        descAr: "واجهات معكوسة صح، وبحث عربي بيتجاهل فروق الهمزات، وتواريخ هجرية وميلادية حسب الحاجة.",
      },
      {
        titleEn: "Push people open",
        titleAr: "إشعارات بتتفتح",
        descEn: "Segmented by behavior and language, quiet hours respected, deep-linked to the exact screen.",
        descAr: "متقسمة حسب السلوك واللغة، بتحترم ساعات النوم، وبتفتح على نفس الشاشة بالظبط.",
      },
      {
        titleEn: "Roles & payments",
        titleAr: "صلاحيات ودفع",
        descEn: "Admin / staff / customer roles, subscriptions, Egyptian + Gulf payment gateways (Paymob, Moyasar, Stripe).",
        descAr: "أدوار أدمن وموظف وعميل، واشتراكات، وبوابات دفع مصرية وخليجية (Paymob وMoyasar وStripe).",
      },
      {
        titleEn: "Store paperwork handled",
        titleAr: "ورق المتاجر علينا",
        descEn: "Privacy policy, screenshots in both languages, review responses. We have been rejected, we know the drill.",
        descAr: "سياسة الخصوصية والسكرينشوتات باللغتين والرد على المراجعة. اترفضنا قبل كده، وعارفين السكة.",
      },
      {
        titleEn: "Crash-free promise",
        titleAr: "وعد الثبات",
        descEn: "99%+ crash-free monitored with Sentry. If a release breaks checkout, we hotfix within 24 hours.",
        descAr: "ثبات 99%+ متراقب. لو نسخة كسّرت الدفع بنصلحها في 24 ساعة.",
      },
    ],
    deliverablesEn: [
      "iOS + Android apps from one codebase",
      "Admin panel for orders / users / content",
      "Push, offline, payments, auth (phone + Apple/Google)",
      "Store listings AR + EN + screenshots",
      "Analytics + crash monitoring wired",
      "60-day store-fix window after launch",
    ],
    deliverablesAr: [
      "تطبيق آيفون وأندرويد من كود واحد",
      "لوحة أدمن للطلبات والمستخدمين والمحتوى",
      "إشعارات وأوفلاين ودفع ودخول (موبايل + آبل/جوجل)",
      "صفحات المتاجر عربي وإنجليزي + صور",
      "تحليلات ومراقبة أعطال مربوطة",
      "شهرين إصلاح بعد الإطلاق",
    ],
    steps: [
      {
        titleEn: "Clickable MVP",
        titleAr: "نموذج يتلمس",
        descEn: "Core 3–5 flows on real phones. You test with 5 real users, not us.",
        descAr: "أهم 3–5 مسارات على موبايلات حقيقية. وانت بتجرب مع 5 مستخدمين حقيقيين مش إحنا.",
        durationEn: "Weeks 1–2",
        durationAr: "الأسبوع 1–2",
      },
      {
        titleEn: "Full build",
        titleAr: "البناء الكامل",
        descEn: "Weekly TestFlight/APK drops. Every Friday you hold the progress in your hand.",
        descAr: "نسخة تجريبية كل أسبوع. كل جمعة التقدم في إيدك.",
        durationEn: "Weeks 3–6",
        durationAr: "الأسبوع 3–6",
      },
      {
        titleEn: "Payments & polish",
        titleAr: "الدفع والتلميع",
        descEn: "Real-money sandbox tests, Arabic edge cases, battery and data usage checks.",
        descAr: "تجارب دفع بفلوس حقيقية في بيئة تجريبية، وحالات عربي صعبة، واختبار بطارية وداتا.",
        durationEn: "Week 7",
        durationAr: "الأسبوع 7",
      },
      {
        titleEn: "Launch & iterate",
        titleAr: "الإطلاق والتحسين",
        descEn: "Phased rollout 10% → 100%, crash watch, first feature update in 30 days.",
        descAr: "إطلاق تدريجي 10% لـ 100%، ومراقبة أعطال، وأول تحديث مزايا في 30 يوم.",
        durationEn: "Week 8+",
        durationAr: "الأسبوع 8+",
      },
    ],
    stats: [
      { value: "6–8 wks", labelEn: "to MVP on both stores", labelAr: "لنسخة MVP على المتجرين" },
      { value: "99%+", labelEn: "crash-free sessions", labelAr: "جلسات بدون أعطال" },
      { value: "1 code", labelEn: "for iOS + Android", labelAr: "كود واحد للمتجرين" },
    ],
    faq: [
      {
        qEn: "React Native or native Swift/Kotlin?",
        aEn: "For 95% of business apps, React Native is faster and cheaper to maintain. If you need heavy Bluetooth, video editing or 3D, we'll tell you to go native, we've done both.",
        qAr: "React Native ولا نيتف؟",
        aAr: "لـ 95% من تطبيقات البيزنس React Native أسرع وأرخص في الصيانة. لو محتاج بلوتوث تقيل أو مونتاج فيديو أو 3D هنقولك روح نيتف، عملنا الاتنين.",
      },
      {
        qEn: "How do updates work after launch?",
        aEn: "Small fixes go over-the-air instantly. Big features go through the stores (1–3 days review). We bundle a monthly update hour-block so costs stay predictable.",
        qAr: "التحديثات بعد الإطلاق بتمشي إزاي؟",
        aAr: "الإصلاحات الصغيرة بتنزل فوراً من غير متجر. المزايا الكبيرة بتعدي على مراجعة المتاجر (1–3 أيام). وعندنا باقة ساعات شهرية عشان التكلفة تفضل متوقعة.",
      },
      {
        qEn: "Can the app work with poor internet?",
        aEn: "Yes, that is our default. Drivers, reps and clinics in areas with weak signal keep working; everything syncs later with conflict rules we agree on upfront.",
        qAr: "التطبيق يشتغل مع نت ضعيف؟",
        aAr: "أيوه، ده الافتراضي عندنا. سواقين ومناديب وعيادات في أماكن شبكتها ضعيفة بيفضلوا شغالين، وكل حاجة بتتزامن بعدين بقواعد متفقين عليها من الأول.",
      },
      {
        qEn: "Do you sign NDAs and who owns the code?",
        aEn: "NDA before the first call if you want. Code, accounts and certificates live in your GitHub / Apple / Google accounts from day one. You own 100%.",
        qAr: "بتمضوا NDA ومين بيملك الكود؟",
        aAr: "نمضي قبل أول مكالمة لو حابب. الكود والحسابات والشهادات في حساباتك انت من أول يوم. الملكية 100% ليك.",
      },
    ],
    relatedSectorsEn: ["Restaurants & POS", "Education & LMS", "Medical & Clinics"],
    relatedSectorsAr: ["المطاعم ونقاط البيع", "التعليم والمنصات", "الطب والعيادات"],
  },
  {
    slug: "business-systems",
    id: "4",
    badgeEn: "Core",
    badgeAr: "أساسي",
    priceEn: "From $6,200",
    priceAr: "يبدأ من $6,200",
    priceUsd: 6200,
    monthly: false,
    heroImage: "/business-sectors/crm-automation.jpg",
    gallery: [
      "/business-sectors/crm-automation.jpg",
      "/business-sectors/medical-clinics.jpg",
      "/business-sectors/education-lms.jpg",
    ],
    videoPoster: "/business-sectors/crm-automation.jpg",
    videoDurationEn: "3:30 min, from WhatsApp chaos to one dashboard",
    videoDurationAr: "3 دقائق ونص، من عك الواتساب لداشبورد واحدة",
    stack: ["Next.js", "PostgreSQL", "Supabase", "Role Permissions", "Audit Log"],
    nameEn: "Business Systems & Dashboards",
    nameAr: "أنظمة التشغيل والداشبورد",
    taglineEn: "Stop running your company from 40 WhatsApp groups.",
    taglineAr: "بطّل تدير شركتك من 40 جروب واتساب.",
    introEn:
      "Leads in one phone, bookings in a notebook, follow-ups forgotten. We replace that with one system: requests, clients, bookings, tasks and reports, in Arabic your team reads, with permissions so staff see only their work.",
    introAr:
      "عملاء في موبايل، وحجوزات في كشكول، ومتابعات منسية. إحنا بنبدّل ده بنظام واحد: طلبات وعملاء وحجوزات ومهام وتقارير، بعربي فريقك بيقراه، وبصلاحيات كل موظف يشوف شغله بس.",
    storyEn: [
      "We shadow your team for a day, sit next to the receptionist, ride with the sales rep. A clinic we worked with had three notebooks for the same appointments. We didn't digitize the notebooks; we deleted two of them and built one booking flow with SMS reminders. No-shows dropped 40%.",
      "The dashboard is deliberately boring: today's work on top, overdue in red, money collected this week. Owners check it with morning coffee. Staff get WhatsApp reminders instead of logins they forget. Adoption beats features, we cut scope to what gets used daily.",
    ],
    storyAr: [
      "بنقعد مع فريقك يوم كامل، جنب موظفة الاستقبال ومع المندوب في مشواره. عيادة اشتغلنا معاها كان عندها 3 كشاكيل لنفس الحجوزات. إحنا مرقمناش الكشاكيل، لغينا اتنين منهم وبنينا مسار حجز واحد برسايل تذكير. عدم الحضور نزل 40%.",
      "والداشبورد مملة عن قصد: شغل النهاردة فوق، والمتأخر بالأحمر، والفلوس المتحصلة الأسبوع ده. صاحب البيزنس بيبص عليها مع قهوة الصبح. والموظفين بيجيلهم تذكير واتساب بدل باسوردات بينسوها. الاستخدام أهم من الكماليات، بنشيل أي حاجة مش هتتفتح كل يوم.",
    ],
    forWhoEn: [
      "Clinics, tourism, real estate drowning in messages",
      "Schools and academies tracking students + payments",
      "Any team over 5 people with no single source of truth",
    ],
    forWhoAr: [
      "عيادات وسياحة وعقارات غرقانة في الرسايل",
      "مدارس وأكاديميات بتتابع طلاب ومدفوعات",
      "أي فريق فوق 5 أفراد ومفيش مرجع واحد للحقيقة",
    ],
    features: [
      {
        titleEn: "Requests in one inbox",
        titleAr: "الطلبات في صندوق واحد",
        descEn: "Website, WhatsApp, phone and walk-ins land in one queue with source, status and owner. Nothing falls between phones.",
        descAr: "الموقع والواتساب والتليفون والحضور بيقعوا في قائمة واحدة بالمصدر والحالة والمسؤول. مفيش حاجة بتقع بين الموبايلات.",
      },
      {
        titleEn: "Booking without calls",
        titleAr: "حجز من غير تليفونات",
        descEn: "Calendar with buffers, doctor/room/car resources, Arabic SMS + WhatsApp confirmations and reminders.",
        descAr: "تقويم بفواصل زمنية، وموارد دكتور/غرفة/عربية، وتأكيد وتذكير عربي SMS وواتساب.",
      },
      {
        titleEn: "Money view",
        titleAr: "صورة الفلوس",
        descEn: "Deposits, balances, refunds and daily closing. Owner sees cash vs bank vs pending in one row.",
        descAr: "عربون وأرصدة ومرتجعات وتقفيل يومي. صاحب البيزنس بيشوف الكاش والبنك والمعلق في سطر واحد.",
      },
      {
        titleEn: "Permissions that hold",
        titleAr: "صلاحيات ماسكة نفسها",
        descEn: "Receptionist can't delete payments. Accountant can't see HR notes. Every change logged with name and time.",
        descAr: "الاستقبال ميقدرش يمسح مدفوعات. المحاسب ميشوفش ملاحظات HR. وكل تغيير متسجل بالاسم والوقت.",
      },
      {
        titleEn: "WhatsApp where it matters",
        titleAr: "واتساب في مكانه",
        descEn: "Customer gets booking + reminder + review link automatically. Staff get daily list at 8am.",
        descAr: "العميل بيجيله الحجز والتذكير ولينك التقييم أوتوماتيك. والموظفين بيجيلهم ليستة الصبح 8.",
      },
      {
        titleEn: "Reports you forward",
        titleAr: "تقارير بتتبعت",
        descEn: "Weekly PDF in Arabic to your WhatsApp: new vs returning, no-shows, collection. One page, no charts jungle.",
        descAr: "PDF أسبوعي عربي على واتسابك: جديد مقابل متكرر، وعدم حضور، وتحصيل. صفحة واحدة من غير غابة رسوم.",
      },
    ],
    deliverablesEn: [
      "Web system + staff accounts + permissions",
      "Booking / CRM / inventory modules per need",
      "WhatsApp + SMS + email integrations",
      "Arabic reports + daily closing screen",
      "Data import from Excel / notebooks",
      "On-site or video training + manual",
    ],
    deliverablesAr: [
      "نظام ويب + حسابات موظفين + صلاحيات",
      "موديولات حجز وعملاء ومخزون حسب الحاجة",
      "ربط واتساب وSMS وإيميل",
      "تقارير عربي + شاشة تقفيل يومي",
      "نقل البيانات من الإكسل والكشاكيل",
      "تدريب حضوري أو فيديو + دليل",
    ],
    steps: [
      {
        titleEn: "Shadow day",
        titleAr: "يوم معايشة",
        descEn: "We watch real work, count clicks and papers. Proposal lists what we will delete, not just build.",
        descAr: "بنتفرج على الشغل الحقيقي ونعد الكليكات والورق. العرض بيقول هنلغي إيه مش هنبني إيه بس.",
        durationEn: "Week 1",
        durationAr: "الأسبوع 1",
      },
      {
        titleEn: "Prototype with your data",
        titleAr: "نموذج ببياناتك",
        descEn: "Your 50 real clients loaded in. If the receptionist can't book in under 60 seconds, we redesign.",
        descAr: "بنحمّل 50 عميل حقيقي بتوعك. لو موظفة الاستقبال معرفتش تحجز في أقل من دقيقة بنعيد التصميم.",
        durationEn: "Weeks 2–3",
        durationAr: "الأسبوع 2–3",
      },
      {
        titleEn: "Pilot with one branch",
        titleAr: "تشغيل فرع واحد",
        descEn: "One location live for 2 weeks, fixes every 48 hours. Other branches watch and ask.",
        descAr: "فرع واحد شغال أسبوعين، وتعديل كل 48 ساعة. باقي الفروع بتتفرج وتسأل.",
        durationEn: "Weeks 4–6",
        durationAr: "الأسبوع 4–6",
      },
      {
        titleEn: "Rollout & handover",
        titleAr: "التعميم والتسليم",
        descEn: "All branches, data migrated, old notebooks archived. 30-day hypercare on WhatsApp.",
        descAr: "كل الفروع والبيانات متنقلة والكشاكيل متأرشفة. 30 يوم دعم لصيق على واتساب.",
        durationEn: "Weeks 7–8",
        durationAr: "الأسبوع 7–8",
      },
    ],
    stats: [
      { value: "-40%", labelEn: "no-shows with reminders", labelAr: "نقص عدم الحضور بالتذكير" },
      { value: "60 sec", labelEn: "to book a client", labelAr: "لحجز عميل" },
      { value: "1 inbox", labelEn: "for all requests", labelAr: "صندوق واحد لكل الطلبات" },
    ],
    faq: [
      {
        qEn: "Our staff is not technical. Will they use it?",
        aEn: "If they use WhatsApp, they can use this. Big buttons, Arabic labels, max 3 clicks to finish a task. We train on their real shift, not in a classroom, and leave a one-page cheat sheet taped to the desk.",
        qAr: "فريقنا مش تقني. هيستخدموه؟",
        aAr: "لو بيستخدموا واتساب هيعرفوا يستخدموه. زراير كبيرة وتسميات عربي وأقصى حاجة 3 ضغطات. وبندرب في الشيفت الحقيقي مش في قاعة، وبنسيب ورقة غش صفحة واحدة ملزوقة على المكتب.",
      },
      {
        qEn: "Can it work alongside our Excel?",
        aEn: "Yes for a transition period, we sync both ways. But Excel stays read-only after go-live, otherwise you keep two truths. We import history once, cleanly.",
        qAr: "ينفع يشتغل جنب الإكسل؟",
        aAr: "أيوه في الفترة الانتقالية، وبنزامن الاتجاهين. بس بعد التشغيل الإكسل بيبقى للقراءة بس، وإلا هيفضل عندك حقيقتين. وبنستورد القديم مرة واحدة بنضافة.",
      },
      {
        qEn: "What about data privacy and backups?",
        aEn: "Hosted in EU with daily encrypted backups kept 30 days. Staff access is logged. On request we enable Egypt-local hosting. You can export everything to Excel anytime, no lock-in.",
        qAr: "الخصوصية والنسخ الاحتياطي؟",
        aAr: "استضافة في أوروبا بنسخ يومية مشفرة 30 يوم. ودخول الموظفين متسجل. ولو عايز استضافة محلية في مصر بنفعّلها. وتقدر تصدّر كل حاجة إكسل في أي وقت، مفيش احتكار.",
      },
      {
        qEn: "How much customization is too much?",
        aEn: "We will push back if a request serves one person once a year. Core flows get customized deeply; edge cases get a notes field and a report. Keeps the system fast and maintainable.",
        qAr: "التخصيص ليه حدود؟",
        aAr: "هنعترض لو طلب بيخدم فرد واحد مرة في السنة. المسارات الأساسية بتتفصل بعمق، والحالات الشاذة بتاخد خانة ملاحظات وتقرير. كده النظام يفضل سريع وسهل الصيانة.",
      },
    ],
    relatedSectorsEn: ["Medical & Clinics", "Tourism & Booking", "Education & LMS"],
    relatedSectorsAr: ["الطب والعيادات", "السياحة والحجوزات", "التعليم والمنصات"],
  },
  {
    slug: "marketing-growth",
    id: "5",
    badgeEn: "Core",
    badgeAr: "أساسي",
    priceEn: "From $2,900",
    priceAr: "يبدأ من $2,900",
    priceUsd: 2900,
    monthly: false,
    heroImage: "/signature-capabilities/Marketing-Growth-Systems.jpg",
    gallery: [
      "/signature-capabilities/Marketing-Growth-Systems.jpg",
      "/business-sectors/e-commerce.jpg",
      "/business-sectors/real-estate.jpg",
    ],
    videoPoster: "/signature-capabilities/Marketing-Growth-Systems.jpg",
    videoDurationEn: "2:50 min, what we fix before spending a dollar on ads",
    videoDurationAr: "دقيقتان و50 ثانية، بنصلح إيه قبل ما نصرف دولار على الإعلانات",
    stack: ["GA4", "Search Console", "Meta / TikTok Pixel", "SEO", "CRO"],
    nameEn: "Marketing & Growth Systems",
    nameAr: "أنظمة التسويق والنمو",
    taglineEn: "We fix the bucket before pouring more ads into it.",
    taglineAr: "بنصلّح الجردل قبل ما نصب فيه إعلانات زيادة.",
    introEn:
      "Spending on ads with a slow site, no tracking and a form nobody answers is burning money. We start with measurement: what brings calls, what wastes budget, then SEO pages and conversion fixes that keep working after the ad budget stops.",
    introAr:
      "الصرف على الإعلانات وموقعك بطيء ومفيش تتبع وفورم محدش بيرد عليه ده حرق فلوس. إحنا بنبدأ بالقياس: إيه بيجيب مكالمات وإيه بيضيع ميزانية، وبعدين صفحات سيو وتعديلات تحويل بتفضل شغالة حتى لما ميزانية الإعلانات تقف.",
    storyEn: [
      "First week is always an audit, and it is uncomfortable. A real estate client was spending $3,000/month; 60% of clicks came from outside his areas and the form went to an inbox nobody opened. We paused half the spend, routed leads to WhatsApp with an auto-reply, and answered in under 5 minutes. Same budget, 3x qualified viewings.",
      "Then compounding work: Arabic service pages that rank ('dentist for kids in Nasr City' beats 'best clinic'), speed fixes, review generation via WhatsApp after each visit, and a simple monthly report in plain language. No 40-page PDFs with vanity graphs.",
    ],
    storyAr: [
      "أول أسبوع دايماً تدقيق ومبيبقاش مريح. عميل عقارات كان بيصرف 3000 دولار شهرياً؛ 60% من الضغطات من بره مناطقه والفورم بيروح لإيميل محدش بيفتحه. وقفنا نص الصرف ووجّهنا العملاء لواتساب برد تلقائي وردّينا في أقل من 5 دقايق. نفس الميزانية و3 أضعاف معاينات جادة.",
      "وبعدين الشغل التراكمي: صفحات عربي بتتصدر (دكتور أسنان أطفال في مدينة نصر بتكسب عيادة أفضل)، وتسريع، وتجميع تقييمات بواتساب بعد كل زيارة، وتقرير شهري بلغة بسيطة. من غير PDF أربعين صفحة برسوم منظرة.",
    ],
    forWhoEn: [
      "Businesses spending on ads with unclear return",
      "Clinics, real estate, tourism relying on calls + WhatsApp",
      "E-commerce with traffic but weak checkout",
    ],
    forWhoAr: [
      "بيزنس بيصرف على الإعلانات ومش عارف العائد",
      "عيادات وعقارات وسياحة معتمدة على المكالمات والواتساب",
      "متاجر عندها زيارات بس الدفع ضعيف",
    ],
    features: [
      {
        titleEn: "Tracking that tells truth",
        titleAr: "تتبع بيقول الحقيقة",
        descEn: "Calls, WhatsApp clicks, bookings attributed to channel and keyword, in Arabic dashboard labels.",
        descAr: "المكالمات وضغطات الواتساب والحجوزات منسوبة للقناة والكلمة، ولوحة بتسميات عربي.",
      },
      {
        titleEn: "Arabic SEO pages",
        titleAr: "صفحات سيو عربي",
        descEn: "Service + area pages written like humans search, with FAQ schema. 10–20 pages that rank and ring.",
        descAr: "صفحات خدمة + منطقة مكتوبة زي ما الناس بتدوّر، بأسئلة شائعة منظمة. 10–20 صفحة بتتصدر وبتجيب اتصالات.",
      },
      {
        titleEn: "Speed + conversion fixes",
        titleAr: "سرعة وتحويل",
        descEn: "Shorter forms, sticky WhatsApp / call buttons, real photos over stock. Tested A/B, not opinions.",
        descAr: "فورم أقصر، وزراير واتساب واتصال ثابتة، وصور حقيقية بدل الجاهزة. باختبار A/B مش بالآراء.",
      },
      {
        titleEn: "Review engine",
        titleAr: "ماكينة تقييمات",
        descEn: "Automatic WhatsApp after each visit with direct Google link. Bad feedback goes to you first, not public.",
        descAr: "واتساب تلقائي بعد كل زيارة بلينك جوجل مباشر. والشكوى بتجيلك انت الأول مش للعلن.",
      },
      {
        titleEn: "Ad account cleanup",
        titleAr: "تنضيف حسابات الإعلانات",
        descEn: "Geo, negative keywords, Arabic ad copy that matches the landing page. No clickbait mismatch.",
        descAr: "نطاق جغرافي وكلمات مستبعدة وإعلان عربي مطابق لصفحة الهبوط. من غير عنوان يخدع.",
      },
      {
        titleEn: "Monthly plain report",
        titleAr: "تقرير شهري مفهوم",
        descEn: "Spent, earned, cost per qualified lead, next month's one move. 20 minutes, on WhatsApp call if you like.",
        descAr: "اتصرف كام واتكسب كام وتكلفة العميل الجاد وخطوة الشهر الجاي. 20 دقيقة ولو حابب على واتساب.",
      },
    ],
    deliverablesEn: [
      "Measurement: GA4 + pixels + call tracking",
      "Technical SEO + 10–20 Arabic pages",
      "CRO fixes + A/B test log",
      "Review automation flow",
      "Ad accounts restructured",
      "Monthly report + 60-min working session",
    ],
    deliverablesAr: [
      "قياس: تحليلات + بكسلات + تتبع مكالمات",
      "سيو تقني + 10–20 صفحة عربي",
      "تعديلات تحويل + سجل تجارب",
      "تدفق تقييمات أوتوماتيك",
      "إعادة هيكلة حسابات الإعلانات",
      "تقرير شهري + جلسة شغل 60 دقيقة",
    ],
    steps: [
      {
        titleEn: "Audit & numbers",
        titleAr: "التدقيق والأرقام",
        descEn: "We find where money leaks: wrong geo, dead inbox, slow pages. You get a one-page leak list.",
        descAr: "بنلاقي الفلوس بتتسرب منين: نطاق غلط وإيميل ميت وصفحات بطيئة. وبتاخد قائمة تسريب صفحة واحدة.",
        durationEn: "Week 1",
        durationAr: "الأسبوع 1",
      },
      {
        titleEn: "Fix the bucket",
        titleAr: "إصلاح الجردل",
        descEn: "Tracking, speed, forms, WhatsApp routing live before one dollar of new spend.",
        descAr: "التتبع والسرعة والفورم وتوجيه الواتساب شغالين قبل دولار واحد صرف جديد.",
        durationEn: "Weeks 2–3",
        durationAr: "الأسبوع 2–3",
      },
      {
        titleEn: "Compound content",
        titleAr: "محتوى تراكمي",
        descEn: "SEO pages + reviews + CRO tests shipped weekly. You approve topics on WhatsApp in minutes.",
        descAr: "صفحات سيو وتقييمات وتجارب تحويل كل أسبوع. وانت بتعتمد المواضيع على واتساب في دقايق.",
        durationEn: "Ongoing",
        durationAr: "مستمر",
      },
      {
        titleEn: "Scale or cut",
        titleAr: "كبّر أو اقطع",
        descEn: "Monthly: double what brings qualified leads, kill what doesn't, with numbers, no ego.",
        descAr: "شهرياً: ضاعف اللي بيجيب عملاء جادين واقطع اللي مبيجيبش، بالأرقام من غير عاطفة.",
        durationEn: "Monthly",
        durationAr: "شهرياً",
      },
    ],
    stats: [
      { value: "3x", labelEn: "qualified leads, same budget", labelAr: "عملاء جادين بنفس الميزانية" },
      { value: "<5 min", labelEn: "first response target", labelAr: "مستهدف أول رد" },
      { value: "20", labelEn: "Arabic pages that rank", labelAr: "صفحة عربي بتتصدر" },
    ],
    faq: [
      {
        qEn: "Do you run the ads for us monthly?",
        aEn: "Yes, retainers start after the fix phase, but we won't take your money if tracking isn't ready. First we measure, then we spend. Minimum 3 months, because SEO and learning need time.",
        qAr: "بتمسكوا الإعلانات شهرياً؟",
        aAr: "أيوه، الباقات بتبدأ بعد مرحلة الإصلاح، ومش هناخد فلوسك لو القياس مش جاهز. الأول نقيس وبعدين نصرف. أقل مدة 3 شهور لأن السيو والتعلم محتاجين وقت.",
      },
      {
        qEn: "How fast will we see results?",
        aEn: "Tracking + response fixes: 2–3 weeks. SEO pages: 2–4 months. If anyone promises page one in a week in Arabic competitive niches, run.",
        qAr: "النتائج بعد قد إيه؟",
        aAr: "القياس وسرعة الرد: 2–3 أسابيع. صفحات السيو: 2–4 شهور. ولو حد وعدك صفحة أولى في أسبوع في مجال منافس بالعربي اجري.",
      },
      {
        qEn: "Who owns the ad accounts and data?",
        aEn: "You. Accounts, pixels, audiences created in your Business Manager. We get partner access. If we part ways, everything stays.",
        qAr: "مين بيملك الحسابات والداتا؟",
        aAr: "انت. الحسابات والبكسلات والجمهور في مدير أعمالك. وإحنا دخول شريك. ولو انفصلنا كل حاجة بتفضل معاك.",
      },
      {
        qEn: "Can you work with our in-house marketer?",
        aEn: "Happily, we train them on the dashboard and split work: we do technical + pages, they do daily posting. Shared WhatsApp group, no territory wars.",
        qAr: "ينفع تشتغلوا مع المسوق بتاعنا؟",
        aAr: "بكل سرور، بندربه على اللوحة وبنقسم الشغل: إحنا التقني والصفحات وهو النشر اليومي. جروب واتساب مشترك ومن غير حروب.",
      },
    ],
    relatedSectorsEn: ["E-Commerce", "Real Estate", "Medical & Clinics"],
    relatedSectorsAr: ["التجارة الإلكترونية", "العقارات", "الطب والعيادات"],
  },
  {
    slug: "hosting-cloud",
    id: "6",
    badgeEn: "Elite",
    badgeAr: "نخبة",
    priceEn: "From $450/mo",
    priceAr: "يبدأ من $450 شهرياً",
    priceUsd: 450,
    monthly: true,
    heroImage: "/hero-section.jpg",
    gallery: [
      "/business-sectors/corporate-websites.jpg",
      "/business-sectors/e-commerce.jpg",
      "/business-sectors/tourism-booking.jpg",
    ],
    videoPoster: "/hero-section.jpg",
    videoDurationEn: "2:20 min, what zero-downtime actually means",
    videoDurationAr: "دقيقتان و20 ثانية، يعني إيه بدون توقف فعلاً",
    stack: ["AWS", "Vercel", "CloudFront CDN", "Daily Backups", "24/7 Monitoring"],
    nameEn: "Hosting, Cloud & Tech Support",
    nameAr: "الاستضافة والسحاب والدعم الفني",
    taglineEn: "Sleep well. If it breaks at 3am, we are already on it.",
    taglineAr: "نام مرتاح. لو حاجة وقعت 3 الفجر إحنا already شغالين عليها.",
    introEn:
      "Cheap shared hosting dies exactly when your campaign works. We move you to serverless + CDN with daily backups, uptime monitoring and a human who answers on WhatsApp, usually before you notice.",
    introAr:
      "الاستضافة الرخيصة المشتركة بتقع بالظبط لما الحملة تنجح. إحنا بننقلك لسيرفرless مع شبكة توزيع ونسخ يومي ومراقبة وإنسان بيرد على واتساب، غالباً قبل ما تاخد بالك.",
    storyEn: [
      "Migration is boring and careful: full copy first, test on a private link for 3 days, switch DNS at low-traffic hour, keep the old host for 14 days as a parachute. A store migrated the night before Black Friday with us, zero downtime, and checkout stayed under 2 seconds at peak. The owner watched orders from his phone instead of refreshing panic.",
      "Support is not tickets into a void. You message on WhatsApp, we reply with what broke, what we did, and what prevents it next time, in Arabic or English, no 'kindly revert' templates. Monthly one-pager: uptime, speed, attacks blocked, backups tested.",
    ],
    storyAr: [
      "النقل ممل وبحذر: نسخة كاملة الأول، واختبار على لينك خاص 3 أيام، وتحويل الدومين في وقت هادي، ونسيب الاستضافة القديمة 14 يوم كبراشوت. متجر نقل معانا ليلة البلاك فرايدي، من غير ثانية توقف، والدفع فضل تحت ثانيتين في الذروة. صاحبه كان بيتفرج على الطلبات من موبايله بدل ما يحدّث بتوتر.",
      "والدعم مش تذاكر في الهوا. بتبعت واتساب، بنرد بإيه اللي باظ وعملنا إيه وهيتمنع إزاي المرة الجاية، عربي أو إنجليزي، من غير قوالب رسمية محفوظة. وتقرير شهري صفحة واحدة: وقت التشغيل والسرعة والهجمات المتصدية والنسخ المختبرة.",
    ],
    forWhoEn: [
      "Stores and booking sites that can't afford downtime",
      "Businesses whose developer disappeared with the passwords",
      "Teams tired of 'the site is down' surprises",
    ],
    forWhoAr: [
      "متاجر وحجوزات ميقدروش على التوقف",
      "بيزنس المبرمج اختفى بالباسوردات",
      "فرق زهقت من مفاجآت الموقع واقع",
    ],
    features: [
      {
        titleEn: "Migration without fear",
        titleAr: "نقل من غير خوف",
        descEn: "Zero-downtime move, SSL, emails preserved, rollback plan. You approve the test link first.",
        descAr: "نقل بدون توقف وشهادة وإيميلات محفوظة وخطة رجوع. وانت بتعتمد لينك الاختبار الأول.",
      },
      {
        titleEn: "Speed everywhere",
        titleAr: "سرعة في كل حتة",
        descEn: "CDN with Cairo / Dubai / Frankfurt edges, image optimization, cache rules per page type.",
        descAr: "شبكة توزيع بنقاط القاهرة ودبي وفرانكفورت وضغط صور وقواعد كاش حسب نوع الصفحة.",
      },
      {
        titleEn: "Backups you can restore",
        titleAr: "نسخ بتترجّع فعلاً",
        descEn: "Daily encrypted backups, 30-day retention, restore tested monthly, not 'we think it works'.",
        descAr: "نسخ يومية مشفرة 30 يوم واسترجاع متجرب شهرياً، مش على الله.",
      },
      {
        titleEn: "Security that blocks",
        titleAr: "حماية بتصد",
        descEn: "WAF, bot filtering, 2FA everywhere, updates within 48h of critical patches.",
        descAr: "جدار ناري وفلترة بوتات وتحقق بخطوتين وتحديثات في 48 ساعة من أي ثغرة حرجة.",
      },
      {
        titleEn: "WhatsApp support",
        titleAr: "دعم واتساب",
        descEn: "Real engineer, Arabic/English, average first reply under 30 minutes in working hours.",
        descAr: "مهندس حقيقي عربي/إنجليزي ومتوسط أول رد أقل من 30 دقيقة في ساعات العمل.",
      },
      {
        titleEn: "Monthly health page",
        titleAr: "صفحة صحة شهرية",
        descEn: "Uptime, speed trend, incidents and what we hardened. Forward it to your partner.",
        descAr: "وقت التشغيل واتجاه السرعة والأعطال واتقوّى إيه. ابعتها لشريكك.",
      },
    ],
    deliverablesEn: [
      "Cloud setup: serverless + CDN + SSL",
      "Migration + DNS + email continuity",
      "Daily backups + monitoring + alerts",
      "Security hardening + update routine",
      "WhatsApp support channel",
      "Monthly health report",
    ],
    deliverablesAr: [
      "إعداد سحابي: سيرفرless + توزيع + شهادة",
      "نقل + دومين + استمرار الإيميلات",
      "نسخ يومي + مراقبة + تنبيهات",
      "تقوية حماية + روتين تحديثات",
      "قناة دعم واتساب",
      "تقرير صحة شهري",
    ],
    steps: [
      {
        titleEn: "Audit & passwords",
        titleAr: "التدقيق والباسوردات",
        descEn: "We collect every login into your vault, find single points of failure and quote fixed.",
        descAr: "بنجمع كل الدخول في خزنتك وبنلاقي نقاط الفشل وبنسعّر ثابت.",
        durationEn: "Day 1–2",
        durationAr: "يوم 1–2",
      },
      {
        titleEn: "Clone & test",
        titleAr: "نسخة واختبار",
        descEn: "Full clone on new cloud, 3-day test: orders, emails, forms, speed from Cairo 4G.",
        descAr: "نسخة كاملة على السحاب الجديد و3 أيام اختبار: طلبات وإيميلات وفورم وسرعة من 4G القاهرة.",
        durationEn: "Days 3–5",
        durationAr: "يوم 3–5",
      },
      {
        titleEn: "Midnight switch",
        titleAr: "التحويل الهادي",
        descEn: "DNS flip at 2–4am Cairo time, watched live, old host kept 14 days.",
        descAr: "تحويل الدومين 2–4 الفجر بتوقيت القاهرة بمراقبة لايف والقديم بيفضل 14 يوم.",
        durationEn: "Day 6",
        durationAr: "يوم 6",
      },
      {
        titleEn: "Watch & harden",
        titleAr: "مراقبة وتقوية",
        descEn: "30-day watch, cache tuning, backup restore drill. Then routine monthly care.",
        descAr: "30 يوم مراقبة وتظبيط كاش وتجربة استرجاع. وبعدين رعاية شهرية روتينية.",
        durationEn: "Days 7–30",
        durationAr: "يوم 7–30",
      },
    ],
    stats: [
      { value: "99.9%", labelEn: "uptime target", labelAr: "مستهدف التشغيل" },
      { value: "<30 min", labelEn: "first reply in hours", labelAr: "أول رد في ساعات العمل" },
      { value: "30 days", labelEn: "backup retention", labelAr: "احتفاظ بالنسخ" },
    ],
    faq: [
      {
        qEn: "Will our emails stop during migration?",
        aEn: "No. Mail records move first and get tested separately. In 40+ migrations we haven't lost a single inbox, your old host stays live until you confirm every mailbox.",
        qAr: "الإيميلات هتقف أثناء النقل؟",
        aAr: "لأ. سجلات الميل بتتنقل الأول وتتجرّب لوحدها. في أكتر من 40 نقل مفقدناش ولا صندوق، والاستضافة القديمة بتفضل شغالة لحد ما تأكد كل الصناديق.",
      },
      {
        qEn: "What if our site was built by someone else?",
        aEn: "Most of our care clients are exactly that. We audit, document passwords properly, and stabilize. If the code is a disaster we will tell you the honest rebuild cost instead of patching forever.",
        qAr: "لو الموقع معمول عند حد تاني؟",
        aAr: "أغلب عملاء الرعاية كده أصلاً. بندقق ونوثق الباسوردات صح ونثبّت الدنيا. ولو الكود كارثة هنقولك تكلفة إعادة البناء بأمانة بدل ترقيع للأبد.",
      },
      {
        qEn: "Do you offer contracts or pay-as-you-go?",
        aEn: "Monthly rolling after the first 3 months, cancel with 30 days notice, keep everything. No hostage domains or mystery fees.",
        qAr: "في عقود ولا دفع مرن؟",
        aAr: "شهري متجدد بعد أول 3 شهور، إلغاء بإخطار 30 يوم وكل حاجة بتفضل معاك. مفيش دومينات رهينة ولا رسوم غامضة.",
      },
      {
        qEn: "Who do we call at 2am?",
        aEn: "WhatsApp the care number, critical (site down / checkout broken) pages the on-call engineer 24/7. Non-critical waits till 9am Cairo time. We define critical together on day one.",
        qAr: "نكلم مين 2 بالليل؟",
        aAr: "واتساب رقم الرعاية، الحرج (الموقع واقع / الدفع بايظ) بيوصل لمهندس المناوبة 24/7. وغير الحرج بيستنى 9 الصبح بتوقيت القاهرة. وبنعرف الحرج مع بعض من أول يوم.",
      },
    ],
    relatedSectorsEn: ["E-Commerce", "Tourism & Booking", "Corporate Websites"],
    relatedSectorsAr: ["التجارة الإلكترونية", "السياحة والحجوزات", "مواقع الشركات"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}
