"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { cn } from "@/lib/utils"
import Image from "next/image"

type Locale = "en" | "ar"

type Testimonial = {
  text: string
  name: string
  role: string
  sector: string
  locale: Locale
  initials: string
}

type LocaleTestimonial = {
  en: Testimonial
  ar: Testimonial
}

const testimonialsData: LocaleTestimonial[] = [
  {
    en: {
      text: "The booking flow became much clearer, and our customers stopped dropping off halfway through the form.",
      name: "Ahmed N.",
      role: "Founder, Travel Agency",
      sector: "Tourism",
      locale: "en",
      initials: "AN",
    },
    ar: {
      text: "أصبح مسار الحجز أوضح، وتراجع الانقطاع أثناء تعبئة النموذج بشكل ملحوظ.",
      name: "أحمد ن.",
      role: "مؤسس شركة سياحة",
      sector: "السياحة",
      locale: "ar",
      initials: "أح",
    },
  },
  {
    en: {
      text: "We now manage inquiries, follow-ups, and lead assignments from one place, which saved the team a lot of time.",
      name: "Mariam H.",
      role: "Operations Manager, Real Estate",
      sector: "Real Estate",
      locale: "en",
      initials: "MH",
    },
    ar: {
      text: "أصبحنا ندير الاستفسارات والمتابعات وتوزيع العملاء المحتملين من مكان واحد، وهذا وفر وقتًا كبيرًا للفريق.",
      name: "مريم ح.",
      role: "مديرة العمليات، العقارات",
      sector: "العقارات",
      locale: "ar",
      initials: "مم",
    },
  },
  {
    en: {
      text: "The website finally matches the level of the brand, and the menu updates are easy for our staff to handle.",
      name: "Omar K.",
      role: "Owner, Restaurant Group",
      sector: "Restaurants",
      locale: "en",
      initials: "OK",
    },
    ar: {
      text: "أصبح الموقع يعكس مستوى العلامة بشكل أفضل، كما أصبحت تحديثات القائمة سهلة على فريق العمل.",
      name: "عمر ك.",
      role: "مالك مجموعة مطاعم",
      sector: "المطاعم",
      locale: "ar",
      initials: "عم",
    },
  },
  {
    en: {
      text: "Patients understand the booking process immediately now, and the front desk gets fewer repeated questions.",
      name: "Nadine S.",
      role: "Clinic Manager",
      sector: "Medical Clinics",
      locale: "en",
      initials: "NS",
    },
    ar: {
      text: "أصبح المرضى يفهمون مسار الحجز بسرعة، وتقلصت الأسئلة المتكررة عند الاستقبال.",
      name: "نادين س.",
      role: "مديرة عيادة",
      sector: "العيادات الطبية",
      locale: "ar",
      initials: "نس",
    },
  },
  {
    en: {
      text: "The LMS is easier for our teachers and students, especially around course access and communication.",
      name: "Youssef A.",
      role: "Academic Director",
      sector: "Education",
      locale: "en",
      initials: "YA",
    },
    ar: {
      text: "أصبح نظام التعلم أسهل للمعلمين والطلاب، خاصة في الوصول إلى المحتوى والتواصل.",
      name: "يوسف أ.",
      role: "مدير أكاديمي",
      sector: "التعليم",
      locale: "ar",
      initials: "يو",
    },
  },
  {
    en: {
      text: "The new corporate site feels clear and confident, and it is much easier to present our services to clients.",
      name: "Salma R.",
      role: "Brand Manager",
      sector: "Corporate",
      locale: "en",
      initials: "SR",
    },
    ar: {
      text: "أصبح الموقع المؤسسي أوضح وأكثر ثقة، كما صار تقديم الخدمات للعملاء أسهل بكثير.",
      name: "سلمى ر.",
      role: "مديرة العلامة التجارية",
      sector: "الشركات",
      locale: "ar",
      initials: "سل",
    },
  },
  {
    en: {
      text: "Our e-commerce pages load faster and the product journey feels cleaner, which improved conversions.",
      name: "Karim M.",
      role: "E-commerce Manager",
      sector: "E-commerce",
      locale: "en",
      initials: "KM",
    },
    ar: {
      text: "أصبحت صفحات التجارة الإلكترونية أسرع، ومسار المنتج أوضح، وهذا ساعد على تحسين التحويلات.",
      name: "كريم م.",
      role: "مدير التجارة الإلكترونية",
      sector: "التجارة الإلكترونية",
      locale: "ar",
      initials: "كر",
    },
  },
  {
    en: {
      text: "We finally have a CRM flow that helps the team stay on top of messages and customer follow-ups.",
      name: "Hana E.",
      role: "Customer Success Lead",
      sector: "CRM",
      locale: "en",
      initials: "HE",
    },
    ar: {
      text: "أصبح لدينا مسار CRM يساعد الفريق على متابعة الرسائل والمتابعات مع العملاء بشكل منظم.",
      name: "هنا ع.",
      role: "مديرة نجاح العملاء",
      sector: "CRM",
      locale: "ar",
      initials: "هن",
    },
  },
  {
    en: {
      text: "The mobile app looks polished and the core actions are faster, which made onboarding much smoother.",
      name: "Mostafa G.",
      role: "Product Founder",
      sector: "Mobile Apps",
      locale: "en",
      initials: "MG",
    },
    ar: {
      text: "أصبح التطبيق أكثر أناقة، والمهام الأساسية أسرع، وهذا جعل بدء الاستخدام أسهل بكثير.",
      name: "مصطفى ج.",
      role: "مؤسس منتج",
      sector: "تطبيقات الهواتف",
      locale: "ar",
      initials: "مص",
    },
  },
  {
    en: {
      text: "The dashboard is much cleaner now, so reviewing orders, activity, and reporting takes less time.",
      name: "Dalia F.",
      role: "Operations Lead",
      sector: "Dashboards",
      locale: "en",
      initials: "DF",
    },
    ar: {
      text: "أصبحت لوحة التحكم أنظف، وأصبح مراجعة الطلبات والنشاط والتقارير أسرع بكثير.",
      name: "داليا ف.",
      role: "قائدة العمليات",
      sector: "لوحات التحكم",
      locale: "ar",
      initials: "دل",
    },
  },
  {
    en: {
      text: "Their brand work made our business look more mature, but it also stayed practical for everyday use.",
      name: "Ibrahim Z.",
      role: "Managing Partner",
      sector: "Branding",
      locale: "en",
      initials: "IZ",
    },
    ar: {
      text: "جعلتنا الهوية الجديدة نبدو أكثر احترافية، مع بقاءها عملية للاستخدام اليومي.",
      name: "إبراهيم ز.",
      role: "شريك إداري",
      sector: "الهوية البصرية",
      locale: "ar",
      initials: "إب",
    },
  },
  {
    en: {
      text: "The technical support is dependable, and small issues do not turn into long interruptions anymore.",
      name: "Nora T.",
      role: "Founder, Consulting Firm",
      sector: "Technical Support",
      locale: "en",
      initials: "NT",
    },
    ar: {
      text: "أصبح الدعم الفني أكثر موثوقية، ولم تعد المشكلات الصغيرة تتحول إلى تعطيل طويل.",
      name: "نورا ت.",
      role: "مؤسسة شركة استشارات",
      sector: "الدعم الفني",
      locale: "ar",
      initials: "نو",
    },
  },
  {
    en: {
      text: "The booking tools reduced manual coordination and made the team easier to manage during busy periods.",
      name: "Faisal A.",
      role: "General Manager",
      sector: "Hospitality",
      locale: "en",
      initials: "FA",
    },
    ar: {
      text: "قللت أدوات الحجز التنسيق اليدوي، وجعلت إدارة الفريق أسهل خلال فترات الضغط.",
      name: "فيصل أ.",
      role: "مدير عام",
      sector: "الضيافة",
      locale: "ar",
      initials: "في",
    },
  },
  {
    en: {
      text: "Our customer communication flow feels far more organized, especially for incoming requests and callbacks.",
      name: "Lina M.",
      role: "Support Manager",
      sector: "CRM",
      locale: "en",
      initials: "LM",
    },
    ar: {
      text: "أصبح مسار التواصل مع العملاء أكثر تنظيمًا، خصوصًا في الطلبات الواردة والاتصالات اللاحقة.",
      name: "لينا م.",
      role: "مديرة الدعم",
      sector: "CRM",
      locale: "ar",
      initials: "لي",
    },
  },
  {
    en: {
      text: "The clinic website feels calmer and clearer, and that has helped patients trust the process faster.",
      name: "Tamer S.",
      role: "Clinic Founder",
      sector: "Medical Clinics",
      locale: "en",
      initials: "TS",
    },
    ar: {
      text: "أصبح موقع العيادة أكثر هدوءًا ووضوحًا، وهذا ساعد المرضى على الثقة في الخطوات بسرعة أكبر.",
      name: "تامر س.",
      role: "مؤسس عيادة",
      sector: "العيادات الطبية",
      locale: "ar",
      initials: "تا",
    },
  },
  {
    en: {
      text: "The internal system now gives our team a much clearer view of requests, approvals, and daily progress.",
      name: "Aya F.",
      role: "Business Operations",
      sector: "Internal Systems",
      locale: "en",
      initials: "AF",
    },
    ar: {
      text: "أصبح النظام الداخلي يمنح فريقنا رؤية أوضح للطلبات والموافقات وتقدم العمل اليومي.",
      name: "آية ف.",
      role: "العمليات التشغيلية",
      sector: "الأنظمة الداخلية",
      locale: "ar",
      initials: "آي",
    },
  },
  {
    en: {
      text: "The sales landing page is cleaner and easier to scan, which makes it easier to explain our offer.",
      name: "Mahmoud H.",
      role: "Sales Director",
      sector: "Sales",
      locale: "en",
      initials: "MH",
    },
    ar: {
      text: "أصبحت صفحة المبيعات أوضح وأسهل في القراءة، وهذا سهّل شرح العرض للعملاء.",
      name: "محمود ح.",
      role: "مدير المبيعات",
      sector: "المبيعات",
      locale: "ar",
      initials: "مح",
    },
  },
  {
    en: {
      text: "We needed better organization for franchise branches, and the system now handles that neatly.",
      name: "Sahar K.",
      role: "Franchise Manager",
      sector: "Business Development",
      locale: "en",
      initials: "SK",
    },
    ar: {
      text: "كنا بحاجة إلى تنظيم أفضل للفروع، وأصبح النظام يتعامل مع ذلك بصورة مرتبة وواضحة.",
      name: "سحر ك.",
      role: "مديرة الفروع",
      sector: "تطوير الأعمال",
      locale: "ar",
      initials: "سح",
    },
  },
  {
    en: {
      text: "PENCIL Studio improved the structure of our service requests and made follow-up much less manual.",
      name: "Rami W.",
      role: "Founder, Service Platform",
      sector: "Workflow Systems",
      locale: "en",
      initials: "RW",
    },
    ar: {
      text: "حسنت PENCIL Studio هيكلة طلبات الخدمة وجعلت المتابعة أقل اعتمادًا على العمل اليدوي.",
      name: "رامي و.",
      role: "مؤسس منصة خدمات",
      sector: "أنظمة العمل",
      locale: "ar",
      initials: "را",
    },
  },
  {
    en: {
      text: "The new interface helped our users finish onboarding without needing support for every small step.",
      name: "Jana B.",
      role: "UX Lead",
      sector: "Digital Products",
      locale: "en",
      initials: "JB",
    },
    ar: {
      text: "ساعدت الواجهة الجديدة المستخدمين على إكمال التسجيل دون الحاجة إلى الدعم في كل خطوة صغيرة.",
      name: "جنى ب.",
      role: "قائدة تجربة المستخدم",
      sector: "المنتجات الرقمية",
      locale: "ar",
      initials: "جن",
    },
  },
  {
    en: {
      text: "Our restaurant ordering flow is simpler now, and guests can place requests with fewer steps.",
      name: "Hassan E.",
      role: "Restaurant Owner",
      sector: "Restaurants",
      locale: "en",
      initials: "HE",
    },
    ar: {
      text: "أصبح مسار الطلب في المطعم أبسط، ويمكن للضيوف إتمام الطلب بعدد خطوات أقل.",
      name: "حسن ع.",
      role: "صاحب مطعم",
      sector: "المطاعم",
      locale: "ar",
      initials: "حس",
    },
  },
  {
    en: {
      text: "The property pages and inquiry form are clearer, so our team is getting better leads.",
      name: "Dina Y.",
      role: "Real Estate Team Lead",
      sector: "Real Estate",
      locale: "en",
      initials: "DY",
    },
    ar: {
      text: "أصبحت صفحات العقارات ونموذج الاستفسار أوضح، وهذا أتاح لفريقنا فرصًا أفضل.",
      name: "دينا ي.",
      role: "قائدة فريق عقاري",
      sector: "العقارات",
      locale: "ar",
      initials: "دي",
    },
  },
  {
    en: {
      text: "The corporate site now feels aligned with our market position and the messaging is much clearer.",
      name: "Karim T.",
      role: "Communications Manager",
      sector: "Corporate",
      locale: "en",
      initials: "KT",
    },
    ar: {
      text: "أصبح الموقع المؤسسي متوافقًا أكثر مع موقعنا في السوق، ورسائله أكثر وضوحًا.",
      name: "كريم ت.",
      role: "مدير الاتصالات",
      sector: "الشركات",
      locale: "ar",
      initials: "كت",
    },
  },
  {
    en: {
      text: "The brand system feels coherent across the site, the decks, and the social assets now.",
      name: "Mona S.",
      role: "Brand Strategist",
      sector: "Branding",
      locale: "en",
      initials: "MS",
    },
    ar: {
      text: "أصبحت منظومة الهوية متناسقة عبر الموقع والعروض التقديمية والأصول الرقمية.",
      name: "منى س.",
      role: "استراتيجية علامة تجارية",
      sector: "الهوية البصرية",
      locale: "ar",
      initials: "من",
    },
  },
  {
    en: {
      text: "Their support after launch has been dependable, which mattered to us more than a flashy rollout.",
      name: "Saad A.",
      role: "Business Owner",
      sector: "Technical Support",
      locale: "en",
      initials: "SA",
    },
    ar: {
      text: "كان الدعم بعد الإطلاق موثوقًا، وهذا كان أهم بالنسبة لنا من مجرد إطلاق لافت.",
      name: "سعد أ.",
      role: "صاحب عمل",
      sector: "الدعم الفني",
      locale: "ar",
      initials: "سع",
    },
  },
  {
    en: {
      text: "Our team can now see tasks, approvals, and open requests in a single workflow without jumping between tools.",
      name: "Rana M.",
      role: "Office Manager",
      sector: "Internal Systems",
      locale: "en",
      initials: "RM",
    },
    ar: {
      text: "أصبح فريقنا يرى المهام والموافقات والطلبات المفتوحة في مسار واحد من دون التنقل بين الأدوات.",
      name: "رانا م.",
      role: "مديرة المكتب",
      sector: "الأنظمة الداخلية",
      locale: "ar",
      initials: "را",
    },
  },
  {
    en: {
      text: "The tourism platform feels easier for our partners too, especially when they need to update availability quickly.",
      name: "Walid K.",
      role: "Tour Operations Manager",
      sector: "Tourism",
      locale: "en",
      initials: "WK",
    },
    ar: {
      text: "أصبحت منصة السياحة أسهل لشركائنا أيضًا، خاصة عند تحديث التوافر بسرعة.",
      name: "وليد ك.",
      role: "مدير عمليات سياحية",
      sector: "السياحة",
      locale: "ar",
      initials: "ول",
    },
  },
  {
    en: {
      text: "The clinic team now handles booking and follow-up with less back-and-forth, which is a big improvement.",
      name: "Ines F.",
      role: "Medical Practice Manager",
      sector: "Medical Clinics",
      locale: "en",
      initials: "IF",
    },
    ar: {
      text: "أصبح فريق العيادة يدير الحجز والمتابعة بمراسلات أقل، وهذا تحسن مهم.",
      name: "إيناس ف.",
      role: "مديرة عيادة",
      sector: "العيادات الطبية",
      locale: "ar",
      initials: "إي",
    },
  },
  {
    en: {
      text: "The dashboard makes it easier to spot what needs attention, without making the interface feel crowded.",
      name: "Tarek S.",
      role: "Founder, SaaS Startup",
      sector: "Dashboards",
      locale: "en",
      initials: "TS",
    },
    ar: {
      text: "تجعل لوحة التحكم من السهل ملاحظة ما يحتاج إلى انتباه من دون أن تبدو الواجهة مزدحمة.",
      name: "طارق س.",
      role: "مؤسس شركة SaaS",
      sector: "لوحات التحكم",
      locale: "ar",
      initials: "طا",
    },
  },
  {
    en: {
      text: "Our retail team now has a smoother path for customer requests and order updates.",
      name: "Amal D.",
      role: "Retail Director",
      sector: "E-commerce",
      locale: "en",
      initials: "AD",
    },
    ar: {
      text: "أصبح لدى فريق التجزئة مسار أكثر سلاسة لطلبات العملاء وتحديثات الطلبات.",
      name: "أمل د.",
      role: "مديرة قطاع التجزئة",
      sector: "التجارة الإلكترونية",
      locale: "ar",
      initials: "أم",
    },
  },
  {
    en: {
      text: "The messaging and forms are better organized now, so our support team can respond faster.",
      name: "Yara L.",
      role: "Support Team Lead",
      sector: "CRM",
      locale: "en",
      initials: "YL",
    },
    ar: {
      text: "أصبحت الرسائل والنماذج منظمة بشكل أفضل، وهذا سمح لفريق الدعم بالرد بسرعة أكبر.",
      name: "يارا ل.",
      role: "قائدة فريق الدعم",
      sector: "CRM",
      locale: "ar",
      initials: "يا",
    },
  },
  {
    en: {
      text: "The mobile app now feels dependable and easier to navigate on first use.",
      name: "Bilal Q.",
      role: "Operations Founder",
      sector: "Mobile Apps",
      locale: "en",
      initials: "BQ",
    },
    ar: {
      text: "أصبح التطبيق أكثر موثوقية وأسهل في التصفح منذ الاستخدام الأول.",
      name: "بلال ق.",
      role: "مؤسس عمليات",
      sector: "تطبيقات الهواتف",
      locale: "ar",
      initials: "بل",
    },
  },
  {
    en: {
      text: "The site gives our business a stronger presence, and it is much easier to explain what we do.",
      name: "Maysa J.",
      role: "Founder, Design Studio",
      sector: "Branding",
      locale: "en",
      initials: "MJ",
    },
    ar: {
      text: "منح الموقع حضورًا أقوى لعملنا، وأصبح من الأسهل شرح ما نقدمه.",
      name: "ميساء ج.",
      role: "مؤسسة استوديو تصميم",
      sector: "الهوية البصرية",
      locale: "ar",
      initials: "مي",
    },
  },
  {
    en: {
      text: "The booking pages now work well on mobile, which matters a lot for how our clients actually book.",
      name: "Othman R.",
      role: "Client Services Manager",
      sector: "Tourism",
      locale: "en",
      initials: "OR",
    },
    ar: {
      text: "أصبحت صفحات الحجز تعمل جيدًا على الهاتف، وهذا مهم جدًا لطريقة حجز العملاء الفعلية.",
      name: "عثمان ر.",
      role: "مدير خدمات العملاء",
      sector: "السياحة",
      locale: "ar",
      initials: "عث",
    },
  },
  {
    en: {
      text: "The new system reduced the number of manual steps in our daily workflow, and that is exactly what we needed.",
      name: "Noor H.",
      role: "COO, Growth Company",
      sector: "Workflow Systems",
      locale: "en",
      initials: "NH",
    },
    ar: {
      text: "قلل النظام الجديد عدد الخطوات اليدوية في سير العمل اليومي، وهذا ما كنا نحتاجه تمامًا.",
      name: "نور ح.",
      role: "المدير التنفيذي للعمليات",
      sector: "أنظمة العمل",
      locale: "ar",
      initials: "نو",
    },
  },
  {
    en: {
      text: "The e-commerce launch was smooth, and the product pages now feel much more organized.",
      name: "George P.",
      role: "E-commerce Director",
      sector: "E-commerce",
      locale: "en",
      initials: "GP",
    },
    ar: {
      text: "كان إطلاق التجارة الإلكترونية سلسًا، وأصبحت صفحات المنتجات أكثر تنظيمًا.",
      name: "جورج ب.",
      role: "مدير التجارة الإلكترونية",
      sector: "التجارة الإلكترونية",
      locale: "ar",
      initials: "جو",
    },
  },
  {
    en: {
      text: "The dashboard and reports finally give us a clean view of activity without extra clutter.",
      name: "Nahla C.",
      role: "Analytics Manager",
      sector: "Dashboards",
      locale: "en",
      initials: "NC",
    },
    ar: {
      text: "أصبحت لوحة التحكم والتقارير تمنحنا رؤية واضحة للنشاط من دون ازدحام بصري.",
      name: "نهلة ج.",
      role: "مديرة التحليلات",
      sector: "لوحات التحكم",
      locale: "ar",
      initials: "نه",
    },
  },
  {
    en: {
      text: "The support team is faster now because the CRM structure actually fits how we work.",
      name: "Hossam F.",
      role: "Support Operations",
      sector: "CRM",
      locale: "en",
      initials: "HF",
    },
    ar: {
      text: "أصبح فريق الدعم أسرع لأن بنية CRM أصبحت مناسبة لطريقة عملنا بالفعل.",
      name: "حسام ف.",
      role: "العمليات الداعمة",
      sector: "CRM",
      locale: "ar",
      initials: "حس",
    },
  },
  {
    en: {
      text: "The platform is easier to trust now because the visual identity feels consistent everywhere.",
      name: "Amina R.",
      role: "Founder, Beauty Brand",
      sector: "Branding",
      locale: "en",
      initials: "AR",
    },
    ar: {
      text: "أصبح من الأسهل الوثوق بالمنصة لأن الهوية البصرية متسقة في كل مكان.",
      name: "أمينة ر.",
      role: "مؤسسة علامة تجارية",
      sector: "الهوية البصرية",
      locale: "ar",
      initials: "أم",
    },
  },
  {
    en: {
      text: "The clinic booking journey is direct now, and the front desk gets fewer unnecessary calls.",
      name: "Khaled M.",
      role: "Clinic Partner",
      sector: "Medical Clinics",
      locale: "en",
      initials: "KM",
    },
    ar: {
      text: "أصبح مسار الحجز في العيادة مباشرًا، وتلقّى الاستقبال مكالمات غير ضرورية أقل.",
      name: "خالد م.",
      role: "شريك عيادة",
      sector: "العيادات الطبية",
      locale: "ar",
      initials: "خل",
    },
  },
  {
    en: {
      text: "Their team helped us clean up the user journey and it immediately made the product feel more premium.",
      name: "Mina S.",
      role: "Product Manager",
      sector: "Digital Products",
      locale: "en",
      initials: "MS",
    },
    ar: {
      text: "ساعدنا الفريق على تنظيف رحلة المستخدم، وهذا جعل المنتج يبدو أكثر فخامة فورًا.",
      name: "مينا س.",
      role: "مدير منتج",
      sector: "المنتجات الرقمية",
      locale: "ar",
      initials: "مي",
    },
  },
  {
    en: {
      text: "The booking and service request flow now feels much more natural for our customers.",
      name: "Hassan M.",
      role: "Business Owner",
      sector: "Workflow Systems",
      locale: "en",
      initials: "HM",
    },
    ar: {
      text: "أصبح مسار الحجز وطلبات الخدمة أكثر سلاسة وطبيعية بالنسبة لعملائنا.",
      name: "حسن م.",
      role: "صاحب عمل",
      sector: "أنظمة العمل",
      locale: "ar",
      initials: "حس",
    },
  },
  {
    en: {
      text: "The team can now react to customer questions faster because the workflow is much more orderly.",
      name: "Laila N.",
      role: "Customer Experience Lead",
      sector: "CRM",
      locale: "en",
      initials: "LN",
    },
    ar: {
      text: "أصبح الفريق يرد على أسئلة العملاء أسرع لأن سير العمل بات أكثر تنظيمًا.",
      name: "ليلى ن.",
      role: "قائدة تجربة العملاء",
      sector: "CRM",
      locale: "ar",
      initials: "لي",
    },
  },
  {
    en: {
      text: "Our sales material and website now tell the same story, which made the brand feel much stronger.",
      name: "Ayman T.",
      role: "Sales & Growth",
      sector: "Sales",
      locale: "en",
      initials: "AT",
    },
    ar: {
      text: "أصبحت مواد المبيعات والموقع تحكي القصة نفسها، وهذا جعل العلامة أقوى بكثير.",
      name: "أيمن ت.",
      role: "المبيعات والنمو",
      sector: "المبيعات",
      locale: "ar",
      initials: "أي",
    },
  },
  {
    en: {
      text: "They gave us a cleaner digital presence without making the site feel overloaded.",
      name: "Rima A.",
      role: "Marketing Manager",
      sector: "Corporate",
      locale: "en",
      initials: "RA",
    },
    ar: {
      text: "قدّموا لنا حضورًا رقميًا أنظف من دون أن يبدو الموقع مثقلًا.",
      name: "ريما أ.",
      role: "مديرة التسويق",
      sector: "الشركات",
      locale: "ar",
      initials: "ري",
    },
  },
  {
    en: {
      text: "The technical handoff was smooth, and the support after launch has been consistent.",
      name: "Fouad K.",
      role: "Founder, Logistics Service",
      sector: "Technical Support",
      locale: "en",
      initials: "FK",
    },
    ar: {
      text: "كان تسليم العمل سلسًا، والدعم بعد الإطلاق ظل ثابتًا وموثوقًا.",
      name: "فؤاد ك.",
      role: "مؤسس شركة لوجستية",
      sector: "الدعم الفني",
      locale: "ar",
      initials: "فو",
    },
  },
  {
    en: {
      text: "The interface is cleaner, and that made our internal approvals much easier to manage.",
      name: "Sara D.",
      role: "Office Operations",
      sector: "Internal Systems",
      locale: "en",
      initials: "SD",
    },
    ar: {
      text: "أصبحت الواجهة أنظف، وهذا جعل إدارة الموافقات الداخلية أسهل بكثير.",
      name: "سارة د.",
      role: "العمليات المكتبية",
      sector: "الأنظمة الداخلية",
      locale: "ar",
      initials: "سا",
    },
  },
  {
    en: {
      text: "The app feels much more stable now, and the most-used actions are easier to reach.",
      name: "Hend E.",
      role: "Founder, Service App",
      sector: "Mobile Apps",
      locale: "en",
      initials: "HE",
    },
    ar: {
      text: "أصبح التطبيق أكثر استقرارًا، وأصبحت الإجراءات الأكثر استخدامًا أسهل في الوصول.",
      name: "هند ع.",
      role: "مؤسسة تطبيق خدمات",
      sector: "تطبيقات الهواتف",
      locale: "ar",
      initials: "هن",
    },
  },
  {
    en: {
      text: "The booking process now feels trustworthy and quick, which is exactly what our customers wanted.",
      name: "Adel S.",
      role: "Owner, Tourism Company",
      sector: "Tourism",
      locale: "en",
      initials: "AS",
    },
    ar: {
      text: "أصبح مسار الحجز موثوقًا وسريعًا، وهذا تمامًا ما كان يريده عملاؤنا.",
      name: "عادل س.",
      role: "صاحب شركة سياحة",
      sector: "السياحة",
      locale: "ar",
      initials: "عا",
    },
  },
  {
    en: {
      text: "The restaurant interface is easier for staff to use during busy hours, which reduced mistakes.",
      name: "Rania H.",
      role: "Restaurant Operations",
      sector: "Restaurants",
      locale: "en",
      initials: "RH",
    },
    ar: {
      text: "أصبحت الواجهة أسهل لفريق المطعم خلال ساعات الذروة، وهذا قلل الأخطاء.",
      name: "رانية ح.",
      role: "عمليات مطاعم",
      sector: "المطاعم",
      locale: "ar",
      initials: "را",
    },
  },
  {
    en: {
      text: "The real estate lead flow is far clearer now, and that helps our team prioritize quickly.",
      name: "Hazem M.",
      role: "Sales Team Lead",
      sector: "Real Estate",
      locale: "en",
      initials: "HM",
    },
    ar: {
      text: "أصبح مسار العملاء المحتملين في العقارات أوضح، وهذا يساعد فريقنا على ترتيب الأولويات بسرعة.",
      name: "حازم م.",
      role: "قائد فريق المبيعات",
      sector: "العقارات",
      locale: "ar",
      initials: "حا",
    },
  },
  {
    en: {
      text: "The school platform gives us better control over announcements, lessons, and parent communication.",
      name: "Salem J.",
      role: "School Administrator",
      sector: "Education",
      locale: "en",
      initials: "SJ",
    },
    ar: {
      text: "منحتنا منصة المدرسة تحكمًا أفضل في الإعلانات والدروس والتواصل مع أولياء الأمور.",
      name: "سالم ج.",
      role: "مدير مدرسة",
      sector: "التعليم",
      locale: "ar",
      initials: "سا",
    },
  },
  {
    en: {
      text: "The CRM now matches the way our sales team actually works, not the other way around.",
      name: "Wafa K.",
      role: "Sales Operations",
      sector: "CRM",
      locale: "en",
      initials: "WK",
    },
    ar: {
      text: "أصبح نظام CRM مطابقًا لطريقة عمل فريق المبيعات لدينا، وليس العكس.",
      name: "وفاء ك.",
      role: "عمليات المبيعات",
      sector: "CRM",
      locale: "ar",
      initials: "وف",
    },
  },
  {
    en: {
      text: "The technical support has been calm, responsive, and easy to work with after launch.",
      name: "Samir A.",
      role: "Business Owner",
      sector: "Technical Support",
      locale: "en",
      initials: "SA",
    },
    ar: {
      text: "كان الدعم الفني هادئًا وسريع الاستجابة وسهل التعامل بعد الإطلاق.",
      name: "سمير أ.",
      role: "صاحب عمل",
      sector: "الدعم الفني",
      locale: "ar",
      initials: "سم",
    },
  },
  {
    en: {
      text: "The dashboard helps our managers see what matters without digging through spreadsheets.",
      name: "Rola M.",
      role: "Business Manager",
      sector: "Dashboards",
      locale: "en",
      initials: "RM",
    },
    ar: {
      text: "تساعد لوحة التحكم مدرائنا على رؤية المهم من دون التعمق في الجداول المعقدة.",
      name: "رولا م.",
      role: "مديرة أعمال",
      sector: "لوحات التحكم",
      locale: "ar",
      initials: "رو",
    },
  },
  {
    en: {
      text: "The brand direction now feels clear enough that every other asset became easier to make.",
      name: "Iman H.",
      role: "Creative Director",
      sector: "Branding",
      locale: "en",
      initials: "IH",
    },
    ar: {
      text: "أصبح اتجاه العلامة واضحًا بما يكفي، مما جعل إنتاج باقي المواد أسهل بكثير.",
      name: "إيمان ح.",
      role: "مديرة إبداعية",
      sector: "الهوية البصرية",
      locale: "ar",
      initials: "إي",
    },
  },
  {
    en: {
      text: "Our requests, approvals, and handovers now sit in one place, which has reduced confusion across the team.",
      name: "Khalifa A.",
      role: "Chief Operating Officer",
      sector: "Workflow Systems",
      locale: "en",
      initials: "KA",
    },
    ar: {
      text: "أصبحت الطلبات والموافقات والتسليمات في مكان واحد، وهذا قلل الارتباك داخل الفريق.",
      name: "خليفة أ.",
      role: "المدير التنفيذي للعمليات",
      sector: "أنظمة العمل",
      locale: "ar",
      initials: "خل",
    },
  },
  {
    en: {
      text: "The site supports our growth better now because it is easier for prospects to understand the offer.",
      name: "Dana T.",
      role: "Founder, Growth Studio",
      sector: "Corporate",
      locale: "en",
      initials: "DT",
    },
    ar: {
      text: "أصبح الموقع يدعم نموّنا بشكل أفضل، لأنه صار أسهل على العملاء المحتملين فهم العرض.",
      name: "دانا ت.",
      role: "مؤسسة استوديو نمو",
      sector: "الشركات",
      locale: "ar",
      initials: "دا",
    },
  },
  {
    en: {
      text: "The booking journey is simple enough now that it works well for both mobile and desktop users.",
      name: "Mazen S.",
      role: "Product Owner",
      sector: "Tourism",
      locale: "en",
      initials: "MS",
    },
    ar: {
      text: "أصبح مسار الحجز بسيطًا بما يكفي ليعمل جيدًا لمستخدمي الهاتف والحاسوب معًا.",
      name: "مازن س.",
      role: "مالك منتج",
      sector: "السياحة",
      locale: "ar",
      initials: "ما",
    },
  },
  {
    en: {
      text: "The new workflow reduced manual coordination and made daily updates much easier to keep on track.",
      name: "Hala M.",
      role: "Operations Coordinator",
      sector: "Internal Systems",
      locale: "en",
      initials: "HM",
    },
    ar: {
      text: "قلل سير العمل الجديد التنسيق اليدوي، وجعل متابعة التحديثات اليومية أسهل بكثير.",
      name: "هالة م.",
      role: "منسقة عمليات",
      sector: "الأنظمة الداخلية",
      locale: "ar",
      initials: "ها",
    },
  },
  {
    en: {
      text: "The clinic's online experience feels cleaner now, especially for patients booking from their phones.",
      name: "Waleed N.",
      role: "Clinic Partner",
      sector: "Medical Clinics",
      locale: "en",
      initials: "WN",
    },
    ar: {
      text: "أصبحت تجربة العيادة الإلكترونية أنظف، خاصة للمرضى الذين يحجزون من هواتفهم.",
      name: "وليد ن.",
      role: "شريك عيادة",
      sector: "العيادات الطبية",
      locale: "ar",
      initials: "ول",
    },
  },
  {
    en: {
      text: "The customer follow-up process feels more reliable now, and nothing important gets missed as easily.",
      name: "Rasha F.",
      role: "Support & CRM Lead",
      sector: "CRM",
      locale: "en",
      initials: "RF",
    },
    ar: {
      text: "أصبح مسار متابعة العملاء أكثر موثوقية، ولم يعد من السهل تفويت الأمور المهمة.",
      name: "رشا ف.",
      role: "قائدة CRM والدعم",
      sector: "CRM",
      locale: "ar",
      initials: "رش",
    },
  },
  {
    en: {
      text: "The app release felt well prepared, and the user journey is easier from the first screen onward.",
      name: "Bassem H.",
      role: "Startup Founder",
      sector: "Mobile Apps",
      locale: "en",
      initials: "BH",
    },
    ar: {
      text: "كان إطلاق التطبيق مدروسًا، وأصبحت رحلة المستخدم أسهل من الشاشة الأولى فصاعدًا.",
      name: "باسم ح.",
      role: "مؤسس شركة ناشئة",
      sector: "تطبيقات الهواتف",
      locale: "ar",
      initials: "با",
    },
  },
  {
    en: {
      text: "The restaurant ordering system is practical, clean, and much easier for the staff to use under pressure.",
      name: "Maha A.",
      role: "Restaurant Owner",
      sector: "Restaurants",
      locale: "en",
      initials: "MA",
    },
    ar: {
      text: "أصبح نظام طلبات المطعم عمليًا ونظيفًا وأسهل بكثير للفريق تحت الضغط.",
      name: "مها أ.",
      role: "صاحبة مطعم",
      sector: "المطاعم",
      locale: "ar",
      initials: "مه",
    },
  },
  {
    en: {
      text: "The real estate presentation now feels more persuasive and easier for clients to browse.",
      name: "Alaa S.",
      role: "Real Estate Consultant",
      sector: "Real Estate",
      locale: "en",
      initials: "AS",
    },
    ar: {
      text: "أصبح عرض العقارات أكثر إقناعًا وأسهل للعميل في التصفح.",
      name: "علاء س.",
      role: "مستشار عقاري",
      sector: "العقارات",
      locale: "ar",
      initials: "عل",
    },
  },
  {
    en: {
      text: "The corporate site gives us a much better first impression when new partners arrive.",
      name: "Rami K.",
      role: "Partnerships Manager",
      sector: "Corporate",
      locale: "en",
      initials: "RK",
    },
    ar: {
      text: "أصبح الموقع المؤسسي يترك انطباعًا أوليًا أفضل عند وصول الشركاء الجدد.",
      name: "رامي ك.",
      role: "مدير الشراكات",
      sector: "الشركات",
      locale: "ar",
      initials: "را",
    },
  },
  {
    en: {
      text: "The support process after launch has been steady and thoughtful, which made the whole project feel safer.",
      name: "Nada M.",
      role: "Business Owner",
      sector: "Technical Support",
      locale: "en",
      initials: "NM",
    },
    ar: {
      text: "كان الدعم بعد الإطلاق ثابتًا ومدروسًا، وهذا جعل المشروع كله أكثر أمانًا.",
      name: "ندى م.",
      role: "صاحبة عمل",
      sector: "الدعم الفني",
      locale: "ar",
      initials: "ند",
    },
  },
  {
    en: {
      text: "The dashboard is finally useful for the day-to-day decisions our managers need to make.",
      name: "Yazan T.",
      role: "Head of Operations",
      sector: "Dashboards",
      locale: "en",
      initials: "YT",
    },
    ar: {
      text: "أصبحت لوحة التحكم مفيدة فعلًا لقرارات الإدارة اليومية التي يحتاجها مدراؤنا.",
      name: "يزن ت.",
      role: "رئيس العمليات",
      sector: "لوحات التحكم",
      locale: "ar",
      initials: "يز",
    },
  },
  {
    en: {
      text: "The website copy and structure helped the product feel focused instead of scattered.",
      name: "Heba R.",
      role: "Product Marketing",
      sector: "Branding",
      locale: "en",
      initials: "HR",
    },
    ar: {
      text: "ساعدت بنية الموقع وصياغته على أن يبدو المنتج مركزًا بدلًا من أن يكون مشتتًا.",
      name: "هبة ر.",
      role: "تسويق منتجات",
      sector: "الهوية البصرية",
      locale: "ar",
      initials: "هب",
    },
  },
  {
    en: {
      text: "The booking and request system is the first thing our staff actually likes using every day.",
      name: "Faris D.",
      role: "General Manager",
      sector: "Workflow Systems",
      locale: "en",
      initials: "FD",
    },
    ar: {
      text: "أصبح نظام الحجز والطلبات أول شيء يفضله فريقنا في الاستخدام اليومي.",
      name: "فارس د.",
      role: "مدير عام",
      sector: "أنظمة العمل",
      locale: "ar",
      initials: "فا",
    },
  },
  {
    en: {
      text: "The LMS now gives teachers a simpler way to share materials and keep students informed.",
      name: "Sana K.",
      role: "School Operations",
      sector: "Education",
      locale: "en",
      initials: "SK",
    },
    ar: {
      text: "أصبح نظام التعلم يمنح المعلمين طريقة أبسط لمشاركة المواد وإبقاء الطلاب على اطلاع.",
      name: "سناء ك.",
      role: "العمليات المدرسية",
      sector: "التعليم",
      locale: "ar",
      initials: "سن",
    },
  },
  {
    en: {
      text: "The customer messages and requests are now much easier to manage without missing the important ones.",
      name: "Mazen A.",
      role: "Support Operations",
      sector: "CRM",
      locale: "en",
      initials: "MA",
    },
    ar: {
      text: "أصبحت رسائل العملاء وطلباتهم أسهل بكثير في الإدارة من دون فقدان المهم منها.",
      name: "مازن أ.",
      role: "عمليات الدعم",
      sector: "CRM",
      locale: "ar",
      initials: "ما",
    },
  },
]

function getInitials(name: string) {
  return name
    .replace(/[.\-_]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
}

function chunkTestimonials(items: Testimonial[], count: number) {
  const result: Testimonial[][] = Array.from({ length: count }, () => [])
  items.forEach((item, index) => {
    result[index % count].push(item)
  })
  return result
}

function TestimonialColumn({
  items,
  speed = "30s",
  direction = "up",
  isRtl = false,
}: {
  items: Testimonial[]
  speed?: string
  direction?: "up" | "down"
  isRtl?: boolean
}) {
  const tripledItems = [...items, ...items, ...items]

  return (
    <div className="relative h-[35rem] overflow-hidden w-full select-none pointer-events-none">
      <div
        className={cn(
          "flex flex-col gap-4 py-2 absolute w-full left-0 pointer-events-auto",
          direction === "up" ? "animate-scroll-up" : "animate-scroll-down",
        )}
        style={{ animationDuration: speed }}
      >
        {tripledItems.map((item, idx) => {
          const rtl = item.locale === "ar" && isRtl
          const initials = getInitials(item.name)

          return (
            <div
              key={`${item.name}-${idx}`}
              className={cn(
                "bg-white border border-neutral-200/80 hover:border-neutral-300 shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4",
                rtl ? "text-right" : "text-start",
              )}
            >
              <div className={cn("flex gap-0.5", rtl ? "justify-end" : "justify-start")}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {item.text}
              </p>
              <div className={cn("flex items-center gap-3 border-t border-neutral-100 pt-4 mt-1", rtl && "flex-row-reverse")}>
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-500 flex items-center justify-center text-xs font-semibold text-white tracking-wider">
                  {initials}
                </div>
                <div className={cn(rtl && "text-right")}>
                  <h4 className="text-neutral-900 font-bold text-xs">
                    {item.name}
                  </h4>
                  <p className="text-neutral-400 text-[10px] mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-neutral-400 text-[10px] mt-0.5">{item.sector}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const { t, locale } = useLanguage()
  const isRtl = locale === "ar"
  const currentTestimonials = testimonialsData.map((item) => item[locale])
  const [col1, col2, col3] = chunkTestimonials(currentTestimonials, 3)

  return (
    <section
      className="w-full bg-neutral-50/50 border-t border-neutral-200 py-20 overflow-x-clip"
      id="testimonials"
    >
      <div className="container-custom text-center">
        <span className={cn("inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-neutral-100 text-neutral-800 mb-4 border border-neutral-200", locale === "ar" ? "tracking-normal" : "uppercase tracking-wider")}>
          {t("testimonials.badge")}
        </span>
        <h2 className={cn("text-neutral-900 mb-4 text-4xl lg:text-6xl font-normal", locale === "ar" ? "tracking-normal" : "leading-tight")}>
          {locale === "ar" ? (
            <>
              ماذا يقول <span className="italic font-light text-neutral-500">عملاؤنا</span>
            </>
          ) : (
            <>
              What Clients <span className="italic font-light text-neutral-500">Say</span>
            </>
          )}
        </h2>
        <p className="text-neutral-500 mb-4 max-w-2xl mx-auto text-lg">
          {t("testimonials.desc")}
        </p>
        <p className={cn("text-[11px] text-neutral-400 mb-16", locale === "ar" ? "tracking-normal" : "uppercase tracking-[0.18em]")}>
          {t("reviews.based_on")}
        </p>

        <div
          className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mx-auto overflow-hidden h-[35rem] mb-20 rounded-3xl"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
          }}
        >
          <TestimonialColumn items={col1} speed="28s" direction="up" isRtl={isRtl} />
          <div className="hidden sm:block">
            <TestimonialColumn items={col2} speed="32s" direction="down" isRtl={isRtl} />
          </div>
          <div className="hidden md:block">
            <TestimonialColumn items={col3} speed="25s" direction="up" isRtl={isRtl} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-neutral-200/60">
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-[0_2px_15px_rgba(0,0,0,0.015)] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
            
            {/* Left Block */}
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="flex items-center gap-2" dir="ltr">
                <span className="text-xs tracking-wider font-bold text-neutral-500 uppercase">
                  {t("reviews.reviewed_on")}
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-red-500 stroke-red-500" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-1" dir="ltr">
                <Image 
                  src="/macosdock/homepage.svg" 
                  alt="PENCIL Icon" 
                  width={20} 
                  height={20} 
                  className="w-5 h-5 object-contain"
                />
                <span className="text-base font-extrabold text-neutral-900 tracking-wider">
                  PENCIL
                </span>
                <span className="text-xs font-semibold text-neutral-500 ml-1">
                  {locale === "ar" ? (
                    <>
                      <span dir="ltr" className="inline-block">1,208</span> تقييم
                    </>
                  ) : (
                    "1,208 REVIEWS"
                  )}
                </span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-px h-12 bg-neutral-200" />

            {/* Right Block */}
            <div className="flex items-center gap-3">
              <Image 
                src="/macosdock/homepage.svg" 
                alt="PENCIL Icon" 
                width={36} 
                height={36} 
                className="w-9 h-9 object-contain"
              />
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2" dir="ltr">
                  <span className="text-lg font-black text-neutral-900 leading-none">
                    4.9
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className={cn("text-[10px] font-bold text-neutral-500", locale === "ar" ? "tracking-normal" : "tracking-wider uppercase")}>
                  {t("reviews.customer_reviews")}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(-33.333%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-scroll-up {
          animation: scrollUp linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown linear infinite;
        }
        .animate-scroll-up:hover,
        .animate-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
