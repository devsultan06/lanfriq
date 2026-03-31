"use client";

import Link from "next/link";
import {
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Disc as Discord,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-white dark:bg-[#000000] text-black dark:text-white overflow-hidden transition-colors relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <img
                src="/logo.svg"
                alt="Lanfriq Logo"
                className="h-10 group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <h3 className="text-2xl md:text-3xl font-[400] leading-[130%] max-w-[320px] text-black dark:text-white">
              Invest in Real Estate, <br className="hidden lg:block" /> One Token
              at a Time.
            </h3>
          </div>

          {/* Sections */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h4 className="text-sm font-[500] text-black/40 dark:text-white/40 uppercase tracking-widest">
              Sections
            </h4>
            <div className="flex flex-col gap-4 text-[15px] font-[400]">
              <Link
                href="#benefits"
                className="hover:text-[#6B9E31] transition-colors"
              >
                Benefits
              </Link>
              <Link
                href="#how-it-works"
                className="hover:text-[#6B9E31] transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#contact"
                className="hover:text-[#6B9E31] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Use Case */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h4 className="text-sm font-[500] text-black/40 dark:text-white/40 uppercase tracking-widest">
              Use Case
            </h4>
            <div className="flex flex-col gap-4 text-[15px] font-[400]">
              <Link href="#" className="hover:text-[#6B9E31] transition-colors">
                For Investor
              </Link>
              <Link href="#" className="hover:text-[#6B9E31] transition-colors">
                Property Owner
              </Link>
              <Link href="#" className="hover:text-[#6B9E31] transition-colors">
                Business/Firm
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-3 flex flex-row gap-6 items-start md:justify-end">
            {[
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Discord, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map(({ Icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                className="text-black/40 dark:text-white/40 hover:text-[#6B9E31] dark:hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Icon size={22} strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>

        {/* Giant Text Mask Image */}
        <div className="mt-16 pointer-events-none select-none">
          <img
            src="/footer.png"
            className="w-full h-auto dark:opacity-100 transition-opacity"
            alt="LANFRIQ"
          />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-[13px] text-black/40 dark:text-white/40 font-[400]">
            <img src="/logo.svg" className="h-4 " alt="" />
            <span>© 2025 Lanfriq. All rights reserved</span>
          </div>
          <div className="flex gap-8 text-[13px] font-[400] text-black/40 dark:text-white/40">
            <Link
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Terms of service
            </Link>
            <Link
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy & Policy
            </Link>
            <Link
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Cookies settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
