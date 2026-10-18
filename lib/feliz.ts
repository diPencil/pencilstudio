export type FelizTier = "Free" | "PRO";

export interface FelizModel {
  slug: string;
  name: string;
  nameAr: string;
  version: string;
  tier: FelizTier;
  accent: string;
  roleEn: string;
  roleAr: string;
  taglineEn: string;
  taglineAr: string;
  descEn: string;
  descAr: string;
  formulaEn: string[];
  formulaAr: string[];
  scopeEn: string[];
  scopeAr: string[];
  chipsLabelEn: string;
  chipsLabelAr: string;
  chipsEn: string[];
  chipsAr: string[];
  exampleQEn: string;
  exampleQAr: string;
  exampleAEn: string;
  exampleAAr: string;
  positioningEn: string;
  positioningAr: string;
}

export interface FelizJourneyStep {
  modelEn: string;
  modelAr: string;
  mottoEn: string;
  mottoAr: string;
  descEn: string;
  descAr: string;
  pointsEn: string[];
  pointsAr: string[];
}

export interface FelizFaq {
  qEn: string;
  aEn: string;
  qAr: string;
  aAr: string;
}

export const felizModels: FelizModel[] = [
  {
    slug: "oper",
    name: "Feliz Oper",
    nameAr: "فيليز أوبر",
    version: "V1.0 Beta",
    tier: "Free",
    accent: "#10B981",
    roleEn: "The Business Brain",
    roleAr: "العقل التجاري",
    taglineEn: "Your AI Business Operator.",
    taglineAr: "المشغّل التجاري الذكي الخاص بك.",
    descEn:
      "Built for any question about running a company, a project, or a business decision. Not content writing, business thinking: feasibility, market, costs, pricing, planning, and priorities.",
    descAr:
      "مصمم لأي سؤال عن إدارة شركة أو مشروع أو قرار تجاري. ليس كتابة محتوى، بل تفكير تجاري: الجدوى والسوق والتكاليف والتسعير والتخطيط والأولويات.",
    formulaEn: ["Analyze", "Recommend", "Prioritize"],
    formulaAr: ["حلّل", "أوصِ", "رتّب"],
    scopeEn: [
      "Feasibility studies",
      "Market and competitor research",
      "Pricing",
      "Business planning",
      "Marketing and paid ads",
      "Brand identity planning",
    ],
    scopeAr: [
      "دراسات الجدوى",
      "أبحاث السوق والمنافسين",
      "التسعير",
      "التخطيط التجاري",
      "التسويق والإعلانات المدفوعة",
      "تخطيط الهوية البصرية",
    ],
    chipsLabelEn: "It ends with answers, not information:",
    chipsLabelAr: "ينتهي بإجابات لا بمعلومات:",
    chipsEn: [
      "What should I do?",
      "What should I do first?",
      "What matters most?",
      "What is risky?",
      "What will it cost?",
      "What should I improve?",
    ],
    chipsAr: [
      "ماذا أفعل؟",
      "بماذا أبدأ؟",
      "ما الأهم؟",
      "أين المخاطرة؟",
      "كم التكلفة؟",
      "ما الذي أحسّنه؟",
    ],
    exampleQEn: "I want to open a tourism company in Saudi Arabia.",
    exampleQAr: "أريد فتح شركة سياحة في السعودية.",
    exampleAEn:
      "Oper starts with you from the market, customers, services, competition, costs, positioning, marketing, operations, risks, and first execution steps.",
    exampleAAr:
      "يبدأ معك أوبر من السوق والعملاء والخدمات والمنافسة والتكاليف والتموضع والتسويق والتشغيل والمخاطر وأول خطوات التنفيذ.",
    positioningEn: "Closer to a smart business and operations partner than a chatbot.",
    positioningAr: "أقرب إلى شريك أعمال وعمليات ذكي منه إلى روبوت محادثة.",
  },
  {
    slug: "tech",
    name: "Feliz Tech",
    nameAr: "فيليز تك",
    version: "V1.0 Beta",
    tier: "Free",
    accent: "#EF4444",
    roleEn: "The Technical Brain",
    roleAr: "العقل التقني",
    taglineEn: "Your AI Technology Architect.",
    taglineAr: "مهندس التقنية الذكي الخاص بك.",
    descEn:
      "For anyone with an idea who wants to know how to build it. It understands the project first, then proposes the architecture and the roadmap, even if you are not a programmer.",
    descAr:
      "لمن لديه فكرة ويريد معرفة كيف يبنيها. يفهم المشروع أولاً ثم يقترح البنية وخارطة الطريق، حتى لغير المبرمجين.",
    formulaEn: ["Understand", "Architect", "Plan", "Build"],
    formulaAr: ["افهم", "صمّم", "خطط", "ابنِ"],
    scopeEn: [
      "Websites and web apps",
      "Mobile apps and SaaS",
      "Platforms and dashboards",
      "APIs and databases",
      "Hosting and infrastructure",
      "Frameworks and architecture",
    ],
    scopeAr: [
      "المواقع وتطبيقات الويب",
      "تطبيقات الجوال ومنتجات ساس",
      "المنصات ولوحات التحكم",
      "الواجهات البرمجية وقواعد البيانات",
      "الاستضافة والبنية التحتية",
      "أطر العمل والبنية المعمارية",
    ],
    chipsLabelEn: "It proposes architecture like:",
    chipsLabelAr: "يقترح بنية مثل:",
    chipsEn: [
      "Frontend",
      "Backend",
      "Database",
      "Authentication",
      "Payments",
      "Notifications",
      "Admin",
      "APIs",
      "Hosting and Deployment",
    ],
    chipsAr: [
      "الواجهة الأمامية",
      "الواجهة الخلفية",
      "قاعدة البيانات",
      "الدخول",
      "المدفوعات",
      "التنبيهات",
      "الإدارة",
      "الواجهات البرمجية",
      "الاستضافة والنشر",
    ],
    exampleQEn: "I want a hotel booking system with a dashboard and a mobile app.",
    exampleQAr: "أريد نظام حجز فنادق مع لوحة تحكم وتطبيق جوال.",
    exampleAEn:
      "Tech refuses to throw code at you. It maps the layers first, then builds the execution roadmap.",
    exampleAAr:
      "يرفض تك رمي الشيفرة عليك. يرسم الطبقات أولاً، ثم يبني خارطة التنفيذ.",
    positioningEn: "Useful even for non-programmers: it explains what the project needs before development starts.",
    positioningAr: "مفيد حتى لغير المبرمجين: يشرح ما يحتاجه المشروع قبل بدء التطوير.",
  },
  {
    slug: "gen",
    name: "Feliz Gen",
    nameAr: "فيليز جين",
    version: "V1.0 Beta",
    tier: "PRO",
    accent: "#EAB308",
    roleEn: "The Creation Engine",
    roleAr: "محرك الإبداع",
    taglineEn: "Turn ideas into something real.",
    taglineAr: "حوّل الأفكار إلى شيء حقيقي.",
    descEn:
      "A different stage: not advice, but usable output. Gen turns an idea into a concept, features, flows, content, and starter code, closing the distance between having an idea and having something to build.",
    descAr:
      "مرحلة مختلفة: لا نصيحة فحسب، بل مخرجات قابلة للاستخدام. يحوّل جين الفكرة إلى مفهوم ومزايا وتدفقات ومحتوى وشيفرة أولية، مقرباً المسافة بين امتلاك الفكرة وامتلاك ما يُبنى.",
    formulaEn: ["Imagine", "Generate", "Produce"],
    formulaAr: ["تخيّل", "ولّد", "أنتج"],
    scopeEn: [
      "Marketing copy",
      "Social content",
      "Brand names and taglines",
      "Landing pages",
      "Pitch decks",
      "Prompts and starter code",
    ],
    scopeAr: [
      "النصوص التسويقية",
      "محتوى التواصل",
      "أسماء العلامات والشعارات",
      "صفحات الهبوط",
      "عروض المستثمرين",
      "الموجهات والشيفرة الأولية",
    ],
    chipsLabelEn: "From idea to MVP:",
    chipsLabelAr: "من الفكرة إلى إم في بي:",
    chipsEn: [
      "Concept",
      "Features",
      "User flow",
      "MVP scope",
      "Content",
      "Prompts",
      "Starter code",
    ],
    chipsAr: [
      "المفهوم",
      "المزايا",
      "رحلة المستخدم",
      "نطاق إم في بي",
      "المحتوى",
      "الموجهات",
      "الشيفرة الأولية",
    ],
    exampleQEn: "I have an app idea.",
    exampleQAr: "لدي فكرة تطبيق.",
    exampleAEn:
      "Gen does not reply with explanation only. It returns a blueprint you can start building tomorrow.",
    exampleAAr:
      "لا يرد جين بشرح فقط. يعيد مخططاً يمكنك البدء ببنائه غداً.",
    positioningEn: "From advisory assistant to production engine. That is why it is PRO.",
    positioningAr: "من مساعد استشاري إلى محرك إنتاج. لهذا هو احترافي.",
  },
  {
    slug: "superfeliz",
    name: "SuperFeliz",
    nameAr: "سوبر فيليز",
    version: "V1.0 Beta",
    tier: "PRO",
    accent: "#2563EB",
    roleEn: "The Complete AI",
    roleAr: "الذكاء الشامل",
    taglineEn: "Think everything together.",
    taglineAr: "يفكر في كل شيء معاً.",
    descEn:
      "The eldest sibling and the highest level of the family. Not one specialty but an all-domain model: it understands the full mission and decides which kind of thinking each part needs.",
    descAr:
      "الأخ الأكبر وأعلى مستوى في العائلة. ليس تخصصاً واحداً بل نموذجاً شاملاً: يفهم الرسالة كاملة ويقرر أي نوع من التفكير يحتاجه كل جزء.",
    formulaEn: ["Understand the mission", "Connect the parts", "Lead the journey"],
    formulaAr: ["افهم الرسالة", "اربط الأجزاء", "قُد الرحلة"],
    scopeEn: [
      "Business intelligence",
      "Technology planning",
      "Generative creation",
      "Cross-domain reasoning",
    ],
    scopeAr: [
      "ذكاء الأعمال",
      "التخطيط التقني",
      "التوليد الإبداعي",
      "التفكير متعدد المجالات",
    ],
    chipsLabelEn: "One project, decided together:",
    chipsLabelAr: "مشروع واحد يُقرَّر معاً:",
    chipsEn: [
      "Market opportunity",
      "Business model",
      "Positioning",
      "Features",
      "Technology",
      "UX",
      "Brand",
      "Launch strategy",
      "Marketing",
      "Budget priorities",
      "Roadmap",
    ],
    chipsAr: [
      "فرصة السوق",
      "نموذج العمل",
      "التموضع",
      "المزايا",
      "التقنية",
      "تجربة المستخدم",
      "العلامة",
      "استراتيجية الإطلاق",
      "التسويق",
      "أولويات الميزانية",
      "خارطة الطريق",
    ],
    exampleQEn: "A tourism booking platform idea for Saudi Arabia, ready to launch.",
    exampleQAr: "فكرة منصة لحجز الخدمات السياحية في السعودية جاهزة للإطلاق.",
    exampleAEn:
      "SuperFeliz treats it as one complete project, from opportunity and brand to budget and roadmap.",
    exampleAAr:
      "يتعامل معها سوبر فيليز كمشروع واحد متكامل، من الفرصة والعلامة إلى الميزانية وخارطة الطريق.",
    positioningEn: "Feliz helps you with the task. SuperFeliz understands the whole mission.",
    positioningAr: "فيليز يساعدك في المهمة. سوبر فيليز يفهم الرسالة كاملة.",
  },
];

export const felizJourney: FelizJourneyStep[] = [
  {
    modelEn: "Feliz Oper",
    modelAr: "فيليز أوبر",
    mottoEn: "Think Business",
    mottoAr: "فكّر في الأعمال",
    descEn: "Is the idea commercially sound?",
    descAr: "هل الفكرة منطقية تجارياً؟",
    pointsEn: [
      "Who is the customer? Who is the competitor?",
      "How will it earn? How will it market?",
      "What comes first?",
    ],
    pointsAr: ["من العميل؟ ومن المنافس؟", "كيف سيربح؟ وكيف سيسوق؟", "ما الأولويات؟"],
  },
  {
    modelEn: "Feliz Tech",
    modelAr: "فيليز تك",
    mottoEn: "Think Technology",
    mottoAr: "فكّر في التقنية",
    descEn: "How do we build the product?",
    descAr: "كيف سنبني المنتج؟",
    pointsEn: [
      "Website or app? Which architecture?",
      "Which backend? Which database?",
      "Which hosting? What is the roadmap?",
    ],
    pointsAr: [
      "موقع أم تطبيق؟ وأي بنية؟",
      "أي واجهة خلفية؟ وأي قاعدة بيانات؟",
      "أي استضافة؟ وما خارطة التنفيذ؟",
    ],
  },
  {
    modelEn: "Feliz Gen",
    modelAr: "فيليز جين",
    mottoEn: "Create",
    mottoAr: "أنشئ",
    descEn: "It starts producing.",
    descAr: "يبدأ الإنتاج.",
    pointsEn: [
      "Name, tagline, content, campaign",
      "Landing page and MVP blueprint",
      "Prompts, starter code, assets",
    ],
    pointsAr: [
      "الاسم والشعار والمحتوى والحملة",
      "صفحة الهبوط ومخطط إم في بي",
      "الموجهات والشيفرة الأولية والأصول",
    ],
  },
  {
    modelEn: "SuperFeliz",
    modelAr: "سوبر فيليز",
    mottoEn: "Think Everything Together",
    mottoAr: "فكّر في كل شيء معاً",
    descEn: "It sees all of it as one project and leads the journey.",
    descAr: "يرى كل ذلك مشروعاً واحداً ويقود الرحلة.",
    pointsEn: [
      "Connects every decision",
      "Balances budget and priorities",
      "One journey, one leader",
    ],
    pointsAr: ["يربط كل قرار", "يوازن الميزانية والأولويات", "رحلة واحدة بقيادة واحدة"],
  },
];

export const felizFaqs: FelizFaq[] = [
  {
    qEn: "How do I try the free models?",
    aEn:
      "Oper and Tech are free and open. Describe your idea and take real commercial and technical guidance today.",
    qAr: "كيف أجرب النماذج المجانية؟",
    aAr:
      "أوبر وتك مجانيان ومفتوحان. صف فكرتك واحصل اليوم على توجيه تجاري وتقني حقيقي.",
  },
  {
    qEn: "How do I get PRO access?",
    aEn:
      "PRO opens for companies subscribed with Pencil or executing a service with us. Talk to us and we activate Gen and SuperFeliz for your team.",
    qAr: "كيف أحصل على النسخة الاحترافية؟",
    aAr:
      "يُفتح الاحترافي للشركات المشتركة مع بنسل أو المنفذة لخدمة لدينا. تحدث معنا ونفعّل جين وسوبر فيليز لفريقك.",
  },
  {
    qEn: "Does it support Arabic?",
    aEn:
      "Fully. Every model thinks, writes, and plans in Arabic and English, with RTL interfaces built in.",
    qAr: "هل يدعم العربية؟",
    aAr:
      "بالكامل. كل نموذج يفكر ويكتب ويخطط بالعربية والإنجليزية، مع واجهات من اليمين إلى اليسار مبنية داخلياً.",
  },
  {
    qEn: "What is the difference between Gen and SuperFeliz?",
    aEn:
      "Gen produces: content, brand, and MVP pieces. SuperFeliz leads: it treats your idea as one complete mission across business, technology, and creativity.",
    qAr: "ما الفرق بين جين وسوبر فيليز؟",
    aAr:
      "جين يُنتج: المحتوى والعلامة وقطع إم في بي. أما سوبر فيليز فيقود: يعامل فكرتك رسالة واحدة متكاملة عبر الأعمال والتقنية والإبداع.",
  },
];
