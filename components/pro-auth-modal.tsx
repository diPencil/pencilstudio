"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, Mail, Lock } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { LazyDotLottie } from "@/components/lazy-dot-lottie";
import { cn } from "@/lib/utils";

const PRO_CROWN_LOTTIE = "https://lottie.host/4531a6de-9d03-4730-a036-9f3eb7aa216d/hbQIg95we5.lottie";

function ProCrownLottie({ size = 24 }: { size?: number }) {
  return (
    <span className="inline-flex items-center justify-center shrink-0 overflow-hidden" style={{ width: size, height: size }}>
      <LazyDotLottie
        src={PRO_CROWN_LOTTIE}
        autoplay
        loop
        className="h-full w-full"
        aria-hidden="true"
      />
    </span>
  );
}

function GoogleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09A6.98 6.98 0 0 1 5.46 12c0-.72.13-1.43.38-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.78.42 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

interface ProAuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  proModelName?: string;
}

export function ProAuthModal({ open, onOpenChange, proModelName }: ProAuthModalProps) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [mode, setMode] = useState<"options" | "portal">("options");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    onOpenChange(false);
    // reset to options after close animation
    setTimeout(() => setMode("options"), 300);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-[8px]"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            dir={isRtl ? "rtl" : "ltr"}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#0F0F0F] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.9)]"
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute end-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="px-7 pb-7 pt-10 sm:px-8 sm:pb-8">
                {/* Logo */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3">
                    <Image src="/logowhite.png" alt="Pencil" width={110} height={28} className="h-7 w-auto object-contain" priority />
                    {/* Crown Lottie without board - bigger to be visible */}
                    <ProCrownLottie size={36} />
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/15 px-3 py-1 text-xs font-bold text-[#7FB0FF]">
                    {isRtl ? "تفعيل" : "Unlock"}
                    <Image src="/macosdock/superfeliz.svg" alt="Feliz" width={16} height={16} className="object-contain" />
                    {proModelName ?? "SuperFeliz"}
                  </span>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  {mode === "options" ? (
                    <motion.div
                      key="options"
                      initial={{ opacity: 0, x: isRtl ? -12 : 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: isRtl ? 12 : -12 }}
                      transition={{ duration: 0.22 }}
                    >
                      <p className="mt-6 text-center text-sm font-medium leading-relaxed text-white/70">
                        {isRtl
                          ? "أنشئ حساب جديد أو سجّل دخول بأحد الخيارات التالية"
                          : "Create a new account using one of the options below"}
                      </p>

                      <div className="mt-6 flex flex-col gap-3">
                        {/* Google */}
                        <button
                          onClick={() => {
                            // TODO(auth): wire Google OAuth — UI mock only, no backend yet
                          }}
                          className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                        >
                          <GoogleIcon size={18} />
                          {isRtl ? "المتابعة بحساب Google" : "Sign up with Google"}
                        </button>

                        {/* Portal credentials */}
                        <button
                          onClick={() => setMode("portal")}
                          className="relative flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                        >
                          <Building2 size={18} className="shrink-0 text-white/80" />
                          {isRtl ? "تسجيل دخول بحساب الشركة (البورتال)" : "Sign in with Company account"}
                          <span className="absolute -end-1 -top-2 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold leading-none text-black">
                            {isRtl ? "من الأدمن" : "Portal"}
                          </span>
                        </button>

                        {/* SSO mock - keeps visual parity with screenshot */}
                        <button
                          onClick={() => {
                            // TODO(auth): wire SSO — UI mock only, no backend yet
                          }}
                          className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                        >
                          <Lock size={16} className="shrink-0 text-white/60" />
                          {isRtl ? "المتابعة عبر SSO" : "Sign up with SSO"}
                        </button>
                      </div>

                      <p className="mt-6 text-center text-xs leading-relaxed text-white/35">
                        {isRtl ? (
                          <>
                            بالمتابعة، أنت توافق على{" "}
                            <a href="#" className="underline decoration-white/20 underline-offset-4 hover:text-white/60">
                              شروط الخدمة
                            </a>{" "}
                            وتقر بـ{" "}
                            <a href="#" className="underline decoration-white/20 underline-offset-4 hover:text-white/60">
                              سياسة الخصوصية
                            </a>
                            .
                          </>
                        ) : (
                          <>
                            By signing up, you accept the{" "}
                            <a href="#" className="underline decoration-white/20 underline-offset-4 hover:text-white/60">
                              Terms of Service
                            </a>{" "}
                            and acknowledge our{" "}
                            <a href="#" className="underline decoration-white/20 underline-offset-4 hover:text-white/60">
                              Privacy Policy
                            </a>
                            .
                          </>
                        )}
                      </p>

                      <p className="mt-3 text-center text-xs font-medium text-white/25">
                        {isRtl
                          ? "حساب البورتال يتم تسليمه من أدمن الشركة"
                          : "Portal credentials are provided by your company admin"}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="portal"
                      initial={{ opacity: 0, x: isRtl ? 12 : -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: isRtl ? -12 : 12 }}
                      transition={{ duration: 0.22 }}
                    >
                      <button
                        onClick={() => setMode("options")}
                        className="mt-4 flex items-center gap-1.5 text-xs font-bold text-white/50 transition hover:text-white"
                      >
                        <span className={cn(isRtl && "rotate-180")}>←</span>
                        {isRtl ? "رجوع للخيارات" : "Back to options"}
                      </button>

                      <h3 className="mt-3 text-center text-base font-black text-white">
                        {isRtl ? "تسجيل دخول البورتال" : "Company Portal login"}
                      </h3>
                      <p className="mt-1.5 text-center text-xs leading-relaxed text-white/50">
                        {isRtl
                          ? "استخدم البريد وكلمة السر اللي استلمتها من أدمن البورتال"
                          : "Use the email & password provided by your portal admin"}
                      </p>

                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          // TODO(auth): wire portal login API — UI mock only, no backend yet
                        }}
                        className="mt-5 space-y-3"
                      >
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-white/70">
                            {isRtl ? "بريد الشركة" : "Company email"}
                          </label>
                          <div className="relative">
                            <Mail size={16} className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-white/30" />
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder={isRtl ? "name@company.com" : "name@company.com"}
                              className="w-full rounded-xl border border-white/10 bg-white/[0.06] py-3 pe-4 ps-10 text-sm text-white placeholder:text-white/25 focus:border-white/20 focus:outline-none focus:ring-0"
                              dir="ltr"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-white/70">
                            {isRtl ? "كلمة السر" : "Password"}
                          </label>
                          <div className="relative">
                            <Lock size={16} className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-white/30" />
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="••••••••"
                              className="w-full rounded-xl border border-white/10 bg-white/[0.06] py-3 pe-4 ps-10 text-sm text-white placeholder:text-white/25 focus:border-white/20 focus:outline-none focus:ring-0"
                              dir="ltr"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="mt-1 w-full rounded-xl bg-white py-3.5 text-sm font-black text-black transition hover:bg-neutral-200"
                        >
                          {isRtl ? "تسجيل الدخول" : "Sign in"}
                        </button>
                      </form>

                      {/* Divider */}
                      <div className="mt-6 flex items-center gap-3">
                        <span className="h-px flex-1 bg-white/10" />
                        <span className="text-xs font-bold text-white/25">{isRtl ? "أو" : "OR"}</span>
                        <span className="h-px flex-1 bg-white/10" />
                      </div>

                      <button
                        onClick={() => {
                          setMode("options");
                          // could directly trigger google
                        }}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent py-3 text-sm font-bold text-white/70 transition hover:border-white/20 hover:text-white"
                      >
                        <GoogleIcon size={16} />
                        {isRtl ? "المتابعة بجوجل بدلاً من ذلك" : "Continue with Google instead"}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
