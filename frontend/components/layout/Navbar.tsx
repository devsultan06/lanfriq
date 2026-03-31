import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-black/5 dark:hover:bg-white/5"
    >
      {theme === "dark" ? (
        <Sun size={16} className="text-white" />
      ) : (
        <Moon size={16} className="text-black" />
      )}
    </button>
  );
};

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all navbar duration-300">
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Lanfriq Logo" className="h-[32px] md:h-[40px]" />
          <img
            src="/LANFRIQ.svg"
            alt="Lanfriq Logo text"
            className="h-[20px] md:h-[27px] invert dark:invert-0"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-black/70 dark:text-white/70 leading-[20px] uppercase tracking-[0.2em]">
          <button
            onClick={() => scrollToSection("use-cases")}
            className="hover:text-[#6B9E31] transition-colors"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="hover:text-[#6B9E31] transition-colors"
          >
            Revenue Model
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="hover:text-[#6B9E31] transition-colors"
          >
            How it works
          </button>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              const ready = mounted;
              const connected = ready && account && chain;

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button
                          onClick={openConnectModal}
                          className="bg-white dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/20 px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hidden md:block hover:bg-black/5 dark:hover:bg-white/20 transition-all shadow-sm"
                        >
                          Connect Wallet
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button
                          onClick={openChainModal}
                          className="bg-red-500/10 text-red-500 border border-red-500/20 px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hidden md:block hover:bg-red-500/20 transition-all shadow-sm"
                        >
                          Wrong Network
                        </button>
                      );
                    }

                    return (
                      <div className="hidden md:flex items-center gap-2">
                        <button
                          onClick={openAccountModal}
                          className="bg-white dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/20 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/20 transition-all shadow-sm"
                        >
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#6B9E31] to-[#8CC043]" />
                          {account.displayName}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>

          <button
            className="md:hidden p-2 text-black dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-b border-black/5 dark:border-white/5 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-6 text-xl font-bold text-black dark:text-white uppercase tracking-tight">
              <button
                onClick={() => scrollToSection("use-cases")}
                className="text-left"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left"
              >
                Revenue Model
              </button>
              <div className="mt-4">
                 <ConnectButton.Custom>
                  {({ account, chain, openConnectModal, openAccountModal, mounted }) => {
                    const connected = mounted && account && chain;
                    return (
                      <button
                        onClick={connected ? openAccountModal : openConnectModal}
                        className="w-full bg-[#6B9E31] text-white py-4 rounded-xl text-center text-base"
                      >
                        {connected ? account.displayName : "Connect Wallet"}
                      </button>
                    );
                  }}
                 </ConnectButton.Custom>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
