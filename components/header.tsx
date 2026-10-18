"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-context"
import Image from "next/image"
import { Globe, Mail, Phone, Menu, Headphones, CircleHelp, X, PhoneCall } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function Header({ solid = false, light = false }: { solid?: boolean; light?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(solid)
  const [langOpen, setLangOpen] = useState(false)
  const [emailOpen, setEmailOpen] = useState(false)
  const [phoneOpen, setPhoneOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { locale, setLocale, t } = useLanguage()
  const isRtl = locale === "ar"

  const langRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const helpRef = useRef<HTMLDivElement>(null)
  const supportRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(solid || window.scrollY > (window.innerHeight - 80))
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [solid])

  // Close all dropdowns on outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (langRef.current && !langRef.current.contains(target)) setLangOpen(false)
      if (emailRef.current && !emailRef.current.contains(target)) setEmailOpen(false)
      if (phoneRef.current && !phoneRef.current.contains(target)) setPhoneOpen(false)
      if (helpRef.current && !helpRef.current.contains(target)) setHelpOpen(false)
      if (supportRef.current && !supportRef.current.contains(target)) setSupportOpen(false)
      if (menuRef.current && !menuRef.current.contains(target)) setMenuOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const menuItems = [
    { label: t("dock.homepage"), href: "/" },
    { label: t("dock.solutions"), href: "/solutions" },
    { label: t("dock.sectors"), href: "/sectors" },
    { label: t("dock.cloudHosting"), href: "/cloud-hosting" },
    { label: t("dock.enterprise"), href: "/enterprise" },
    { label: t("dock.feliz"), href: "/superfeliz" },
    { label: t("dock.pricing"), href: "/pricing" },
    { label: t("dock.about"), href: "/about" },
    { label: t("dock.contact"), href: "/contact" },
  ]

  // `light` = transparent header over a LIGHT hero: dark icons from the
  // first pixel (homepage behavior), white bar only after scrolling.
  const darkIcons = isScrolled || light

  const iconButtonStyle = cn(
    "p-2 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center",
    darkIcons
      ? "border-neutral-200 bg-neutral-100/50 text-neutral-800 hover:bg-neutral-200/80"
      : "border-white/10 bg-white/5 text-white hover:bg-white/15"
  )

  const dropdownStyle = cn(
    "absolute mt-2 rounded-xl border p-2 backdrop-blur-md shadow-xl z-50 flex flex-col gap-1 min-w-[200px]",
    darkIcons
      ? "bg-white/95 border-neutral-200/80 text-neutral-900"
      : "bg-neutral-900/95 border-white/15 text-white"
  )

  const dropdownItemStyle = "w-full text-start px-3.5 py-2.5 rounded-lg text-xs font-semibold hover:bg-neutral-500/10 cursor-pointer transition-colors flex items-center gap-2"

  return (
    <motion.header
      dir={isRtl ? "rtl" : "ltr"}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b",
        isScrolled 
          ? "bg-white/80 border-neutral-200/50 shadow-xs" 
          : "bg-black/5 border-white/[0.02]"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center justify-between h-14 lg:h-16 relative">
          
          {/* LEFT/RIGHT SIDE: Languages, Emails, Phones (Left in LTR, Right in RTL) */}
          <div className="flex items-center gap-2 lg:gap-3 z-10">
            {/* Language Selection */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={iconButtonStyle}
                aria-label="Language options"
                aria-haspopup="true"
                aria-expanded={langOpen}
              >
                <Globe size={16} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    dir={isRtl ? "rtl" : "ltr"}
                    className={cn(dropdownStyle, isRtl ? "right-0" : "left-0")}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => {
                        setLocale("en")
                        setLangOpen(false)
                      }}
                      className={cn(dropdownItemStyle, locale === "en" && "bg-neutral-500/15")}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLocale("ar")
                        setLangOpen(false)
                      }}
                      className={cn(dropdownItemStyle, locale === "ar" && "bg-neutral-500/15")}
                    >
                      العربية
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Email Options */}
            <div ref={emailRef} className="relative">
              <button
                onClick={() => setEmailOpen(!emailOpen)}
                className={iconButtonStyle}
                aria-label="Email options"
                aria-haspopup="true"
                aria-expanded={emailOpen}
              >
                <Mail size={16} />
              </button>
              <AnimatePresence>
                {emailOpen && (
                  <motion.div
                    dir={isRtl ? "rtl" : "ltr"}
                    className={cn(dropdownStyle, isRtl ? "right-0" : "left-0")}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="block px-3.5 py-1.5 text-[9px] uppercase tracking-wider opacity-50 font-bold select-none text-start">
                      {isRtl ? "البريد الإلكتروني" : "Email Address"}
                    </span>
                    <a
                      href="mailto:info@dipencil.com"
                      onClick={() => setEmailOpen(false)}
                      className={dropdownItemStyle}
                    >
                      <Mail size={12} className="opacity-60" />
                      <span dir="ltr" style={{ unicodeBidi: "plaintext" }}>info@dipencil.com</span>
                    </a>
                    <a
                      href="mailto:services@dipencil.com"
                      onClick={() => setEmailOpen(false)}
                      className={dropdownItemStyle}
                    >
                      <Mail size={12} className="opacity-60" />
                      <span dir="ltr" style={{ unicodeBidi: "plaintext" }}>services@dipencil.com</span>
                    </a>
                    <a
                      href="mailto:help@dipencil.com"
                      onClick={() => setEmailOpen(false)}
                      className={dropdownItemStyle}
                    >
                      <Mail size={12} className="opacity-60" />
                      <span dir="ltr" style={{ unicodeBidi: "plaintext" }}>help@dipencil.com</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone Options */}
            <div ref={phoneRef} className="relative">
              <button
                onClick={() => setPhoneOpen(!phoneOpen)}
                className={iconButtonStyle}
                aria-label="Phone options"
                aria-haspopup="true"
                aria-expanded={phoneOpen}
              >
                <Phone size={16} />
              </button>
              <AnimatePresence>
                {phoneOpen && (
                  <motion.div
                    dir={isRtl ? "rtl" : "ltr"}
                    className={cn(dropdownStyle, isRtl ? "right-0" : "left-0")}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="tel:+201003778273"
                      onClick={() => setPhoneOpen(false)}
                      className={dropdownItemStyle}
                    >
                      <PhoneCall size={12} className="opacity-60" />
                      <span className="flex flex-col text-start">
                        <span className="text-[10px] opacity-60 uppercase">{isRtl ? "اتصال" : "Call"}</span>
                        <span dir="ltr" style={{ unicodeBidi: "plaintext" }}>+20 100 377 8273</span>
                      </span>
                    </a>
                    <a
                      href="https://wa.me/201003778273"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setPhoneOpen(false)}
                      className={dropdownItemStyle}
                    >
                      <WhatsAppIcon size={13} className="opacity-60" />
                      <span className="flex flex-col text-start">
                        <span className="text-[10px] opacity-60 uppercase">{isRtl ? "واتساب" : "WhatsApp"}</span>
                        <span dir="ltr" style={{ unicodeBidi: "plaintext" }}>+20 100 377 8273</span>
                      </span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CENTER: Logo stays centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <a
                href="/"
                className="block transition-opacity duration-200 hover:opacity-90"
                aria-label={`${t("brand.logo")} Home`}
              >
                <Image
                  src={darkIcons ? "/logoblack.png" : "/logowhite.png"}
                  alt={t("brand.logo")}
                  width={150}
                  height={35}
                  className={cn("h-7 w-auto object-contain", !darkIcons && "brightness-0 invert")}
                  priority
                />
              </a>
            </motion.div>
          </div>

          {/* RIGHT/LEFT SIDE: Help Center, Support & Burger Menu (Right in LTR, Left in RTL) */}
          <div className="flex items-center gap-2 lg:gap-3 z-10">
             {/* Help Center dropdown */}
             <div ref={helpRef} className="relative">
               <button
                 onClick={() => setHelpOpen(!helpOpen)}
                 className={iconButtonStyle}
                 aria-label="Help Center"
                 aria-haspopup="true"
                 aria-expanded={helpOpen}
               >
                 <CircleHelp size={16} />
               </button>
               <AnimatePresence>
                 {helpOpen && (
                   <motion.div
                     dir={isRtl ? "rtl" : "ltr"}
                     className={cn(dropdownStyle, isRtl ? "left-0" : "right-0")}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 10 }}
                     transition={{ duration: 0.2 }}
                   >
                     <a href="/help" onClick={() => setHelpOpen(false)} className={dropdownItemStyle}>
                       {isRtl ? "مركز المساعدة" : "Help Center"}
                     </a>
                     <a href="/help/faqs" onClick={() => setHelpOpen(false)} className={dropdownItemStyle}>
                       {isRtl ? "الأسئلة الشائعة" : "FAQs"}
                     </a>
                     <a href="/help/guides" onClick={() => setHelpOpen(false)} className={dropdownItemStyle}>
                       {isRtl ? "الأدلة" : "Guides"}
                     </a>
                     <a href="/help/contact" onClick={() => setHelpOpen(false)} className={dropdownItemStyle}>
                       {isRtl ? "تواصل مع المساعدة" : "Contact Help"}
                     </a>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>

             {/* Support dropdown */}
             <div ref={supportRef} className="relative">
               <button
                 onClick={() => setSupportOpen(!supportOpen)}
                 className={iconButtonStyle}
                 aria-label="Support options"
                 aria-haspopup="true"
                 aria-expanded={supportOpen}
               >
                 <Headphones size={16} />
               </button>
               <AnimatePresence>
                 {supportOpen && (
                   <motion.div
                     dir={isRtl ? "rtl" : "ltr"}
                     className={cn(dropdownStyle, isRtl ? "left-0" : "right-0")}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 10 }}
                     transition={{ duration: 0.2 }}
                   >
                     <a href="/support" onClick={() => setSupportOpen(false)} className={dropdownItemStyle}>
                       {isRtl ? "مركز الدعم" : "Support Center"}
                     </a>
                     <a href="/support/customer" onClick={() => setSupportOpen(false)} className={dropdownItemStyle}>
                       {isRtl ? "دعم العملاء" : "Customer Support"}
                     </a>
                     <a href="/support/technical" onClick={() => setSupportOpen(false)} className={dropdownItemStyle}>
                       {isRtl ? "الدعم التقني" : "Technical Support"}
                     </a>
                     <a href="/support/callback" onClick={() => setSupportOpen(false)} className={dropdownItemStyle}>
                       {isRtl ? "طلب اتصال" : "Request Callback"}
                     </a>
                     <a href="/support/report" onClick={() => setSupportOpen(false)} className={dropdownItemStyle}>
                       {isRtl ? "الإبلاغ عن مشكلة" : "Report an Issue"}
                     </a>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>

            {/* Burger Menu dropdown */}
            <div ref={menuRef} className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={iconButtonStyle}
                aria-label="Navigation Menu"
                aria-haspopup="true"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    dir={isRtl ? "rtl" : "ltr"}
                    className={cn(dropdownStyle, isRtl ? "left-0" : "right-0")}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block w-full text-start px-4 py-2 rounded-lg text-xs font-semibold hover:bg-neutral-500/10 cursor-pointer transition-colors whitespace-nowrap"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </motion.header>
  )
}


