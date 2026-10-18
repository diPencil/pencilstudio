import type { LocalText } from "@/lib/studio-care-content";
import { practiceQuestions } from "@/lib/pencil-faq-practice";

export type PencilQuestion = { id: string; category: string; question: LocalText; answer: { en: string[]; ar: string[] } };
export const FAQ_CHAPTERS = [
  { id: "all", en: "All questions", ar: "جميع الأسئلة" },
  { id: "pencil", en: "Pencil, explained", ar: "التعرّف إلى Pencil" },
  { id: "creative", en: "Brand & creative", ar: "الهوية والإبداع" },
  { id: "digital", en: "Products & technology", ar: "المنتجات والتقنية" },
  { id: "ai", en: "SuperFeliz & AI", ar: "SuperFeliz والذكاء الاصطناعي" },
  { id: "process", en: "The working relationship", ar: "علاقة العمل" },
  { id: "continuity", en: "After launch", ar: "ما بعد الإطلاق" },
];

const introductionQuestions: PencilQuestion[] = [
  {
    id: "who", category: "pencil",
    question: { en: "What is Pencil, beyond the studio name?", ar: "ما هي Pencil، بعيدًا عن اسم الاستوديو؟" },
    answer: {
      en: [
        "Pencil is the wider company and ecosystem. Pencil Studio is its multidisciplinary making practice: the people who turn business questions into identities, websites, products, systems and creative work. SuperFeliz and the Feliz family are the AI side of that ecosystem, with their own defined roles.",
        "The distinction matters when a project crosses disciplines. A company may need a stronger identity, a clearer sales journey and an internal system at the same time. Those should not become three unrelated projects with three competing assumptions. Pencil connects the thinking; the studio makes it tangible; the relevant technology supports the work."
      ],
      ar: [
        "Pencil هي الشركة والمنظومة الأوسع. أما Pencil Studio فهو ممارسة التنفيذ متعددة التخصصات؛ الفريق الذي يحوّل أسئلة الأعمال إلى هويات ومواقع ومنتجات وأنظمة وعمل إبداعي. ويمثل SuperFeliz وعائلة Feliz الجانب الخاص بالذكاء الاصطناعي، بأدوار محددة لكل منتج.",
        "يصبح هذا الفرق مهمًا عندما يعبر المشروع أكثر من تخصص. قد تحتاج المؤسسة إلى هوية أقوى ورحلة مبيعات أوضح ونظام داخلي في الوقت نفسه. لا ينبغي أن تتحول هذه الاحتياجات إلى ثلاثة مشروعات منفصلة بافتراضات متعارضة. تربط Pencil التفكير، ويجعله الاستوديو ملموسًا، وتخدمه التقنية المناسبة."
      ]
    }
  },
  {
    id: "studio", category: "pencil",
    question: { en: "Do we hire a design studio, a development team or a digital partner?", ar: "هل نتعاون مع استوديو تصميم أم فريق تطوير أم شريك رقمي؟" },
    answer: {
      en: [
        "The engagement takes the shape of the problem. A brand project needs strategy, writing and art direction. A digital product adds UX, interface design, development and release thinking. A business system needs a close understanding of operations, roles, data and integrations.",
        "Pencil Studio can lead the whole engagement or own a clearly defined layer beside your internal team. The important part is agreeing who makes decisions, what each team owns, and where hand-offs happen. A multidisciplinary team is useful only when its responsibilities are as clear as its capabilities."
      ],
      ar: [
        "يتحدد شكل التعاون بحسب المشكلة. يحتاج مشروع الهوية إلى الاستراتيجية والكتابة والإخراج الفني. ويضيف المنتج الرقمي تجربة المستخدم وتصميم الواجهات والتطوير وتخطيط النشر. أما نظام الأعمال فيحتاج إلى فهم قريب للتشغيل والأدوار والبيانات والتكاملات.",
        "يمكن لـPencil Studio قيادة المشروع كاملًا أو تولي طبقة محددة بجوار فريقكم الداخلي. الأهم هو الاتفاق على أصحاب القرار ومسؤولية كل فريق ونقاط التسليم. تكون تعددية التخصصات مفيدة عندما تكون مسؤولياتها واضحة بقدر وضوح قدراتها."
      ]
    }
  },
  {
    id: "experience", category: "pencil",
    question: { en: "What experience can we actually point to?", ar: "ما الخبرة التي يمكننا الاستناد إليها فعلًا؟" },
    answer: {
      en: [
        "Pencil began in Cairo in 2014. We work across Egypt, the Middle East, the Gulf and Europe. Its service practice spans identity, websites and platforms, mobile and SaaS products, business systems, growth and cloud operations.",
        "Our brand archive includes DirectTrip, Taxidia Hotels, Core School, Aqarawii and Sphinx Academy. Those are useful starting points for a conversation about relevant work, not a licence to attach unverified outcomes to a logo. For a serious engagement, ask us to walk you through the work closest to your brief and the decisions behind it."
      ],
      ar: [
        "بدأت Pencil في القاهرة عام 2014، ونعمل عبر مصر والشرق الأوسط والخليج وأوروبا. وتشمل الممارسة الهوية والمواقع والمنصات وتطبيقات الهاتف ومنتجات SaaS وأنظمة الأعمال والنمو وعمليات السحابة.",
        "يتضمن أرشيف علاماتنا DirectTrip وTaxidia Hotels وCore School وAqarawii وSphinx Academy. هذه الأسماء مدخل مفيد لمناقشة العمل المناسب، وليست مبررًا لنسب نتائج غير موثقة إلى شعار. عند التفكير في تعاون جاد، اطلب استعراض العمل الأقرب إلى موجزك والقرارات التي صنعته."
      ]
    }
  },
  {
    id: "proof", category: "pencil",
    question: { en: "What can we review before choosing Pencil?", ar: "ما الذي يمكننا مراجعته قبل اختيار Pencil؟" },
    answer: {
      en: [
        "Start with work relevant to your needs. Ask what the brief required, what we delivered and why the team made those decisions. A logo alone cannot tell you how a project worked or what changed for the business.",
        "A procurement requirement deserves a direct answer, not a decorative badge. Tell us which technical, security or supplier documents your company needs before commissioning. Likewise, if a case study matters to your decision, ask to see its scope, deliverables and evidence rather than relying on a headline."
      ],
      ar: [
        "ابدأ بعمل يرتبط باحتياجاتك. اسأل عما تطلبه الموجز، وما سلمناه، ولماذا اتخذ الفريق تلك القرارات. الشعار وحده لا يشرح كيف نُفذ المشروع أو ما الذي تغير في النشاط.",
        "متطلبات التعاقد تستحق إجابة مباشرة لا شارة زخرفية. أخبرنا بالمستندات التقنية أو الأمنية أو مستندات المورد التي تحتاجها مؤسستك قبل التكليف. وإذا كانت دراسة حالة مؤثرة في قرارك، فاطلب مراجعة نطاقها ومخرجاتها وأدلتها بدل الاعتماد على عنوان."
      ]
    }
  },
  {
    id: "sectors", category: "pencil",
    question: { en: "Which businesses do you understand and work with?", ar: "ما أنواع الأعمال والقطاعات التي تعملون معها؟" },
    answer: {
      en: [
        "We work with businesses in tourism and travel, property, restaurants and hospitality, education, healthcare, commerce, professional services and operations-heavy businesses. The work can involve a public-facing brand or website, a customer journey, an internal operation, or all three.",
        "Sector familiarity gives us better questions; it does not replace learning your business. Clinic booking and travel booking may look similar on a screen but have different information, permissions, exceptions and consequences. We start from your actual workflow and audience, then decide what should be familiar and what should be specific."
      ],
      ar: [
        "نعمل مع قطاعات السياحة والسفر والعقارات والمطاعم والضيافة والتعليم والرعاية الصحية والتجارة والخدمات المهنية والأعمال كثيفة التشغيل. وقد يكون العمل هوية أو موقعًا للجمهور أو رحلة عميل أو عملية داخلية أو مزيجًا منها.",
        "تمنحنا معرفة القطاع أسئلة أفضل، لكنها لا تغني عن تعلم نشاطك. قد يتشابه حجز العيادة وحجز الرحلة على الشاشة، لكن المعلومات والصلاحيات والاستثناءات والنتائج مختلفة. نبدأ بمسار عملك وجمهورك الفعليين، ثم نحدد ما يحتاج إلى نمط مألوف وما يستحق حلًا خاصًا."
      ]
    }
  },
  {
    id: "brand", category: "creative",
    question: { en: "Is branding just the logo and a colour palette?", ar: "هل الهوية مجرد شعار ولوحة ألوان؟" },
    answer: {
      en: [
        "A logo is one recognisable part of a brand system. The larger work includes position, voice, typography, visual direction, image choices, motion and the rules that keep repeated use coherent. A brand needs to survive a proposal, a social post, a sign, packaging and a product interface.",
        "We use actual touchpoints to judge the identity. Arabic and Latin typography need to belong to the same company. Templates need enough freedom for daily production without drifting. Guidelines should explain decisions people really make, not simply preserve a beautiful presentation."
      ],
      ar: [
        "الشعار جزء مميز من نظام العلامة. يشمل العمل الأوسع التموضع والنبرة والخطوط والاتجاه البصري واختيار الصور والحركة والقواعد التي تحفظ تماسك الاستخدام المتكرر. يجب أن تعمل الهوية في عرض تجاري ومنشور ولافتة وتغليف وواجهة منتج.",
        "نختبر الهوية على نقاط استخدام فعلية. ينبغي أن تنتمي الخطوط العربية واللاتينية إلى الشركة نفسها، وأن تمنح القوالب حرية كافية للإنتاج اليومي من دون انحراف. ويجب أن يشرح دليل الهوية قرارات يتخذها الناس فعلًا، لا أن يحفظ عرضًا جميلًا فقط."
      ]
    }
  },
  {
    id: "creative", category: "creative",
    question: { en: "Can you handle graphic design, campaigns, content and motion together?", ar: "هل يمكنكم تنفيذ التصميم الجرافيكي والحملات والمحتوى والحركة معًا؟" },
    answer: {
      en: [
        "These sit inside Pencil's creative and growth practice: campaign direction, graphic systems, social content, landing pages, motion and performance creative. A useful campaign is not a folder of unrelated formats. Its copy, visual hierarchy and destination need to carry the same offer.",
        "The brief should separate the message from the production requirements: what the audience must understand, what they should do, which formats are needed, who supplies source material and who approves. That keeps a large creative rollout consistent without turning every adaptation into a new direction."
      ],
      ar: [
        "تقع هذه الأعمال ضمن ممارسة Pencil الإبداعية وممارسة النمو: إخراج الحملات والأنظمة الجرافيكية ومحتوى التواصل وصفحات الهبوط والحركة وإبداع الأداء. الحملة المفيدة ليست مجلدًا من مقاسات منفصلة؛ بل يجب أن يحمل النص والتسلسل البصري ووجهة الزائر العرض نفسه.",
        "يفصل الموجز بين الرسالة ومتطلبات الإنتاج: ما الذي يجب أن يفهمه الجمهور، وما الإجراء المطلوب، وما الصيغ اللازمة، ومن يوفّر المواد، ومن يعتمدها. يحافظ ذلك على تماسك التنفيذ الواسع من دون تحويل كل تكييف إلى اتجاه جديد."
      ]
    }
  },
  {
    id: "ux", category: "creative",
    question: { en: "What do you mean by UI/UX when the business already knows what it wants?", ar: "ما دور UI/UX عندما تعرف المؤسسة بالفعل ما تريده؟" },
    answer: {
      en: [
        "Business requirements tell us what must be possible. UX establishes how people reach it: the order of information, the decisions they make, the effort required and how they recover when something goes wrong. UI gives that structure a clear visual and interactive language.",
        "We review key journeys before polishing individual screens. A booking, approval or checkout can fail because its sequence is wrong, not because its buttons need a new colour. The design also needs empty states, errors, permissions, loading and mobile behaviour. Those are part of the product, not the final decoration."
      ],
      ar: [
        "توضح متطلبات المؤسسة ما الذي يجب أن يصبح ممكنًا. وتحدد تجربة المستخدم كيفية الوصول إليه: ترتيب المعلومات والقرارات والجهد المطلوب وكيفية التعافي عند حدوث خطأ. ثم تمنح الواجهة هذه البنية لغة بصرية وتفاعلية واضحة.",
        "نراجع الرحلات الأساسية قبل تلميع الشاشات. قد يفشل الحجز أو الاعتماد أو الدفع لأن تسلسله غير مناسب، لا لأن الأزرار تحتاج إلى لون جديد. ويشمل التصميم حالات الفراغ والخطأ والصلاحيات والتحميل وسلوك الهاتف؛ فهذه أجزاء من المنتج وليست زينة أخيرة."
      ]
    }
  },
  {
    id: "feliz", category: "ai",
    question: { en: "What is SuperFeliz, and how is it different from the Feliz family?", ar: "ما هو SuperFeliz، وما علاقته بعائلة Feliz؟" },
    answer: {
      en: [
        "SuperFeliz is Pencil's complete AI model within the Feliz family. The existing product data describes it as the all-domain layer that understands a mission, connects its parts and chooses the kind of thinking each part needs.",
        "The family has focused roles: Feliz Oper handles business thinking such as planning, pricing and priorities; Feliz Tech maps technical architecture and execution; Feliz Gen produces usable concepts, flows, content and starter output. SuperFeliz brings the wider mission together. The current product data labels these models V1.0 Beta, with Free and PRO tiers.",
        "The public Ask Feliz experience is an introductory demo with prepared replies, not evidence that every connected workflow is already live. A professional use case should be discussed in terms of data, integrations, controls and the actual product scope."
      ],
      ar: [
        "SuperFeliz هو نموذج Pencil الشامل ضمن عائلة Feliz. تصفه بيانات المنتج الحالية بأنه الطبقة التي تفهم المهمة وتربط أجزاءها وتحدد نوع التفكير الذي يحتاجه كل جزء.",
        "للعائلة أدوار متخصصة: يعالج Feliz Oper التفكير التجاري مثل التخطيط والتسعير والأولويات، ويرسم Feliz Tech البنية التقنية ومسار التنفيذ، وينتج Feliz Gen مفاهيم وتدفقات ومحتوى ومخرجات أولية قابلة للاستخدام. ويجمع SuperFeliz المهمة الأوسع. تحمل النماذج في البيانات الحالية وصف V1.0 Beta ومستويات مجانية وPRO.",
        "تجربة Ask Feliz العامة عرض تعريفي بإجابات معدة، وليست دليلًا على أن كل مسار متصل يعمل بالفعل. يجب مناقشة الاستخدام المهني وفق البيانات والتكاملات والضوابط والنطاق الحقيقي للمنتج."
      ]
    }
  },
  {
    id: "automation", category: "ai",
    question: { en: "Where can AI and automation make a useful difference?", ar: "أين يمكن للذكاء الاصطناعي والأتمتة أن يصنعا فرقًا مفيدًا؟" },
    answer: {
      en: [
        "A repeated task, a recurring decision or an information bottleneck is a better starting point than a request to add AI everywhere. Pencil's systems practice includes workflows and integrations; the Feliz products add business, technical and generative thinking to the conversation.",
        "Before recommending an AI feature, we need to understand the available data, the user, the acceptable failure and the human decision point. A deterministic automation may be the better answer for a strict approval rule. AI may be useful where information needs interpretation or generation. The choice should follow the work, not the label."
      ],
      ar: [
        "المهمة المتكررة أو القرار المتكرر أو اختناق المعلومات بداية أفضل من طلب إضافة الذكاء الاصطناعي في كل مكان. تتضمن ممارسة الأنظمة لدى Pencil مسارات العمل والتكاملات، وتضيف منتجات Feliz التفكير التجاري والتقني والتوليدي.",
        "قبل اقتراح خاصية ذكية، نحتاج إلى فهم البيانات المتاحة والمستخدم والفشل المقبول ونقطة القرار البشري. قد تكون الأتمتة المحددة القواعد أفضل لاعتماد صارم، بينما يفيد الذكاء الاصطناعي عندما تحتاج المعلومات إلى تفسير أو توليد. يتبع الاختيار طبيعة العمل لا اسم التقنية."
      ]
    }
  },
];

export const PENCIL_EDITORIAL_QUESTIONS: PencilQuestion[] = [...introductionQuestions, ...practiceQuestions];
