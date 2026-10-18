import type { Playbook } from "@/lib/pencil-playbooks";

export const productionPlaybooks: Playbook[] = [
  {
    id: "feedback", collection: "deliver",
    title: { en: "Give feedback the team can act on.", ar: "قدم ملاحظات يستطيع الفريق تنفيذها." },
    intro: { en: "Useful feedback explains the gap between the work and the objective. It does not ask the designer to guess what a vague preference means.", ar: "تشرح الملاحظات المفيدة الفجوة بين العمل والهدف، ولا تطلب من المصمم تخمين معنى تفضيل غامض." },
    image: "/hero-section.jpg",
    before: { en: "Review against the agreed brief. Collect notes from stakeholders before sending one consolidated round.", ar: "راجع وفق الموجز المتفق عليه. اجمع ملاحظات الأطراف قبل إرسال جولة موحدة." },
    steps: [
      { title: { en: "Locate the issue.", ar: "حدد موضع الحالة." }, body: { en: "Name the page, screen, section and device. Include the text or screenshot being reviewed. “The site feels off” cannot tell the team where to begin.", ar: "سمِّ الصفحة والشاشة والقسم والجهاز، وأرفق النص أو اللقطة محل المراجعة. لا تخبر عبارة «الموقع غير مناسب» الفريق أين يبدأ." } },
      { title: { en: "Explain the consequence.", ar: "اشرح النتيجة." }, body: { en: "Instead of “make this bigger”, explain that the primary offer is being missed. Separate factual errors, usability issues and personal preferences so the right problem receives attention.", ar: "بدل «كبر هذا»، اشرح أن العرض الأساسي لا يُلاحظ. افصل الخطأ الواقعي ومشكلة الاستخدام والتفضيل الشخصي حتى تتلقى المشكلة الصحيحة الاهتمام." } },
      { title: { en: "Send one decision path.", ar: "أرسل مسار قرار واحدًا." }, body: { en: "Consolidate conflicting notes before production resumes. Mark what is mandatory and what is a suggestion. Keep the approved objective visible so revisions do not silently replace the brief.", ar: "وحّد الملاحظات المتعارضة قبل استئناف التنفيذ. حدد الإلزامي والمقترح، وأبق الهدف المعتمد ظاهرًا حتى لا تستبدل التعديلات الموجز بصمت." } },
    ],
    checklist: [{ en: "Screen, device and issue identified", ar: "الشاشة والجهاز والحالة محددة" }, { en: "Reason and priority explained", ar: "السبب والأولوية مشروحان" }, { en: "Stakeholder notes consolidated", ar: "ملاحظات الأطراف موحدة" }],
    tip: { en: "Weak: “Make it more premium.” Useful: “The service is high-value, but the stock imagery and dense offer list make it feel interchangeable.”", ar: "ضعيف: «اجعله أفخم». مفيد: «الخدمة عالية القيمة، لكن الصور الجاهزة وقائمة العرض الكثيفة تجعلها تبدو بلا تميز»." },
  },
  {
    id: "approvals", collection: "deliver",
    title: { en: "Keep revisions and approvals from becoming a loop.", ar: "امنع التعديلات والاعتمادات من التحول إلى حلقة." },
    intro: { en: "Approval is a recorded decision, not the absence of another message. It protects what the next stage is built on.", ar: "الاعتماد قرار موثق لا غياب رسالة أخرى. يحمي الأساس الذي تُبنى عليه المرحلة التالية." },
    image: "/business-sectors/corporate-websites.jpg",
    before: { en: "Agree review rounds, sign-off owners and the way changes will be recorded in the engagement.", ar: "اتفق على جولات المراجعة وأصحاب الاعتماد وطريقة توثيق التغييرات ضمن التعاون." },
    steps: [
      { title: { en: "Review by stage.", ar: "راجع حسب المرحلة." }, body: { en: "A structure review should decide journeys and information. A visual review should decide direction. A working-build review should verify behaviour. Reopening every decision at every stage slows the whole project.", ar: "تحسم مراجعة البنية الرحلات والمعلومات، وتحسم المراجعة البصرية الاتجاه، وتتحقق مراجعة البناء من السلوك. يبطئ إعادة فتح كل قرار في كل مرحلة المشروع كله." } },
      { title: { en: "Record what was approved.", ar: "وثق ما اعتمد." }, body: { en: "Keep a dated version and explicit sign-off. Summarise any remaining conditions. The next team needs to know what is settled and what is still open.", ar: "احتفظ بإصدار مؤرخ واعتماد صريح ولخص الشروط المتبقية. يحتاج الفريق التالي إلى معرفة المحسوم وما لا يزال مفتوحًا." } },
      { title: { en: "Treat a new direction as a change.", ar: "عامل الاتجاه الجديد كتغيير." }, body: { en: "A change can be right and still affect scope, time and dependencies. Make that trade-off visible before the team executes it rather than disguising it as a small revision.", ar: "قد يكون التغيير صحيحًا ويظل مؤثرًا في النطاق والوقت والاعتمادات. أظهر هذه المفاضلة قبل التنفيذ بدل إخفائها داخل تعديل صغير." } },
    ],
    checklist: [{ en: "Review stage and owner agreed", ar: "مرحلة المراجعة ومسؤولها متفق عليهما" }, { en: "Sign-off recorded against a version", ar: "الاعتماد موثق على إصدار" }, { en: "Changes and consequences visible", ar: "التغييرات وآثارها واضحة" }],
    tip: { en: "Silence is not approval. Agree a clear decision method rather than inferring it from an unanswered thread.", ar: "الصمت ليس اعتمادًا. اتفق على طريقة قرار واضحة بدل استنتاجه من محادثة بلا رد." },
  },
  {
    id: "launch", collection: "deliver",
    title: { en: "Run launch and handover as an operation.", ar: "أدر الإطلاق والتسليم كعملية تشغيل." },
    intro: { en: "Publishing is one action inside a release. A complete launch connects ownership, critical tests, access, monitoring and the team that will run the product.", ar: "النشر إجراء واحد داخل الإطلاق. يربط الإطلاق الكامل الملكية والفحوص الأساسية والصلاحيات والمراقبة والفريق الذي سيدير المنتج." },
    image: "/help-editorial/pencil-cloud.png",
    before: { en: "Confirm the launch scope, domain and account owners, hosting, integrations and the person authorised to approve release.", ar: "أكد نطاق الإطلاق ومالكي النطاق والحسابات والاستضافة والتكاملات ومن يملك اعتماد النشر." },
    steps: [
      { title: { en: "Freeze and verify.", ar: "ثبّت وتحقق." }, body: { en: "Stop adding unreviewed launch requirements. Test forms, payments, bookings, account access, languages and mobile journeys as relevant. Confirm content and legal material with their owners.", ar: "أوقف إضافة متطلبات إطلاق غير مراجعة. اختبر النماذج والدفع والحجز والوصول واللغات ورحلات الهاتف حسب الحاجة، وأكد المحتوى والمواد القانونية مع مسؤوليها." } },
      { title: { en: "Release with recovery in mind.", ar: "انشر مع خطة تعافٍ." }, body: { en: "Agree the release window, backup and rollback approach, monitoring and who will inspect the live product. Check the real domain and provider settings, not only the staging environment.", ar: "اتفق على نافذة النشر والنسخ والتراجع والمراقبة ومن يفحص المنتج الحي. تحقق من النطاق الحقيقي وإعدادات المزود، لا بيئة الاختبار فقط." } },
      { title: { en: "Hand over the ability to operate.", ar: "سلّم القدرة على التشغيل." }, body: { en: "Transfer agreed access and documentation securely. Demonstrate content updates, user management or other daily tasks. Record known limitations and the support route rather than leaving ownership implied.", ar: "انقل الصلاحيات والمستندات المتفق عليها بأمان. اعرض تحديث المحتوى وإدارة المستخدمين والمهام اليومية، ووثق القيود المعروفة ومسار الدعم بدل ترك الملكية مفترضة." } },
    ],
    checklist: [{ en: "Critical journeys checked on the live environment", ar: "الرحلات الأساسية مفحوصة على البيئة الحية" }, { en: "Account owners and recovery plan confirmed", ar: "مالكو الحسابات وخطة التعافي مؤكدون" }, { en: "Training, access and support route handed over", ar: "التدريب والصلاحيات ومسار الدعم مسلّمة" }],
    tip: { en: "Do not make the first real payment or form submission after announcing the launch. Verify the complete route before directing traffic.", ar: "لا تجعل أول دفع أو إرسال حقيقي بعد إعلان الإطلاق. تحقق من المسار كاملًا قبل توجيه الزيارات." },
  },
  {
    id: "ai", collection: "plan",
    title: { en: "Find an AI workflow worth connecting.", ar: "ابحث عن مسار ذكاء اصطناعي يستحق الربط." },
    intro: { en: "Start with the repeated task or decision, not a request for an AI badge. SuperFeliz and the Feliz family have different thinking roles; a connected business workflow still needs its own scope.", ar: "ابدأ بالمهمة أو القرار المتكرر لا طلب شارة AI. تختلف أدوار التفكير في SuperFeliz وعائلة Feliz؛ ويظل المسار المتصل بالأعمال محتاجًا إلى نطاقه الخاص." },
    image: "/help-editorial/pencil-superfeliz.png",
    before: { en: "Describe the input, expected output, available data, user and human review point. Do not upload private material into an unapproved demo.", ar: "صف المدخل والنتيجة والبيانات المتاحة والمستخدم ونقطة المراجعة البشرية. لا ترفع مواد خاصة إلى عرض غير معتمد." },
    steps: [
      { title: { en: "Choose a repeated problem.", ar: "اختر مشكلة متكررة." }, body: { en: "Look for recurring analysis, information retrieval or generation. If the rule is strict and stable, ordinary automation may be better than a model making a judgement.", ar: "ابحث عن التحليل المتكرر أو استرجاع المعلومات أو التوليد. إذا كانت القاعدة صارمة وثابتة، فقد تكون الأتمتة العادية أفضل من حكم النموذج." } },
      { title: { en: "Define the controls.", ar: "حدد الضوابط." }, body: { en: "Set data access, acceptable error and human approval. Decide what the system may suggest and what it may execute. Keep sensitive actions behind explicit permission.", ar: "حدد الوصول إلى البيانات والخطأ المقبول والاعتماد البشري. افصل ما يقترحه النظام عما ينفذه، وضع الإجراءات الحساسة خلف صلاحية صريحة." } },
      { title: { en: "Pilot a measurable journey.", ar: "اختبر رحلة قابلة للقياس." }, body: { en: "Agree a small test of usefulness before expanding. The public Ask Feliz experience uses prepared demo replies; connected production capability needs to be evaluated on the actual implementation.", ar: "اتفق على اختبار صغير للفائدة قبل التوسع. تستخدم تجربة Ask Feliz العامة إجابات معدة للعرض؛ ويُقيّم الأداء المتصل بالإنتاج على التنفيذ الفعلي." } },
    ],
    checklist: [{ en: "Task, input and output defined", ar: "المهمة والمدخل والمخرج محددة" }, { en: "Data permissions and human control agreed", ar: "صلاحيات البيانات والرقابة البشرية متفق عليها" }, { en: "Pilot outcome and success measure named", ar: "نتيجة الاختبار ومقياس النجاح محددان" }],
    tip: { en: "Oper supports business thinking, Tech maps architecture, Gen produces starter output, and SuperFeliz connects the wider mission. Choose by task, not by name.", ar: "يدعم Oper التفكير التجاري، ويرسم Tech البنية، وينتج Gen مخرجات أولية، ويربط SuperFeliz المهمة الأوسع. اختر وفق المهمة لا الاسم." },
  },
  {
    id: "support", collection: "deliver",
    title: { en: "Prepare the working model after launch.", ar: "جهز نموذج العمل بعد الإطلاق." },
    intro: { en: "Maintenance, faults, content changes and new features are different kinds of work. A long-term relationship runs better when those boundaries are visible.", ar: "الصيانة والأعطال وتغييرات المحتوى والخصائص الجديدة أعمال مختلفة. تعمل العلاقة الطويلة أفضل عندما تكون هذه الحدود واضحة." },
    image: "/business-sectors/crm-automation.jpg",
    before: { en: "List the products, accounts, services and people involved. Agree support scope and response commitments in the engagement.", ar: "احصر المنتجات والحسابات والخدمات والأشخاص، واتفق على نطاق الدعم والتزامات الاستجابة ضمن التعاون." },
    steps: [
      { title: { en: "Assign ownership and access.", ar: "حدد الملكية والوصول." }, body: { en: "Record who owns hosting, domains, stores, analytics and source material. Confirm secure access, renewals and the contact who can approve technical action.", ar: "وثق مالكي الاستضافة والنطاقات والمتاجر والتحليلات والمصادر، وأكد الوصول الآمن والتجديدات ومسؤول اعتماد الإجراء التقني." } },
      { title: { en: "Separate issue from improvement.", ar: "افصل المشكلة عن التحسين." }, body: { en: "A blocked operation needs impact and reproduction details. An enhancement needs a goal, priority and scope. A content cycle needs materials and approval. They should not enter one undifferentiated queue.", ar: "يحتاج توقف التشغيل إلى أثر وخطوات إعادة الحالة، ويحتاج التحسين إلى هدف وأولوية ونطاق، وتحتاج دورة المحتوى إلى مواد واعتماد. لا تضعها في قائمة واحدة بلا تمييز." } },
      { title: { en: "Plan a review rhythm.", ar: "خطط لإيقاع المراجعة." }, body: { en: "Keep a shared priority list and review what changed in the business. Use product evidence and operational needs to choose the next work, not whichever message arrived last.", ar: "احتفظ بقائمة أولويات مشتركة وراجع ما تغير في النشاط. اختر العمل التالي وفق أدلة المنتج والحاجة التشغيلية، لا آخر رسالة وصلت." } },
    ],
    checklist: [{ en: "Service owners and access documented", ar: "مسؤولو الخدمات والوصول موثقون" }, { en: "Maintenance and new scope separated", ar: "الصيانة والنطاق الجديد منفصلان" }, { en: "Review rhythm and decision owner agreed", ar: "إيقاع المراجعة وصاحب القرار متفق عليهما" }],
    tip: { en: "Write support boundaries before launch. A warm relationship is valuable, but it does not replace a clear operating agreement.", ar: "اكتب حدود الدعم قبل الإطلاق. العلاقة الجيدة قيمة، لكنها لا تستبدل اتفاق تشغيل واضحًا." },
  },
];
