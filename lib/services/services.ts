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
    priceEn: "From $350",
    priceAr: "يبدأ من $350",
    priceUsd: 350,
    monthly: false,
    heroImage: "/services/hero-brand-identity-creative-design.jpg",
    gallery: [
      "/sectors/corporate-websites.jpg",
      "/sectors/e-commerce.jpg",
      "/sectors/real-estate.jpg",
    ],
    videoPoster: "/services/brand-identity.jpg",
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
    priceEn: "From $650",
    priceAr: "يبدأ من $650",
    priceUsd: 650,
    monthly: false,
    heroImage: "/services/hero-websites-digital-platforms.jpg",
    gallery: [
      "/sectors/corporate-websites.jpg",
      "/sectors/tourism-booking.jpg",
      "/sectors/e-commerce.jpg",
    ],
    videoPoster: "/services/websites-platforms.jpg",
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
    priceEn: "From $1,250",
    priceAr: "يبدأ من $1,250",
    priceUsd: 1250,
    monthly: false,
    heroImage: "/services/hero-mobile-apps-saas-products.jpg",
    gallery: [
      "/signature-capabilities/Mobile-Apps-SaaS-Products.jpg",
      "/sectors/crm-automation.jpg",
      "/sectors/restaurant-pos.jpg",
    ],
    videoPoster: "/services/mobile-apps-saas.jpg",
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
    priceEn: "From $450",
    priceAr: "يبدأ من $450",
    priceUsd: 450,
    monthly: false,
    heroImage: "/services/hero-business-systems-dashboards.jpg",
    gallery: [
      "/sectors/crm-automation.jpg",
      "/sectors/medical-clinics.jpg",
      "/sectors/education-lms.jpg",
    ],
    videoPoster: "/services/business-systems.jpg",
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
    priceEn: "From $390",
    priceAr: "يبدأ من $390",
    priceUsd: 390,
    monthly: false,
    heroImage: "/services/hero-marketing-growth-systems.jpg",
    gallery: [
      "/signature-capabilities/Marketing-Growth-Systems.jpg",
      "/sectors/e-commerce.jpg",
      "/sectors/real-estate.jpg",
    ],
    videoPoster: "/services/marketing-growth.jpg",
    videoDurationEn: "3:10 min, omnichannel ads, CAPI tracking, SEO/GEO & viral growth",
    videoDurationAr: "3 دقائق و10 ثوانٍ، إعلانات شاملة، ربط CAPI، سيو وخرائط ونمو فيروسي",
    stack: [
      "Meta Ads",
      "Google Ads & PMax",
      "TikTok & Snap Ads",
      "GA4 & GTM",
      "Conversions API (CAPI)",
      "Certified SEO / GEO",
      "Viral Seeding",
    ],
    nameEn: "Marketing & Growth Systems",
    nameAr: "التسويق الرقمي وإدارة الحملات ونمو المبيعات",
    taglineEn:
      "Omnichannel paid ads, server-side CAPI & GA4 tracking, certified SEO/GEO, and viral community growth.",
    taglineAr:
      "إعلانات ممولة على كافة المنصات، ربط تتبع GA4 و CAPI، فريق سيو وخرائط معتمد (GEO)، وتنمية تفاعل المجموعات والمتابعين.",
    introEn:
      "Digital marketing isn't just boosting a post and hoping for the best. We engineer full-funnel growth: high-converting paid ads across Meta, Google, TikTok, Snapchat & LinkedIn, bulletproof tracking via GA4 & server-side CAPI, certified local SEO & Google Maps (GEO) dominance, and active social media community seeding that turns followers, group discussions, and likes into loyal paying clients.",
    introAr:
      "التسويق الرقمي ليس مجرد ترويج منشور وانتظار الحظ. نحن نبني منظومة نمو متكاملة: إعلانات ممولة مدروسة العائد على كافة المنصات (ميتا، جوجل، تيك توك، سناب شات، ولينكد إن)، ربط تقني دقيق لتتبع التحويلات عبر GA4 وسيرفر CAPI لتجاوز حظر الكوكيز، فريق معتمد لتصدر السيو والبحث الجغرافي وخرائط جوجل (GEO)، وإدارة حية لمنصات التواصل ونشر في الجروبات المتخصصة تحول المتابعين والتفاعل إلى مبيعات حقيقية.",
    storyEn: [
      "We treat ad spend like an investment portfolio, not a casino gamble. When an e-commerce client came to us burning $4,500/month with zero visibility on which ads generated actual checkouts due to iOS tracking loss, we rebuilt their entire technical tracking from scratch: Server-Side Meta Conversions API (CAPI), Google Tag Manager, and GA4 e-commerce events. Within 14 days, the ad algorithms finally had clean conversion data. We eliminated wasted spend on non-performing segments and scaled their ROAS from 1.4x to 4.8x without increasing their ad budget.",
      "Paid ads bring instant momentum, but organic community presence and local SEO build an unbreakable moat. For a high-ticket clinic and real estate portfolio, our certified SEO & GEO team optimized their Google Business Profile to capture the local 3-Pack on Google Maps, while our community growth squad actively seeded value-driven discussions in high-intent Facebook groups and produced viral short-form Reels. Today, over 55% of their qualified inquiries come from free organic searches and viral community shares.",
    ],
    storyAr: [
      "نتعامل مع ميزانية الإعلانات كمحفظة استثمارية مدروسة لا كمقامرة عشوائية. عندما لجأ إلينا متجر إلكتروني كان ينفق 4,500 دولار شهرياً دون معرفة دقيقة بالإعلانات التي تحقق مبيعات حقيقية بسبب فقدان تتبع ملفات الكوكيز على أجهزة آبل، أعدنا بناء بنيته التقنية بالكامل: ربطنا سيرفر Meta Conversions API (CAPI) و Google Tag Manager وأحداث الشراء في GA4. وخلال 14 يوماً فقط، أصبحت خوارزميات الإعلانات تتلقى بيانات دقيقة 100%. أوقفنا الإهدار في الجماهير الخاطئة وضاعفنا العائد الإعلاني ROAS من 1.4x إلى 4.8x بالميزانية نفسها.",
      "الإعلانات الممولة تجلب مبيعات فورية وسريعة، لكن التواجد المجتمعي العضوي وتصدر البحث المحلي يصنعان حصناً حقيقياً لا ينتهي. لعيادة متخصصة ومجموعة عقارية كبرى، تولى فريق السيو والظهور الجغرافي (GEO) المعتمد لدينا تحسين ملف خرائط جوجل ليتصدر نتائج البحث المحلية الأولى، بالتوازي مع فريق إدارة المحتوى الذي نشر محتوى قيماً وتفاعلياً داخل مجموعات وجروبات فيسبوك المتخصصة مع صناعة ريلز فيروسية. واليوم، أكثر من 55% من استفسارات العملاء المؤكدة تصلهم مجاناً تماماً عبر تصدر الخرائط والمشاركات التفاعلية.",
    ],
    forWhoEn: [
      "Brands spending on Meta, Google, TikTok or Snap ads seeking verifiable positive ROAS",
      "Local businesses, clinics, and service companies wanting to rank #1 on Google Maps & local GEO search",
      "E-commerce stores needing complete CAPI & GA4 server-side tracking calibration",
      "Companies seeking genuine social follower growth, viral short-form Reels, and active group seeding",
    ],
    forWhoAr: [
      "علامات تجارية تنفق على إعلانات ميتا وجوجل وتيك توك وسناب وتسعى لعائد إعلاني ربحي مؤكد",
      "عيادات ومكاتب عقارية وشركات خدمات تستهدف المركز الأول في خرائط جوجل والبحث الجغرافي (GEO)",
      "متاجر إلكترونية بحاجة لربط تقني متقدم لتتبع المبيعات عبر سيرفر CAPI و GA4",
      "أنشطة تبحث عن نمو حقيقي للمتابعين، فيديوهات ريلز سريعة الانتشار، ونشر تفاعلي في المجموعات",
    ],
    features: [
      {
        titleEn: "Omnichannel Paid Advertising",
        titleAr: "إعلانات ممولة على كافة المنصات",
        descEn: "End-to-end media buying across Meta (FB/IG), Google Ads & PMax, TikTok, Snapchat, and LinkedIn calibrated for high ROAS.",
        descAr: "إدارة حملات متكاملة على ميتا وجوجل (بحث و PMax) وتيك توك وسناب شات ولينكد إن لتحقيق أعلى عائد استثماري.",
      },
      {
        titleEn: "Server-Side CAPI & GA4 Tracking",
        titleAr: "ربط تقني متقدم لسيرفر CAPI و GA4",
        descEn: "Meta Conversions API (CAPI), TikTok Events API, and GA4 e-commerce funnels bypassing iOS cookie blocks with 100% data fidelity.",
        descAr: "ربط سيرفر CAPI وتتبع TikTok المتقدم و GA4 لتجاوز حظر الكوكيز وتزويد خوارزميات الإعلانات ببيانات شراء دقيقة 100%.",
      },
      {
        titleEn: "Certified SEO & Local GEO Dominance",
        titleAr: "فريق معتمد في السيو وتصدر خرائط جوجل (GEO)",
        descEn: "Certified SEO specialists optimizing technical site architecture, local Google Business Profiles, and Google Maps 3-Pack rankings.",
        descAr: "فريق سيو معتمد يحسن البنية التقنية للموقع، ويهيئ ملف خرائط جوجل ليتصدر أول 3 نتائج في نطاقك الجغرافي محلياً.",
      },
      {
        titleEn: "Viral Social Growth & Reels Scripting",
        titleAr: "نمو الحسابات وصناعة الريلز الفيروسية",
        descEn: "High-retention short-form video scripting, Reels/TikTok editing, aesthetic carousels, and strategic follower growth campaigns.",
        descAr: "كتابة سيناريوهات ريلز وتيك توك خاطفة للأنظار، تصاميم كاروسيل مميزة، وحملات مدروسة لرفع المتابعين الحقيقيين والتفاعل.",
      },
      {
        titleEn: "Targeted Group & Community Seeding",
        titleAr: "النشر والتسويق التفاعلي داخل المجموعات",
        descEn: "Authentic community distribution and discussion sparking in niche Facebook, Telegram, and LinkedIn groups generating warm buyer leads.",
        descAr: "مشاركة تفاعلية ذكية داخل مجموعات وجروبات فيسبوك وتيليجرام المتخصصة لبناء الثقة وجلب عملاء جاهزين للشراء دون إعلانات.",
      },
      {
        titleEn: "Live Looker Studio Dashboard",
        titleAr: "لوحة مؤشرات حية وتقارير أداء مفهومة",
        descEn: "Transparent 24/7 dashboard tracking ad spend, revenue, ROAS, keyword ranks, and cost-per-lead in clear language.",
        descAr: "لوحة تحكم تفاعلية مباشرة ترصد الإنفاق، الإيرادات، العائد الإعلاني، وترتيب الكلمات، وتكلفة العميل بلغة أعمال واضحة.",
      },
    ],
    deliverablesEn: [
      "Omnichannel paid ad campaigns setup & daily media buying (Meta, Google, TikTok, Snap)",
      "Server-side Meta Conversions API (CAPI), GTM & GA4 e-commerce tracking integration",
      "Certified technical SEO audit, Schema markup & Google Maps (GEO) 3-Pack ranking",
      "Monthly viral Reels scripts, high-converting ad copy, and aesthetic social media carousels",
      "Active group seeding & discussion sparking in targeted niche Facebook & Telegram groups",
      "24/7 live Looker Studio performance dashboard + bi-weekly executive strategy reviews",
    ],
    deliverablesAr: [
      "إطلاق وإدارة الميديا بايينج والحملات الإعلانية على ميتا وجوجل وتيك توك وسناب ولينكد إن",
      "تثبيت تقني كامل لسيرفر Meta Conversions API (CAPI) و GTM و GA4 لتتبع 100% من التحويلات",
      "سيو تقني معتمد مع تهيئة شاملة لخرائط جوجل (Google Maps GEO) وتصدر البحث المحلي",
      "كتابة سيناريوهات ومونتاج فيديوهات ريلز فيروسية وتصاميم سوشيال ميديا فاخرة شهرياً",
      "نشر وتسويق ذكي في مجموعات وجروبات فيسبوك وتيليجرام المتخصصة لجلب عملاء بلا إعلانات",
      "لوحة تحكم حية عبر Looker Studio لمراقبة العائد لحظياً مع اجتماعات استراتيجية نصف شهرية",
    ],
    steps: [
      {
        titleEn: "Audit & Technical Foundation",
        titleAr: "التدقيق والربط التقني الشامل",
        descEn: "Deep audit of ad accounts, pixels, Google Business Profile, and server-side CAPI/GTM infrastructure.",
        descAr: "فحص شامل لحسابات الإعلانات، ملف خرائط جوجل، وتأسيس بنية تتبع سيرفر CAPI و GTM و GA4.",
        durationEn: "Week 1",
        durationAr: "الأسبوع 1",
      },
      {
        titleEn: "Tracking & Conversion Calibration",
        titleAr: "معايرة التتبع وصفحات الهبوط",
        descEn: "Verify 100% tracking precision, optimize landing page speed, WhatsApp CTAs, and ad creatives.",
        descAr: "التأكد من دقة التتبع 100%، وتحسين سرعة صفحات الهبوط وأزرار واتساب وتجهيز الإعلانات والتصاميم.",
        durationEn: "Weeks 2–3",
        durationAr: "الأسبوع 2–3",
      },
      {
        titleEn: "Omnichannel Launch & SEO Groundwork",
        titleAr: "إطلاق الإعلانات وتصدر السيو والخرائط",
        descEn: "Deploy ad campaigns across Meta, Google & TikTok, launch local GEO ranking, and release first viral Reels.",
        descAr: "إطلاق الإعلانات الممولة على المنصات المختارة، بدء خطة تصدر الخرائط، ونشر أولى فيديوهات الريلز.",
        durationEn: "Weeks 4–6",
        durationAr: "الأسبوع 4–6",
      },
      {
        titleEn: "Scale, Group Seeding & Optimization",
        titleAr: "التوسع، النشر في الجروبات، ومضاعفة الأرباح",
        descEn: "Double down on top ROAS audiences, scale group community seeding, and review bi-weekly analytics.",
        descAr: "مضاعفة الميزانية على الإعلانات الأكثر ربحية، توسيع النشر في المجموعات، ومراجعة مؤشرات الأداء دورياً.",
        durationEn: "Ongoing",
        durationAr: "مستمر شهرياً",
      },
    ],
    stats: [
      { value: "4.8x", labelEn: "average ROAS on scaled campaigns", labelAr: "متوسط العائد الإعلاني على الحملات" },
      { value: "100%", labelEn: "CAPI & GA4 tracking fidelity", labelAr: "دقة تتبع التحويلات دون فاقد كوكيز" },
      { value: "#1", labelEn: "Google Maps 3-Pack rank target", labelAr: "هدف المركز الأول في خرائط جوجل" },
    ],
    faq: [
      {
        qEn: "Which ad platforms do you manage and what budgets do we need?",
        aEn: "We actively manage Meta (Facebook & Instagram), Google Search & Performance Max, TikTok, Snapchat, and LinkedIn. For ad spend, we recommend starting with at least $500–$1,000/month in ad budget to give the machine learning algorithms sufficient data volume to optimize and scale profitably.",
        qAr: "ما المنصات الإعلانية التي تديرونها وما الميزانيات الموصى بها؟",
        aAr: "ندير حملات ميتا (فيسبوك وانستغرام)، وجوجل (بحث و Performance Max)، وتيك توك، وسناب شات، ولينكد إن. بالنسبة لميزانية الصرف على المنصات، نوصي بميزانية تبدأ من 500 إلى 1,000 دولار شهرياً كحد أدنى لتزويد خوارزميات الذكاء الاصطناعي بالبيانات الكافية للتحسين والتوسع بربحية.",
      },
      {
        qEn: "Why is server-side Meta Conversions API (CAPI) and GA4 critical now?",
        aEn: "Browser pixel cookies now lose up to 40% of conversion data due to Apple iOS tracking restrictions and ad-blockers. Server-side CAPI sends purchases, leads, and events directly from your web server to Meta and Google, ensuring 100% accurate attribution so ad algorithms optimize toward real buyers rather than guessing.",
        qAr: "لماذا يعد ربط سيرفر Meta Conversions API (CAPI) و GA4 ضرورياً الآن؟",
        aAr: "أصبحت بكسلات المتصفحات التقليدية تفقد ما يصل إلى 40% من بيانات التحويلات بسبب قيود الخصوصية في هواتف آبل وإضافات حجب الإعلانات. ربط CAPI يرسل أحداث الشراء والطلبات مباشرة من سيرفر موقعك إلى ميتا وجوجل، مما يضمن دقة تتبع 100% ويجعل الخوارزميات تستهدف مشترين حقيقيين بدلاً من التخمين.",
      },
      {
        qEn: "How do you achieve genuine social media growth without fake followers?",
        aEn: "We strictly reject fake followers or engagement pods. We grow accounts organically through high-retention short-form video scripting (Reels/TikToks), targeted community seeding in high-intent Facebook & Telegram groups, engaging carousels, and strategic paid profile-visit campaigns that bring genuine prospective buyers.",
        qAr: "كيف تضمنون نمواً حقيقياً للمتابعين والتفاعل دون حسابات وهمية؟",
        aAr: "نرفض تماماً الحسابات الوهمية أو جروبات تبادل التفاعل المصطنعة. نبني نمواً حقيقياً عبر صناعة سيناريوهات ريلز وتيك توك ذات معدل مشاهدة مرتفع، والتوزيع الذكي في مجموعات فيسبوك وتيليجرام النشطة في مجالك، ونشر تصاميم كاروسيل تثقيفية، مع حملات زيادة زيارات للملف الشخصي تستهدف عملاء حقيقيين مهتمين بخدماتك.",
      },
      {
        qEn: "How fast will our business rank on Google Maps and search results?",
        aEn: "Local Google Maps (GEO) optimizations and Google Business Profile verification typically yield visible rank improvements in local search within 2 to 4 weeks. Technical website SEO and competitive organic keyword rankings usually show strong ranking jumps within 6 to 12 weeks of continuous optimization.",
        qAr: "كم يستغرق تصدر خرائط جوجل والنتائج الأولى في السيو الجغرافي؟",
        aAr: "تحسينات خرائط جوجل (Google Maps GEO) وتدقيق الملف التجاري تبدأ في إظهار نتائج وقفزات واضحة في الترتيب المحلي للمدينة خلال 2 إلى 4 أسابيع. أما السيو التقني للموقع وتصدر الكلمات التنافسية فيتطلب عادة من 6 إلى 12 أسبوعاً من العمل المتراكم المستمر وبناء السلطة الرقمية.",
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
    priceEn: "From $2.99/mo",
    priceAr: "يبدأ من $2.99 شهرياً",
    priceUsd: 2.99,
    monthly: true,
    heroImage: "/services/hero-hosting-cloud-tech-support.jpg",
    gallery: [
      "/sectors/corporate-websites.jpg",
      "/sectors/e-commerce.jpg",
      "/sectors/tourism-booking.jpg",
    ],
    videoPoster: "/services/hosting-cloud.jpg",
    videoDurationEn: "2:45 min, Hostinger cloud infrastructure, cPanel, KVM VPS & zero-downtime migration",
    videoDurationAr: "دقيقتان و45 ثانية، خوادم هوستنجر السحابية، cPanel، سيرفرات VPS ونقل بلا توقف",
    stack: [
      "Hostinger Infrastructure",
      "cPanel & WHM",
      "Pencil Cloud Panel",
      "KVM Linux & RDP VPS",
      "Free Domain & Email",
      "Zero-Downtime Migration",
    ],
    nameEn: "Hosting, Cloud & Tech Support",
    nameAr: "الاستضافة السحابية وسيرفرات VPS والدعم الفني",
    taglineEn:
      "Exclusive Hostinger partner: high-speed NVMe web hosting, KVM & RDP desktop VPS, cPanel + Pencil Panel, free domain, emails & zero-downtime migration.",
    taglineAr:
      "وكيل وموزع معتمد من هوستنجر: استضافة سحابية فائقة السرعة NVMe، سيرفرات KVM وديسكتوب RDP، شاشات cPanel وبانل بنسل، مع دومين وإيميلات ونقل مجاني بدون توقف.",
    introEn:
      "Slow hosting and crashing servers kill revenue before you even realize. Powered by Hostinger's tier-1 enterprise infrastructure, we deliver ultra-fast NVMe cloud hosting, robust KVM Linux & Windows Remote Desktop (RDP) servers, complete cPanel and Pencil Cloud Panel control, free custom domains, official corporate email suites, and 100% zero-downtime migrations overseen by dedicated senior engineers.",
    introAr:
      "الاستضافة البطيئة والسيرفرات التي تسقط في أوقات الذروة تقتل مبيعاتك وتكلفك ثقة عملائك. بصفتنا شريكاً وموزعاً معتمداً من هوستنجر العالمية (Hostinger)، نوفر استضافة سحابية فائقة السرعة بأقراص NVMe، سيرفرات KVM لينكس وسيرفرات ديسكتوب رسومي (RDP) للعمل عن بعد 24/7، شاشات cPanel كاملة وبانل بنسل السحابي الخاص، مع دومين مجاني، وإيميلات رسمية للشركات، ونقل كامل لمواقعك بدون أي دقيقة توقف بإشراف مهندسينا.",
    storyEn: [
      "Migration should never be a white-knuckle gamble. When a high-volume regional e-commerce store prepared for Black Friday with 80,000 active shoppers, their previous shared host choked during flash sales. We executed a full zero-downtime migration to our Hostinger enterprise cloud cluster: copying databases live, testing the checkout on a private staging link, and smoothly switching DNS at 3am. During peak sales, page loads clocked under 0.8 seconds and the client achieved record revenue without a single hitch.",
      "Beyond web hosting, modern teams need flexible cloud compute. We provision dedicated KVM Linux instances with instant root access, as well as Windows Remote Desktop (RDP) environments that run automated scrapers, trading algorithms, and desktop tools 24/7 without needing a local PC turned on. Combined with full cPanel screens and our proprietary Pencil Cloud Panel, you get enterprise hosting power with effortless control.",
    ],
    storyAr: [
      "نقل المواقع والسيرفرات لا يجب أن يكون مقامرة متوترة أبداً. عندما استعد متجر إلكتروني إقليمي ضخم لموسم الجمعة البيضاء مع أكثر من 80,000 متسوق متزامن، توقفت استضافتهم المشتركة القديمة تماماً تحت ضغط الحملات. قمنا بتنفيذ نقل كامل بدون ثانية توقف واحدة إلى سحابة هوستنجر المؤسسية: نسخنا قواعد البيانات لحظياً، اختبرنا مسار الدفع على رابط تجريبي خاص، وحولنا الـ DNS بهدوء في الثالثة فجراً. وأثناء ذروة البيع، فتحت الصفحات في أقل من 0.8 ثانية وحقق المتجر أعلى مبيعات في تاريخه دون أي عطل.",
      "وبجانب استضافة الويب، تحتاج فرق العمل اليوم إلى خوادم سحابية مرنة. نحن نجهز سيرفرات KVM لينكس بصلاحيات جذر كاملة (Root Access)، وسيرفرات ديسكتوب بنظام RDP لتشغيل الروبوتات والبرامج الآلية وأنظمة سطح المكتب 24/7 دون الحاجة لترك جهازك الشخصي يعمل. ومع شاشات cPanel الكاملة وتكامل بانل بنسل السحابي الخاص، تحصل على قوة الاستضافة العالمية مع سهولة إدارة مطلقة.",
    ],
    forWhoEn: [
      "E-commerce stores and high-traffic portals needing lightning-fast NVMe hosting without crashes",
      "Developers, agencies, and algorithmic traders needing KVM Linux or Windows Remote Desktop (RDP) VPS",
      "Companies seeking official corporate business emails and custom domains with 100% spam protection",
      "Businesses wanting to migrate from sluggish hosts with zero downtime and human WhatsApp care",
    ],
    forWhoAr: [
      "متاجر إلكترونية ومواقع شركات تبحث عن استضافة سحابية فائقة السرعة NVMe بلا أي توقف",
      "مبرمجون ومؤسسات يحتاجون سيرفرات KVM لينكس أو سيرفرات ديسكتوب رسومي (RDP) بموارد معزولة",
      "شركات تبحث عن إيميلات أعمال رسمية ودومينات مخصصة محمية 100% من السبام",
      "أنشطة ترغب في نقل مواقعها من استضافات قديمة وبطيئة بدون أي انقطاع للخدمة وبدعم مباشر عبر واتساب",
    ],
    features: [
      {
        titleEn: "Hostinger Enterprise Cloud",
        titleAr: "بنية خوادم هوستنجر العالمية المعتمدة",
        descEn: "Tier-1 global infrastructure with AMD EPYC processors, pure NVMe storage arrays, and 99.99% uptime guarantee.",
        descAr: "بنية تحتية سحابية عالمية بمعالجات AMD EPYC وأقراص NVMe فائقة السرعة مع ضمان تشغيل 99.99% معتمد.",
      },
      {
        titleEn: "KVM Linux & Desktop RDP VPS",
        titleAr: "سيرفرات KVM وديسكتوب رسومي (RDP)",
        descEn: "Dedicated vCPU instances with full root access for Linux, plus Windows Remote Desktop GUI servers running 24/7.",
        descAr: "سيرفرات سحابية مخصصة بنظام لينكس وصلاحيات Root كاملة، وسيرفرات ديسكتوب رسومي RDP للعمل وتشغيل البرامج 24/7.",
      },
      {
        titleEn: "Full cPanel & Pencil Cloud Panel",
        titleAr: "شاشات cPanel كاملة وبانل بنسل السحابي",
        descEn: "Traditional full-featured cPanel and WHM management coupled with our modern, intuitive Pencil Cloud dashboard.",
        descAr: "تحكم كامل ومرخص عبر شاشات cPanel و WHM لإدارة الاستضافة، مع لوحة تحكم بنسل السحابية العصرية وسهلة الاستخدام.",
      },
      {
        titleEn: "Free Domain & Business Email Suite",
        titleAr: "دومين مجاني وإيميلات أعمال رسمية",
        descEn: "Free custom domain (.com, .net, .org) with up to 100 corporate email accounts protected by strict SPF/DKIM anti-spam.",
        descAr: "دومين مجاني لمدة سنة مع ما يصل إلى 100 إيميل رسمي باسم شركتك محمي ببروتوكولات الأمان ضد وصول الرسائل للسبام.",
      },
      {
        titleEn: "Zero-Downtime Seamless Migration",
        titleAr: "نقل مواقع ودومينات مجاني بدون ثانية توقف",
        descEn: "We move files, databases, and emails with zero traffic disruption. Old host stays active as a safety parachute for 14 days.",
        descAr: "ننقل كافة ملفاتك وقواعد البيانات والإيميلات دون ثانية توقف واحدة، مع إبقاء الاستضافة القديمة كاحتياط لمدة 14 يوماً.",
      },
      {
        titleEn: "Human Engineering Care on WhatsApp",
        titleAr: "دعم فني هندسي مباشر على مدار الساعة",
        descEn: "Direct WhatsApp communication with real DevOps engineers responding under 15 minutes for urgent production issues.",
        descAr: "تواصل مباشر عبر واتساب مع مهندسي أنظمة حقيقيين بمتوسط رد أقل من 15 دقيقة للحالات الطارئة على مدار 24/7.",
      },
    ],
    deliverablesEn: [
      "High-speed NVMe web & cloud hosting setup with cPanel + Pencil Panel",
      "Configured KVM Linux or Windows RDP Remote Desktop VPS with dedicated IP",
      "Free custom domain registration & DNS configuration via Cloudflare Anycast",
      "Corporate business email accounts with strict SPF, DKIM & DMARC anti-spam",
      "Zero-downtime website, database & mailbox migration from your old host",
      "Automated daily backups, DDoS mitigation & direct WhatsApp engineering support",
    ],
    deliverablesAr: [
      "استضافة سحابية فائقة السرعة بأقراص NVMe مع واجهات cPanel وبانل بنسل السحابي",
      "تجهيز سيرفرات KVM لينكس أو سيرفرات ديسكتوب رسومي RDP بعنوان IP مخصص",
      "حجز وربط النطاق والدومين المجاني مع سجلات DNS فائقة السرعة على Cloudflare",
      "إنشاء وتفعيل إيميلات الأعمال الرسمية وحمايتها ببروتوكولات SPF و DKIM و DMARC",
      "نقل كامل ومجاني لكافة المواقع وقواعد البيانات والإيميلات القديمة دون توقف",
      "نسخ احتياطي يومي تلقائي، حماية متقدمة من هجمات DDoS، ودعم هندسي مباشر عبر واتساب",
    ],
    steps: [
      {
        titleEn: "Audit & Cloud Architecture",
        titleAr: "التدقيق وتحديد البنية السحابية",
        descEn: "We inspect your traffic patterns, database volume, and email needs to recommend the ideal NVMe hosting or VPS tier.",
        descAr: "نفحص حجم الترافيك، قواعد البيانات، واحتياجات البريد لنرشح الباقة السحابية أو سيرفر الـ VPS الأنسب بدقة.",
        durationEn: "Day 1",
        durationAr: "اليوم 1",
      },
      {
        titleEn: "Zero-Downtime Clone & Staging Test",
        titleAr: "النسخ السحابي والاختبار التجريبي",
        descEn: "Live migration of files, databases, and mailboxes to our Hostinger cloud with 3 days testing on a private link.",
        descAr: "نقل حي للملفات وقواعد البيانات والإيميلات إلى سحابة هوستنجر مع اختبار شامل لمدة 3 أيام على رابط تجريبي خاص.",
        durationEn: "Days 2–3",
        durationAr: "اليوم 2–3",
      },
      {
        titleEn: "DNS Switch & Mailbox Continuity",
        titleAr: "التحويل السلس وضمان البريد",
        descEn: "DNS record flip at low-traffic hour with zero dropped requests. SPF and DKIM verified across all mailboxes.",
        descAr: "تحويل سجلات الـ DNS في ساعة هادئة بدون فقدان أي زائر، وتفعيل سجلات حماية البريد على كافة الأجهزة.",
        durationEn: "Day 4",
        durationAr: "اليوم 4",
      },
      {
        titleEn: "24/7 Monitoring & Engineering Care",
        titleAr: "المراقبة اللحظية والرعاية الهندسية",
        descEn: "Automated daily backups, real-time uptime monitoring, and ongoing human support directly on WhatsApp.",
        descAr: "نسخ احتياطي يومي، مراقبة لحظية للأداء والسيرفر، ودعم فني هندسي مستمر ومباشر عبر واتساب.",
        durationEn: "Ongoing",
        durationAr: "مستمر",
      },
    ],
    stats: [
      { value: "99.99%", labelEn: "uptime SLA guarantee", labelAr: "نسبة استمرارية التشغيل" },
      { value: "0 sec", labelEn: "downtime during migrations", labelAr: "توقف أثناء نقل المواقع" },
      { value: "<15 min", labelEn: "urgent WhatsApp engineering reply", labelAr: "استجابة هندسية على واتساب" },
    ],
    faq: [
      {
        qEn: "What makes Pencil unique as an exclusive Hostinger partner?",
        aEn: "As an authorized partner, we combine Hostinger's global tier-1 NVMe infrastructure, enterprise DDoS shielding, and global datacenters with our local Arabic-speaking DevOps engineers, custom cPanel screens, proprietary Pencil Cloud Panel, and direct WhatsApp support without endless waiting in ticket queues.",
        qAr: "ما الذي يميزكم بصفتكم وكيلاً معتمداً من هوستنجر Hostinger؟",
        aAr: "بصفتنا وكيلاً معتمداً، نجمع بين بنية هوستنجر السحابية العالمية ذات أقراص NVMe فائقة السرعة ومراكز البيانات العالمية، وبين الدعم الهندسي المباشر باللغة العربية عبر واتساب دون الانتظار في طوابير التذاكر، مع توفير شاشات cPanel كاملة وبانل بنسل السحابي وإشراف مهندسينا على كافة التفاصيل التقنية.",
      },
      {
        qEn: "What is the difference between KVM Linux VPS and Remote Desktop (RDP) VPS?",
        aEn: "KVM Linux VPS provides isolated compute resources with command-line root access, ideal for running Docker containers, Node.js/Python apps, and PostgreSQL databases. Windows & GUI Remote Desktop (RDP) VPS provides a full graphical desktop environment that you connect to via Windows Remote Desktop or Mac, running 24/7 for algorithmic trading bots, automated desktop tools, and continuous tasks without needing your laptop on.",
        qAr: "ما الفرق بين سيرفرات KVM لينكس وسيرفرات الديسكتوب الرسومي RDP؟",
        aAr: "سيرفرات KVM لينكس توفر موارد معزولة بالكامل مع وصول للجذر عبر سطر الأوامر (Terminal)، وهي مثالية لتشغيل تطبيقات الويب وحاويات Docker وقواعد البيانات الضخمة. بينما سيرفرات الديسكتوب الرسومي RDP توفر بيئة سطح مكتب رسومية بنظام Windows Server أو لينكس تتصل بها عبر Remote Desktop بجودة فائقة، وهي مصممة لتشغيل برامج التداول الآلي، روبوتات الأتمتة، وأدوات سطح المكتب 24/7 دون الحاجة لترك جهازك الشخصي يعمل.",
      },
      {
        qEn: "Do you provide full cPanel access and what is Pencil Cloud Panel?",
        aEn: "Yes, our web hosting packages come with full licensed cPanel and WHM screens for managing databases, file manager, FTP, and mailboxes. Additionally, we provide the streamlined Pencil Cloud Panel for 1-click server reboots, instant OS installs, automated snapshot creation, and live resource monitoring from one unified dashboard.",
        qAr: "هل توفرون شاشات cPanel كاملة وما هي لوحة بنسل السحابية (Pencil Panel)؟",
        aAr: "نعم، توفر باقات الاستضافة شاشات cPanel و WHM كاملة ومرخصة لإدارة قواعد البيانات والملفات وخدمات البريد بكل أريحية. وإلى جانبها نوفر لوحة تحكم بنسل السحابية (Pencil Cloud Panel) التي تتيح لك إعادة تشغيل السيرفر بنقرة واحدة، وإعادة تنصيب أنظمة التشغيل، وأخذ لقطات فورية (Snapshots)، ومراقبة استهلاك الموارد لحظياً من شاشة عصرية وسريعة.",
      },
      {
        qEn: "How do you guarantee zero downtime and continuous emails during migration?",
        aEn: "We duplicate your website files, databases, and mailboxes onto our cloud servers first and verify them thoroughly on a private staging link. We configure SPF and DKIM email records before updating DNS, ensuring no emails are dropped. Your old host remains fully operational as a 14-day safety net until you personally inspect and confirm that everything is running perfectly.",
        qAr: "كيف تضمنون نقل الموقع والبريد الإلكتروني دون أي توقف أو فقدان للبيانات؟",
        aAr: "نقوم بنسخ كامل لملفات الموقع وقواعد البيانات وصناديق البريد على سيرفراتنا السحابية أولاً، ونختبرها بدقة على رابط تجريبي خاص. كما نضبط سجلات حماية البريد الإلكتروني SPF و DKIM قبل تحويل الـ DNS لمنع ضياع أي رسالة واردة. ويبقى مضيفك القديم يعمل كشبكة أمان لمدة 14 يوماً حتى تتأكد بنفسك من أن كل شيء يعمل بكفاءة وسرعة فائقة.",
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
