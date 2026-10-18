import type { PencilQuestion } from "@/lib/pencil-faq-editorial";

export const practiceQuestions: PencilQuestion[] = [
  {
    id: "mobile", category: "digital",
    question: { en: "How do mobile apps and SaaS products differ from a website project?", ar: "كيف تختلف تطبيقات الهاتف ومنتجات SaaS عن مشروع الموقع؟" },
    answer: {
      en: [
        "A product has an ongoing relationship with its users. Accounts, onboarding, roles, subscriptions, notifications and repeated tasks affect its design as much as the first impression. Pencil's mobile and SaaS practice connects product strategy, UX architecture, interface systems, development and release support.",
        "We define the smallest useful product around a real journey, not a collection of screens. The administration side matters too: who manages users, content, billing and support? For mobile, publishing and store accounts are release dependencies. For SaaS, the service model and ongoing operations need to be planned alongside the interface."
      ],
      ar: [
        "للمنتج علاقة مستمرة مع مستخدميه. تؤثر الحسابات والبدء والأدوار والاشتراكات والإشعارات والمهام المتكررة في تصميمه بقدر الانطباع الأول. تربط ممارسة الهاتف وSaaS لدى Pencil استراتيجية المنتج وبنية UX ونظام الواجهة والتطوير ودعم النشر.",
        "نحدد أصغر منتج مفيد حول رحلة حقيقية لا مجموعة شاشات. ويهم الجانب الإداري أيضًا: من يدير المستخدمين والمحتوى والفوترة والدعم؟ في الهاتف، يعد النشر وحسابات المتاجر من متطلبات الإطلاق. وفي SaaS، يجب تخطيط نموذج الخدمة والتشغيل المستمر بجوار الواجهة."
      ]
    }
  },
  {
    id: "services", category: "digital",
    question: { en: "What can you build from the first brief through to launch?", ar: "ما الذي تستطيعون بناؤه من الموجز الأول حتى الإطلاق؟" },
    answer: {
      en: [
        "The existing service range includes brand identity, corporate and multilingual websites, e-commerce, booking platforms, mobile apps, SaaS products, business systems, marketing and growth work, and hosting and cloud operations. Projects can combine these when the business needs them to work together.",
        "The useful question is which parts your project actually needs. A public website may require content, UX and a lead flow rather than a custom application. A subscription product may need accounts, permissions, payments and ongoing operations. We define the journey and dependencies before presenting a list of outputs."
      ],
      ar: [
        "يشمل نطاق الخدمات الموجود الهوية ومواقع الشركات والمواقع متعددة اللغات والمتاجر ومنصات الحجز وتطبيقات الهاتف ومنتجات SaaS وأنظمة الأعمال والتسويق والنمو والاستضافة وعمليات السحابة. ويمكن للمشروع الجمع بينها عندما تحتاج المؤسسة إلى عملها معًا.",
        "السؤال المفيد هو ما الأجزاء التي يحتاجها مشروعك فعلًا. قد يحتاج الموقع العام إلى محتوى وUX ومسار عملاء محتملين بدل تطبيق مخصص، بينما يحتاج المنتج باشتراك إلى حسابات وصلاحيات ومدفوعات وتشغيل مستمر. نحدد الرحلة والاعتمادات قبل تقديم قائمة المخرجات."
      ]
    }
  },
  {
    id: "website", category: "digital",
    question: { en: "What makes a website more than an attractive company brochure?", ar: "ما الذي يجعل الموقع أكثر من كتيب شركة جميل؟" },
    answer: {
      en: [
        "Each page needs a job: establish trust, explain an offer, answer a question, qualify an inquiry or complete a transaction. Content, navigation and visual hierarchy should make that job easier. Motion should clarify the experience without hiding the product or delaying a visitor.",
        "The less visible work matters too: responsive behaviour, Arabic and English, content management, search foundations, forms, performance and integration with the team receiving inquiries. Launching a polished frontend is not enough if the next step in the business is disconnected."
      ],
      ar: [
        "تحتاج كل صفحة إلى وظيفة: بناء الثقة أو شرح العرض أو الإجابة عن سؤال أو تأهيل استفسار أو إتمام معاملة. يجب أن يسهل المحتوى والتنقل والتسلسل البصري هذه الوظيفة، وأن توضح الحركة التجربة من دون إخفاء المنتج أو تأخير الزائر.",
        "ويهم العمل غير الظاهر أيضًا: التجاوب والعربية والإنجليزية وإدارة المحتوى وأساسيات البحث والنماذج والأداء والربط بالفريق الذي يستقبل الطلبات. لا يكفي إطلاق واجهة مصقولة إذا كانت الخطوة التالية داخل المؤسسة منفصلة عنها."
      ]
    }
  },
  {
    id: "systems", category: "digital",
    question: { en: "Can a custom system replace the spreadsheets and messages our team lives in?", ar: "هل يستطيع نظام مخصص استبدال الجداول والرسائل التي يعتمد عليها فريقنا؟" },
    answer: {
      en: [
        "Pencil's business systems practice covers CRM, bookings, operations, inventory, staff workflows, approvals, reporting and automation. But replacing a spreadsheet is not the objective by itself. We first need to understand who enters information, who decides, what happens next and where work gets lost.",
        "The design has to include permissions, history, exception handling and the reports people use to manage the operation. We also consider the transition: existing data, training and a sensible first scope. A smaller system the team can operate is often a better first release than an enormous one they cannot adopt."
      ],
      ar: [
        "تشمل ممارسة أنظمة الأعمال لدى Pencil إدارة العملاء والحجز والتشغيل والمخزون ومسارات الموظفين والاعتمادات والتقارير والأتمتة. لكن استبدال الجدول ليس هدفًا بحد ذاته؛ نحتاج أولًا إلى فهم من يدخل المعلومات ومن يقرر وما الخطوة التالية وأين يضيع العمل.",
        "يجب أن يشمل التصميم الصلاحيات والسجل ومعالجة الاستثناءات والتقارير التي تدير العملية. ونراجع الانتقال أيضًا: البيانات القائمة والتدريب ونطاقًا أوليًا مناسبًا. يكون النظام الأصغر الذي يستطيع الفريق تشغيله إطلاقًا أول أفضل من نظام ضخم يصعب تبنيه."
      ]
    }
  },
  {
    id: "existing", category: "digital",
    question: { en: "Can you improve an existing product without rebuilding everything?", ar: "هل يمكن تحسين منتج قائم من دون إعادة بناء كل شيء؟" },
    answer: {
      en: [
        "Yes. The starting point is an audit of the experience, content, code and operating context. We separate what works, what needs repair and what is preventing the next stage. Existing work should not be discarded simply because a new team arrived.",
        "Sometimes the issue is a confusing flow or missing content. Sometimes it is technical debt, an unreliable integration or an architecture that no longer fits. The recommendation should explain the evidence and trade-offs, including what is worth preserving and the cost of continuing to patch."
      ],
      ar: [
        "نعم. تبدأ الخطوة بمراجعة التجربة والمحتوى والشيفرة والسياق التشغيلي. نفصل ما يعمل وما يحتاج إلى إصلاح وما يمنع المرحلة التالية. لا ينبغي التخلص من العمل القائم لمجرد وصول فريق جديد.",
        "أحيانًا تكون المشكلة رحلة مربكة أو محتوى ناقصًا، وأحيانًا تكون ديونًا تقنية أو تكاملًا غير موثوق أو بنية لم تعد مناسبة. يجب أن تشرح التوصية الأدلة والمفاضلات، بما فيها ما يستحق الاحتفاظ به وتكلفة الاستمرار في الترقيع."
      ]
    }
  },
  {
    id: "arabic", category: "digital",
    question: { en: "Is Arabic a translation pass, or a product you design properly?", ar: "هل العربية مرحلة ترجمة أم تجربة تصممونها من البداية؟" },
    answer: {
      en: [
        "Arabic is a product state, not a final text swap. RTL affects hierarchy, navigation, spacing, icons, numbers, dates, forms and mixed-language content. The Arabic and English versions should feel like the same product without forcing one language into the other's rhythm.",
        "We review both directions with real content. Long labels, phone numbers, English product names, table alignment and mobile wrapping all need attention. Typography and line height also need language-specific judgement. That work belongs in design and testing, not only in a translation spreadsheet."
      ],
      ar: [
        "العربية حالة للمنتج وليست استبدالًا للنص في النهاية. يؤثر RTL في التسلسل والتنقل والمسافات والأيقونات والأرقام والتواريخ والنماذج والمحتوى المختلط. يجب أن تبدو النسختان منتجًا واحدًا من دون إجبار لغة على إيقاع الأخرى.",
        "نراجع الاتجاهين بمحتوى حقيقي. تحتاج العناوين الطويلة وأرقام الهاتف وأسماء المنتجات الإنجليزية ومحاذاة الجداول والتفاف النص على الهاتف إلى عناية. كما تحتاج الخطوط وارتفاع السطر إلى حكم مناسب للغة. ينتمي هذا العمل إلى التصميم والاختبار، لا إلى جدول الترجمة فقط."
      ]
    }
  },
  {
    id: "integrations", category: "digital",
    question: { en: "Can the product connect to payments, APIs and our existing tools?", ar: "هل يمكن ربط المنتج بالمدفوعات وواجهات API وأدواتنا القائمة؟" },
    answer: {
      en: [
        "Integration work is part of Pencil's development practice. It can involve payments, maps, email and messaging, analytics, authentication and existing business systems. The first task is to understand the provider's actual interface and the data that needs to move.",
        "A connection is not complete because one happy-path request succeeds. Ownership, authentication, duplicate events, failed requests, logs and recovery all matter. We define which system is the source of truth and who is responsible when an external provider changes or becomes unavailable."
      ],
      ar: [
        "التكاملات جزء من ممارسة التطوير لدى Pencil. قد تشمل المدفوعات والخرائط والبريد والرسائل والتحليلات والمصادقة وأنظمة الأعمال القائمة. المهمة الأولى هي فهم واجهة المزود الفعلية والبيانات التي يجب أن تتحرك.",
        "لا يكتمل الربط بمجرد نجاح طلب واحد. تهم الملكية والمصادقة والأحداث المكررة والطلبات الفاشلة والسجلات والتعافي. نحدد النظام المرجعي للبيانات ومن يتحمل المسؤولية عندما يتغير مزود خارجي أو يصبح غير متاح."
      ]
    }
  },
  {
    id: "start", category: "process",
    question: { en: "What should we send before the first conversation?", ar: "ما الذي نرسله قبل المحادثة الأولى؟" },
    answer: {
      en: [
        "Send the business goal, the audience, what exists today and the decision or launch date. Add any constraint that could change the solution: an existing system, budget range, required language, stakeholder approval or integration. Links and rough documents are useful; a perfect brief is not a prerequisite.",
        "Tell us what should become possible after the work. That gives us a better starting point than a long feature list. If you are not yet sure whether the answer is a website, a system or a brand project, describe the situation. Finding the right shape is part of the conversation."
      ],
      ar: [
        "أرسل هدف العمل والجمهور وما هو موجود اليوم وموعد القرار أو الإطلاق. أضف القيود التي قد تغير الحل: نظام قائم أو نطاق ميزانية أو لغة مطلوبة أو اعتماد من أطراف أخرى أو تكامل. تفيد الروابط والمستندات الأولية، ولا يشترط موجز مثالي.",
        "أخبرنا بما يجب أن يصبح ممكنًا بعد العمل؛ فهذا مدخل أفضل من قائمة خصائص طويلة. وإذا لم تكن متأكدًا هل الحل موقع أم نظام أم مشروع هوية، فصف الموقف. تحديد الشكل المناسب جزء من المحادثة."
      ]
    }
  },
  {
    id: "scope", category: "process",
    question: { en: "How do scope, budget and timing become a real plan?", ar: "كيف يتحول النطاق والميزانية والوقت إلى خطة فعلية؟" },
    answer: {
      en: [
        "We need to understand the goal, outputs, complexity, dependencies and decision path before treating an estimate as a plan. Content readiness, third-party access, integrations and stakeholder reviews can affect the schedule as much as the number of screens.",
        "A good proposal explains what is included, what is not, what the client supplies and where approval is needed. If the budget or deadline is fixed, we discuss priorities and phase the work rather than pretending every requirement fits. Specific prices and commitments belong in the agreed engagement, not a universal FAQ promise."
      ],
      ar: [
        "نحتاج إلى فهم الهدف والمخرجات والتعقيد والاعتمادات ومسار القرار قبل التعامل مع التقدير كخطة. قد تؤثر جاهزية المحتوى والوصول إلى خدمات خارجية والتكاملات ومراجعات الأطراف في الجدول بقدر عدد الشاشات.",
        "يوضح العرض الجيد ما يشمله وما لا يشمله وما يقدمه العميل وأين يلزم الاعتماد. إذا كانت الميزانية أو المهلة ثابتة، نناقش الأولويات ونقسم العمل بدل الادعاء بأن كل المتطلبات تتسع. تنتمي الأسعار والالتزامات المحددة إلى اتفاق التعاون، لا إلى وعد عام في FAQ."
      ]
    }
  },
  {
    id: "process", category: "process",
    question: { en: "How do design and development stay connected during production?", ar: "كيف يظل التصميم والتطوير متصلين أثناء التنفيذ؟" },
    answer: {
      en: [
        "The goal and brief guide the sequence: structure and journeys, content and art direction, interface systems, development, then verification and launch preparation. The order can vary by project, but decisions should not disappear between stages.",
        "We review working behaviour as well as visual presentation. Developers need states and rules, not only ideal screens. Designers need to see the real build, not only the exported file. Arabic, devices, errors, permissions and content are checked as parts of the experience. The result should carry the original idea into actual use."
      ],
      ar: [
        "يقود الهدف والموجز التسلسل: البنية والرحلات، ثم المحتوى والإخراج الفني ونظام الواجهة والتطوير والتحقق وتجهيز الإطلاق. قد يتغير الترتيب وفق المشروع، لكن لا ينبغي أن تضيع القرارات بين المراحل.",
        "نراجع السلوك العامل إلى جانب العرض البصري. يحتاج المطور إلى الحالات والقواعد لا الشاشات المثالية فقط، ويحتاج المصمم إلى رؤية البناء الحقيقي لا الملف المصدر فقط. تُراجع العربية والأجهزة والأخطاء والصلاحيات والمحتوى كأجزاء من التجربة. يجب أن يحمل المنتج الفكرة الأصلية إلى الاستخدام الفعلي."
      ]
    }
  },
  {
    id: "revisions", category: "process",
    question: { en: "How do feedback, revisions and approvals work without endless loops?", ar: "كيف تتم الملاحظات والتعديلات والاعتمادات من دون حلقات لا تنتهي؟" },
    answer: {
      en: [
        "Review work against the agreed objective, group notes by screen or deliverable, and have one owner consolidate the response. Explain the problem and why it matters before prescribing a solution. That lets the team solve the right issue instead of following conflicting preferences.",
        "Approval closes a stage. A new direction after approval may be valid, but it is a scope decision with consequences for work and timing, not an invisible extra revision. Review rounds, sign-off owners and change handling should be agreed in the engagement so both teams know how a decision becomes final."
      ],
      ar: [
        "راجع العمل وفق الهدف المتفق عليه، واجمع الملاحظات حسب الشاشة أو المخرج، وحدد مسؤولًا واحدًا لتوحيد الرد. اشرح المشكلة وسبب أهميتها قبل فرض الحل؛ فهذا يساعد الفريق على معالجة الحالة الصحيحة بدل اتباع تفضيلات متعارضة.",
        "يغلق الاعتماد المرحلة. قد يكون الاتجاه الجديد بعد الاعتماد مبررًا، لكنه قرار نطاق له أثر على العمل والوقت، لا تعديلًا إضافيًا خفيًا. يجب الاتفاق على جولات المراجعة وأصحاب الاعتماد ومعالجة التغيير حتى يعرف الفريقان كيف يصبح القرار نهائيًا."
      ]
    }
  },
  {
    id: "delivery", category: "process",
    question: { en: "What should a proper delivery include?", ar: "ما الذي يجب أن يتضمنه التسليم الصحيح؟" },
    answer: {
      en: [
        "The hand-over depends on the work: identity files and guidance, design systems and assets, a working product, account access, deployment information, content tools or operating instructions. Deliverables should be named before production begins, not discovered during the last week.",
        "For digital work, delivery also needs a clear operating owner and a way to verify the critical journeys. For creative work, the next team needs usable formats and enough guidance to apply them correctly. The objective is not merely to transfer files; it is to make the next stage possible."
      ],
      ar: [
        "يختلف التسليم بحسب العمل: ملفات هوية ودليل، أو نظام تصميم وأصول، أو منتج عامل وصلاحيات حسابات ومعلومات نشر وأدوات محتوى وتعليمات تشغيل. يجب تسمية المخرجات قبل بدء التنفيذ لا اكتشافها في الأسبوع الأخير.",
        "يحتاج العمل الرقمي أيضًا إلى مسؤول تشغيل واضح وطريقة للتحقق من الرحلات الأساسية. ويحتاج الفريق التالي في العمل الإبداعي إلى صيغ قابلة للاستخدام وإرشاد يكفي لتطبيقها صحيحًا. ليس الهدف نقل الملفات فقط، بل جعل المرحلة التالية ممكنة."
      ]
    }
  },
  {
    id: "maintenance", category: "continuity",
    question: { en: "What happens after launch, when the business keeps changing?", ar: "ماذا يحدث بعد الإطلاق بينما يستمر العمل في التغير؟" },
    answer: {
      en: [
        "Pencil's support practice can cover maintenance, hosting, monitoring, improvements, recurring creative work, content operations and product iteration. A launch should therefore identify what remains ongoing, who owns it and what service model supports it.",
        "We distinguish a fault from a planned improvement or a new feature. They need different priorities and approvals. Support scope, service windows and response commitments belong in the agreement; this page does not make a blanket promise of unlimited changes or a guaranteed resolution time."
      ],
      ar: [
        "قد تشمل ممارسة الدعم لدى Pencil الصيانة والاستضافة والمراقبة والتحسينات والعمل الإبداعي المتكرر وتشغيل المحتوى وتطوير المنتج. لذلك يجب أن يحدد الإطلاق ما سيستمر ومن يملكه ونموذج الخدمة الذي يدعمه.",
        "نفرق بين العطل والتحسين المخطط والخاصية الجديدة؛ لكل منها أولوية واعتمادات مختلفة. ينتمي نطاق الدعم ومواعيد الخدمة والتزامات الاستجابة إلى الاتفاق، ولا تقدم الصفحة وعدًا عامًا بتعديلات غير محدودة أو زمن حل مضمون."
      ]
    }
  },
  {
    id: "partnership", category: "continuity",
    question: { en: "Can Pencil work as a long-term partner alongside our company team?", ar: "هل يمكن أن تعمل Pencil كشريك طويل الأمد بجوار فريق المؤسسة؟" },
    answer: {
      en: [
        "Yes. The relationship can span ongoing product work, recurring creative production, growth, business systems and cloud operations. The existing enterprise direction describes that wider responsibility rather than a vendor relationship that ends at the first release.",
        "A useful long-term model needs a shared priority list, named decision owners, a review rhythm and clear boundaries between maintenance and new production. Your internal team should keep its context and ownership. Pencil adds specialist capacity and continuity, with responsibilities defined rather than assumed."
      ],
      ar: [
        "نعم. قد تمتد العلاقة عبر تطوير المنتجات والإنتاج الإبداعي المتكرر والنمو وأنظمة الأعمال وعمليات السحابة. يتناول اتجاه المؤسسات الموجود هذه المسؤولية الأوسع، لا علاقة مورد تنتهي عند الإصدار الأول.",
        "يحتاج النموذج طويل الأمد إلى قائمة أولويات مشتركة وأصحاب قرار محددين وإيقاع مراجعة وحدود واضحة بين الصيانة والإنتاج الجديد. يحتفظ فريقكم الداخلي بسياقه وملكيته، وتضيف Pencil القدرة المتخصصة والاستمرارية بمسؤوليات محددة لا مفترضة."
      ]
    }
  },
];
