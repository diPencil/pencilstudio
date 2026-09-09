import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Mail } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"
import { AnimatedText } from "./animated-text"
import { useLanguage } from "@/components/language-context"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const { t, locale } = useLanguage()

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setIsSubmitted(true)
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <BlurPanel className="p-8 lg:p-12 bg-white/40 backdrop-blur-md grain-texture">
              <div className="text-center mb-8">
                <h2 className={locale === "ar" ? "text-3xl lg:text-4xl font-normal text-neutral-900 mb-4 tracking-normal" : "text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"}>
                  {locale === "ar" ? (
                    <>
                      عندك فكرة؟ <span className="font-light italic text-neutral-500">خلّينا نحوّلها.</span>
                    </>
                  ) : (
                    <>
                      <AnimatedText text={t("newsletter.title1")} delay={0.2} />
                      <span className="italic font-light">
                        <AnimatedText text={t("newsletter.title2")} delay={0.5} />
                      </span>
                    </>
                  )}
                </h2>
                <p className="text-lg text-neutral-600">
                  {t("newsletter.description")}
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none">
                      <Mail size={20} className="text-neutral-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setIsValid(true)
                      }}
                      placeholder={t("newsletter.placeholder")}
                      className={`w-full ps-12 pe-4 py-4 bg-white/60 backdrop-blur-sm border rounded-full text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 ${
                        !isValid ? "border-red-300 focus:ring-red-500" : "border-neutral-200"
                      }`}
                    />
                  </div>

                  {!isValid && (
                    <motion.p
                      className="text-sm text-red-600 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t("newsletter.invalid")}
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    className="w-full bg-neutral-900 text-white py-4 rounded-full font-medium hover:bg-neutral-800 transition-all duration-200 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t("newsletter.subscribe")}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{t("newsletter.welcome")}</h3>
                  <p className="text-neutral-600">
                    {t("newsletter.thanks")}
                  </p>
                </motion.div>
              )}

              <p className="text-xs text-neutral-500 text-center mt-6">
                {t("newsletter.privacy1")}
                <a href="#" className="underline hover:text-neutral-700 transition-colors">
                  {t("newsletter.privacy2")}
                </a>
                .
              </p>
            </BlurPanel>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
