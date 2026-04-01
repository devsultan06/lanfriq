"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Onboarding() {
  const [step, setStep] = useState(1);

  // --- Step 1: Who are you? ---
  const StepSelection = () => (
    <div className="flex flex-col items-center w-full px-6">
      <div className="w-full max-w-[620px] mb-8">
        <h1 className="text-[20px] font-medium text-white mb-2">
          Who are you?
        </h1>
        <p className="text-white/40 text-[13px]">
          Select the type of user that resonate with you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[620px]">
        {/* Individual Card */}
        <div
          onClick={() => setStep(2)}
          className="group relative cursor-pointer h-[280px] rounded-[20px] bg-[#0A0A0A] border border-white/5 hover:border-[#6B9E31]/40 transition-all p-8 flex flex-col justify-end overflow-hidden"
        >
          {/* Background Graphic Pattern (Geometric Lines) */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[-20%] right-[-20%]"
            >
              <path
                d="M40 80 L180 120 M45 85 L185 125 M50 90 L190 130 M55 95 L195 135"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.2"
              />
              <path
                d="M40 70 L180 110 M45 75 L185 115 M50 80 L190 120 M55 85 L195 125"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.2"
              />
            </svg>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-[#6B9E31] transition-all">
              <User size={18} />
            </div>
            <div className="space-y-2">
              <h3 className="text-[17px] font-medium text-[#6B9E31]">
                Individual (KYC)
              </h3>
              <p className="text-[11px] text-white/40 leading-relaxed max-w-[180px]">
                For personal property owners (NIN, BVN, SSN, National ID...)
              </p>
            </div>
          </div>
        </div>

        {/* Business Card */}
        <div
          onClick={() => setStep(2)}
          className="group relative cursor-pointer h-[280px] rounded-[20px] bg-[#0A0A0A] border border-white/5 hover:border-[#6B9E31]/40 transition-all p-8 flex flex-col justify-end overflow-hidden"
        >
          {/* Background Graphic Pattern (Curves) */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[-10%] right-[-10%] scale-150"
            >
              <circle
                cx="150"
                cy="50"
                r="40"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.2"
                strokeDasharray="4 4"
              />
              <circle
                cx="160"
                cy="40"
                r="50"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
            </svg>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-[#6B9E31] transition-all">
              <Briefcase size={18} />
            </div>
            <div className="space-y-2">
              <h3 className="text-[17px] font-medium text-[#6B9E31]">
                Business (KYB)
              </h3>
              <p className="text-[11px] text-white/40 leading-relaxed max-w-[200px]">
                For companies, developers, estates (CAC, TIN, director IDs)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // --- Step 2: Verify Account ---
  const StepVerification = () => (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto w-full px-6 gap-20">
      <div className="flex-1 space-y-8 text-left max-w-sm">
        <div className="space-y-3">
          <p className="text-[#6B9E31] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            Yes, You are in!
          </p>
          <h1 className="text-[34px] font-bold text-white tracking-tight leading-tight">
            Verify Account
          </h1>
          <p className="text-white/40 text-[13px] leading-relaxed">
            Verify your identity to tokenized properties or create SPVs. You may
            skip for now if you're only browsing or investing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setStep(3)}
            className="flex-1 bg-white/5 border border-white/5 text-white/60 px-6 py-2.5 rounded-lg font-bold text-[12px] hover:bg-white/10 transition-all"
          >
            Skip for now
          </button>
          <button
            onClick={() => setStep(3)}
            className="flex-1 bg-[#6B9E31] text-white px-6 py-2.5 rounded-lg font-bold text-[12px] hover:opacity-90 transition-all shadow-lg shadow-[#6B9E31]/20"
          >
            Get Verified
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center w-full max-w-[320px]">
        <div className="relative w-full aspect-square rounded-[30px] bg-[#0A0A0A] border border-white/5 flex items-center justify-center p-8 overflow-hidden">
          {/* Custom scan graphic */}
          <div className="relative w-full aspect-square border-2 border-white/5 rounded-2xl flex items-center justify-center">
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-white/30 rounded-tl-md" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-white/30 rounded-tr-md" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-white/30 rounded-bl-md" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-white/30 rounded-br-md" />

            <div className="relative w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B9E31]/30 to-transparent blur-md" />
              <User size={32} className="text-white/20" />
            </div>

            <div className="absolute top-[55%] left-0 right-0 h-[1px] bg-[#6B9E31] shadow-[0_0_15px_1px_rgba(107,158,49,0.7)]" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center">
      {/* Header - Fixed to match mockup */}
      <nav className="w-full h-24 px-12 flex items-center justify-between z-50">
        <Link href="/" className="flex items-center gap-2">
          <img src="/LANFRIQ.svg" alt="Lanfriq" className="h-[28px] w-auto" />
        </Link>
        <button className="flex items-center gap-1.5 text-white/40 hover:text-white transition-all text-[11px] font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          <Globe size={12} />
          <span>English (UK)</span>
          <ArrowRight size={10} className="rotate-90 opacity-40 ml-1" />
        </button>
      </nav>

      {/* Main Content Area - Perfect Centering */}
      <main className="flex-1 w-full flex items-center justify-center p-6 mt-[-40px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full"
            >
              <StepSelection />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="w-full"
            >
              <StepVerification />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8"
            >
              <div className="w-20 h-20 rounded-full bg-[#6B9E31]/10 flex items-center justify-center mx-auto border border-[#6B9E31]/20">
                <CheckCircle2 size={36} className="text-[#6B9E31]" />
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">You're all set!</h2>
                <p className="text-white/40 text-[13px] max-w-[320px] mx-auto leading-relaxed">
                  Your profile is ready. You can now start browsing properties
                  and making your first investment.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-[#6B9E31] text-white px-8 py-3 rounded-xl font-bold text-[13px] hover:opacity-90 transition-all shadow-lg shadow-[#6B9E31]/20"
              >
                Go to Dashboard <ArrowRight size={16} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer - Minimal */}
      <footer className="w-full p-12 flex justify-center text-white/10 text-[9px] uppercase tracking-[0.4em] font-medium">
        Lanfriq Real Estate Protocol
      </footer>
    </div>
  );
}
