export type LocalText = { en: string; ar: string };

export interface StudioCapability {
  id: string;
  name: LocalText;
  line: LocalText;
  detail: LocalText;
  image: string;
  href: string;
}

export const STUDIO_CAPABILITIES: StudioCapability[] = [
  {
    id: "brand",
    name: { en: "Brand identity and creative systems", ar: "الهوية البصرية والأنظمة الإبداعية" },
    line: { en: "A brand that can speak, move, publish, package and grow.", ar: "علامة تستطيع أن تتحدث وتتحرك وتنشر وتعبّئ وتنمو." },
    detail: { en: "Positioning, identity, Arabic and Latin typography, visual direction, motion, campaigns, social systems and practical brand guidelines.", ar: "تموضع وهوية وخطوط عربية ولاتينية واتجاه بصري وموشن وحملات وأنظمة للنشر ودليل هوية قابل للاستخدام." },
    image: "/hero-section.jpg",
    href: "/services/brand-identity",
  },
  {
    id: "web",
    name: { en: "Websites and digital platforms", ar: "المواقع والمنصات الرقمية" },
    line: { en: "Experiences designed around what visitors need to understand and do.", ar: "تجارب مبنية حول ما يحتاج الزائر إلى فهمه وفعله." },
    detail: { en: "Corporate websites, multilingual platforms, e-commerce, booking flows, content systems, SEO foundations and conversion journeys.", ar: "مواقع شركات ومنصات متعددة اللغات ومتاجر ومسارات حجز وأنظمة محتوى وأساسيات SEO ورحلات تحويل." },
    image: "/business-sectors/corporate-websites.jpg",
    href: "/services/websites-platforms",
  },
  {
    id: "products",
    name: { en: "Mobile apps and SaaS products", ar: "تطبيقات الهاتف ومنتجات SaaS" },
    line: { en: "Product thinking from the first screen to the operating model.", ar: "تفكير في المنتج من الشاشة الأولى حتى نموذج التشغيل." },
    detail: { en: "Product strategy, UX architecture, interface systems, mobile apps, dashboards, subscriptions, APIs and launch support.", ar: "استراتيجية المنتج وبنية UX وأنظمة الواجهات وتطبيقات الهاتف ولوحات التحكم والاشتراكات وواجهات API ودعم الإطلاق." },
    image: "/signature-capabilities/Mobile-Apps-SaaS-Products.jpg",
    href: "/services/mobile-apps-saas",
  },
  {
    id: "systems",
    name: { en: "Business systems and automation", ar: "أنظمة الأعمال والأتمتة" },
    line: { en: "Software shaped around the real work behind the business.", ar: "برمجيات تتشكل حول العمل الحقيقي داخل المؤسسة." },
    detail: { en: "CRM, operations, booking, inventory, staff workflows, approvals, reporting and integrations built around how the team already works.", ar: "إدارة العملاء والتشغيل والحجز والمخزون ومسارات الموظفين والاعتمادات والتقارير والتكاملات وفق طريقة عمل الفريق." },
    image: "/business-sectors/crm-automation.jpg",
    href: "/services/business-systems",
  },
  {
    id: "growth",
    name: { en: "Marketing and growth systems", ar: "التسويق وأنظمة النمو" },
    line: { en: "Content, campaigns and measurement working as one system.", ar: "محتوى وحملات وقياس تعمل ضمن منظومة واحدة." },
    detail: { en: "Campaign direction, landing pages, social content, performance creative, analytics, SEO and continuous improvement.", ar: "إخراج الحملات وصفحات الهبوط ومحتوى التواصل وإبداع الأداء والتحليلات وSEO والتحسين المستمر." },
    image: "/signature-capabilities/Marketing-Growth-Systems.jpg",
    href: "/services/marketing-growth",
  },
  {
    id: "cloud",
    name: { en: "Cloud, hosting and release operations", ar: "السحابة والاستضافة وعمليات النشر" },
    line: { en: "The infrastructure and release work that keeps digital products available.", ar: "البنية وعمليات النشر التي تحافظ على إتاحة المنتجات الرقمية." },
    detail: { en: "Managed VPS, domains, DNS, SSL, backups, business email, monitoring, app-store publishing and technical support.", ar: "خوادم VPS مُدارة ونطاقات وDNS وSSL ونسخ احتياطية وبريد أعمال ومراقبة ونشر في متاجر التطبيقات ودعم تقني." },
    image: "/business-sectors/e-commerce.jpg",
    href: "/services/hosting-cloud",
  },
];

export const STUDIO_SECTORS = [
  { name: { en: "Tourism and travel", ar: "السياحة والسفر" }, image: "/business-sectors/tourism-booking.jpg", need: { en: "booking, suppliers, payments and traveller communication", ar: "الحجز والموردون والمدفوعات والتواصل مع المسافر" } },
  { name: { en: "Real estate", ar: "العقارات" }, image: "/business-sectors/real-estate.jpg", need: { en: "inventory, lead journeys, sales teams and presentation", ar: "المخزون ورحلات العملاء وفرق المبيعات والعرض" } },
  { name: { en: "Restaurants and hospitality", ar: "المطاعم والضيافة" }, image: "/business-sectors/restaurant-pos.jpg", need: { en: "menus, ordering, operations, branches and loyalty", ar: "القوائم والطلبات والتشغيل والفروع والولاء" } },
  { name: { en: "Education", ar: "التعليم" }, image: "/business-sectors/education-lms.jpg", need: { en: "learning, subscriptions, progress and administration", ar: "التعلم والاشتراكات والتقدم والإدارة" } },
  { name: { en: "Healthcare", ar: "الرعاية الصحية" }, image: "/business-sectors/medical-clinics.jpg", need: { en: "trust, booking, patient journeys and internal flow", ar: "الثقة والحجز ورحلة المريض والتشغيل الداخلي" } },
  { name: { en: "Commerce and retail", ar: "التجارة والتجزئة" }, image: "/business-sectors/e-commerce.jpg", need: { en: "catalogues, checkout, inventory and retention", ar: "الكتالوج والدفع والمخزون والاحتفاظ بالعملاء" } },
  { name: { en: "Corporate and professional services", ar: "الشركات والخدمات المهنية" }, image: "/business-sectors/corporate-websites.jpg", need: { en: "credibility, service clarity, leads and operations", ar: "المصداقية ووضوح الخدمات والعملاء المحتملون والتشغيل" } },
  { name: { en: "Operations-heavy businesses", ar: "الأعمال كثيفة التشغيل" }, image: "/business-sectors/crm-automation.jpg", need: { en: "workflow, permissions, automation and reporting", ar: "المسارات والصلاحيات والأتمتة والتقارير" } },
];

export const STUDIO_FAQS = [
  { category: "studio", q: { en: "What is the relationship between Pencil and Pencil Studio?", ar: "ما العلاقة بين Pencil وPencil Studio؟" }, a: { en: "Pencil is the wider brand and point of view. Pencil Studio is the team that turns that thinking into identities, websites, products, systems, campaigns and the operational work required to launch and maintain them.", ar: "Pencil هي العلامة والرؤية الأوسع. أما Pencil Studio فهو الفريق الذي يحوّل هذه الرؤية إلى هويات ومواقع ومنتجات وأنظمة وحملات، ويتولى العمل التشغيلي المطلوب لإطلاقها وصيانتها." } },
  { category: "studio", q: { en: "How long has Pencil been working in digital?", ar: "منذ متى تعمل Pencil في المجال الرقمي؟" }, a: { en: "Pencil has worked since 2014, beginning in Cairo and expanding its work across Egypt, the Middle East, the Gulf and Europe. That history is reflected in how we connect design decisions to technical and operational realities.", ar: "تعمل Pencil منذ عام 2014؛ بدأت في القاهرة وامتد عملها عبر مصر والشرق الأوسط والخليج وأوروبا. وتظهر هذه الخبرة في ربط قرارات التصميم بالواقع التقني والتشغيلي." } },
  { category: "studio", q: { en: "Do you work as an agency, a product team or a technology partner?", ar: "هل تعملون كوكالة أم فريق منتجات أم شريك تقني؟" }, a: { en: "The shape changes with the problem. A brand launch may need a focused studio team. A custom system may need product, UX, development and infrastructure working together. Long-term clients may use Pencil as an embedded digital partner.", ar: "يتغير شكل الفريق وفق المشكلة. قد يحتاج إطلاق علامة إلى فريق استوديو مركز، بينما يحتاج النظام المخصص إلى المنتج وUX والتطوير والبنية معًا. وقد تعمل Pencil مع العملاء طويلًا كشريك رقمي ممتد." } },
  { category: "services", q: { en: "What can Pencil create from start to finish?", ar: "ما الذي تستطيع Pencil تنفيذه من البداية إلى النهاية؟" }, a: { en: "Brand identities, websites, e-commerce, booking platforms, mobile apps, SaaS products, business systems, campaigns, content systems and the cloud operations behind them.", ar: "الهويات والمواقع والمتاجر ومنصات الحجز وتطبيقات الهاتف ومنتجات SaaS وأنظمة الأعمال والحملات وأنظمة المحتوى وعمليات السحابة التي تعمل خلفها." } },
  { category: "services", q: { en: "Can you improve an existing product instead of rebuilding it?", ar: "هل يمكنكم تحسين منتج قائم بدلًا من إعادة بنائه؟" }, a: { en: "Yes. We can audit the experience, code, content and operating model, then separate what should be retained, repaired or rebuilt. The recommendation follows the evidence, not a preference for larger scope.", ar: "نعم. نراجع التجربة والشيفرة والمحتوى ونموذج التشغيل، ثم نفصل ما يجب الاحتفاظ به أو إصلاحه أو إعادة بنائه. وتأتي التوصية من الأدلة لا من تفضيل نطاق أكبر." } },
  { category: "process", q: { en: "What happens before design begins?", ar: "ماذا يحدث قبل بدء التصميم؟" }, a: { en: "We establish the goal, audience, offer, constraints, content, decision makers and the action the user should take. That becomes the working brief and the reference for later decisions.", ar: "نحدد الهدف والجمهور والعرض والقيود والمحتوى وأصحاب القرار والإجراء المطلوب من المستخدم. ثم يتحول ذلك إلى موجز عمل ومرجع للقرارات التالية." } },
  { category: "process", q: { en: "How do reviews and approvals work?", ar: "كيف تتم المراجعات والاعتمادات؟" }, a: { en: "Work is reviewed by stage, against the agreed objective. Feedback should be consolidated by one owner. Approval closes the stage; a new direction after approval is treated as a scope decision, not a hidden revision.", ar: "تُراجع الأعمال مرحلةً بمرحلة وفق الهدف المتفق عليه. ويُفضّل أن يجمع مسؤول واحد الملاحظات. يغلق الاعتماد المرحلة؛ أما الاتجاه الجديد بعدها فيُعامل كقرار نطاق لا كمراجعة مخفية." } },
  { category: "process", q: { en: "Can Pencil work with our internal team?", ar: "هل تستطيع Pencil العمل مع فريقنا الداخلي؟" }, a: { en: "Yes. We can lead the whole engagement or own a defined layer such as product direction, UX, frontend, infrastructure, creative production or growth. Responsibilities and hand-offs are agreed before production.", ar: "نعم. يمكننا قيادة المشروع كاملًا أو امتلاك طبقة محددة مثل اتجاه المنتج أو UX أو الواجهة أو البنية أو الإنتاج الإبداعي أو النمو. وتُحسم المسؤوليات ونقاط التسليم قبل التنفيذ." } },
  { category: "technology", q: { en: "Do you build Arabic and bilingual products properly?", ar: "هل تبنون منتجات عربية وثنائية اللغة بصورة صحيحة؟" }, a: { en: "Yes. Arabic affects information hierarchy, type, spacing, numbers, forms, navigation and complete RTL behavior. We design and test both directions as product states, not as a final translation pass.", ar: "نعم. تؤثر العربية في ترتيب المعلومات والخط والمسافات والأرقام والنماذج والتنقل وسلوك RTL كاملًا. نصمم الاتجاهين ونختبرهما كحالتين للمنتج، لا كترجمة في النهاية." } },
  { category: "technology", q: { en: "Can you connect payments, WhatsApp, maps, email or existing systems?", ar: "هل يمكنكم ربط الدفع وواتساب والخرائط والبريد والأنظمة القائمة؟" }, a: { en: "Integration work is part of our development practice. We assess the provider, authentication, data ownership, failure states and support responsibilities before deciding how the connection should be built.", ar: "التكاملات جزء من ممارسة التطوير لدينا. نراجع المزود والمصادقة وملكية البيانات وحالات الفشل ومسؤولية الدعم قبل تحديد طريقة الربط." } },
  { category: "feliz", q: { en: "What is SuperFeliz?", ar: "ما هو SuperFeliz؟" }, a: { en: "SuperFeliz is Pencil's AI model and the central intelligence layer in the Feliz family. It connects Pencil's product, creative and operational thinking to assistance, analysis, generation and automation experiences.", ar: "SuperFeliz هو نموذج الذكاء الاصطناعي لدى Pencil والطبقة المركزية في عائلة Feliz. يربط تفكير Pencil في المنتج والإبداع والتشغيل بتجارب المساعدة والتحليل والتوليد والأتمتة." } },
  { category: "feliz", q: { en: "Is the Feliz family one assistant or several focused models?", ar: "هل عائلة Feliz مساعد واحد أم نماذج متخصصة؟" }, a: { en: "It is a family of focused models with different roles and voices, organised around a shared Pencil approach. The public SuperFeliz experience introduces the family; connected professional use is handled through the appropriate Pencil engagement.", ar: "هي عائلة من النماذج المتخصصة بأدوار وأصوات مختلفة، وتجمعها منهجية Pencil. تعرّف تجربة SuperFeliz العامة بالعائلة، أما الاستخدام المهني المتصل فيتم ضمن التعاون المناسب مع Pencil." } },
  { category: "engagement", q: { en: "How do we start a serious conversation?", ar: "كيف نبدأ نقاشًا جادًا حول مشروع؟" }, a: { en: "Send the business goal, what exists today, the decision or launch date, and any constraint that could change the solution. A useful first conversation begins with context, not a feature list.", ar: "أرسل هدف العمل وما هو موجود اليوم وموعد القرار أو الإطلاق وأي قيد قد يغيّر الحل. يبدأ النقاش المفيد بالسياق لا بقائمة الخصائص." } },
  { category: "engagement", q: { en: "Do you support products after launch?", ar: "هل تدعمون المنتجات بعد الإطلاق؟" }, a: { en: "Yes. Support can cover maintenance, hosting, monitoring, improvements, content operations, recurring creative work, product iterations and longer-term digital partnership.", ar: "نعم. قد يشمل الدعم الصيانة والاستضافة والمراقبة والتحسينات وتشغيل المحتوى والإنتاج الإبداعي المتكرر وتطوير المنتج والشراكة الرقمية طويلة الأمد." } },
];

export const STUDIO_GUIDES = [
  { id: "brief", category: "Strategy", title: { en: "Write a brief that creates decisions", ar: "اكتب موجزًا يصنع قرارات" }, intro: { en: "A useful brief explains the business change, the audience and the constraint before it lists deliverables.", ar: "الموجز المفيد يشرح التغيير المطلوب في العمل والجمهور والقيود قبل أن يسرد المخرجات." }, image: "/business-sectors/corporate-websites.jpg", steps: { en: ["Name the business outcome.", "Describe the audience in behaviour, not demographics only.", "List what already exists.", "State the immovable constraints.", "Name one final decision owner."], ar: ["سمِّ نتيجة العمل المطلوبة.", "صف الجمهور بسلوكه لا ببياناته فقط.", "احصر ما هو موجود بالفعل.", "اذكر القيود التي لا يمكن تغييرها.", "حدّد صاحب القرار النهائي."] } },
  { id: "brand", category: "Brand", title: { en: "Plan a brand beyond the logo", ar: "خطط للعلامة بعد الشعار" }, intro: { en: "Start with recognition, tone and repeated use. The mark is one part of the system.", ar: "ابدأ بالتعرّف والنبرة والاستخدام المتكرر. العلامة جزء واحد من المنظومة." }, image: "/hero-section.jpg", steps: { en: ["Clarify the position.", "Collect real touchpoints.", "Choose voice principles.", "Design the identity system.", "Test it on daily work."], ar: ["وضّح التموضع.", "اجمع نقاط الاستخدام الحقيقية.", "اختر مبادئ النبرة.", "صمّم نظام الهوية.", "اختبره في العمل اليومي."] } },
  { id: "website", category: "Web", title: { en: "Plan a website around a visitor decision", ar: "خطط للموقع حول قرار الزائر" }, intro: { en: "A page earns its place when it answers a question or moves a visitor toward an action.", ar: "تستحق الصفحة مكانها حين تجيب عن سؤال أو تدفع الزائر نحو إجراء." }, image: "/business-sectors/e-commerce.jpg", steps: { en: ["Define the primary visitor.", "Map their questions.", "Give every page a job.", "Prepare evidence and content.", "Prototype the critical journey."], ar: ["حدّد الزائر الأساسي.", "ارسم أسئلته.", "امنح كل صفحة وظيفة.", "جهّز الأدلة والمحتوى.", "ابنِ نموذجًا للمسار الحاسم."] } },
  { id: "systems", category: "Product", title: { en: "Turn an operation into a system", ar: "حوّل التشغيل إلى نظام" }, intro: { en: "Document the work as it happens before asking software to automate it.", ar: "وثّق العمل كما يحدث قبل أن تطلب من البرمجيات أتمتته." }, image: "/business-sectors/crm-automation.jpg", steps: { en: ["Observe the current workflow.", "Find repeated decisions.", "Define roles and permissions.", "Design exception states.", "Measure the result."], ar: ["راقب مسار العمل الحالي.", "اكتشف القرارات المتكررة.", "حدّد الأدوار والصلاحيات.", "صمّم حالات الاستثناء.", "قس النتيجة."] } },
  { id: "content", category: "Content", title: { en: "Prepare content without blocking design", ar: "جهّز المحتوى دون تعطيل التصميم" }, intro: { en: "Work with a content inventory, owners and approval dates instead of waiting for one perfect document.", ar: "اعمل بقائمة محتوى ومسؤولين ومواعيد اعتماد بدل انتظار مستند كامل ومثالي." }, image: "/business-sectors/education-lms.jpg", steps: { en: ["Create the page inventory.", "Assign one content owner.", "Separate facts from marketing copy.", "Collect usable visual assets.", "Approve in production order."], ar: ["أنشئ قائمة الصفحات.", "عيّن مسؤولًا واحدًا للمحتوى.", "افصل الحقائق عن النص التسويقي.", "اجمع أصولًا بصرية صالحة.", "اعتمد وفق ترتيب التنفيذ."] } },
  { id: "feedback", category: "Collaboration", title: { en: "Give feedback that improves the work", ar: "قدّم ملاحظات تحسّن العمل" }, intro: { en: "Explain the problem you see and the reason it matters before prescribing the visual answer.", ar: "اشرح المشكلة التي تراها وسبب أهميتها قبل فرض الإجابة البصرية." }, image: "/business-sectors/real-estate.jpg", steps: { en: ["Review against the objective.", "Group notes by screen.", "Separate errors from preferences.", "Explain the reason.", "Send one consolidated round."], ar: ["راجع وفق الهدف.", "اجمع الملاحظات حسب الشاشة.", "افصل الأخطاء عن التفضيلات.", "اشرح السبب.", "أرسل جولة موحّدة."] } },
  { id: "ux", category: "UX", title: { en: "Review a user journey before polishing screens", ar: "راجع رحلة المستخدم قبل تلميع الشاشات" }, intro: { en: "The order, decisions and recovery states matter before colour and animation.", ar: "ترتيب الخطوات والقرارات وحالات التعافي أهم أولًا من اللون والحركة." }, image: "/signature-capabilities/Mobile-Apps-SaaS-Products.jpg", steps: { en: ["Start from user intent.", "Remove unnecessary decisions.", "Design empty and error states.", "Test on a real device.", "Polish after the journey works."], ar: ["ابدأ من نية المستخدم.", "احذف القرارات غير الضرورية.", "صمّم حالات الفراغ والخطأ.", "اختبر على جهاز حقيقي.", "لمّع بعد نجاح الرحلة."] } },
  { id: "launch", category: "Launch", title: { en: "Run launch as an operation", ar: "أدِر الإطلاق كعملية تشغيل" }, intro: { en: "A launch is a controlled sequence of approvals, access, checks, publishing and observation.", ar: "الإطلاق تسلسل منضبط للاعتمادات والصلاحيات والفحوص والنشر والمراقبة." }, image: "/business-sectors/tourism-booking.jpg", steps: { en: ["Freeze the launch scope.", "Confirm access and ownership.", "Test critical journeys.", "Prepare rollback and monitoring.", "Launch with one decision owner."], ar: ["ثبّت نطاق الإطلاق.", "أكد الصلاحيات والملكية.", "اختبر المسارات الحاسمة.", "جهّز التراجع والمراقبة.", "أطلق مع صاحب قرار واحد."] } },
  { id: "ai", category: "AI", title: { en: "Choose an AI use case worth building", ar: "اختر حالة ذكاء اصطناعي تستحق البناء" }, intro: { en: "Start with a repeated decision or information bottleneck, then define the human control around it.", ar: "ابدأ بقرار متكرر أو اختناق معلومات، ثم حدّد الرقابة البشرية المحيطة به." }, image: "/business-sectors/medical-clinics.jpg", steps: { en: ["Name the repeated task.", "Audit the available data.", "Define acceptable failure.", "Keep a human decision point.", "Measure time or quality gained."], ar: ["سمِّ المهمة المتكررة.", "راجع البيانات المتاحة.", "حدّد الفشل المقبول.", "احتفظ بنقطة قرار بشرية.", "قس الوقت أو الجودة المكتسبة."] } },
  { id: "partnership", category: "Partnership", title: { en: "Work successfully with a multidisciplinary studio", ar: "اعمل بنجاح مع استوديو متعدد التخصصات" }, intro: { en: "Good collaboration needs context, one decision path and respect for stage boundaries.", ar: "يحتاج التعاون الجيد إلى سياق ومسار قرار واحد واحترام حدود المراحل." }, image: "/business-sectors/restaurant-pos.jpg", steps: { en: ["Share business context early.", "Name stakeholders and owners.", "Protect agreed review windows.", "Record approvals.", "Plan the next phase before launch."], ar: ["شارك سياق العمل مبكرًا.", "حدّد الأطراف والمسؤولين.", "احمِ مواعيد المراجعة.", "وثّق الاعتمادات.", "خطط للمرحلة التالية قبل الإطلاق."] } },
];

export const SUPPORT_ECOSYSTEM = [
  { id: "creative", title: { en: "Brand and creative production", ar: "الهوية والإنتاج الإبداعي" }, detail: { en: "Identity files, templates, campaign adaptations, motion, print preparation and recurring creative work.", ar: "ملفات الهوية والقوالب وتكييف الحملات والموشن وتجهيز الطباعة والعمل الإبداعي المتكرر." }, image: "/hero-section.jpg" },
  { id: "product", title: { en: "Websites, apps and products", ar: "المواقع والتطبيقات والمنتجات" }, detail: { en: "Content, journeys, releases, improvements, access, analytics and product iteration.", ar: "المحتوى والرحلات والإصدارات والتحسينات والصلاحيات والتحليلات وتطوير المنتج." }, image: "/signature-capabilities/Mobile-Apps-SaaS-Products.jpg" },
  { id: "systems", title: { en: "Business systems and integrations", ar: "أنظمة الأعمال والتكاملات" }, detail: { en: "Operations, roles, data flows, APIs, reports, automations and system changes.", ar: "التشغيل والأدوار وتدفق البيانات وواجهات API والتقارير والأتمتة وتغييرات النظام." }, image: "/business-sectors/crm-automation.jpg" },
  { id: "growth", title: { en: "Marketing and growth", ar: "التسويق والنمو" }, detail: { en: "Landing pages, campaign creative, tracking, content operations and continuous optimisation.", ar: "صفحات الهبوط وإبداع الحملات والتتبع وتشغيل المحتوى والتحسين المستمر." }, image: "/signature-capabilities/Marketing-Growth-Systems.jpg" },
  { id: "cloud", title: { en: "Cloud and infrastructure", ar: "السحابة والبنية التحتية" }, detail: { en: "Hosting, domains, DNS, SSL, backups, business email, monitoring and release operations.", ar: "الاستضافة والنطاقات وDNS وSSL والنسخ الاحتياطية وبريد الأعمال والمراقبة وعمليات النشر." }, image: "/business-sectors/e-commerce.jpg" },
  { id: "feliz", title: { en: "SuperFeliz and AI experiences", ar: "SuperFeliz وتجارب الذكاء الاصطناعي" }, detail: { en: "Demos, connected use cases, prompt and workflow design, model behaviour and product integration.", ar: "العروض والحالات المتصلة وتصميم التعليمات ومسارات العمل وسلوك النموذج ودمجه في المنتج." }, image: "/business-sectors/education-lms.jpg" },
];

export const TECHNICAL_AREAS = [
  { id: "experience", title: { en: "Frontend and experience", ar: "الواجهة والتجربة" }, items: { en: ["Responsive behaviour", "Arabic and RTL", "Accessibility", "Forms and interactions", "Performance"], ar: ["التجاوب", "العربية وRTL", "سهولة الوصول", "النماذج والتفاعلات", "الأداء"] } },
  { id: "application", title: { en: "Applications and systems", ar: "التطبيقات والأنظمة" }, items: { en: ["Business logic", "Roles and permissions", "Dashboards", "Workflows", "Background jobs"], ar: ["منطق الأعمال", "الأدوار والصلاحيات", "لوحات التحكم", "مسارات العمل", "المهام الخلفية"] } },
  { id: "integration", title: { en: "Integrations and data", ar: "التكاملات والبيانات" }, items: { en: ["APIs", "Payments", "Maps", "Email and messaging", "Analytics"], ar: ["واجهات API", "المدفوعات", "الخرائط", "البريد والرسائل", "التحليلات"] } },
  { id: "infrastructure", title: { en: "Infrastructure and release", ar: "البنية والنشر" }, items: { en: ["VPS and hosting", "Domains and DNS", "SSL", "Backups", "Monitoring"], ar: ["VPS والاستضافة", "النطاقات وDNS", "SSL", "النسخ الاحتياطية", "المراقبة"] } },
  { id: "production", title: { en: "Technical creative production", ar: "الإنتاج الإبداعي التقني" }, items: { en: ["Motion systems", "Interactive storytelling", "Product demos", "Campaign builds", "Content tooling"], ar: ["أنظمة الحركة", "السرد التفاعلي", "عروض المنتجات", "تنفيذ الحملات", "أدوات المحتوى"] } },
];

export const CALLBACK_REASONS = [
  { id: "consultation", label: { en: "Project consultation", ar: "استشارة مشروع" }, line: { en: "Discuss an idea, scope or direction before commissioning work.", ar: "ناقش فكرة أو نطاقًا أو اتجاهًا قبل بدء التكليف." } },
  { id: "system", label: { en: "Custom system", ar: "نظام مخصص" }, line: { en: "Map an operation, platform, CRM, booking or automation requirement.", ar: "حلّل متطلب تشغيل أو منصة أو CRM أو حجز أو أتمتة." } },
  { id: "demo", label: { en: "Website or system demo", ar: "عرض موقع أو نظام" }, line: { en: "Walk through an existing Pencil product or a proposed experience.", ar: "استعرض منتجًا قائمًا من Pencil أو تجربة مقترحة." } },
  { id: "feliz", label: { en: "SuperFeliz demo", ar: "عرض SuperFeliz" }, line: { en: "Explore the Feliz family and a relevant connected AI use case.", ar: "استكشف عائلة Feliz وحالة استخدام ذكاء اصطناعي متصلة بعملك." } },
  { id: "subscription", label: { en: "Subscription follow-up", ar: "متابعة اشتراك" }, line: { en: "Discuss an ongoing service, account or renewal.", ar: "ناقش خدمة مستمرة أو حسابًا أو تجديدًا." } },
  { id: "solution", label: { en: "Custom solution", ar: "حل مخصص" }, line: { en: "Bring a problem that crosses design, technology and operations.", ar: "اعرض مشكلة تجمع التصميم والتقنية والتشغيل." } },
];

export const REPORT_SERVICE_TYPES = [
  { id: "website", label: { en: "Website or platform", ar: "موقع أو منصة" } },
  { id: "app", label: { en: "Mobile app or SaaS", ar: "تطبيق أو SaaS" } },
  { id: "system", label: { en: "Business system", ar: "نظام أعمال" } },
  { id: "cloud", label: { en: "Hosting or domain", ar: "استضافة أو نطاق" } },
  { id: "creative", label: { en: "Creative production", ar: "إنتاج إبداعي" } },
  { id: "feliz", label: { en: "SuperFeliz", ar: "SuperFeliz" } },
];
