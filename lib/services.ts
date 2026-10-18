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
  valueAr?: string;
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
    videoDurationAr: "دقيقتان و40 ثانية عن رسم الهوية",
    stack: ["Figma", "Illustrator", "After Effects", "Brand Guidelines PDF", "SVG System"],
    nameEn: "Brand Identity & Creative Design",
    nameAr: "الهوية البصرية والتصميم الإبداعي",
    taglineEn: "A logo is not a brand. We build the whole system behind it.",
    taglineAr: "الشعار وحده ليس علامة. نبني المنظومة الكاملة خلفه.",
    introEn:
      "Most clients come to us with a logo made in a hurry, stretched on a billboard, pixelated on Instagram, different color every time. We fix that from the root: strategy first, then a visual system you can actually use every day without calling a designer.",
    introAr:
      "يصلنا معظم العملاء بشعار أُعد على عجل: ممدود على لافتة، ومبكسل على إنستجرام، وبلون مختلف في كل مرة. نعالج ذلك من الجذور: نبدأ بفهم النشاط والجمهور، ثم نبني نظاما بصريا تستخدمه كل يوم دون الحاجة إلى مصمم بجانبك.",
    storyEn: [
      "We start on paper, literally. In the first workshop we sketch 40–60 rough directions with you, no polished mockups yet. It feels messy, and that is the point. By the end of day two, we usually kill 90% of them and keep the two directions that actually feel like you.",
      "Then we build. Typography, color palette with real usage rules (not just hex codes), icon style, photography direction, and templates for the stuff you post daily: price lists, stories, invoices, packaging. One restaurant client in Cairo told us his delivery packaging finally looked the same as his storefront, that is when it clicked for him.",
    ],
    storyAr: [
      "نبدأ على الورق فعلا. في الورشة الأولى نرسم معك من 40 إلى 60 اتجاها مبدئيا دون أي تجميل. يبدو الأمر فوضويا، وهذا هو المقصود. مع نهاية اليوم الثاني نستبعد 90% منها ونُبقي الاتجاهين اللذين يشبهانك فعلا.",
      "ثم نبني. خطوط، وألوان بقواعد استخدام حقيقية لا مجرد رموز، وأسلوب أيقونات، واتجاه تصوير، وقوالب لما تنشره يوميا: القائمة، والقصص، والفواتير، والتغليف. قال لنا عميل مطعم في القاهرة إن علب التوصيل أصبحت تشبه المحل تماما، حينها أدرك قيمة الأمر.",
    ],
    forWhoEn: [
      "New businesses starting from zero and need everything",
      "Existing brands whose logo and social look like two different companies",
      "Restaurants, clinics, real estate and shops that print and package daily",
    ],
    forWhoAr: [
      "مشروع جديد يبدأ من الصفر ويحتاج إلى كل شيء",
      "علامة قائمة لكن شعارها شيء وحضورها الاجتماعي شيء آخر تماما",
      "مطاعم وعيادات وعقارات ومتاجر تطبع وتغلّف يوميا",
    ],
    features: [
      {
        titleEn: "Strategy before pixels",
        titleAr: "الاستراتيجية قبل الألوان",
        descEn: "One-page positioning: who you serve, why you are different, how you sound. We write it with you so the design has something to stand on.",
        descAr: "صفحة واحدة تحدد التموضع: من تخدم، وبمَ تختلف، وكيف تتحدث. نكتبها معك ليستند التصميم إلى أساس صلب.",
      },
      {
        titleEn: "Logo system, not a single file",
        titleAr: "منظومة شعار لا ملف واحد",
        descEn: "Primary, secondary and icon versions + clear-space and minimum-size rules. Works on a favicon and on a truck.",
        descAr: "نسخة أساسية وثانوية وأيقونة، مع قواعد المساحة والحد الأدنى للحجم. تعمل على أيقونة الموقع وعلى شاحنة.",
      },
      {
        titleEn: "Arabic + Latin typography",
        titleAr: "خطوط عربية ولاتينية معا",
        descEn: "We pair fonts that actually match in weight and mood, Alexandria / Inter is our default, so your Arabic never looks like an afterthought.",
        descAr: "نركّب خطوطا يتطابق وزنها وروحها، وغالبا أليكساندريا مع إنتر، حتى لا تبدو العربية ملحقة في النهاية.",
      },
      {
        titleEn: "Daily-use templates",
        titleAr: "قوالب للعمل اليومي",
        descEn: "Menu, price list, story covers, invoice header, packaging die-lines. You edit text in Figma or Canva without breaking the design.",
        descAr: "قائمة، وقائمة أسعار، وأغلفة قصص، وترويسة فواتير، ومقاسات تغليف. تغيّر النص بنفسك دون أن تُفسد التصميم.",
      },
      {
        titleEn: "Brand book you will open",
        titleAr: "كتيب ستفتحه فعلا",
        descEn: "30–50 pages, no fluff. Do / don't examples with your real photos, not stock. New employees understand it in one sitting.",
        descAr: "من 30 إلى 50 صفحة دون حشو. أمثلة للصواب والخطأ بصورك الحقيقية لا الجاهزة. أي موظف جديد يفهمه من جلسة واحدة.",
      },
      {
        titleEn: "Launch kit",
        titleAr: "عدة الإطلاق",
        descEn: "Profile pictures, covers, opening-post designs and a short motion intro so day one looks intentional.",
        descAr: "صور الملف الشخصي وأغلفة ومنشورات الافتتاح وفيديو تعريفي قصير، ليبدو اليوم الأول مقصودا لا مرتجلا.",
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
      "منظومة الشعار: إس في جي وبي دي إف وبي إن جي وأيقونة موقع ونسخ أحادية اللون",
      "نظام الألوان والخطوط مع قواعد الاستخدام",
      "مجموعة أيقونات (20–30) مع نقشة أو خامة خاصة",
      "كتيب الهوية بي دي إف من 30 إلى 50 صفحة",
      "قوالب التواصل الاجتماعي والمطبوعات (فيجما وكانفا)",
      "مقدمة موشن 5–8 ثوانٍ للريلز والموقع",
    ],
    steps: [
      {
        titleEn: "Workshop & direction",
        titleAr: "ورشة وتحديد الاتجاه",
        descEn: "Half-day with you: audience, competitors, references. We sketch live and agree on 2 directions.",
        descAr: "نصف يوم معك: الجمهور والمنافسون وأمثلة تعجبك. نرسم مباشرة ونتفق على اتجاهين.",
        durationEn: "Week 1",
        durationAr: "الأسبوع 1",
      },
      {
        titleEn: "Design & iteration",
        titleAr: "التصميم والتعديل",
        descEn: "Two revision rounds with real applications, your menu, your storefront photo, not lorem ipsum.",
        descAr: "جولتا تعديل بتطبيقات حقيقية: قائمتك وصورة محلك، لا نصوصا تجريبية.",
        durationEn: "Weeks 2–3",
        durationAr: "الأسبوع 2–3",
      },
      {
        titleEn: "System & templates",
        titleAr: "النظام والقوالب",
        descEn: "We build the full kit and test it: print one box, post three stories, print one invoice.",
        descAr: "نبني العدة كاملة ونجربها: نطبع علبة، وننشر 3 قصص، ونطبع فاتورة.",
        durationEn: "Week 4",
        durationAr: "الأسبوع 4",
      },
      {
        titleEn: "Handover & launch",
        titleAr: "التسليم والإطلاق",
        descEn: "Recorded walkthrough + organized files. We stay 14 days after launch for small fixes.",
        descAr: "شرح مسجّل وملفات مرتبة. ونبقى معك 14 يوما بعد الإطلاق لأي تعديل صغير.",
        durationEn: "Week 5",
        durationAr: "الأسبوع 5",
      },
    ],
    stats: [
      { value: "60+", labelEn: "identities shipped", labelAr: "هوية تم تسليمها" },
      { value: "5 wks", labelEn: "average timeline", labelAr: "متوسط المدة" },
      { value: "14 days", labelEn: "free post-launch tweaks", labelAr: "تعديلات مجانية بعد الإطلاق" },
    ],
    faq: [
      {
        qEn: "We already have a logo. Can you just fix it?",
        aEn: "Yes, often we keep the name and redraw the mark, then build the system around it. If the current logo is truly unsalvageable we will tell you honestly in the workshop, we don't sell redesigns you don't need.",
        qAr: "لدينا شعار بالفعل. هل يمكن الاكتفاء بتعديله؟",
        aAr: "نعم، وغالبا نحتفظ بالاسم ونعيد رسم العلامة ثم نبني المنظومة حولها. وإن كان الشعار الحالي لا أمل فيه سنخبرك بصراحة في الورشة، فنحن لا نبيع إعادة تصميم لا تحتاجها.",
      },
      {
        qEn: "Do you handle printing and packaging production?",
        aEn: "We prepare print-ready files and talk to your printer directly. In Egypt we work with 3 printers we trust; outside Egypt we supervise remotely with proofs before mass printing.",
        qAr: "هل تتابعون الطباعة والتغليف؟",
        aAr: "نجهز ملفات جاهزة للطباعة ونتحدث مع المطبعة مباشرة. في مصر نتعامل مع 3 مطابع نثق بها، وخارج مصر نتابع عن بُعد بالبروفات قبل طباعة الكمية.",
      },
      {
        qEn: "Will our Arabic look as good as the English?",
        aEn: "That is the whole point of our pairing method. We test headlines in both languages side by side, if the Arabic feels weaker, we change the font pairing, not just the size.",
        qAr: "هل ستبدو العربية بجودة الإنجليزية؟",
        aAr: "هذا هو أساس عملنا. نجرب العناوين باللغتين جنبا إلى جنب، وإن بدت العربية أضعف نغيّر تركيبة الخطوط نفسها لا المقاس فقط.",
      },
      {
        qEn: "What if we don't like any direction?",
        aEn: "Hasn't happened yet, because we sketch with you in the room. But the contract includes a full re-direction once, we restart the sketch phase instead of patching something you hate.",
        qAr: "ماذا إن لم يعجبنا أي اتجاه؟",
        aAr: "لم يحدث من قبل لأننا نرسم وأنت معنا. لكن العقد يتضمن إعادة توجيه كاملة مرة واحدة، نبدأ مرحلة الرسم من جديد بدل ترقيع ما لا يعجبك.",
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
    videoDurationAr: "3 دقائق، من التصميم إلى سرعة 90+",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Headless CMS", "Vercel / AWS"],
    nameEn: "Websites & Digital Platforms",
    nameAr: "المواقع والمنصات الرقمية",
    taglineEn: "Fast, bilingual, and easy to edit, without calling us for every comma.",
    taglineAr: "سريع، ثنائي اللغة، وتعدّله بنفسك دون الاتصال بنا عند كل فاصلة.",
    introEn:
      "Your website has two jobs: load instantly and make the visitor act. Most agency sites fail the first and decorate the second. We build Next.js sites that open in under 1.5 seconds on a mid-range phone in Cairo, with an edit panel your team will actually use.",
    introAr:
      "لموقعك مهمتان: أن يفتح فورا وأن يدفع الزائر لاتخاذ خطوة. معظم مواقع الشركات تفشل في الأولى وتجمّل الثانية. نبني مواقع نكست.جي إس تفتح في أقل من 1.5 ثانية على هاتف متوسط في القاهرة، مع لوحة تحكم سيستخدمها فريقك فعلا.",
    storyEn: [
      "We design desktop and mobile at the same time, mobile first is not a slogan here, 70% of your traffic is a phone. Every page gets a real Arabic version, not a mirrored copy with broken numbers and dates. Phone numbers stay LTR, prices format correctly, forms validate Arabic names without complaining.",
      "Under the hood it is boring on purpose: static generation where possible, images compressed to AVIF/WebP, zero heavy page-builders. A tourism client went from a 9-second WordPress homepage to 1.1 seconds, same photos, same text. Bookings from mobile doubled in two months. That was the speed, not a redesign trick.",
    ],
    storyAr: [
      "نصمم لسطح المكتب والجوال معا، فالجوال أولا ليس مجرد شعار: 70% من زياراتك من الهاتف. وكل صفحة تحصل على نسخة عربية حقيقية لا نسخة معكوسة مكسورة الأرقام والتواريخ. تبقى أرقام الهواتف من اليسار إلى اليمين، وتُكتب الأسعار بصيغة صحيحة، ويقبل النموذج الأسماء العربية دون اعتراض.",
      "ومن الداخل ممل عن قصد: توليد ثابت حيث أمكن، وصور مضغوطة أفيف/ويب بي، ودون إضافات ثقيلة. انتقل عميل سياحة من صفحة ووردبريس تفتح في 9 ثوانٍ إلى 1.1 ثانية، بالصور والنصوص نفسها. تضاعفت حجوزات الجوال في شهرين. كانت تلك هي السرعة لا حيلة تصميم.",
    ],
    forWhoEn: [
      "Companies whose current site is slow or embarrassing on mobile",
      "Tourism, real estate, clinics needing booking / lead forms",
      "Teams that want to edit content without a developer",
    ],
    forWhoAr: [
      "شركات موقعها الحالي بطيء أو محرج على الجوال",
      "سياحة وعقارات وعيادات تحتاج حجزا أو نماذج عملاء",
      "فرق تريد تعديل المحتوى دون مبرمج",
    ],
    features: [
      {
        titleEn: "Sub-second mindset",
        titleAr: "عقلية ما دون الثانية",
        descEn: "90+ PageSpeed on mobile is in the contract. We show you the score on your actual phone before launch.",
        descAr: "سرعة 90+ على الجوال مكتوبة في العقد. ونريك النتيجة على هاتفك أنت قبل الإطلاق.",
      },
      {
        titleEn: "Real bilingual build",
        titleAr: "لغتان حقيقيتان لا ترجمة آلية",
        descEn: "Separate Arabic typesetting, RTL layout mirroring, Eastern vs Western numerals per section. You control both versions.",
        descAr: "تنسيق عربي مستقل، وعكس كامل للاتجاه، وأرقام مشرقية أو غربية حسب القسم. وتتحكم في النسختين.",
      },
      {
        titleEn: "CMS your staff gets",
        titleAr: "لوحة تحكم يفهمها فريقك",
        descEn: "Headless CMS with Arabic labels. Add a room, a doctor, a property in 3 minutes. Recorded training included.",
        descAr: "نظام محتوى بتسميات عربية. تضيف غرفة أو طبيبا أو عقارا في 3 دقائق. ومعه شرح مسجّل.",
      },
      {
        titleEn: "SEO baked in",
        titleAr: "سيو مبني في الداخل",
        descEn: "Arabic slugs, meta in both languages, sitemap, schema for business / FAQ / booking. No plugin soup.",
        descAr: "روابط عربية، وبيانات وصفية باللغتين، وخريطة موقع، وبيانات منظمة للنشاط والأسئلة والحجز. دون إضافات مربكة.",
      },
      {
        titleEn: "Forms that reach you",
        titleAr: "نماذج تصلك فعلا",
        descEn: "WhatsApp + email + sheet notifications, spam-filtered, with auto-reply in the visitor's language.",
        descAr: "تنبيه واتساب وبريد وجدول، بفلتر ضد الرسائل المزعجة، ورد تلقائي بلغة الزائر.",
      },
      {
        titleEn: "Analytics you read",
        titleAr: "تحليلات ستقرؤها",
        descEn: "Simple dashboard: where visitors came from, which button they pressed, which page lost them. Monthly 15-min review call.",
        descAr: "لوحة بسيطة: من أين جاء الزوار، وأي زر ضغطوا، وأي صفحة فقدتهم. ومكالمة مراجعة 15 دقيقة كل شهر.",
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
      "موقع نكست.جي إس من 8 إلى 20 صفحة بالعربية والإنجليزية",
      "نظام محتوى مع فيديوهي شرح",
      "مسارات حجز وعروض أسعار وتواصل مربوطة بواتساب",
      "تهيئة سيو مع جوجل بيزنس وسيرش كونسول",
      "تقرير سرعة مع شهر لإصلاح الأخطاء",
      "ملف تسليم مع دليل استضافة",
    ],
    steps: [
      {
        titleEn: "Sitemap & copy",
        titleAr: "الخريطة والمحتوى",
        descEn: "We map every page and write first-draft Arabic + English with you. No design before words.",
        descAr: "نرسم خريطة كل صفحة ونكتب مسودة عربية وإنجليزية معك. لا تصميم قبل الكلمات.",
        durationEn: "Week 1",
        durationAr: "الأسبوع 1",
      },
      {
        titleEn: "Design in browser",
        titleAr: "التصميم على المتصفح",
        descEn: "You click a real staging link on your phone from week 2, not screenshots.",
        descAr: "تضغط على رابط تجريبي حقيقي من هاتفك بدءا من الأسبوع الثاني، لا لقطات شاشة.",
        durationEn: "Weeks 2–3",
        durationAr: "الأسبوع 2–3",
      },
      {
        titleEn: "Build & CMS",
        titleAr: "البرمجة ولوحة التحكم",
        descEn: "Development + CMS + forms + SEO. You add 3 real items yourself to test it.",
        descAr: "برمجة ومحتوى ونماذج وسيو. وتضيف بنفسك 3 عناصر حقيقية لتجربتها.",
        durationEn: "Weeks 3–5",
        durationAr: "الأسبوع 3–5",
      },
      {
        titleEn: "Speed & launch",
        titleAr: "السرعة والإطلاق",
        descEn: "PageSpeed, domain, SSL, backups, analytics. Launch on a Tuesday morning, never Friday night.",
        descAr: "السرعة والنطاق والشهادة والنسخ والتحليلات. الإطلاق صباح الثلاثاء، وليس ليلة الجمعة أبدا.",
        durationEn: "Week 6",
        durationAr: "الأسبوع 6",
      },
    ],
    stats: [
      { value: "1.2s", labelEn: "median mobile load", labelAr: "متوسط التحميل على الجوال" },
      { value: "2x", labelEn: "mobile inquiries after rebuild", labelAr: "ضعف استفسارات الجوال بعد إعادة البناء" },
      { value: "AR+EN", valueAr: "عربي وإنجليزي", labelEn: "every page, both ways", labelAr: "كل صفحة باللغتين" },
    ],
    faq: [
      {
        qEn: "Can we keep our WordPress and just redesign?",
        aEn: "If your WordPress is fast and clean, yes, we'll theme it. But if it has 30 plugins and a 9-second load, we'll show you the test and recommend a rebuild. We won't decorate a slow foundation.",
        qAr: "هل يمكن الإبقاء على ووردبريس مع تغيير الشكل فقط؟",
        aAr: "إن كان ووردبريس لديك سريعا ونظيفا، نعم نصمم له قالبا. أما إن كان عليه 30 إضافة ويفتح في 9 ثوانٍ فسنريك الاختبار ونوصي بإعادة البناء. لن نجمّل أساسا بطيئا.",
      },
      {
        qEn: "Who writes the Arabic content?",
        aEn: "We write the first draft from your voice notes and old brochures, you correct the tone. Final approval is always yours, we don't publish Arabic we haven't read out loud.",
        qAr: "من يكتب المحتوى العربي؟",
        aAr: "نكتب المسودة الأولى من رسائلك الصوتية وكتيباتك القديمة وتصحح أنت النبرة. الاعتماد النهائي لك دائما، فلا ننشر عربية لم نقرأها بصوت عالٍ.",
      },
      {
        qEn: "What happens if we need a new page later?",
        aEn: "You build it from blocks in the CMS, hero, gallery, form, FAQ. If you want something custom, small pages are a fixed $250–$600, quoted before we touch code.",
        qAr: "ماذا لو احتجنا صفحة جديدة لاحقا؟",
        aAr: "تبنيها بنفسك من مكعبات: عنوان وصور ونموذج وأسئلة. وإن أردت شيئا مخصصا، فالصفحات الصغيرة بسعر ثابت 250–600 دولار نتفق عليه قبل لمس الشيفرة.",
      },
      {
        qEn: "Do you take care of domain and hosting?",
        aEn: "Yes. We move or buy the domain in your account (never ours), set SSL, daily backups and uptime monitoring. You own everything.",
        qAr: "هل تتولون النطاق والاستضافة؟",
        aAr: "نعم. ننقل النطاق أو نشتريه في حسابك أنت وليس حسابنا أبدا، ونضبط الشهادة والنسخ اليومي والمراقبة. كل شيء ملكك.",
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
    videoDurationAr: "4 دقائق، شيفرة واحدة لآيفون وأندرويد",
    stack: ["React Native", "Expo", "TypeScript", "Supabase / Firebase", "Push + Offline"],
    nameEn: "Mobile Apps & SaaS Products",
    nameAr: "تطبيقات الجوال ومنتجات ساس",
    taglineEn: "One team, one codebase, both stores, built for daily use, not demos.",
    taglineAr: "فريق واحد وشيفرة واحدة للمتجرين، مبني للاستخدام اليومي لا للعرض.",
    introEn:
      "An app that crashes on a delivery driver's old Android is a failed app. We build React Native apps with offline-first logic, real Arabic input handling, and push notifications people don't mute, then we stay through store review hell with you.",
    introAr:
      "التطبيق الذي يتعطل على هاتف توصيل قديم تطبيق فاشل. نبني تطبيقات ريأكت نيتف تعمل دون اتصال أولا، وتتعامل مع العربية بشكل صحيح، وإشعاراتها لا يكتمها المستخدمون، ونبقى معك في صعوبة مراجعة المتاجر حتى النشر.",
    storyEn: [
      "We prototype in week one on your actual phones, TestFlight and APK, not a Figma mirror. A restaurant owner tapped through his ordering flow while standing in his own kitchen and found three steps his staff would never do. We cut them the same day. That only happens with a real build in hand.",
      "For SaaS we think in subscriptions from day one: roles, limits, invoices in Arabic and English, grace periods when cards fail. One education client sells monthly plans to parents, failed payments retry quietly and the kid never gets locked out mid-lesson. Details like that are the product.",
    ],
    storyAr: [
      "نصنع نموذجا يعمل من الأسبوع الأول على هواتفكم الحقيقية: تست فلايت وإيه بي كيه لا صورة فيجما. جرّب صاحب مطعم دورة الطلب وهو واقف في مطبخه فوجد 3 خطوات لن ينفذها الموظفون أبدا. أزلناها في اليوم نفسه. وهذا لا يحدث إلا حين تمسك نسخة عاملة بيدك.",
      "وفي منتجات الاشتراكات نفكر في الإيرادات من اليوم الأول: صلاحيات وحدود وفواتير عربية وإنجليزية وفترة سماح عند فشل البطاقة. عميل تعليم يبيع اشتراكات شهرية لأولياء الأمور، فالدفع الفاشل يُحاوَل بصمت والطفل لا يُحرم من الحصة أبدا. تفاصيل كهذه هي المنتج.",
    ],
    forWhoEn: [
      "Restaurants, clinics, gyms needing ordering / booking apps",
      "Startups validating an MVP in 6–8 weeks",
      "Businesses turning an Excel + WhatsApp mess into a product",
    ],
    forWhoAr: [
      "مطاعم وعيادات وصالات رياضية تحتاج تطبيق طلب أو حجز",
      "شركات ناشئة تختبر إم في بي في 6–8 أسابيع",
      "أنشطة تحوّل فوضى الإكسل والواتساب إلى منتج",
    ],
    features: [
      {
        titleEn: "Offline-first",
        titleAr: "دون اتصال أولا",
        descEn: "Orders and forms save on the device and sync when the network returns. No 'no internet' dead-ends.",
        descAr: "تُحفظ الطلبات والنماذج على الجهاز وتُرسل عندما تعود الشبكة. لا طريق مسدود بسبب انقطاع الإنترنت.",
      },
      {
        titleEn: "Arabic that works",
        titleAr: "عربية تعمل فعلا",
        descEn: "RTL layouts, Arabic search that ignores hamza differences, Hijri + Gregorian dates where needed.",
        descAr: "واجهات معكوسة بدقة، وبحث عربي يتجاهل فروق الهمزات، وتواريخ هجرية وميلادية حسب الحاجة.",
      },
      {
        titleEn: "Push people open",
        titleAr: "إشعارات تُفتح",
        descEn: "Segmented by behavior and language, quiet hours respected, deep-linked to the exact screen.",
        descAr: "مقسمة حسب السلوك واللغة، تحترم ساعات الراحة، وتفتح على الشاشة نفسها تماما.",
      },
      {
        titleEn: "Roles & payments",
        titleAr: "صلاحيات ومدفوعات",
        descEn: "Admin / staff / customer roles, subscriptions, Egyptian + Gulf payment gateways (Paymob, Moyasar, Stripe).",
        descAr: "أدوار مدير وموظف وعميل، واشتراكات، وبوابات دفع مصرية وخليجية (باي موب وميسر وسترايب).",
      },
      {
        titleEn: "Store paperwork handled",
        titleAr: "أوراق المتاجر علينا",
        descEn: "Privacy policy, screenshots in both languages, review responses. We have been rejected, we know the drill.",
        descAr: "سياسة الخصوصية ولقطات الشاشة باللغتين والرد على المراجعة. رُفضنا من قبل، ونعرف الطريق.",
      },
      {
        titleEn: "Crash-free promise",
        titleAr: "وعد الثبات",
        descEn: "99%+ crash-free monitored with Sentry. If a release breaks checkout, we hotfix within 24 hours.",
        descAr: "ثبات 99%+ تحت المراقبة. إن كسرت نسخةٌ الدفع أصلحناها خلال 24 ساعة.",
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
      "تطبيق آيفون وأندرويد من شيفرة واحدة",
      "لوحة تحكم للطلبات والمستخدمين والمحتوى",
      "إشعارات وعمل دون اتصال ودفع ودخول (جوال مع آبل/جوجل)",
      "صفحات المتاجر بالعربية والإنجليزية مع صور",
      "تحليلات ومراقبة أعطال مربوطة",
      "شهران للإصلاح بعد الإطلاق",
    ],
    steps: [
      {
        titleEn: "Clickable MVP",
        titleAr: "نموذج قابل للمس",
        descEn: "Core 3–5 flows on real phones. You test with 5 real users, not us.",
        descAr: "أهم 3–5 مسارات على هواتف حقيقية. وتجرب أنت مع 5 مستخدمين حقيقيين لا نحن.",
        durationEn: "Weeks 1–2",
        durationAr: "الأسبوع 1–2",
      },
      {
        titleEn: "Full build",
        titleAr: "البناء الكامل",
        descEn: "Weekly TestFlight/APK drops. Every Friday you hold the progress in your hand.",
        descAr: "نسخة تجريبية كل أسبوع. كل يوم جمعة يكون التقدم بين يديك.",
        durationEn: "Weeks 3–6",
        durationAr: "الأسبوع 3–6",
      },
      {
        titleEn: "Payments & polish",
        titleAr: "الدفع والتلميع",
        descEn: "Real-money sandbox tests, Arabic edge cases, battery and data usage checks.",
        descAr: "تجارب دفع بأموال حقيقية في بيئة تجريبية، وحالات عربية صعبة، واختبار البطارية والبيانات.",
        durationEn: "Week 7",
        durationAr: "الأسبوع 7",
      },
      {
        titleEn: "Launch & iterate",
        titleAr: "الإطلاق والتحسين",
        descEn: "Phased rollout 10% → 100%, crash watch, first feature update in 30 days.",
        descAr: "إطلاق تدريجي من 10% إلى 100%، ومراقبة أعطال، وأول تحديث مزايا خلال 30 يوما.",
        durationEn: "Week 8+",
        durationAr: "الأسبوع 8+",
      },
    ],
    stats: [
      { value: "6–8 wks", labelEn: "to MVP on both stores", labelAr: "لنسخة إم في بي على المتجرين" },
      { value: "99%+", labelEn: "crash-free sessions", labelAr: "جلسات دون أعطال" },
      { value: "1 code", labelEn: "for iOS + Android", labelAr: "شيفرة واحدة للمتجرين" },
    ],
    faq: [
      {
        qEn: "React Native or native Swift/Kotlin?",
        aEn: "For 95% of business apps, React Native is faster and cheaper to maintain. If you need heavy Bluetooth, video editing or 3D, we'll tell you to go native, we've done both.",
        qAr: "ريأكت نيتف أم سويفت/كوتلن الأصلية؟",
        aAr: "لـ 95% من تطبيقات الأعمال ريأكت نيتف أسرع وأرخص في الصيانة. وإن احتجت بلوتوث ثقيلا أو مونتاج فيديو أو تصميما ثلاثي الأبعاد سنقول لك اتجه للأصلية، فقد عملنا بالاثنين.",
      },
      {
        qEn: "How do updates work after launch?",
        aEn: "Small fixes go over-the-air instantly. Big features go through the stores (1–3 days review). We bundle a monthly update hour-block so costs stay predictable.",
        qAr: "كيف تسير التحديثات بعد الإطلاق؟",
        aAr: "الإصلاحات الصغيرة تنزل فورا دون متجر. والمزايا الكبيرة تمر عبر مراجعة المتاجر (1–3 أيام). ولدينا باقة ساعات شهرية لتبقى التكلفة متوقعة.",
      },
      {
        qEn: "Can the app work with poor internet?",
        aEn: "Yes, that is our default. Drivers, reps and clinics in areas with weak signal keep working; everything syncs later with conflict rules we agree on upfront.",
        qAr: "هل يعمل التطبيق مع إنترنت ضعيف؟",
        aAr: "نعم، هذا هو الافتراضي لدينا. السائقون والمناديب والعيادات في أماكن الشبكة الضعيفة يواصلون العمل، وكل شيء يتزامن لاحقا بقواعد متفق عليها من البداية.",
      },
      {
        qEn: "Do you sign NDAs and who owns the code?",
        aEn: "NDA before the first call if you want. Code, accounts and certificates live in your GitHub / Apple / Google accounts from day one. You own 100%.",
        qAr: "هل توقعون اتفاقية عدم إفصاح ولمن ملكية الشيفرة؟",
        aAr: "نوقع قبل المكالمة الأولى إن أردت. الشيفرة والحسابات والشهادات في حساباتك أنت من اليوم الأول. الملكية 100% لك.",
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
    videoDurationAr: "3 دقائق ونصف، من فوضى الواتساب إلى لوحة واحدة",
    stack: ["Next.js", "PostgreSQL", "Supabase", "Role Permissions", "Audit Log"],
    nameEn: "Business Systems & Dashboards",
    nameAr: "أنظمة التشغيل والداشبورد",
    taglineEn: "Stop running your company from 40 WhatsApp groups.",
    taglineAr: "توقف عن إدارة شركتك من 40 مجموعة واتساب.",
    introEn:
      "Leads in one phone, bookings in a notebook, follow-ups forgotten. We replace that with one system: requests, clients, bookings, tasks and reports, in Arabic your team reads, with permissions so staff see only their work.",
    introAr:
      "عملاء في هاتف، وحجوزات في دفتر، ومتابعات منسية. نستبدل ذلك بنظام واحد: طلبات وعملاء وحجوزات ومهام وتقارير، بعربية يقرؤها فريقك، وبصلاحيات لا يرى معها كل موظف إلا عمله.",
    storyEn: [
      "We shadow your team for a day, sit next to the receptionist, ride with the sales rep. A clinic we worked with had three notebooks for the same appointments. We didn't digitize the notebooks; we deleted two of them and built one booking flow with SMS reminders. No-shows dropped 40%.",
      "The dashboard is deliberately boring: today's work on top, overdue in red, money collected this week. Owners check it with morning coffee. Staff get WhatsApp reminders instead of logins they forget. Adoption beats features, we cut scope to what gets used daily.",
    ],
    storyAr: [
      "نرافق فريقك يوما كاملا: نجلس بجانب موظفة الاستقبال ونرافق المندوب في جولته. عيادة عملنا معها كانت لديها 3 دفاتر للحجوزات نفسها. لم نرقمن الدفاتر، بل ألغينا اثنين منها وبنينا مسار حجز واحدا برسائل تذكير. انخفض عدم الحضور 40%.",
      "ولوحة التحكم مملة عن قصد: عمل اليوم في الأعلى، والمتأخر بالأحمر، والمحصّل هذا الأسبوع. يطالعها صاحب النشاط مع قهوة الصباح. ويصل الموظفين تذكير واتساب بدل كلمات سر ينسونها. الاستخدام يغلب المزايا، فنحذف كل ما لن يُفتح يوميا.",
    ],
    forWhoEn: [
      "Clinics, tourism, real estate drowning in messages",
      "Schools and academies tracking students + payments",
      "Any team over 5 people with no single source of truth",
    ],
    forWhoAr: [
      "عيادات وسياحة وعقارات غارقة في الرسائل",
      "مدارس وأكاديميات تتابع الطلاب والمدفوعات",
      "أي فريق يزيد على 5 أفراد دون مرجع واحد للحقيقة",
    ],
    features: [
      {
        titleEn: "Requests in one inbox",
        titleAr: "الطلبات في صندوق واحد",
        descEn: "Website, WhatsApp, phone and walk-ins land in one queue with source, status and owner. Nothing falls between phones.",
        descAr: "الموقع والواتساب والهاتف والحضور تصل إلى قائمة واحدة بالمصدر والحالة والمسؤول. لا شيء يضيع بين الهواتف.",
      },
      {
        titleEn: "Booking without calls",
        titleAr: "حجز دون مكالمات",
        descEn: "Calendar with buffers, doctor/room/car resources, Arabic SMS + WhatsApp confirmations and reminders.",
        descAr: "تقويم بفواصل زمنية، وموارد طبيب وغرفة وسيارة، وتأكيد وتذكير عربي عبر الرسائل النصية وواتساب.",
      },
      {
        titleEn: "Money view",
        titleAr: "صورة الأموال",
        descEn: "Deposits, balances, refunds and daily closing. Owner sees cash vs bank vs pending in one row.",
        descAr: "عربون وأرصدة ومرتجعات وإغلاق يومي. يرى صاحب النشاط النقدي والبنكي والمعلق في سطر واحد.",
      },
      {
        titleEn: "Permissions that hold",
        titleAr: "صلاحيات متماسكة",
        descEn: "Receptionist can't delete payments. Accountant can't see HR notes. Every change logged with name and time.",
        descAr: "موظف الاستقبال لا يستطيع حذف مدفوعات. والمحاسب لا يرى ملاحظات الموارد البشرية. وكل تغيير مسجل بالاسم والوقت.",
      },
      {
        titleEn: "WhatsApp where it matters",
        titleAr: "واتساب حيث يلزم",
        descEn: "Customer gets booking + reminder + review link automatically. Staff get daily list at 8am.",
        descAr: "يصل العميلَ الحجزُ والتذكير ورابط التقييم تلقائيا. ويصل الموظفين قائمةُ الصباح في الثامنة.",
      },
      {
        titleEn: "Reports you forward",
        titleAr: "تقارير تُرسل",
        descEn: "Weekly PDF in Arabic to your WhatsApp: new vs returning, no-shows, collection. One page, no charts jungle.",
        descAr: "ملف أسبوعي عربي على واتسابك: جديد مقابل متكرر، وعدم حضور، وتحصيل. صفحة واحدة دون غابة رسوم.",
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
      "نظام ويب مع حسابات موظفين وصلاحيات",
      "وحدات حجز وعملاء ومخزون حسب الحاجة",
      "ربط واتساب والرسائل النصية والبريد",
      "تقارير عربية مع شاشة إغلاق يومي",
      "نقل البيانات من الإكسل والدفاتر",
      "تدريب حضوري أو مرئي مع دليل",
    ],
    steps: [
      {
        titleEn: "Shadow day",
        titleAr: "يوم معايشة",
        descEn: "We watch real work, count clicks and papers. Proposal lists what we will delete, not just build.",
        descAr: "نشاهد العمل الحقيقي ونحصي النقرات والأوراق. يذكر العرض ما سنحذفه لا ما سنبنيه فقط.",
        durationEn: "Week 1",
        durationAr: "الأسبوع 1",
      },
      {
        titleEn: "Prototype with your data",
        titleAr: "نموذج ببياناتك",
        descEn: "Your 50 real clients loaded in. If the receptionist can't book in under 60 seconds, we redesign.",
        descAr: "نحمّل 50 عميلا حقيقيا من عملائك. إن لم تستطع موظفة الاستقبال الحجز في أقل من 60 ثانية أعدنا التصميم.",
        durationEn: "Weeks 2–3",
        durationAr: "الأسبوع 2–3",
      },
      {
        titleEn: "Pilot with one branch",
        titleAr: "تشغيل فرع واحد",
        descEn: "One location live for 2 weeks, fixes every 48 hours. Other branches watch and ask.",
        descAr: "فرع واحد يعمل لأسبوعين، وتعديل كل 48 ساعة. وبقية الفروع تشاهد وتسأل.",
        durationEn: "Weeks 4–6",
        durationAr: "الأسبوع 4–6",
      },
      {
        titleEn: "Rollout & handover",
        titleAr: "التعميم والتسليم",
        descEn: "All branches, data migrated, old notebooks archived. 30-day hypercare on WhatsApp.",
        descAr: "كل الفروع والبيانات منقولة والدفاتر مؤرشفة. 30 يوما من الدعم اللصيق عبر واتساب.",
        durationEn: "Weeks 7–8",
        durationAr: "الأسبوع 7–8",
      },
    ],
    stats: [
      { value: "-40%", labelEn: "no-shows with reminders", labelAr: "انخفاض عدم الحضور مع التذكير" },
      { value: "60 sec", labelEn: "to book a client", labelAr: "مدة حجز عميل" },
      { value: "1 inbox", labelEn: "for all requests", labelAr: "صندوق واحد لكل الطلبات" },
    ],
    faq: [
      {
        qEn: "Our staff is not technical. Will they use it?",
        aEn: "If they use WhatsApp, they can use this. Big buttons, Arabic labels, max 3 clicks to finish a task. We train on their real shift, not in a classroom, and leave a one-page cheat sheet taped to the desk.",
        qAr: "فريقنا غير تقني. هل سيستخدمه؟",
        aAr: "إن كانوا يستخدمون واتساب فسيستخدمونه. أزرار كبيرة وتسميات عربية وبحد أقصى 3 ضغطات لإنجاز المهمة. وندرب في الوردية الحقيقية لا في قاعة، ونترك ورقة مرجعية من صفحة واحدة على المكتب.",
      },
      {
        qEn: "Can it work alongside our Excel?",
        aEn: "Yes for a transition period, we sync both ways. But Excel stays read-only after go-live, otherwise you keep two truths. We import history once, cleanly.",
        qAr: "هل يعمل بجانب الإكسل؟",
        aAr: "نعم في الفترة الانتقالية، ونزامن الاتجاهين. لكن بعد التشغيل يبقى الإكسل للقراءة فقط، وإلا صارت لديك حقيقتان. ونستورد القديم مرة واحدة بنظافة.",
      },
      {
        qEn: "What about data privacy and backups?",
        aEn: "Hosted in EU with daily encrypted backups kept 30 days. Staff access is logged. On request we enable Egypt-local hosting. You can export everything to Excel anytime, no lock-in.",
        qAr: "ماذا عن الخصوصية والنسخ الاحتياطي؟",
        aAr: "استضافة في أوروبا بنسخ يومية مشفرة 30 يوما. ودخول الموظفين مسجل. وإن أردت استضافة محلية في مصر فعّلناها. وتستطيع تصدير كل شيء إلى إكسل في أي وقت، دون احتكار.",
      },
      {
        qEn: "How much customization is too much?",
        aEn: "We will push back if a request serves one person once a year. Core flows get customized deeply; edge cases get a notes field and a report. Keeps the system fast and maintainable.",
        qAr: "هل للتخصيص حدود؟",
        aAr: "سنعترض إن كان الطلب يخدم فردا واحدا مرة في السنة. المسارات الأساسية تُفصّل بعمق، والحالات الشاذة تأخذ خانة ملاحظات وتقريرا. هكذا يبقى النظام سريعا وسهل الصيانة.",
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
    videoDurationAr: "دقيقتان و50 ثانية عن إصلاح الخلل قبل صرف دولار على الإعلانات",
    stack: ["GA4", "Search Console", "Meta / TikTok Pixel", "SEO", "CRO"],
    nameEn: "Marketing & Growth Systems",
    nameAr: "أنظمة التسويق والنمو",
    taglineEn: "We fix the bucket before pouring more ads into it.",
    taglineAr: "نصلح الوعاء قبل صب مزيد من الإعلانات فيه.",
    introEn:
      "Spending on ads with a slow site, no tracking and a form nobody answers is burning money. We start with measurement: what brings calls, what wastes budget, then SEO pages and conversion fixes that keep working after the ad budget stops.",
    introAr:
      "الإنفاق على الإعلانات وموقعك بطيء ولا تتبع لديك ونموذج لا يرد عليه أحد إحراق للمال. نبدأ بالقياس: ما الذي يجلب المكالمات وما الذي يهدر الميزانية، ثم صفحات سيو وتعديلات تحويل تظل تعمل حتى بعد توقف ميزانية الإعلانات.",
    storyEn: [
      "First week is always an audit, and it is uncomfortable. A real estate client was spending $3,000/month; 60% of clicks came from outside his areas and the form went to an inbox nobody opened. We paused half the spend, routed leads to WhatsApp with an auto-reply, and answered in under 5 minutes. Same budget, 3x qualified viewings.",
      "Then compounding work: Arabic service pages that rank ('dentist for kids in Nasr City' beats 'best clinic'), speed fixes, review generation via WhatsApp after each visit, and a simple monthly report in plain language. No 40-page PDFs with vanity graphs.",
    ],
    storyAr: [
      "الأسبوع الأول تدقيق دائما، وهو غير مريح. عميل عقارات كان ينفق 3000 دولار شهريا؛ 60% من النقرات من خارج مناطقه والنموذج يذهب إلى بريد لا يفتحه أحد. أوقفنا نصف الإنفاق ووجّهنا العملاء إلى واتساب برد تلقائي وأجبنا في أقل من 5 دقائق. بالميزانية نفسها و3 أضعاف معاينات جادة.",
      "ثم العمل التراكمي: صفحات خدمة عربية تتصدر (طبيب أسنان أطفال في مدينة نصر يتغلب على أفضل عيادة)، وتسريع، وتوليد تقييمات عبر واتساب بعد كل زيارة، وتقرير شهري بلغة بسيطة. دون ملفات من 40 صفحة برسوم للزينة.",
    ],
    forWhoEn: [
      "Businesses spending on ads with unclear return",
      "Clinics, real estate, tourism relying on calls + WhatsApp",
      "E-commerce with traffic but weak checkout",
    ],
    forWhoAr: [
      "أنشطة تنفق على الإعلانات بعائد غير واضح",
      "عيادات وعقارات وسياحة تعتمد على المكالمات والواتساب",
      "متاجر لديها زيارات لكن الدفع ضعيف",
    ],
    features: [
      {
        titleEn: "Tracking that tells truth",
        titleAr: "تتبع يقول الحقيقة",
        descEn: "Calls, WhatsApp clicks, bookings attributed to channel and keyword, in Arabic dashboard labels.",
        descAr: "المكالمات ونقرات الواتساب والحجوزات منسوبة للقناة والكلمة، ولوحة بتسميات عربية.",
      },
      {
        titleEn: "Arabic SEO pages",
        titleAr: "صفحات سيو عربية",
        descEn: "Service + area pages written like humans search, with FAQ schema. 10–20 pages that rank and ring.",
        descAr: "صفحات خدمة ومنطقة مكتوبة كما يبحث الناس، بأسئلة شائعة منظمة. 10–20 صفحة تتصدر وتجلب اتصالات.",
      },
      {
        titleEn: "Speed + conversion fixes",
        titleAr: "سرعة وتحويل",
        descEn: "Shorter forms, sticky WhatsApp / call buttons, real photos over stock. Tested A/B, not opinions.",
        descAr: "نماذج أقصر، وأزرار واتساب واتصال ثابتة، وصور حقيقية بدل الجاهزة. باختبار أ/ب لا بالآراء.",
      },
      {
        titleEn: "Review engine",
        titleAr: "محرك تقييمات",
        descEn: "Automatic WhatsApp after each visit with direct Google link. Bad feedback goes to you first, not public.",
        descAr: "واتساب تلقائي بعد كل زيارة برابط جوجل مباشر. والشكوى تصلك أنت أولا لا للعلن.",
      },
      {
        titleEn: "Ad account cleanup",
        titleAr: "تنظيف حسابات الإعلانات",
        descEn: "Geo, negative keywords, Arabic ad copy that matches the landing page. No clickbait mismatch.",
        descAr: "نطاق جغرافي وكلمات مستبعدة وإعلان عربي مطابق لصفحة الهبوط. دون عنوان مخادع.",
      },
      {
        titleEn: "Monthly plain report",
        titleAr: "تقرير شهري مفهوم",
        descEn: "Spent, earned, cost per qualified lead, next month's one move. 20 minutes, on WhatsApp call if you like.",
        descAr: "ما أُنفق وما كُسب وتكلفة العميل الجاد وخطوة الشهر القادم. 20 دقيقة وإن أحببت على واتساب.",
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
      "قياس: تحليلات وبكسلات وتتبع مكالمات",
      "سيو تقني مع 10–20 صفحة عربية",
      "تعديلات تحويل مع سجل تجارب",
      "تدفق تقييمات تلقائي",
      "إعادة هيكلة حسابات الإعلانات",
      "تقرير شهري مع جلسة عمل 60 دقيقة",
    ],
    steps: [
      {
        titleEn: "Audit & numbers",
        titleAr: "التدقيق والأرقام",
        descEn: "We find where money leaks: wrong geo, dead inbox, slow pages. You get a one-page leak list.",
        descAr: "نجد أين يتسرب المال: نطاق خاطئ وصندوق ميت وصفحات بطيئة. وتحصل على قائمة تسريب من صفحة واحدة.",
        durationEn: "Week 1",
        durationAr: "الأسبوع 1",
      },
      {
        titleEn: "Fix the bucket",
        titleAr: "إصلاح الوعاء",
        descEn: "Tracking, speed, forms, WhatsApp routing live before one dollar of new spend.",
        descAr: "التتبع والسرعة والنماذج وتوجيه الواتساب تعمل قبل دولار واحد من الإنفاق الجديد.",
        durationEn: "Weeks 2–3",
        durationAr: "الأسبوع 2–3",
      },
      {
        titleEn: "Compound content",
        titleAr: "محتوى تراكمي",
        descEn: "SEO pages + reviews + CRO tests shipped weekly. You approve topics on WhatsApp in minutes.",
        descAr: "صفحات سيو وتقييمات وتجارب تحويل كل أسبوع. وتعتمد المواضيع على واتساب في دقائق.",
        durationEn: "Ongoing",
        durationAr: "مستمر",
      },
      {
        titleEn: "Scale or cut",
        titleAr: "وسّع أو اقطع",
        descEn: "Monthly: double what brings qualified leads, kill what doesn't, with numbers, no ego.",
        descAr: "شهريا: ضاعف ما يجلب عملاء جادين واقطع ما لا يجلب، بالأرقام دون عاطفة.",
        durationEn: "Monthly",
        durationAr: "شهرياً",
      },
    ],
    stats: [
      { value: "3x", labelEn: "qualified leads, same budget", labelAr: "عملاء جادون بالميزانية نفسها" },
      { value: "<5 min", labelEn: "first response target", labelAr: "هدف أول رد" },
      { value: "20", labelEn: "Arabic pages that rank", labelAr: "صفحة عربية تتصدر" },
    ],
    faq: [
      {
        qEn: "Do you run the ads for us monthly?",
        aEn: "Yes, retainers start after the fix phase, but we won't take your money if tracking isn't ready. First we measure, then we spend. Minimum 3 months, because SEO and learning need time.",
        qAr: "هل تديرون الإعلانات شهريا؟",
        aAr: "نعم، تبدأ الباقات بعد مرحلة الإصلاح، ولن نأخذ أموالك إن لم يكن القياس جاهزا. أولا نقيس ثم ننفق. أقل مدة 3 شهور لأن السيو والتعلم يحتاجان وقتا.",
      },
      {
        qEn: "How fast will we see results?",
        aEn: "Tracking + response fixes: 2–3 weeks. SEO pages: 2–4 months. If anyone promises page one in a week in Arabic competitive niches, run.",
        qAr: "متى سنرى النتائج؟",
        aAr: "القياس وسرعة الرد: 2–3 أسابيع. صفحات السيو: 2–4 شهور. وإن وعدك أحد بالصفحة الأولى في أسبوع في مجال منافس بالعربية فاهرب.",
      },
      {
        qEn: "Who owns the ad accounts and data?",
        aEn: "You. Accounts, pixels, audiences created in your Business Manager. We get partner access. If we part ways, everything stays.",
        qAr: "من يملك الحسابات والبيانات؟",
        aAr: "أنت. الحسابات والبكسلات والجمهور في مدير أعمالك. ونحن بدخول شريك. وإن افترقنا بقي كل شيء معك.",
      },
      {
        qEn: "Can you work with our in-house marketer?",
        aEn: "Happily, we train them on the dashboard and split work: we do technical + pages, they do daily posting. Shared WhatsApp group, no territory wars.",
        qAr: "هل تعملون مع مسوقنا الداخلي؟",
        aAr: "بكل سرور، ندربه على اللوحة ونقسم العمل: نحن التقني والصفحات وهو النشر اليومي. مجموعة واتساب مشتركة ودون حروب.",
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
    videoDurationAr: "دقيقتان و20 ثانية عن معنى العمل دون توقف فعلا",
    stack: ["AWS", "Vercel", "CloudFront CDN", "Daily Backups", "24/7 Monitoring"],
    nameEn: "Hosting, Cloud & Tech Support",
    nameAr: "الاستضافة والسحاب والدعم الفني",
    taglineEn: "Sleep well. If it breaks at 3am, we are already on it.",
    taglineAr: "نم مرتاحا. إن تعطل شيء في الثالثة فجرا فنحن عليه بالفعل.",
    introEn:
      "Cheap shared hosting dies exactly when your campaign works. We move you to serverless + CDN with daily backups, uptime monitoring and a human who answers on WhatsApp, usually before you notice.",
    introAr:
      "الاستضافة المشتركة الرخيصة تتعطل بالضبط عندما تنجح حملتك. ننقلك إلى خوادم مرنة مع شبكة توزيع ونسخ يومي ومراقبة وإنسان يرد على واتساب، غالبا قبل أن تلاحظ.",
    storyEn: [
      "Migration is boring and careful: full copy first, test on a private link for 3 days, switch DNS at low-traffic hour, keep the old host for 14 days as a parachute. A store migrated the night before Black Friday with us, zero downtime, and checkout stayed under 2 seconds at peak. The owner watched orders from his phone instead of refreshing panic.",
      "Support is not tickets into a void. You message on WhatsApp, we reply with what broke, what we did, and what prevents it next time, in Arabic or English, no 'kindly revert' templates. Monthly one-pager: uptime, speed, attacks blocked, backups tested.",
    ],
    storyAr: [
      "النقل ممل وبحذر: نسخة كاملة أولا، واختبار على رابط خاص 3 أيام، وتحويل النطاق في ساعة هادئة، وإبقاء المضيف القديم 14 يوما كاحتياط. متجر انتقل معنا ليلة الجمعة السوداء دون ثانية توقف، وبقي الدفع تحت ثانيتين في الذروة. كان صاحبه يشاهد الطلبات من هاتفه بدل التحديث المتوتر.",
      "والدعم ليس تذاكر في الفراغ. تراسل على واتساب، فنرد بما تعطل وبما فعلنا وبما يمنعه المرة القادمة، بالعربية أو الإنجليزية، دون قوالب رسمية محفوظة. وتقرير شهري من صفحة واحدة: وقت التشغيل والسرعة والهجمات المصدودة والنسخ المختبرة.",
    ],
    forWhoEn: [
      "Stores and booking sites that can't afford downtime",
      "Businesses whose developer disappeared with the passwords",
      "Teams tired of 'the site is down' surprises",
    ],
    forWhoAr: [
      "متاجر ومواقع حجز لا تحتمل التوقف",
      "أنشطة اختفى مبرمجها بكلمات السر",
      "فرق سئمت مفاجآت تعطل الموقع",
    ],
    features: [
      {
        titleEn: "Migration without fear",
        titleAr: "نقل دون خوف",
        descEn: "Zero-downtime move, SSL, emails preserved, rollback plan. You approve the test link first.",
        descAr: "نقل دون توقف وشهادة وبريد محفوظ وخطة رجوع. وتعتمد رابط الاختبار أولا.",
      },
      {
        titleEn: "Speed everywhere",
        titleAr: "سرعة في كل مكان",
        descEn: "CDN with Cairo / Dubai / Frankfurt edges, image optimization, cache rules per page type.",
        descAr: "شبكة توزيع بنقاط القاهرة ودبي وفرانكفورت وضغط صور وقواعد تخزين مؤقت حسب نوع الصفحة.",
      },
      {
        titleEn: "Backups you can restore",
        titleAr: "نسخ قابلة للاسترجاع فعلا",
        descEn: "Daily encrypted backups, 30-day retention, restore tested monthly, not 'we think it works'.",
        descAr: "نسخ يومية مشفرة 30 يوما واسترجاع مختبَر شهريا، لا على الظن.",
      },
      {
        titleEn: "Security that blocks",
        titleAr: "حماية تصد",
        descEn: "WAF, bot filtering, 2FA everywhere, updates within 48h of critical patches.",
        descAr: "جدار ناري وفلترة بوتات وتحقق بخطوتين وتحديثات خلال 48 ساعة من أي ثغرة حرجة.",
      },
      {
        titleEn: "WhatsApp support",
        titleAr: "دعم واتساب",
        descEn: "Real engineer, Arabic/English, average first reply under 30 minutes in working hours.",
        descAr: "مهندس حقيقي بالعربية والإنجليزية ومتوسط أول رد أقل من 30 دقيقة في ساعات العمل.",
      },
      {
        titleEn: "Monthly health page",
        titleAr: "صفحة صحة شهرية",
        descEn: "Uptime, speed trend, incidents and what we hardened. Forward it to your partner.",
        descAr: "وقت التشغيل واتجاه السرعة والأعطال وما قوّيناه. أرسلها لشريكك.",
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
      "إعداد سحابي: خوادم مرنة مع توزيع وشهادة",
      "نقل مع نطاق واستمرارية البريد",
      "نسخ يومي مع مراقبة وتنبيهات",
      "تقوية حماية مع روتين تحديثات",
      "قناة دعم واتساب",
      "تقرير صحة شهري",
    ],
    steps: [
      {
        titleEn: "Audit & passwords",
        titleAr: "التدقيق وكلمات السر",
        descEn: "We collect every login into your vault, find single points of failure and quote fixed.",
        descAr: "نجمع كل بيانات الدخول في خزنتك ونحدد نقاط الفشل ونسعّر بثبات.",
        durationEn: "Day 1–2",
        durationAr: "يوم 1–2",
      },
      {
        titleEn: "Clone & test",
        titleAr: "نسخة واختبار",
        descEn: "Full clone on new cloud, 3-day test: orders, emails, forms, speed from Cairo 4G.",
        descAr: "نسخة كاملة على السحاب الجديد و3 أيام اختبار: طلبات وبريد ونماذج وسرعة من الجيل الرابع في القاهرة.",
        durationEn: "Days 3–5",
        durationAr: "يوم 3–5",
      },
      {
        titleEn: "Midnight switch",
        titleAr: "التحويل الهادئ",
        descEn: "DNS flip at 2–4am Cairo time, watched live, old host kept 14 days.",
        descAr: "تحويل النطاق الثانية إلى الرابعة فجرا بتوقيت القاهرة بمراقبة مباشرة والقديم يبقى 14 يوما.",
        durationEn: "Day 6",
        durationAr: "يوم 6",
      },
      {
        titleEn: "Watch & harden",
        titleAr: "مراقبة وتقوية",
        descEn: "30-day watch, cache tuning, backup restore drill. Then routine monthly care.",
        descAr: "30 يوما مراقبة وضبط تخزين مؤقت وتجربة استرجاع. ثم رعاية شهرية روتينية.",
        durationEn: "Days 7–30",
        durationAr: "يوم 7–30",
      },
    ],
    stats: [
      { value: "99.9%", labelEn: "uptime target", labelAr: "هدف التشغيل" },
      { value: "<30 min", labelEn: "first reply in hours", labelAr: "أول رد في ساعات العمل" },
      { value: "30 days", labelEn: "backup retention", labelAr: "مدة الاحتفاظ بالنسخ" },
    ],
    faq: [
      {
        qEn: "Will our emails stop during migration?",
        aEn: "No. Mail records move first and get tested separately. In 40+ migrations we haven't lost a single inbox, your old host stays live until you confirm every mailbox.",
        qAr: "هل يتوقف بريدنا أثناء النقل؟",
        aAr: "لا. تنتقل سجلات البريد أولا وتُختبر منفصلة. في أكثر من 40 عملية نقل لم نفقد صندوقا واحدا، ويبقى مضيفك القديم يعمل حتى تؤكد كل صناديق البريد.",
      },
      {
        qEn: "What if our site was built by someone else?",
        aEn: "Most of our care clients are exactly that. We audit, document passwords properly, and stabilize. If the code is a disaster we will tell you the honest rebuild cost instead of patching forever.",
        qAr: "ماذا إن كان موقعنا من بناء جهة أخرى؟",
        aAr: "معظم عملاء الرعاية لدينا كذلك. ندقق ونوثق كلمات السر بشكل صحيح ونثبّت الوضع. وإن كانت الشيفرة كارثية سنخبرك بتكلفة إعادة البناء بأمانة بدل الترقيع الدائم.",
      },
      {
        qEn: "Do you offer contracts or pay-as-you-go?",
        aEn: "Monthly rolling after the first 3 months, cancel with 30 days notice, keep everything. No hostage domains or mystery fees.",
        qAr: "هل توجد عقود أم دفع مرن؟",
        aAr: "شهري متجدد بعد أول 3 شهور، إلغاء بإخطار 30 يوما وكل شيء يبقى معك. لا نطاقات رهينة ولا رسوم غامضة.",
      },
      {
        qEn: "Who do we call at 2am?",
        aEn: "WhatsApp the care number, critical (site down / checkout broken) pages the on-call engineer 24/7. Non-critical waits till 9am Cairo time. We define critical together on day one.",
        qAr: "من نتصل به في الثانية فجرا؟",
        aAr: "واتساب رقم الرعاية، والحرج (الموقع متوقف أو الدفع معطل) يصل لمهندس المناوبة 24/7. وغير الحرج ينتظر التاسعة صباحا بتوقيت القاهرة. ونعرّف الحرج معا من اليوم الأول.",
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
