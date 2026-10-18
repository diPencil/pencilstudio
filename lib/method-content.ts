export type MethodKey = "strategy" | "design" | "build";

export interface MethodTier {
  nameEn: string;
  nameAr: string;
  priceUsd: number;
  blurbEn: string;
  blurbAr: string;
  pointsEn: string[];
  pointsAr: string[];
  featured?: boolean;
}

export interface MethodContent {
  key: MethodKey;
  slug: string;
  stepEn: string;
  stepAr: string;
  accent: string;
  accentSoft: string;
  titleEn: string;
  titleAr: string;
  italicEn: string;
  italicAr: string;
  taglineEn: string;
  taglineAr: string;
  introEn: string;
  introAr: string;
  priceFromUsd: number;
  durationEn: string;
  durationAr: string;
  heroImage: string;
  heroFloat1En: string;
  heroFloat1Ar: string;
  heroFloat2En: string;
  heroFloat2Ar: string;
  stats: { valueEn: string; valueAr: string; labelEn: string; labelAr: string }[];
  painsTitleEn: string;
  painsTitleAr: string;
  painsAccentEn: string;
  painsAccentAr: string;
  painsSubEn: string;
  painsSubAr: string;
  pains: { tEn: string; tAr: string; dEn: string; dAr: string }[];
  processTitleEn: string;
  processTitleAr: string;
  processAccentEn: string;
  processAccentAr: string;
  processSubEn: string;
  processSubAr: string;
  steps: { tEn: string; tAr: string; dEn: string; dAr: string; timeEn: string; timeAr: string }[];
  splitTitleEn: string;
  splitTitleAr: string;
  splitAccentEn: string;
  splitAccentAr: string;
  splitBodyEn: string[];
  splitBodyAr: string[];
  splitImage: string;
  deliverablesEn: string[];
  deliverablesAr: string[];
  galleryTitleEn: string;
  galleryTitleAr: string;
  galleryAccentEn: string;
  galleryAccentAr: string;
  gallery: { src: string; capEn: string; capAr: string }[];
  compareTitleEn: string;
  compareTitleAr: string;
  compareAccentEn: string;
  compareAccentAr: string;
  compareSubEn: string;
  compareSubAr: string;
  compareRows: { labelEn: string; labelAr: string; usEn: string; usAr: string; themEn: string; themAr: string }[];
  pricingTitleEn: string;
  pricingTitleAr: string;
  pricingAccentEn: string;
  pricingAccentAr: string;
  pricingSubEn: string;
  pricingSubAr: string;
  tiers: MethodTier[];
  testimonials: { qEn: string; qAr: string; nEn: string; nAr: string; rEn: string; rAr: string }[];
  faq: { qEn: string; aEn: string; qAr: string; aAr: string }[];
  tools: string[];
  fitsEn: string;
  fitsAr: string;
  closeTitleEn: string;
  closeTitleAr: string;
  closeAccentEn: string;
  closeAccentAr: string;
  closeSubEn: string;
  closeSubAr: string;
}

const U = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;

export const METHOD_CONTENT: Record<MethodKey, MethodContent> = {
  strategy: {
    key: "strategy",
    slug: "strategy-direction",
    stepEn: "Step 01 · Strategy & Direction",
    stepAr: "الخطوة 01 · الاستراتيجية والاتجاه",
    accent: "#B45309",
    accentSoft: "rgba(180,83,9,0.1)",
    titleEn: "We shape the idea",
    titleAr: "نشكّل الفكرة قبل",
    italicEn: "before we design it.",
    italicAr: "ما نصممها.",
    taglineEn: "One week of hard thinking now. Three months of rework you never pay for.",
    taglineAr: "أسبوع واحد من التفكير الجاد الآن. وثلاثة شهور من إعادة الشغل لن تدفعها أبدا.",
    introEn:
      "Here is what usually kills projects. Not bad code. Week one. Nobody wrote down who this is for, what it must never do, or how we will know it worked. So everyone builds a different thing in their head. We fix that in five days. You, us, a whiteboard, your real numbers. You walk out with one signed direction that your designer, your developer and your accountant all read the same way.",
    introAr:
      "هذا ما يقتل المشاريع غالبا. ليس الكود السيئ. بل الأسبوع الأول. لا أحد كتب لمن هذا، ولا ما الذي يجب ألا يفعله أبدا، ولا كيف سنعرف أنه نجح. فيبني كل واحد شيئا مختلفا في رأسه. نحن نصلح ذلك في خمسة أيام. أنت ونحن وسبورة وأرقامك الحقيقية. وتخرج باتجاه واحد موقّع يقرؤه المصمم والمبرمج والمحاسب بنفس الطريقة.",
    priceFromUsd: 1200,
    durationEn: "5 to 7 days",
    durationAr: "من 5 إلى 7 أيام",
    heroImage: U("photo-1552664730-d307ca884978"),
    heroFloat1En: "42 sketches, 2 survive",
    heroFloat1Ar: "42 مسودة، تنجو اثنتان",
    heroFloat2En: "One signed doc",
    heroFloat2Ar: "وثيقة واحدة موقّعة",
    tools: ["Whiteboard", "Miro", "Sheets", "Voice notes", "Analytics"],
    fitsEn: "New ideas, stuck projects, partner disagreements",
    fitsAr: "أفكار جديدة ومشاريع متعثرة وخلافات شركاء",
    stats: [
      { valueEn: "90%", valueAr: "90%", labelEn: "of rework starts as an unclear decision", labelAr: "من إعادة الشغل بدايتها قرار غير واضح" },
      { valueEn: "5 days", valueAr: "5 أيام", labelEn: "from first workshop to signed paper", labelAr: "من أول ورشة إلى ورق موقّع" },
      { valueEn: "1 doc", valueAr: "وثيقة واحدة", labelEn: "the whole team builds from", labelAr: "يبني عليها الفريق كله" },
    ],
    painsTitleEn: "You are not the first",
    painsTitleAr: "لست أول",
    painsAccentEn: "to say this.",
    painsAccentAr: "من يقول هذا.",
    painsSubEn: "We hear some version of these lines on almost every first call. Nod twice and you need this step before anything else.",
    painsSubAr: "نسمع صيغة ما من هذه الجمل في كل مكالمة أولى تقريبا. إن هززت رأسك مرتين فأنت تحتاج هذه الخطوة قبل أي شيء آخر.",
    pains: [
      {
        tEn: "“Four opinions, zero decisions”",
        tAr: "«أربع آراء ولا قرار واحد»",
        dEn: "Your partner wants luxury. Sales wants cheap. Someone's cousin wants blue. And the customer? Nobody asked them. We put the customer's voice on the table with numbers, so taste stops winning over evidence.",
        dAr: "شريكك يريد الفخامة. والمبيعات تريد الرخيص. وابن عم أحدهم يريد الأزرق. والعميل؟ لم يسأله أحد. نحن نضع صوت العميل على الطاولة بالأرقام، فيتوقف الذوق عن الفوز على الدليل.",
      },
      {
        tEn: "“The last agency sold us a logo”",
        tAr: "«الوكالة السابقة باعت لنا شعارا»",
        dEn: "Nice files. But nobody answered the real questions. Which pages do we need. What goes on each one. What does winning look like after 90 days. We answer all three on paper before anyone draws anything.",
        dAr: "ملفات جميلة. لكن لا أحد أجاب عن الأسئلة الحقيقية. ما الصفحات التي نحتاجها. وماذا يوضع في كل واحدة. وكيف يبدو الفوز بعد 90 يوما. نحن نجيب عن الثلاثة على الورق قبل أن يرسم أحد أي شيء.",
      },
      {
        tEn: "“Every change costs us a week”",
        tAr: "«كل تعديل يكلفنا أسبوعا»",
        dEn: "“Actually, let's also add...” is the most expensive sentence in business. A direction doc draws the fence first. What is in, what is out, who signed it. Change requests drop by more than half when “no” was written down early.",
        dAr: "«بالمناسبة، لنضف أيضا...» هي أغلى جملة في التجارة. وثيقة الاتجاه ترسم السور أولا. ما الداخل وما الخارج ومن وقّع. طلبات التعديل تهبط لأكثر من النصف حين تكون «لا» مكتوبة من البداية.",
      },
      {
        tEn: "“Our Arabic and English are two brands”",
        tAr: "«العربية والإنجليزية عندنا علامتان مختلفتان»",
        dEn: "Same company, two personalities, one confused customer. We write the message once. Then we shape it for each language. Same promise. Same tone. Both sides feel like home.",
        dAr: "الشركة نفسها، والشخصية اثنتان، والعميل واحد مرتبك. نحن نكتب الرسالة مرة واحدة. ثم نشكّلها لكل لغة. الوعد نفسه. والنبرة نفسها. والجهتان تشعران كأنهما البيت.",
      },
    ],
    processTitleEn: "Your week,",
    processTitleAr: "أسبوعك،",
    processAccentEn: "hour by hour.",
    processAccentAr: "ساعة بساعة.",
    processSubEn: "Four working sessions. Small homework between them. A decision at the end of every day. No 80 slide decks.",
    processSubAr: "أربع جلسات عمل. وواجب صغير بينها. وقرار في نهاية كل يوم. ولا عروض من 80 شريحة.",
    steps: [
      {
        tEn: "Day 1 · The truth session",
        tAr: "اليوم الأول · جلسة الحقيقة",
        dEn: "Ninety minutes with the people who can say no. Margins on the table. Best customers named. Worst headaches admitted. You talk, we write everything down.",
        dAr: "تسعون دقيقة مع من يستطيعون قول لا. الهوامش على الطاولة. وأفضل العملاء بالأسماء. وأسوأ المشاكل معترف بها. أنت تتكلم ونحن نكتب كل شيء.",
        timeEn: "90 min",
        timeAr: "90 دقيقة",
      },
      {
        tEn: "Day 2 · Spying, politely",
        tAr: "اليوم الثاني · تجسس مهذب",
        dEn: "We mystery shop five competitors. Yes, we actually call them. We read your reviews line by line. Then we point at the gap you can honestly own and nobody else does.",
        dAr: "نتسوق خفية لدى خمسة منافسين. نعم نتصل بهم فعلا. ونقرأ تقييماتك سطرا سطرا. ثم نشير إلى الفجوة التي تستطيع امتلاكها بصدق ولا يملكها غيرك.",
        timeEn: "1 day",
        timeAr: "يوم واحد",
      },
      {
        tEn: "Day 3 · Draw, then destroy",
        tAr: "اليوم الثالث · ارسم ثم احذف",
        dEn: "Forty to sixty rough directions on paper, with you in the room. We kill nine out of ten together. Whatever survives has to pass one test. Would a twelve year old get it in ten seconds.",
        dAr: "من أربعين إلى ستين اتجاها خاما على الورق وأنت في الغرفة. نحذف تسعة من عشرة معا. وما ينجو يجب أن يجتاز اختبارا واحدا. هل يفهمه طفل في الثانية عشرة خلال عشر ثوان.",
        timeEn: "Half day",
        timeAr: "نصف يوم",
      },
      {
        tEn: "Days 4 and 5 · Paper that protects you",
        tAr: "اليومان الرابع والخامس · ورق يحميك",
        dEn: "Positioning on one page. Message house in both languages. A sitemap with real titles. Plus a list of what we refuse to do this round. You sign it. That signature is what saves your budget later.",
        dAr: "التموضع في صفحة واحدة. وبيت الرسائل باللغتين. وخريطة موقع بعناوين حقيقية. وقائمة بما نرفض فعله هذه الجولة. توقّعها. وهذا التوقيع هو ما ينقذ ميزانيتك لاحقا.",
        timeEn: "2 days",
        timeAr: "يومان",
      },
    ],
    splitTitleEn: "Paper,",
    splitTitleAr: "ورق،",
    splitAccentEn: "not promises.",
    splitAccentAr: "لا وعود.",
    splitBodyEn: [
      "Advice that lives in someone's head is a rumor. Ours lives in a twelve to eighteen page document your team can open any morning. Who you serve. What you say. What each page does. What waits for later. Nothing hiding in a designer's laptop.",
      "A tourism client once came in asking for “a site like Booking”. The paper showed his real weapon was answering WhatsApp in four minutes, not a booking engine. So we built around that. Direct inquiries went up sixty percent. Zero ads spent.",
    ],
    splitBodyAr: [
      "النصيحة التي تعيش في رأس أحدهم إشاعة. ونصيحتنا تعيش في وثيقة من اثنتي عشرة إلى ثماني عشرة صفحة يفتحها فريقك أي صباح. من تخدم. وماذا تقول. وماذا تفعل كل صفحة. وما ينتظر لاحقا. لا شيء مختبئ في لابتوب مصمم.",
      "جاءنا عميل سياحة مرة يطلب «موقعا مثل بوكينج». وأظهر الورق أن سلاحه الحقيقي هو الرد على واتساب في أربع دقائق لا محرك حجز. فبنينا حول ذلك. وارتفعت الاستفسارات المباشرة ستين بالمئة. ولم يُصرف مليم على إعلانات.",
    ],
    splitImage: U("photo-1553877522-43269d4ea984"),
    deliverablesEn: [
      "Positioning one pager plus message house, Arabic and English",
      "Sitemap with real titles and who writes each page",
      "Teardown of five competitors with prices and gaps",
      "A signed “we will not do this” list",
      "Ninety day success metrics plus a simple tracking sheet",
      "Recorded walkthrough your team can replay anytime",
    ],
    deliverablesAr: [
      "صفحة تموضع مع بيت الرسائل بالعربية والإنجليزية",
      "خريطة موقع بعناوين حقيقية مع مسؤول كل صفحة",
      "تشريح خمسة منافسين بأسعارهم وثغراتهم",
      "قائمة «لن نفعل هذا» موقّعة",
      "مؤشرات نجاح لتسعين يوما مع شيت متابعة بسيط",
      "شرح مسجّل يعيده فريقك في أي وقت",
    ],
    galleryTitleEn: "Inside",
    galleryTitleAr: "من داخل",
    galleryAccentEn: "a strategy sprint.",
    galleryAccentAr: "سبرينت الاستراتيجية.",
    gallery: [
      { src: U("photo-1552664730-d307ca884978"), capEn: "Workshop wall on day three. Only survivors stay up", capAr: "حائط الورشة في اليوم الثالث. الناجون فقط يبقون معلقين" },
      { src: U("photo-1460925895917-afdab827c52f"), capEn: "Real numbers first. Design comes later", capAr: "الأرقام الحقيقية أولا. والتصميم يأتي لاحقا" },
      { src: U("photo-1557804506-669a67965ba0"), capEn: "The owner sketches the sitemap with us", capAr: "صاحب النشاط يرسم خريطة الموقع معنا" },
      { src: U("photo-1553877522-43269d4ea984"), capEn: "Arabic and English messages, side by side", capAr: "الرسائل العربية والإنجليزية جنبا إلى جنب" },
    ],
    compareTitleEn: "Us against",
    compareTitleAr: "نحن",
    compareAccentEn: "the usual.",
    compareAccentAr: "والخيارات المعتادة.",
    compareSubEn: "Blunt version. Strategy is the one place where cheap advice ends up the most expensive.",
    compareSubAr: "النسخة الصريحة. الاستراتيجية هي المكان الذي تكون فيه النصيحة الرخيصة هي الأغلى في النهاية.",
    compareRows: [
      {
        labelEn: "Who sits with you",
        labelAr: "من يجلس معك",
        usEn: "A founder level workshop, recorded end to end",
        usAr: "ورشة بمستوى المؤسسين ومسجلة من أولها لآخرها",
        themEn: "A junior account manager with a template",
        themAr: "موظف حسابات مبتدئ مع قالب جاهز",
      },
      {
        labelEn: "Competitor research",
        labelAr: "بحث المنافسين",
        usEn: "Five real mystery shops plus a price map",
        usAr: "خمس تجارب شراء حقيقية مع خريطة أسعار",
        themEn: "Screenshots and educated guesses",
        themAr: "لقطات شاشة وتخمينات متعلمة",
      },
      {
        labelEn: "Arabic quality",
        labelAr: "جودة العربية",
        usEn: "Written from scratch, never translated",
        usAr: "تُكتب من الصفر ولا تُترجم أبدا",
        themEn: "Slogans through machine translation",
        themAr: "شعارات عبر ترجمة آلية",
      },
      {
        labelEn: "What you keep",
        labelAr: "ما تحتفظ به",
        usEn: "A signed doc, metrics, and a sitemap",
        usAr: "وثيقة موقعة ومؤشرات وخريطة موقع",
        themEn: "A PDF nobody opens twice",
        themAr: "ملف لا يفتحه أحد مرتين",
      },
      {
        labelEn: "If the direction is wrong",
        labelAr: "إن كان الاتجاه خاطئا",
        usEn: "We rerun day three free. Once. Our promise.",
        usAr: "نعيد اليوم الثالث مجانا. مرة واحدة. ووعدنا.",
        themEn: "You pay for a “new phase”",
        themAr: "تدفع ثمن «مرحلة جديدة»",
      },
    ],
    pricingTitleEn: "Strategy",
    pricingTitleAr: "باقات",
    pricingAccentEn: "packages.",
    pricingAccentAr: "الاستراتيجية.",
    pricingSubEn: "Fixed prices on this page. And if we cannot help you, we say it on the intro call and charge nothing.",
    pricingSubAr: "أسعار ثابتة في هذه الصفحة. وإن لم نستطع مساعدتك نقولها في مكالمة التعارف ولا نتقاضى شيئا.",
    tiers: [
      {
        nameEn: "Clarity Call",
        nameAr: "مكالمة الوضوح",
        priceUsd: 150,
        blurbEn: "For one small decision. Rename, reprice, or kill a feature.",
        blurbAr: "لقرار واحد صغير. تغيير اسم أو سعر أو حذف ميزة.",
        pointsEn: ["Ninety minute video session", "A written summary with the decision", "A quick look at three rivals", "Deducted from a sprint for 14 days"],
        pointsAr: ["جلسة مرئية تسعون دقيقة", "ملخص مكتوب مع القرار", "نظرة سريعة على ثلاثة منافسين", "تُخصم من السبرينت لأربعة عشر يوما"],
      },
      {
        nameEn: "Direction Sprint",
        nameAr: "سبرينت الاتجاه",
        priceUsd: 1200,
        blurbEn: "The full week. Almost every project starts here.",
        blurbAr: "الأسبوع الكامل. وكل المشاريع تقريبا تبدأ هنا.",
        pointsEn: ["Four sessions plus a 12 to 18 page doc", "Sitemap and message house, both languages", "Five competitor teardown", "Ninety day metrics sheet", "Fully credited toward design or build"],
        pointsAr: ["أربع جلسات مع وثيقة من 12 إلى 18 صفحة", "خريطة موقع وبيت رسائل باللغتين", "تشريح خمسة منافسين", "شيت مؤشرات تسعين يوما", "تُخصم بالكامل من التصميم أو البناء"],
        featured: true,
      },
      {
        nameEn: "Partner Quarter",
        nameAr: "رفيق الربع",
        priceUsd: 3200,
        blurbEn: "The sprint plus three months of someone checking your math.",
        blurbAr: "السبرينت مع ثلاثة شهور من مراجعة حساباتك.",
        pointsEn: ["Everything in the Sprint", "A two hour review every month", "A WhatsApp line to your strategist", "A quarterly report for partners"],
        pointsAr: ["كل ما في السبرينت", "مراجعة ساعتين كل شهر", "خط واتساب مع الاستراتيجي الخاص بك", "تقرير ربع سنوي للشركاء"],
      },
    ],
    testimonials: [
      {
        qEn: "They told us not to build the app. That no saved us nine thousand dollars. Six months later we built the right website instead, and it paid for itself.",
        qAr: "قالوا لنا لا تبنوا التطبيق. وكلمة لا هذه وفّرت علينا تسعة آلاف دولار. وبعد ستة شهور بنينا الموقع الصحيح بدلا منه، ودفع تكلفته بنفسه.",
        nEn: "Karim E., tourism in Hurghada",
        nAr: "كريم ع. سياحة في الغردقة",
        rEn: "Direction Sprint",
        rAr: "سبرينت الاتجاه",
      },
      {
        qEn: "The “we will not do this” list was worth the fee on its own. Partner fights stopped. The paper decides now, not egos.",
        qAr: "قائمة «لن نفعل هذا» وحدها كانت تستحق المبلغ. وتوقفت خلافات الشركاء. الورق هو من يقرر الآن لا الغرور.",
        nEn: "Dr. Salma R., a clinic in Cairo",
        nAr: "د. سلمى ر. عيادة في القاهرة",
        rEn: "Direction Sprint",
        rAr: "سبرينت الاتجاه",
      },
      {
        qEn: "First agency that read our reviews before our brief. They quoted our own customers back to us, word for word.",
        qAr: "أول وكالة تقرأ تقييماتنا قبل أن تقرأ طلبنا. واقتبسوا كلام عملائنا أنفسهم أمامنا حرفا بحرف.",
        nEn: "Mahmoud A., a restaurant in New Cairo",
        nAr: "محمود أ. مطعم في التجمع",
        rEn: "Clarity Call, then Sprint",
        rAr: "مكالمة ثم سبرينت",
      },
    ],
    faq: [
      {
        qEn: "We already know what we want. Can we skip this?",
        aEn: "Sometimes. And we will tell you when. If your sitemap, your messages and your success metric fit on one page and everyone agrees, we go straight to design and discount the sprint. If that one page takes more than twenty minutes, you have your answer.",
        qAr: "نعرف ما نريد بالفعل. هل يمكن تجاوز هذا؟",
        aAr: "أحيانا. وسنخبرك متى. إن كانت خريطة موقعك ورسائلك ومؤشر نجاحك تتسع في صفحة واحدة ويتفق عليها الجميع، ننتقل للتصميم مباشرة ونخصم السبرينت. وإن استغرقت تلك الصفحة أكثر من عشرين دقيقة، فهذه إجابتك.",
      },
      {
        qEn: "Who has to show up?",
        aEn: "Whoever is allowed to say no. The owner or the managing partner. Plus the person who talks to customers every day, receptionist or sales rep. That second person carries more truth than any report ever will.",
        qAr: "من يجب أن يحضر؟",
        aAr: "من يُسمح له بقول لا. المالك أو الشريك المدير. ومعه من يكلم العملاء كل يوم، موظفة الاستقبال أو مندوب المبيعات. وهذا الثاني يحمل من الحقيقة أكثر مما سيحمله أي تقرير.",
      },
      {
        qEn: "Do you sign an NDA?",
        aEn: "Before the first session if you want one. One page, mutual, no drama. Your numbers stay yours.",
        qAr: "هل توقعون عدم إفصاح؟",
        aAr: "قبل أول جلسة إن أردت. صفحة واحدة ومتبادلة ودون تعقيد. وأرقامك تبقى لك.",
      },
      {
        qEn: "What if we hate your recommended direction?",
        aEn: "Then we do not build it. The doc has a dissent box. Your objection written exactly as you said it, our recommendation next to it, and your signature under the choice. No quiet resentment rotting in month three.",
        qAr: "ماذا إن كرهنا اتجاهكم المقترح؟",
        aAr: "إذن لا نبنيه. في الوثيقة خانة اعتراض. اعتراضك مكتوب كما قلته تماما، وتوصيتنا بجانبه، وتوقيعك تحت الاختيار. ولا ضغينة صامتة تتعفن في الشهر الثالث.",
      },
      {
        qEn: "Does the sprint count toward the project?",
        aEn: "Every cent of it. The full sprint fee comes off design or build if you continue within sixty days. Strategy should never feel like an extra tax.",
        qAr: "هل يُحتسب السبرينت من المشروع؟",
        aAr: "كل قرش فيه. تُخصم رسوم السبرينت كاملة من التصميم أو البناء إن أكملت خلال ستين يوما. ويجب ألا تبدو الاستراتيجية أبدا كضريبة إضافية.",
      },
      {
        qEn: "Can we do this remotely?",
        aEn: "Yes. Two video sessions, a shared board, some voice notes. Inside Cairo, Giza or Alex we can come to you for a working day. Outside Egypt we stay remote and it works just fine.",
        qAr: "هل يمكن فعل هذا عن بُعد؟",
        aAr: "نعم. جلستان مرئيتان وسبورة مشتركة وبعض الرسائل الصوتية. وداخل القاهرة أو الجيزة أو الإسكندرية يمكن أن نأتيك ليوم عمل. وخارج مصر نبقى عن بُعد ويعمل الأمر جيدا.",
      },
    ],
    closeTitleEn: "Start with a decision,",
    closeTitleAr: "ابدأ بقرار",
    closeAccentEn: "not a deposit.",
    closeAccentAr: "لا بعربون.",
    closeSubEn: "Twenty free minutes on an intro call. And if strategy is not your bottleneck, we will tell you what is. Also free.",
    closeSubAr: "عشرون دقيقة مجانية في مكالمة تعارف. وإن لم تكن الاستراتيجية هي عنق الزجاجة لديك، سنخبرك ما هي. مجانا أيضا.",
  },
  design: {
    key: "design",
    slug: "design-experience",
    stepEn: "Step 02 · Design & Experience",
    stepAr: "الخطوة 02 · التصميم والتجربة",
    accent: "#6D28D9",
    accentSoft: "rgba(109,40,217,0.1)",
    titleEn: "Design that feels",
    titleAr: "تصميم يُشعرك",
    italicEn: "clear and premium.",
    italicAr: "بالوضوح والفخامة.",
    taglineEn: "Pages your customers get in seconds. And your staff can explain without calling us.",
    taglineAr: "صفحات يفهمها عملاؤك في ثوان. ويشرحها فريقك دون الاتصال بنا.",
    introEn:
      "Design is not decoration. It is the gap between “how do I book” and an actual booking. We draw brand visuals, pages and user journeys as one thing. Phones first, Arabic first. Then we put it on real phones in front of real people before production code ever touches it.",
    introAr:
      "التصميم ليس زينة. بل هو المسافة بين «كيف أحجز» وحجز فعلي. نرسم الهوية والصفحات ورحلة المستخدم كشيء واحد. الهواتف أولا والعربية أولا. ثم نضعه على هواتف حقيقية أمام أناس حقيقيين قبل أن يلمسه كود الإنتاج.",
    priceFromUsd: 2200,
    durationEn: "2 to 4 weeks",
    durationAr: "من أسبوعين إلى أربعة",
    heroImage: U("photo-1561070791-2526d30994b5"),
    heroFloat1En: "Tested on 5 real users",
    heroFloat1Ar: "مُجرّب على 5 مستخدمين حقيقيين",
    heroFloat2En: "Arabic and English, pixel clean",
    heroFloat2Ar: "عربي وإنجليزي بدقة البكسل",
    tools: ["Figma", "Canva", "Maze testing", "After Effects", "SVG system"],
    fitsEn: "Websites, apps, menus, packaging, social faces",
    fitsAr: "مواقع وتطبيقات وقوائم وتغليف وواجهات سوشيال",
    stats: [
      { valueEn: "3 taps", valueAr: "3 ضغطات", labelEn: "the most it takes to book or order", labelAr: "أقصى ما يلزم للحجز أو الطلب" },
      { valueEn: "2 rounds", valueAr: "جولتان", labelEn: "of revisions, on your real content", labelAr: "من التعديلات على محتواك الحقيقي" },
      { valueEn: "100%", valueAr: "100%", labelEn: "of the Figma files are yours", labelAr: "من ملفات فيجما ملكك" },
    ],
    painsTitleEn: "Quiet ways design",
    painsTitleAr: "طرق صامتة",
    painsAccentEn: "loses you money.",
    painsAccentAr: "يخسرك بها التصميم.",
    painsSubEn: "Design debt never announces itself. It shows up as small annoyances. Each one quietly deletes a sale.",
    painsSubAr: "الدين التصميمي لا يعلن عن نفسه أبدا. بل يظهر كإزعاجات صغيرة. وكل واحد منها يحذف عملية بيع بصمت.",
    pains: [
      {
        tEn: "“People WhatsApp us instead of using the site”",
        tAr: "«الناس تراسلنا واتساب بدل استخدام الموقع»",
        dEn: "That sentence is a design verdict. The site failed to answer price, availability and trust inside thirty seconds. So we redesign those thirty seconds. Not the footer.",
        dAr: "هذه الجملة حكم تصميمي. فشل الموقع في الإجابة عن السعر والتوافر والثقة خلال ثلاثين ثانية. لذلك نعيد تصميم تلك الثواني الثلاثين. لا التذييل.",
      },
      {
        tEn: "“Instagram makes us look richer than we are”",
        tAr: "«إنستجرام يظهرنا أغنى مما نحن»",
        dEn: "Filters can hide a weak identity for a while. Then the customer walks in and feels the gap between the feed and the place. We close it with one visual system across the sign, the menu, the box and the screen.",
        dAr: "تستطيع الفلاتر إخفاء الهوية الضعيفة لبعض الوقت. ثم يدخل العميل ويشعر بالفجوة بين الحساب والمكان. نحن نغلقها بمنظومة بصرية واحدة للافتة والقائمة والعلبة والشاشة.",
      },
      {
        tEn: "“Our Arabic looks embarrassed”",
        tAr: "«العربية عندنا تبدو محرجة»",
        dEn: "Flipped layouts. Broken numbers. A Latin font stretched over Arabic letters. We set the Arabic first and let English follow. Your mother should look at it and find it beautiful.",
        dAr: "تخطيطات مقلوبة. وأرقام مكسورة. وخط لاتيني ممدود فوق حروف عربية. نحن ننضّد العربية أولا ونجعل الإنجليزية تتبع. ويجب أن تنظر إليها والدتك فتجدها جميلة.",
      },
      {
        tEn: "“Every post needs a designer on call”",
        tAr: "«كل منشور يحتاج مصمما تحت الطلب»",
        dEn: "That is a system failure, not a staff failure. We ship templates with the styles locked. Your team changes the words. The design never breaks. Nobody waits for anybody.",
        dAr: "هذا فشل منظومة لا فشل موظفين. نسلّم قوالب بأنماط مقفلة. يغيّر فريقك الكلمات. ولا ينكسر التصميم أبدا. ولا ينتظر أحد أحدا.",
      },
    ],
    processTitleEn: "Blank Figma to",
    processTitleAr: "من فيجما فارغة",
    processAccentEn: "tested prototype.",
    processAccentAr: "إلى نموذج مُختبَر.",
    processSubEn: "From week one there is a link you can tap on your own phone. There is no “just trust the mockup” phase here.",
    processSubAr: "من الأسبوع الأول يوجد رابط تستطيع لمسه على هاتفك. ولا توجد هنا مرحلة «ثق في الموك أب فقط».",
    steps: [
      {
        tEn: "Week 1 · Paths before pictures",
        tAr: "الأسبوع الأول · المسارات قبل الصور",
        dEn: "We draw the three money paths first. Book, order, ask. Gray boxes you tap through on your phone. Deliberately ugly. Speed beats beauty at this stage.",
        dAr: "نرسم مسارات الأموال الثلاثة أولا. احجز واطلب واسأل. مربعات رمادية تتنقل فيها على هاتفك. قبيحة عن قصد. فالسرعة تغلب الجمال في هذه المرحلة.",
        timeEn: "Days 1 to 5",
        timeAr: "من اليوم 1 إلى 5",
      },
      {
        tEn: "Week 2 · The visual system",
        tAr: "الأسبوع الثاني · المنظومة البصرية",
        dEn: "Colors with rules for using them. An Arabic and Latin type pair that actually matches. Buttons, cards, icons. Built as components, not pasted pictures.",
        dAr: "ألوان مع قواعد لاستخدامها. وثنائية خطوط عربية ولاتينية متطابقة فعلا. وأزرار وبطاقات وأيقونات. مبنية كمكونات لا كصور ملصقة.",
        timeEn: "Days 6 to 10",
        timeAr: "من اليوم 6 إلى 10",
      },
      {
        tEn: "Weeks 2 and 3 · Your stuff, not lorem",
        tAr: "الأسبوعان الثاني والثالث · أشياؤك لا نص تجريبي",
        dEn: "Your photos. Your prices. Your reviews. We design around the long Arabic headline that breaks other templates, because that headline will exist.",
        dAr: "صورك. وأسعارك. وتقييماتك. نصمم حول العنوان العربي الطويل الذي يكسر القوالب الأخرى، لأن ذلك العنوان سيوجد فعلا.",
        timeEn: "Days 8 to 14",
        timeAr: "من اليوم 8 إلى 14",
      },
      {
        tEn: "Weeks 3 and 4 · Test, then hand over",
        tAr: "الأسبوعان الثالث والرابع · اختبر ثم سلّم",
        dEn: "Five users. Five tasks. All recorded. We fix what failed. Then you get tidy Figma, specs a developer can build from, and templates your team keeps forever.",
        dAr: "خمسة مستخدمين. وخمس مهام. وكلها مسجلة. نصلح ما فشل. ثم تحصل على فيجما مرتبة ومواصفات يستطيع المبرمج البناء عليها وقوالب يحتفظ بها فريقك للأبد.",
        timeEn: "Days 14 to 20",
        timeAr: "من اليوم 14 إلى 20",
      },
    ],
    splitTitleEn: "One face",
    splitTitleAr: "وجه واحد",
    splitAccentEn: "everywhere.",
    splitAccentAr: "في كل مكان.",
    splitBodyEn: [
      "A clinic's sign, its booking page, its prescription slip and its WhatsApp replies should feel like one place. Same green. Same headings. Same calm voice. From the street to the screen, no surprises.",
      "A restaurant in New Cairo unified its menu, its boxes and its ordering page. The “wait, is this the same place” confusion went to zero. Delivery reorders climbed. Same food. One coherent face.",
    ],
    splitBodyAr: [
      "لافتة العيادة وصفحة حجزها وروشتّها وردود واتساب يجب أن تبدو مكانا واحدا. الأخضر نفسه. والعناوين نفسها. والصوت الهادئ نفسه. من الشارع إلى الشاشة دون مفاجآت.",
      "وحّد مطعم في التجمع قائمته وعلبَه وصفحة الطلب. فارتباك «لحظة، هل هذا نفس المكان» نزل إلى الصفر. وارتفعت إعادة طلب الدليفري. الطعام نفسه. والوجه واحد متماسك.",
    ],
    splitImage: U("photo-1586717791821-3f44a563fa4c"),
    deliverablesEn: [
      "User flows plus a clickable prototype, tested on phones",
      "A interface system with type, color, buttons, cards, icons",
      "Eight to twenty pages designed in both languages",
      "Identity touch ups with social covers and a price sheet",
      "A template kit in Figma and Canva with locked styles",
      "Developer handoff with specs, assets and motion notes",
    ],
    deliverablesAr: [
      "مسارات استخدام مع نموذج قابل للمس ومُجرّب على الهواتف",
      "منظومة واجهة بخطوط وألوان وأزرار وبطاقات وأيقونات",
      "من ثماني إلى عشرين صفحة مصممة باللغتين",
      "رتوش هوية مع أغلفة سوشيال وشيت أسعار",
      "عدة قوالب في فيجما وكانفا بأنماط مقفلة",
      "تسليم للمبرمج بمواصفات وأصول وملاحظات حركة",
    ],
    galleryTitleEn: "Design out",
    galleryTitleAr: "التصميم",
    galleryAccentEn: "in the wild.",
    galleryAccentAr: "على أرض الواقع.",
    gallery: [
      { src: U("photo-1561070791-2526d30994b5"), capEn: "Type pairing wall. Arabic goes first", capAr: "حائط تركيب الخطوط. العربية أولا" },
      { src: U("photo-1559028012-481c04fa702d"), capEn: "Homepage test, phone in hand", capAr: "اختبار الرئيسية والهاتف في اليد" },
      { src: U("photo-1545235617-9465d2a55698"), capEn: "A component system, not screenshots", capAr: "منظومة مكونات لا لقطات شاشة" },
      { src: U("photo-1586717791821-3f44a563fa4c"), capEn: "Booking flow. Three taps to confirm", capAr: "مسار الحجز. ثلاث ضغطات للتأكيد" },
    ],
    compareTitleEn: "Us against",
    compareTitleAr: "نحن",
    compareAccentEn: "the usual.",
    compareAccentAr: "والخيارات المعتادة.",
    compareSubEn: "Pretty is cheap. Tested, bilingual and truly yours is rare.",
    compareSubAr: "الجميل رخيص. أما المُختبَر وثنائي اللغة والملك لك فعلا فنادر.",
    compareRows: [
      {
        labelEn: "Designed around",
        labelAr: "يُصمم حول",
        usEn: "Your photos, your prices, your long headlines",
        usAr: "صورك وأسعارك وعناوينك الطويلة",
        themEn: "Filler text with stock photos",
        themAr: "نص حشو مع صور جاهزة",
      },
      {
        labelEn: "Arabic",
        labelAr: "العربية",
        usEn: "Set first, right to left by nature",
        usAr: "تُنضّد أولا ومن اليمين لليسار بطبيعتها",
        themEn: "An English layout, flipped",
        themAr: "تخطيط إنجليزي مقلوب",
      },
      {
        labelEn: "Testing",
        labelAr: "الاختبار",
        usEn: "Five users recorded, fixes included",
        usAr: "خمسة مستخدمين مسجلين والإصلاح مشمول",
        themEn: "“Looks good to me”",
        themAr: "«يبدو جيدا بالنسبة لي»",
      },
      {
        labelEn: "Files you receive",
        labelAr: "الملفات التي تصلك",
        usEn: "Tidy Figma plus templates that last",
        usAr: "فيجما مرتبة مع قوالب تعيش",
        themEn: "Flat images sent over WhatsApp",
        themAr: "صور مسطحة مرسلة عبر واتساب",
      },
      {
        labelEn: "After delivery",
        labelAr: "بعد التسليم",
        usEn: "Fourteen days of tweaks and a training video",
        usAr: "أربعة عشر يوما من التعديلات مع فيديو تدريب",
        themEn: "Gone quiet after the invoice",
        themAr: "صمت تام بعد الفاتورة",
      },
    ],
    pricingTitleEn: "Design",
    pricingTitleAr: "باقات",
    pricingAccentEn: "packages.",
    pricingAccentAr: "التصميم.",
    pricingSubEn: "Priced per project, never per hour. Hours punish the careful.",
    pricingSubAr: "السعر بالمشروع وليس بالساعة أبدا. فالساعة تعاقب المتقن.",
    tiers: [
      {
        nameEn: "Landing Polish",
        nameAr: "تلميع صفحة",
        priceUsd: 900,
        blurbEn: "One page that has to sell. Hero down to footer.",
        blurbAr: "صفحة واحدة يجب أن تبيع. من البطل حتى التذييل.",
        pointsEn: ["One page in both languages", "Copy touch up included", "A phone first prototype", "One full revision round"],
        pointsAr: ["صفحة واحدة باللغتين", "تحسين النصوص مشمول", "نموذج يبدأ من الجوال", "جولة تعديل كاملة واحدة"],
      },
      {
        nameEn: "Website Experience",
        nameAr: "تجربة موقع",
        priceUsd: 2200,
        blurbEn: "Full site experience. Tested and ready to build.",
        blurbAr: "تجربة موقع كاملة. مُختبَرة وجاهزة للبناء.",
        pointsEn: ["Up to twelve pages, both languages", "Clickable prototype with a five user test", "A component system with templates", "Two revision rounds plus handoff"],
        pointsAr: ["حتى اثنتي عشرة صفحة باللغتين", "نموذج قابل للمس مع اختبار خمسة مستخدمين", "منظومة مكونات مع قوالب", "جولتا تعديل مع التسليم"],
        featured: true,
      },
      {
        nameEn: "Brand plus Product",
        nameAr: "هوية مع منتج",
        priceUsd: 4800,
        blurbEn: "An identity refresh with the website or app to match.",
        blurbAr: "تحديث هوية مع الموقع أو التطبيق ليليق بها.",
        pointsEn: ["Logo touch up with a visual system", "Up to twenty pages or thirty app screens", "A packaging and print sheet", "A five to eight second motion intro"],
        pointsAr: ["تحسين الشعار مع منظومة بصرية", "حتى عشرين صفحة أو ثلاثين شاشة تطبيق", "شيت تغليف ومطبوعات", "مقدمة موشن من خمس إلى ثماني ثوان"],
      },
    ],
    testimonials: [
      {
        qEn: "Our old site had eleven menu items. They cut it to four and bookings went up. I was angry about the cut. Then I saw the numbers.",
        qAr: "كان موقعنا القديم فيه أحد عشر عنصرا في القائمة. خفضوها إلى أربعة فزادت الحجوزات. غضبت من الحذف. ثم رأيت الأرقام.",
        nEn: "Hany S., a clinic in Alex",
        nAr: "هاني س. عيادة في الإسكندرية",
        rEn: "Website Experience",
        rAr: "تجربة موقع",
      },
      {
        qEn: "My staff edits offers in Canva now and calls nobody. That alone covered the project cost in two months.",
        qAr: "فريقي يعدّل العروض في كانفا الآن ولا يتصل بأحد. وهذا وحده غطى تكلفة المشروع في شهرين.",
        nEn: "Nourhan K., an academy in Cairo",
        nAr: "نورهان ك. أكاديمية في القاهرة",
        rEn: "Brand plus Product",
        rAr: "هوية مع منتج",
      },
      {
        qEn: "They tested with my actual customers, not their friends. One lady could not find the price. They moved it up the page the same day.",
        qAr: "اختبروا مع عملائي الحقيقيين لا أصدقائهم. سيدة لم تجد السعر. فنقلوه لأعلى الصفحة في اليوم نفسه.",
        nEn: "Omar F., real estate in the New Capital",
        nAr: "عمر ف. عقارات في العاصمة الجديدة",
        rEn: "Website Experience",
        rAr: "تجربة موقع",
      },
    ],
    faq: [
      {
        qEn: "Can you work from our current logo?",
        aEn: "Most of the time, yes. We keep what people recognize and repair what is broken. Spacing, the Arabic pairing, colors with rules. Only when the mark is truly beyond saving do we suggest a redraw, and we show you the two side by side so you see why.",
        qAr: "هل تعملون من شعارنا الحالي؟",
        aAr: "في معظم الأوقات نعم. نحتفظ بما يميزه الناس ونصلح المكسور. المسافات وثنائية العربية والألوان بقواعد. ولا نقترح إعادة الرسم إلا حين تكون العلامة ميؤوسا منها فعلا، ونريك الاثنين جنبا إلى جنب لترى السبب.",
      },
      {
        qEn: "How many revision rounds do we get?",
        aEn: "Two full rounds on real content. That turns out to be plenty once the flows are agreed first. Extra rounds run one hundred eighty dollars each, quoted upfront. So nobody drags their feet and nobody rushes you either.",
        qAr: "كم جولة تعديل نحصل عليها؟",
        aAr: "جولتان كاملتان على محتوى حقيقي. وهذا يتبين أنه كافٍ حين تُتفق المسارات أولا. والجولات الإضافية بمئة وثمانين دولارا للجولة بعرض مسبق. فلا يماطل أحد ولا يستعجلك أحد أيضا.",
      },
      {
        qEn: "Do we own the Figma files?",
        aEn: "Completely. Organized, named in English, with a ten minute handover video. If you leave us tomorrow, any designer on earth can continue. That is exactly the point.",
        qAr: "هل نملك ملفات فيجما؟",
        aAr: "تماما. مرتبة ومسماة بالإنجليزية مع فيديو تسليم عشر دقائق. وإن تركتنا غدا يستطيع أي مصمم على الأرض الإكمال. وهذه هي الفكرة بالظبط.",
      },
      {
        qEn: "Can you design only, while someone else builds?",
        aEn: "Happens all the time. Our handoff is made for it. Specs, assets, measurements, motion notes, the works. And we review the built pages once for free, because good design dies inside bad implementation.",
        qAr: "هل تصممون فقط بينما يبني آخرون؟",
        aAr: "يحدث طوال الوقت. وتسليمنا مصنوع لذلك. مواصفات وأصول ومقاسات وملاحظات حركة وكل شيء. ونراجع الصفحات المبنية مرة مجانا، لأن التصميم الجيد يموت داخل التنفيذ السيئ.",
      },
      {
        qEn: "What about motion and animation?",
        aEn: "Quiet and on purpose. Button feedback, sections that reveal, one hero moment. No flying banners from another decade. And every animation ships with a reduced motion fallback, for people who need calm screens.",
        qAr: "ماذا عن الحركة والأنيميشن؟",
        aAr: "هادئة ومقصودة. استجابة أزرار وأقسام تظهر ولحظة بطل واحدة. ولا لافتات طائرة من عقد آخر. وكل حركة تُسلَّم مع بديل مخفّض لمن يحتاج شاشات هادئة.",
      },
      {
        qEn: "How do you handle Arabic fonts?",
        aEn: "We pair Alexandria, IBM Plex Sans Arabic or Cairo with Inter, depending on the mood and whether the weights truly match. The heaviest headline and the tiniest label get tested in both languages before anything is locked.",
        qAr: "كيف تتعاملون مع الخطوط العربية؟",
        aAr: "نركّب أليكساندريا أو آي بي إم بلكس العربي أو القاهرة مع إنتر، حسب الروح وحسب تطابق الأوزان فعلا. وأثقل عنوان وأصغر تسمية يُختبَران باللغتين قبل اعتماد أي شيء.",
      },
    ],
    closeTitleEn: "See your product",
    closeTitleAr: "شاهد منتجك",
    closeAccentEn: "before we build it.",
    closeAccentAr: "قبل أن نبنيه.",
    closeSubEn: "A clickable homepage concept in seven days. Yours to keep, even if we never work together again.",
    closeSubAr: "تصور رئيسية قابل للمس في سبعة أيام. ملكك تحتفظ به حتى إن لم نعمل معا مجددا أبدا.",
  },
  build: {
    key: "build",
    slug: "build-launch",
    stepEn: "Step 03 · Build & Launch",
    stepAr: "الخطوة 03 · البناء والإطلاق",
    accent: "#0E7490",
    accentSoft: "rgba(14,116,144,0.1)",
    titleEn: "Systems ready for",
    titleAr: "أنظمة جاهزة",
    italicEn: "daily business.",
    italicAr: "للشغل اليومي.",
    taglineEn: "Websites, apps, dashboards, booking flows. Clean code, fast load, support that picks up.",
    taglineAr: "مواقع وتطبيقات وداشبورد وحجوزات. كود نظيف وتحميل سريع ودعم يرد.",
    introEn:
      "Launching a demo is easy. We build the boring parts that keep money moving. Forms that actually reach you. Bookings that remind themselves. A dashboard your staff opens every morning without being told. Backups that restore when it matters. Then we stay after launch, because launch day is day one. Not the finish line.",
    introAr:
      "إطلاق عرض تجريبي سهل. نحن نبني الأجزاء المملة التي تُبقي المال يتحرك. نماذج تصلك فعلا. وحجوزات تُذكّر نفسها. وداشبورد يفتحها فريقك كل صباح دون أن يُطلب منه. ونسخ احتياطية تُسترجع حين يلزم. ثم نبقى بعد الإطلاق، لأن يوم الإطلاق هو اليوم الأول. وليس خط النهاية.",
    priceFromUsd: 3500,
    durationEn: "3 to 8 weeks",
    durationAr: "من 3 إلى 8 أسابيع",
    heroImage: U("photo-1461749280684-dccba630e2f6"),
    heroFloat1En: "1.1 seconds on mobile",
    heroFloat1Ar: "1.1 ثانية على الجوال",
    heroFloat2En: "Speed 90 plus, in writing",
    heroFloat2Ar: "سرعة فوق التسعين مكتوبة",
    tools: ["Next.js 15", "TypeScript", "Supabase", "Paymob and Stripe", "Vercel and AWS"],
    fitsEn: "Company sites, booking flows, dashboards, apps",
    fitsAr: "مواقع شركات وحجوزات وداشبورد وتطبيقات",
    stats: [
      { valueEn: "1.2s", valueAr: "1.2 ث", labelEn: "typical mobile load on Cairo 4G", labelAr: "تحميل الجوال المعتاد على 4G القاهرة" },
      { valueEn: "99.9%", valueAr: "99.9%", labelEn: "uptime on monitored hosting", labelAr: "استمرارية على استضافة مراقبة" },
      { valueEn: "30 days", valueAr: "30 يوما", labelEn: "of bug fixes after launch", labelAr: "من إصلاح الأخطاء بعد الإطلاق" },
    ],
    painsTitleEn: "When your system",
    painsTitleAr: "حين يحاربك",
    painsAccentEn: "fights back.",
    painsAccentAr: "نظامك.",
    painsSubEn: "None of these are “tech issues”. They are bookings that never happened, leads that went cold, mornings wasted.",
    painsSubAr: "لا شيء من هذا «مشاكل تقنية». بل حجوزات لم تحدث وعملاء بردوا وصباحات ضاعت.",
    pains: [
      {
        tEn: "“The site dies every time we run ads”",
        tAr: "«الموقع يموت كل مرة نشغّل إعلانات»",
        dEn: "Shared hosting with thirty plugins cannot take two hundred visitors at once. We build static first sites that shrug at traffic spikes. Then we prove it with a load test in front of you.",
        dAr: "استضافة مشتركة مع ثلاثين إضافة لا تتحمل مئتي زائر معا. نبني مواقع ثابتة أولا لا تهتز لذروة الزيارات. ثم نثبتها باختبار ضغط أمامك.",
      },
      {
        tEn: "“Our bookings live in three notebooks”",
        tAr: "«حجوزاتنا تعيش في ثلاثة دفاتر»",
        dEn: "Double bookings. Follow ups nobody remembers. No shows everywhere. One calendar with buffers, deposits and automatic reminders replaces all three notebooks in the first week.",
        dAr: "حجوزات مزدوجة. ومتابعات لا يتذكرها أحد. وعدم حضور في كل مكان. تقويم واحد بفواصل وعربون وتذكير تلقائي يستبدل الدفاتر الثلاثة في أول أسبوع.",
      },
      {
        tEn: "“Our developer vanished”",
        tAr: "«المبرمج اختفى»",
        dEn: "No docs. Passwords living with one person. Code no second human can read. We deliver docs, access that lives only in your accounts, and TypeScript any developer can follow.",
        dAr: "لا توثيق. وكلمات سر تعيش مع فرد واحد. وكود لا يستطيع إنسان ثانٍ قراءته. نسلّم توثيقا ووصولا يعيش فقط في حساباتك وتايب سكريبت يستطيع أي مبرمج تتبعه.",
      },
      {
        tEn: "“Every tiny edit costs a hundred”",
        tAr: "«كل تعديل صغير بمئة»",
        dEn: "Hardcoded text. Mystery deploys. We hand you a content panel labeled in Arabic. Add a room, a doctor, a property in three minutes. Publishing happens on its own.",
        dAr: "نصوص مثبتة. ونشر غامض. نسلّمك لوحة محتوى بتسميات عربية. تضيف غرفة أو طبيبا أو عقارا في ثلاث دقائق. والنشر يحدث وحده.",
      },
    ],
    processTitleEn: "Shipping without",
    processTitleAr: "تسليم",
    processAccentEn: "the drama.",
    processAccentAr: "دون دراما.",
    processSubEn: "A staging link sits on your phone from week one. You watch it grow. No big bang surprises at the end.",
    processSubAr: "رابط تجريبي يستقر على هاتفك من أول أسبوع. تشاهده يكبر. ولا مفاجآت مدوية في النهاية.",
    steps: [
      {
        tEn: "Week 1 · The foundation",
        tAr: "الأسبوع الأول · الأساس",
        dEn: "Repository in your GitHub. Hosting in your account. Content structure drawn from the sitemap. Dull setup work that prevents eighty percent of future pain.",
        dAr: "مستودع في حسابك على جيت هب. واستضافة في حسابك. وهيكل محتوى مرسوم من خريطة الموقع. عمل تأسيس ممل يمنع ثمانين بالمئة من ألم المستقبل.",
        timeEn: "Days 1 to 5",
        timeAr: "من اليوم 1 إلى 5",
      },
      {
        tEn: "Weeks 2 to 4 · Friday drops",
        tAr: "من الأسبوع الثاني إلى الرابع · نسخ الجمعة",
        dEn: "Every Friday a working link lands in your hands. Real pages, real forms, real WhatsApp. Your staff tests it. We fix things within forty eight hours.",
        dAr: "كل جمعة يصل رابط عامل إلى يديك. صفحات حقيقية ونماذج حقيقية وواتساب حقيقي. يجرب فريقك. ونصلح الأشياء خلال ثمانٍ وأربعين ساعة.",
        timeEn: "Weekly",
        timeAr: "أسبوعيا",
      },
      {
        tEn: "Week 5 · Hardening",
        tAr: "الأسبوع الخامس · التقسية",
        dEn: "A speed pass with compressed images and trimmed fonts. Arabic slugs and structured data. Security headers, backups, rate limits. Plus the nasty Arabic edge cases nobody plans for.",
        dAr: "جولة سرعة بصور مضغوطة وخطوط مختزلة. وروابط عربية وبيانات منظمة. وترويسات أمان ونسخ وحدود معدل. مع حالات العربية الصعبة التي لا يخطط لها أحد.",
        timeEn: "Days 25 to 30",
        timeAr: "من اليوم 25 إلى 30",
      },
      {
        tEn: "Launch week · Tuesday morning",
        tAr: "أسبوع الإطلاق · صباح الثلاثاء",
        dEn: "Domain, certificate, analytics, monitoring, staff training. Always Tuesday morning, never Friday night. Then thirty days of close care over WhatsApp.",
        dAr: "النطاق والشهادة والتحليلات والمراقبة وتدريب الفريق. صباح الثلاثاء دائما وليلة الجمعة أبدا. ثم ثلاثون يوما من الرعاية اللصيقة عبر واتساب.",
        timeEn: "Go-live",
        timeAr: "الإطلاق",
      },
    ],
    splitTitleEn: "Dull tech,",
    splitTitleAr: "تقنية مملة",
    splitAccentEn: "happy mornings.",
    splitAccentAr: "وصباحات سعيدة.",
    splitBodyEn: [
      "The best system is the one your receptionist uses without thinking. Big Arabic buttons. Three taps to book at most. Today's list on top, late items in red. Owners get a one page weekly report on WhatsApp. No dashboard jungle to get lost in.",
      "A dive center in Hurghada traded Excel and two phones for one booking system. Double bookings disappeared. Deposits cut cancellations in half. The owner took his first Friday off in years. That is the return we actually sell.",
    ],
    splitBodyAr: [
      "أفضل نظام هو ما تستخدمه موظفة الاستقبال دون تفكير. أزرار عربية كبيرة. وثلاث ضغطات للحجز على الأكثر. وقائمة اليوم في الأعلى والمتأخر بالأحمر. ويصل المالك تقرير أسبوعي من صفحة واحدة على واتساب. ولا غابة داشبورد يتوه فيها.",
      "استبدل مركز غوص في الغردقة الإكسل وهاتفين بنظام حجز واحد. فاختفت الحجوزات المزدوجة. وخفض العربون الإلغاءات إلى النصف. وأخذ المالك أول إجازة جمعة منذ سنوات. وهذا هو العائد الذي نبيعه فعلا.",
    ],
    splitImage: U("photo-1551288049-bebda4e38f71"),
    deliverablesEn: [
      "A Next.js site or app, eight to twenty pages, both languages",
      "A content panel with Arabic labels plus training",
      "Booking, payment and WhatsApp flows, all tested",
      "Search setup with analytics and console wired in",
      "Backups, monitoring and docs inside your own accounts",
      "Thirty days of fixes plus handover videos",
    ],
    deliverablesAr: [
      "موقع أو تطبيق نكست.جي إس من ثماني إلى عشرين صفحة باللغتين",
      "لوحة محتوى بتسميات عربية مع التدريب",
      "مسارات حجز ودفع وواتساب كلها مُختبَرة",
      "تهيئة بحث مع تحليلات وكونسول مربوطة",
      "نسخ ومراقبة وتوثيق داخل حساباتك أنت",
      "ثلاثون يوما من الإصلاحات مع فيديوهات تسليم",
    ],
    galleryTitleEn: "Shipped and",
    galleryTitleAr: "تم التسليم",
    galleryAccentEn: "running.",
    galleryAccentAr: "ويعمل.",
    gallery: [
      { src: U("photo-1461749280684-dccba630e2f6"), capEn: "TypeScript anyone can read, reviewed twice", capAr: "تايب سكريبت يستطيع أي أحد قراءته وبمراجعة مزدوجة" },
      { src: U("photo-1551288049-bebda4e38f71"), capEn: "The owner's dashboard, morning coffee view", capAr: "داشبورد المالك بنظرة قهوة الصباح" },
      { src: U("photo-1512941937669-90a1b58e7e9c"), capEn: "Tested on a mid range Android first", capAr: "يُختبر على أندرويد متوسط أولا" },
      { src: U("photo-1558494949-ef010cbdcc31"), capEn: "Hosting that watches itself and tells us", capAr: "استضافة تراقب نفسها وتخبرنا" },
    ],
    compareTitleEn: "Us against",
    compareTitleAr: "نحن",
    compareAccentEn: "the usual.",
    compareAccentAr: "والخيارات المعتادة.",
    compareSubEn: "Code is a liability. Documented code you can maintain is an asset. We sell the second kind.",
    compareSubAr: "الكود التزام. أما الكود الموثق الذي تستطيع صيانته فأصل. ونحن نبيع النوع الثاني.",
    compareRows: [
      {
        labelEn: "Speed promise",
        labelAr: "وعد السرعة",
        usEn: "Ninety plus on mobile, written in the contract",
        usAr: "فوق التسعين على الجوال ومكتوبة في العقد",
        themEn: "“Loads fine on my phone”",
        themAr: "«يفتح جيدا على هاتفي»",
      },
      {
        labelEn: "Accounts and ownership",
        labelAr: "الحسابات والملكية",
        usEn: "Everything created inside your accounts",
        usAr: "كل شيء يُنشأ داخل حساباتك",
        themEn: "Held hostage on “our server”",
        themAr: "رهينة على «سيرفرنا»",
      },
      {
        labelEn: "Arabic and the panel",
        labelAr: "العربية ولوحة التحكم",
        usEn: "Arabic labels, and your staff trained on them",
        usAr: "تسميات عربية وفريقك مدرّب عليها",
        themEn: "An English only admin maze",
        themAr: "لوحة إدارة إنجليزية متاهة",
      },
      {
        labelEn: "After launch",
        labelAr: "بعد الإطلاق",
        usEn: "Thirty days of fixes with monitoring",
        usAr: "ثلاثون يوما من الإصلاحات مع المراقبة",
        themEn: "“New ticket means a new quote”",
        themAr: "«تذكرة جديدة تعني عرضا جديدا»",
      },
      {
        labelEn: "The stack",
        labelAr: "التقنية",
        usEn: "Next.js with TypeScript, no plugin soup",
        usAr: "نكست.جي إس مع تايب سكريبت ودون شوربة إضافات",
        themEn: "WordPress with thirty plugins",
        themAr: "ووردبريس مع ثلاثين إضافة",
      },
    ],
    pricingTitleEn: "Build",
    pricingTitleAr: "باقات",
    pricingAccentEn: "packages.",
    pricingAccentAr: "البناء.",
    pricingSubEn: "Fixed scope, fixed price. Any change gets a fixed quote before code is touched.",
    pricingSubAr: "نطاق ثابت وسعر ثابت. وأي تغيير يحصل على عرض ثابت قبل لمس الكود.",
    tiers: [
      {
        nameEn: "Launch Site",
        nameAr: "موقع الإطلاق",
        priceUsd: 3500,
        blurbEn: "A fast bilingual company site that sells.",
        blurbAr: "موقع شركة ثنائي سريع يبيع.",
        pointsEn: ["Up to ten pages in both languages", "Content panel with WhatsApp forms", "Search and analytics setup", "Thirty days of fixes"],
        pointsAr: ["حتى عشر صفحات باللغتين", "لوحة محتوى مع نماذج واتساب", "تهيئة بحث وتحليلات", "ثلاثون يوما من الإصلاحات"],
      },
      {
        nameEn: "Booking System",
        nameAr: "منظومة حجز",
        priceUsd: 6200,
        blurbEn: "The site plus a calendar that takes deposits.",
        blurbAr: "الموقع مع تقويم يأخذ عربونا.",
        pointsEn: ["Everything in the Launch Site", "A resources calendar with buffers", "Online deposits over Paymob or Stripe", "Staff roles with a daily closing screen"],
        pointsAr: ["كل ما في موقع الإطلاق", "تقويم موارد بفواصل", "عربون أونلاين عبر باي موب أو سترايب", "صلاحيات موظفين مع شاشة إغلاق يومي"],
        featured: true,
      },
      {
        nameEn: "App or Platform",
        nameAr: "تطبيق أو منصة",
        priceUsd: 9500,
        blurbEn: "Both phone stores, or a customer portal.",
        blurbAr: "متجرا الهواتف معا أو بوابة عملاء.",
        pointsEn: ["One codebase for both stores", "Works offline first, with push", "An admin panel with roles", "Sixty days of store fix cover"],
        pointsAr: ["شيفرة واحدة للمتجرين", "يعمل دون اتصال أولا مع إشعارات", "لوحة تحكم مع صلاحيات", "ستون يوما من تغطية إصلاح المتاجر"],
      },
    ],
    testimonials: [
      {
        qEn: "Nine second WordPress in, one point one second out. Same photos, same words. Mobile bookings doubled in two months.",
        qAr: "ووردبريس بتسع ثوانٍ دخل، وثانية وعُشر خرج. الصور نفسها والكلمات نفسها. وتضاعفت حجوزات الجوال في شهرين.",
        nEn: "Adel M., safaris in Marsa Alam",
        nAr: "عادل م. سفاري في مرسى علم",
        rEn: "Launch Site",
        rAr: "موقع الإطلاق",
      },
      {
        qEn: "WhatsApp reminders with a small deposit cut our no shows by forty percent. The system covered its own cost before summer arrived.",
        qAr: "تذكير واتساب مع عربون صغير خفض عدم الحضور أربعين بالمئة. وغطى النظام تكلفته قبل وصول الصيف.",
        nEn: "Dr. Mariam K., a dental clinic in Cairo",
        nAr: "د. مريم ك. عيادة أسنان في القاهرة",
        rEn: "Booking System",
        rAr: "منظومة حجز",
      },
      {
        qEn: "They handed me GitHub, the domain and video docs. My new developer looked and said, whoever wrote this, thank them for me.",
        qAr: "سلموني جيت هب والنطاق وفيديوهات توثيق. ونظر مبرمجي الجديد وقال، من كتب هذا اشكره نيابة عني.",
        nEn: "Sara T., e-commerce in Dubai",
        nAr: "سارة ت. تجارة إلكترونية في دبي",
        rEn: "App or Platform",
        rAr: "تطبيق أو منصة",
      },
    ],
    faq: [
      {
        qEn: "WordPress or Next.js?",
        aEn: "If your WordPress is fast and clean, we keep it and say so happily. If it drags thirty plugins across nine seconds, we show you the test and suggest Next.js. Decorating a slow foundation burns your ad money. We will not do that to you.",
        qAr: "ووردبريس أم نكست.جي إس؟",
        aAr: "إن كان ووردبريس لديك سريعا ونظيفا نحتفظ به ونقولها بسعادة. وإن كان يجر ثلاثين إضافة عبر تسع ثوان، نريك الاختبار ونقترح نكست.جي إس. فتجميل أساس بطيء يحرق مال إعلاناتك. ولن نفعل بك ذلك.",
      },
      {
        qEn: "Who owns the code and the accounts?",
        aEn: "You do. GitHub, hosting, domain, analytics. All opened in your accounts from day one. We join as guests and leave when you say the word. Nobody's business gets held hostage here.",
        qAr: "لمن ملكية الكود والحسابات؟",
        aAr: "لك. جيت هب والاستضافة والنطاق والتحليلات. كلها تُفتح في حساباتك من اليوم الأول. ننضم كضيوف ونغادر حين تقول الكلمة. ولا عمل يُحتجز رهينة هنا.",
      },
      {
        qEn: "What does support cost after the thirty days?",
        aEn: "A monthly block of hours. Two fifty for sites, four fifty for booking systems, six hundred for apps. Unused hours roll into the next month. Every minute is logged where you can see it. No retainer ambushes.",
        qAr: "كم يكلف الدعم بعد الثلاثين يوما؟",
        aAr: "باقة ساعات شهرية. مئتان وخمسون للمواقع وأربعمئة وخمسون لمنظومات الحجز وستمئة للتطبيقات. والساعات غير المستخدمة تُرحّل للشهر التالي. وكل دقيقة مسجلة حيث تراها. ولا كمائن اشتراكات.",
      },
      {
        qEn: "Can you rescue our current project?",
        aEn: "Often, yes. It starts with a two day paid audit, three hundred dollars, deducted if we proceed. We read the code, list what can be saved, and price the rescue as one fixed number. And if rebuilding is cheaper, we say that instead.",
        qAr: "هل تستطيعون إنقاذ مشروعنا الحالي؟",
        aAr: "غالبا نعم. يبدأ الأمر بتدقيق مدفوع ليومين، ثلاثمئة دولار تُخصم إن أكملنا. نقرأ الكود ونسرد ما يمكن إنقاذه ونسعّر الإنقاذ برقم واحد ثابت. وإن كان إعادة البناء أرخص نقول ذلك بدلا منه.",
      },
      {
        qEn: "How do payments work?",
        aEn: "Thirty to start, forty when you approve the staging link, thirty at launch. Customer payments over Paymob, Stripe or Moyasar get configured in a sandbox first. No real money surprises, ever.",
        qAr: "كيف تسير الدفعات؟",
        aAr: "ثلاثون للبدء وأربعون عند اعتماد الرابط التجريبي وثلاثون عند الإطلاق. ومدفوعات عملائك عبر باي موب أو سترايب أو ميسر تُضبط في بيئة تجريبية أولا. ولا مفاجآت بأموال حقيقية أبدا.",
      },
      {
        qEn: "What if something breaks at midnight?",
        aEn: "Monitoring wakes us, not you. A broken checkout or booking flow gets a hotfix within a day during close care, and under the support plans after that. You get a status message either way. Never silence.",
        qAr: "ماذا إن تعطّل شيء منتصف الليل؟",
        aAr: "المراقبة توقظنا نحن لا أنت. والدفع أو الحجز المكسور يحصل على إصلاح عاجل خلال يوم في فترة الرعاية، وبموجب خطط الدعم بعدها. وتصلك رسالة حالة في الحالتين. ولا صمت أبدا.",
      },
    ],
    closeTitleEn: "Launch on a Tuesday.",
    closeTitleAr: "أطلق الثلاثاء.",
    closeAccentEn: "Sleep on Friday.",
    closeAccentAr: "ونم الجمعة.",
    closeSubEn: "Send the site you have or the idea in your head. A fixed quote and a launch date land back within forty eight hours.",
    closeSubAr: "أرسل الموقع الذي لديك أو الفكرة التي في رأسك. ويصلك عرض ثابت وموعد إطلاق خلال ثمانٍ وأربعين ساعة.",
  },
};

export const METHOD_ORDER: MethodKey[] = ["strategy", "design", "build"];
