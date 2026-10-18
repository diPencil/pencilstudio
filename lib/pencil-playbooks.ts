import type { LocalText } from "@/lib/studio-care-content";
import { productionPlaybooks } from "@/lib/pencil-playbooks-production";

export type Playbook = {
  id: string;
  collection: "prepare" | "plan" | "deliver";
  title: LocalText;
  intro: LocalText;
  image: string;
  before: LocalText;
  steps: { title: LocalText; body: LocalText }[];
  checklist: LocalText[];
  tip: LocalText;
};

export const PLAYBOOK_COLLECTIONS = [
  { id: "prepare", en: "Prepare the material", ar: "تجهيز المادة" },
  { id: "plan", en: "Plan the experience", ar: "تخطيط التجربة" },
  { id: "deliver", en: "Keep production moving", ar: "تحريك التنفيذ" },
] as const;

const preparationPlaybooks: Playbook[] = [
  {
    id: "brief", collection: "prepare",
    title: { en: "Write a brief that makes decisions easier.", ar: "اكتب موجزًا يجعل القرارات أسهل." },
    intro: { en: "A brief is not an order form. It is a shared explanation of the change the business needs, who it affects, and what the team must protect while making it.", ar: "الموجز ليس طلب شراء؛ بل شرح مشترك للتغيير الذي يحتاجه العمل، ومن يتأثر به، وما يجب أن يحميه الفريق أثناء التنفيذ." },
    image: "/help-editorial/pencil-home.png",
    before: { en: "Gather the current website or product, a short description of the business, and the people who will make the final decision. Rough notes are enough.", ar: "اجمع الموقع أو المنتج الحالي ووصفًا مختصرًا للنشاط وأسماء أصحاب القرار النهائي. تكفي الملاحظات الأولية." },
    steps: [
      { title: { en: "Name the change, not the deliverable.", ar: "سمِّ التغيير، لا المخرج فقط." }, body: { en: "“We need a website” names the output. “Our sales team cannot explain the service clearly” names the problem. Describe what should become possible after the work and how you will recognise the difference.", ar: "«نحتاج إلى موقع» تسمّي المخرج. «لا يستطيع فريق المبيعات شرح الخدمة بوضوح» تسمّي المشكلة. صف ما يجب أن يصبح ممكنًا بعد العمل وكيف ستتعرف إلى الفرق." } },
      { title: { en: "Describe the audience in a real situation.", ar: "صف الجمهور في موقف حقيقي." }, body: { en: "Explain what brings a person to you, what they already know, what they doubt, and the action they need to take. A job title and age range rarely explain a useful journey by themselves.", ar: "اشرح ما الذي يأتي بالشخص إليك وما الذي يعرفه وما الذي يشك فيه والإجراء الذي يحتاج إلى اتخاذه. لا يفسر المسمى الوظيفي والعمر رحلة مفيدة بمفردهما." } },
      { title: { en: "Separate fixed constraints from preferences.", ar: "افصل القيود الثابتة عن التفضيلات." }, body: { en: "A launch date, payment provider, language or existing database can change the solution. A visual reference usually cannot. Label what is mandatory, what is open to discussion, and what is only an example.", ar: "قد يغير موعد الإطلاق أو مزود الدفع أو اللغة أو قاعدة البيانات الحل. أما المرجع البصري فليس قيدًا عادةً. حدد الإلزامي وما يقبل النقاش وما هو مجرد مثال." } },
      { title: { en: "Give the decision a clear owner.", ar: "امنح القرار مسؤولًا واضحًا." }, body: { en: "List who contributes, who reviews, and who signs off. Agree how feedback will be consolidated. Five stakeholders can be valuable; five separate final directions are not a production plan.", ar: "حدد من يساهم ومن يراجع ومن يعتمد، واتفق على توحيد الملاحظات. قد تكون مشاركة خمسة أطراف مفيدة؛ لكن خمسة اتجاهات نهائية منفصلة ليست خطة تنفيذ." } },
    ],
    checklist: [
      { en: "Business change written in one paragraph", ar: "التغيير المطلوب في فقرة واحدة" },
      { en: "Audience and primary action defined", ar: "الجمهور والإجراء الأساسي محددان" },
      { en: "Existing material and links collected", ar: "المواد والروابط القائمة مجمعة" },
      { en: "Constraints, timing and decision owner named", ar: "القيود والوقت وصاحب القرار محددون" },
    ],
    tip: { en: "If a detail would change the proposed solution, put it in the brief. If it only describes your favourite visual treatment, label it as a reference.", ar: "إذا كانت المعلومة ستغير الحل المقترح، ضعها في الموجز. وإذا كانت تصف معالجة بصرية تعجبك فقط، فسمِّها مرجعًا." },
  },
  {
    id: "branding", collection: "prepare",
    title: { en: "Start a brand project beyond the logo.", ar: "ابدأ مشروع الهوية من وراء الشعار." },
    intro: { en: "The identity needs to represent the business and survive daily use. Start with position and touchpoints before choosing a visual direction.", ar: "يجب أن تمثل الهوية النشاط وأن تصمد في الاستخدام اليومي. ابدأ بالتموضع ونقاط الاستخدام قبل اختيار الاتجاه البصري." },
    image: "/hero-section.jpg",
    before: { en: "Collect your offer, audience questions, competitors and actual places the identity will appear. Include the awkward formats, not only the beautiful ones.", ar: "اجمع عرضك وأسئلة الجمهور والمنافسين وأماكن استخدام الهوية الفعلية. ضم الصيغ الصعبة لا الجميلة فقط." },
    steps: [
      { title: { en: "Clarify the position.", ar: "وضّح التموضع." }, body: { en: "Write what you do, for whom, and why a customer should choose it. Separate the facts about the offer from the personality you want the brand to project.", ar: "اكتب ما تقدمه ولمن ولماذا يختاره العميل. افصل حقائق العرض عن الشخصية التي تريد أن تعكسها العلامة." } },
      { title: { en: "Build a touchpoint inventory.", ar: "أنشئ قائمة نقاط الاستخدام." }, body: { en: "A proposal, shop sign, app icon, menu and social post ask different things of an identity. List dimensions, languages, production methods and the people using each format.", ar: "يتطلب العرض واللافتة وأيقونة التطبيق والقائمة والمنشور أمورًا مختلفة من الهوية. احصر المقاسات واللغات وطرق الإنتاج ومسؤولي كل صيغة." } },
      { title: { en: "Test a system, not a mark.", ar: "اختبر النظام، لا العلامة فقط." }, body: { en: "Review typography, image direction, spacing, templates and motion on real material. A logo that looks convincing alone may fail when the daily content arrives.", ar: "راجع الخطوط واتجاه الصور والمسافات والقوالب والحركة على مواد حقيقية. قد يفشل الشعار المقنع وحده عندما يصل المحتوى اليومي." } },
    ],
    checklist: [{ en: "Offer and position agreed", ar: "العرض والتموضع معتمدان" }, { en: "Arabic and Latin uses listed", ar: "الاستخدامات العربية واللاتينية محصورة" }, { en: "Real touchpoints gathered", ar: "نقاط الاستخدام الحقيقية مجمعة" }],
    tip: { en: "Bring the invoice, sign and presentation people use today. Those tell us more than a moodboard of unrelated brands.", ar: "أحضر الفاتورة واللافتة والعرض المستخدم اليوم؛ تخبرنا هذه المواد بأكثر مما تخبرنا لوحة مراجع لعلامات غير مرتبطة." },
  },
  {
    id: "content", collection: "prepare",
    title: { en: "Prepare website content without blocking design.", ar: "جهز محتوى الموقع من دون تعطيل التصميم." },
    intro: { en: "Content can be prepared in production order. A clear inventory with owners beats waiting for one enormous perfect document.", ar: "يمكن تجهيز المحتوى وفق ترتيب التنفيذ. قائمة واضحة بمسؤولين أفضل من انتظار مستند ضخم ومثالي." },
    image: "/business-sectors/corporate-websites.jpg",
    before: { en: "Start with the pages and visitor questions, not the old brochure. Mark which facts are approved and which text still needs writing.", ar: "ابدأ بالصفحات وأسئلة الزائر لا بالكتيب القديم. حدد الحقائق المعتمدة والنصوص التي تحتاج إلى كتابة." },
    steps: [
      { title: { en: "Give every page a job.", ar: "امنح كل صفحة وظيفة." }, body: { en: "List the question it answers, its primary action and the evidence required. Remove pages that repeat another page without helping the visitor make a decision.", ar: "حدد السؤال الذي تجيب عنه والإجراء الأساسي والدليل المطلوب. احذف ما يكرر صفحة أخرى من دون مساعدة الزائر على القرار." } },
      { title: { en: "Assign facts and assets to owners.", ar: "عيّن مسؤولين للحقائق والأصول." }, body: { en: "Service details, pricing, team information, policies and photography rarely come from one person. Name who supplies each item and who can approve its accuracy.", ar: "نادرًا ما تأتي تفاصيل الخدمات والأسعار والفريق والسياسات والصور من شخص واحد. حدد من يوفّر كل عنصر ومن يعتمد دقته." } },
      { title: { en: "Release content in useful batches.", ar: "اعتمد المحتوى على دفعات مفيدة." }, body: { en: "Approve navigation and critical pages first. Keep unresolved claims visible in the inventory. Do not hide missing facts inside polished copy and hope they survive launch.", ar: "اعتمد التنقل والصفحات الأساسية أولًا. أبق الادعاءات غير المحسومة ظاهرة في القائمة. لا تخف الحقائق الناقصة داخل نص مصقول على أمل مرورها إلى الإطلاق." } },
    ],
    checklist: [{ en: "Page purpose and primary action recorded", ar: "وظيفة الصفحة والإجراء مسجلان" }, { en: "Fact and content owners named", ar: "مسؤولو الحقائق والمحتوى محددون" }, { en: "Images and approvals tracked", ar: "الصور والاعتمادات موثقة" }],
    tip: { en: "One approved service page is more useful to design than twenty pages of unapproved marketing copy.", ar: "صفحة خدمة واحدة معتمدة أفيد للتصميم من عشرين صفحة من النص التسويقي غير المعتمد." },
  },
  {
    id: "assets", collection: "prepare",
    title: { en: "Prepare assets the production team can actually use.", ar: "جهز أصولًا يستطيع فريق الإنتاج استخدامها." },
    intro: { en: "A good asset hand-off saves more than time. It prevents the wrong logo, outdated copy and unclear image permissions from entering the work.", ar: "يوفر تسليم الأصول الجيد أكثر من الوقت؛ يمنع وصول شعار خاطئ أو نص قديم أو صور مجهولة الحقوق إلى العمل." },
    image: "/signature-capabilities/Marketing-Growth-Systems.jpg",
    before: { en: "Choose one shared source folder. Keep original files separate from previews and obsolete versions.", ar: "اختر مجلد مصدر مشتركًا واحدًا. افصل الملفات الأصلية عن المعاينات والإصدارات القديمة." },
    steps: [
      { title: { en: "Send originals, not message screenshots.", ar: "أرسل الأصل لا لقطة الرسالة." }, body: { en: "Include vector logos where available, original photographs, editable source files and brand guidance. If the original does not exist, say so rather than renaming a small preview as the final file.", ar: "ضم الشعارات المتجهية والصور الأصلية والملفات القابلة للتحرير ودليل الهوية إن توفرت. إذا لم يوجد الأصل، صرّح بذلك بدل تسمية المعاينة الصغيرة ملفًا نهائيًا." } },
      { title: { en: "Record rights and restrictions.", ar: "سجل الحقوق والقيود." }, body: { en: "Mark what may be published, where it may appear and whether consent or licensing is required. Fonts, portraits, project photography and client logos need clear permission.", ar: "حدد ما يجوز نشره وأين وما يحتاج إلى موافقة أو ترخيص. تحتاج الخطوط والصور الشخصية وصور المشروعات وشعارات العملاء إلى صلاحية واضحة." } },
      { title: { en: "Make the current version obvious.", ar: "اجعل الإصدار الحالي واضحًا." }, body: { en: "Use descriptive names and one approved folder. Provide a short index of files and missing items. Avoid multiple folders all called final with no owner to resolve the conflict.", ar: "استخدم أسماء وصفية ومجلدًا معتمدًا واحدًا. أرفق فهرسًا قصيرًا للملفات والنواقص. تجنب مجلدات متعددة باسم نهائي بلا مسؤول يحسم التعارض." } },
    ],
    checklist: [{ en: "Original files separated from previews", ar: "الأصول مفصولة عن المعاينات" }, { en: "Usage rights confirmed", ar: "حقوق الاستخدام مؤكدة" }, { en: "Approved version and missing items labelled", ar: "الإصدار المعتمد والنواقص محددان" }],
    tip: { en: "Never place passwords or account recovery codes in the asset folder. Use the agreed secure access method.", ar: "لا تضع كلمات المرور أو رموز استرداد الحسابات في مجلد الأصول. استخدم طريقة الوصول الآمنة المتفق عليها." },
  },
  {
    id: "planning", collection: "plan",
    title: { en: "Plan a website or product around a real journey.", ar: "خطط للموقع أو المنتج حول رحلة حقيقية." },
    intro: { en: "A screen list describes quantity. A journey describes what the product must help someone accomplish, including the difficult moments.", ar: "تصف قائمة الشاشات الكمية، بينما تصف الرحلة ما يجب أن يساعد المنتج على إنجازه، بما فيه اللحظات الصعبة." },
    image: "/help-editorial/pencil-solutions.png",
    before: { en: "Name the primary user, the task, the decision and the team handling the result.", ar: "حدد المستخدم الأساسي والمهمة والقرار والفريق الذي يتعامل مع النتيجة." },
    steps: [
      { title: { en: "Map intent before navigation.", ar: "ارسم النية قبل التنقل." }, body: { en: "Write why the user arrives, what they need to know and what they should do. Then decide which pages or screens belong in the route.", ar: "اكتب سبب وصول المستخدم وما يحتاج إلى معرفته وما يجب أن يفعله. ثم حدد الصفحات أو الشاشات التي تنتمي إلى المسار." } },
      { title: { en: "Design the exceptions early.", ar: "صمم الاستثناءات مبكرًا." }, body: { en: "Include no results, missing permissions, failed payments, slow connections and interrupted forms. These states change the architecture and content, not just the error message.", ar: "ضم غياب النتائج والصلاحيات الناقصة وفشل الدفع والاتصال البطيء والنماذج المنقطعة. تغير هذه الحالات البنية والمحتوى لا رسالة الخطأ فقط." } },
      { title: { en: "Connect the front to the operation.", ar: "اربط الواجهة بالتشغيل." }, body: { en: "Define what happens after a submission or purchase: assignment, confirmation, fulfilment and reporting. A polished customer journey still fails if the internal hand-off is missing.", ar: "حدد ما يحدث بعد الطلب أو الشراء: التوزيع والتأكيد والتنفيذ والتقارير. تفشل رحلة العميل المصقولة إذا غاب التسليم الداخلي." } },
    ],
    checklist: [{ en: "Primary journey mapped", ar: "الرحلة الأساسية مرسومة" }, { en: "Error and recovery states included", ar: "الخطأ والتعافي مشمولان" }, { en: "Operating owner and next action defined", ar: "مسؤول التشغيل والخطوة التالية محددان" }],
    tip: { en: "Prototype the most consequential journey before approving a full set of polished screens.", ar: "اختبر نموذج الرحلة الأهم قبل اعتماد مجموعة كاملة من الشاشات المصقولة." },
  },
  {
    id: "format", collection: "plan",
    title: { en: "Choose the right shape: website, platform, dashboard or system.", ar: "اختر الشكل المناسب: موقع أم منصة أم لوحة أم نظام." },
    intro: { en: "The label follows the work. Choose by audience, repeated tasks, roles and data, not by which term sounds more ambitious.", ar: "يتبع الاسم طبيعة العمل. اختر وفق الجمهور والمهام المتكررة والأدوار والبيانات، لا المصطلح الأكثر طموحًا." },
    image: "/business-sectors/crm-automation.jpg",
    before: { en: "List who uses the experience, what they do repeatedly, and what information moves between them.", ar: "احصر مستخدمي التجربة وما يفعلونه باستمرار والمعلومات التي تتحرك بينهم." },
    steps: [
      { title: { en: "Website: explain and convert.", ar: "الموقع: الشرح والتحويل." }, body: { en: "Use a website when the primary job is communicating the offer, publishing content and guiding inquiries or transactions. It may still need a CMS, booking or payment integration.", ar: "استخدم الموقع عندما تكون الوظيفة الأساسية شرح العرض ونشر المحتوى وتوجيه الاستفسارات أو المعاملات. قد يظل محتاجًا إلى إدارة محتوى أو حجز أو دفع." } },
      { title: { en: "Platform: connect ongoing participants.", ar: "المنصة: ربط أطراف مستمرة." }, body: { en: "A platform brings accounts, roles and repeated interactions into one product. Think about onboarding, permissions, subscriptions and the rules between different participants.", ar: "تجمع المنصة الحسابات والأدوار والتفاعلات المتكررة في منتج واحد. فكر في البدء والصلاحيات والاشتراكات والقواعد التي تربط الأطراف." } },
      { title: { en: "Dashboard or system: run the operation.", ar: "اللوحة أو النظام: تشغيل العملية." }, body: { en: "A dashboard helps people see and act on information. A custom system controls workflows, approvals and data. The dashboard may be one interface inside the larger system; the choices are not mutually exclusive.", ar: "تساعد اللوحة على رؤية المعلومات والتصرف وفقها. ويدير النظام مسارات العمل والاعتمادات والبيانات. قد تكون اللوحة واجهة داخل نظام أكبر؛ فالخيارات ليست متعارضة بالضرورة." } },
    ],
    checklist: [{ en: "Users and roles listed", ar: "المستخدمون والأدوار محصورون" }, { en: "Repeated tasks and data mapped", ar: "المهام المتكررة والبيانات مرسومة" }, { en: "First useful scope defined", ar: "أول نطاق مفيد محدد" }],
    tip: { en: "Describe the operation to Pencil before naming the software. The right architecture often combines more than one shape.", ar: "صف العملية لـPencil قبل تسمية البرمجية. تجمع البنية المناسبة غالبًا أكثر من شكل." },
  },
  {
    id: "rtl", collection: "plan",
    title: { en: "Plan Arabic as a product, not a late translation.", ar: "خطط للعربية كمنتج لا ترجمة متأخرة." },
    intro: { en: "Arabic affects structure, type, forms and behaviour. Treat both languages as complete product states from the beginning.", ar: "تؤثر العربية في البنية والخط والنماذج والسلوك. عامل اللغتين كحالتين كاملتين للمنتج منذ البداية." },
    image: "/business-sectors/education-lms.jpg",
    before: { en: "Confirm languages, content owners, terminology and how dates, numbers and currencies should appear.", ar: "أكد اللغات ومسؤولي المحتوى والمصطلحات وطريقة عرض التواريخ والأرقام والعملات." },
    steps: [
      { title: { en: "Keep meaning, not identical line breaks.", ar: "احفظ المعنى لا كسر السطر نفسه." }, body: { en: "Choose Arabic typography and line height on their own terms. Headings and buttons must fit real Arabic copy without forcing it into the English layout.", ar: "اختر الخط العربي وارتفاع السطر وفق طبيعته. يجب أن تتسع العناوين والأزرار للنص الحقيقي من دون إجباره على التنسيق الإنجليزي." } },
      { title: { en: "Audit direction and mixed content.", ar: "راجع الاتجاه والمحتوى المختلط." }, body: { en: "Test navigation, arrows, tables, phone numbers and English names inside Arabic sentences. Mirror directional relationships, not every image and familiar symbol.", ar: "اختبر التنقل والأسهم والجداول وأرقام الهاتف والأسماء الإنجليزية داخل الجمل العربية. اعكس العلاقات الاتجاهية، لا كل صورة ورمز مألوف." } },
      { title: { en: "Test both languages on real devices.", ar: "اختبر اللغتين على أجهزة حقيقية." }, body: { en: "Use long labels, validation messages, empty states and actual content. A translated homepage is not a complete RTL test of an operational product.", ar: "استخدم عناوين طويلة ورسائل تحقق وحالات فراغ ومحتوى فعليًا. ليست ترجمة الصفحة الرئيسية اختبار RTL كاملًا لمنتج تشغيلي." } },
    ],
    checklist: [{ en: "Terminology and formats agreed", ar: "المصطلحات والصيغ متفق عليها" }, { en: "RTL and mixed-text states tested", ar: "الاتجاه والنص المختلط مختبران" }, { en: "Mobile headings and forms verified", ar: "عناوين الهاتف والنماذج متحقق منها" }],
    tip: { en: "Supply real Arabic content before layout sign-off. Placeholder text hides the problems that matter.", ar: "وفر محتوى عربيًا حقيقيًا قبل اعتماد التنسيق؛ يخفي النص الوهمي المشكلات المهمة." },
  },
];

export const PENCIL_PLAYBOOKS: Playbook[] = [...preparationPlaybooks, ...productionPlaybooks];
