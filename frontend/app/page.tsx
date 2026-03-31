"use client";

import { motion } from "framer-motion";
import { Check, Play, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const Hero = () => (
  <section className="relative pt-40 pb-2 px-6 min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors">
    {/* Background Images */}
    <div className="absolute inset-0 z-0">
      <img
        src="/hero-bg-white.png"
        alt="Background Light"
        className="dark:hidden w-full h-full object-cover"
      />
      <img
        src="/hero-bg.png"
        alt="Background Dark"
        className="hidden dark:block w-full h-full object-cover"
      />
    </div>

    <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl mb-8 text-[#181818] dark:text-white text-balance font-[400] leading-[120%]">
          Invest in Real Estate,
          <br />
          One Token at a Time.
        </h1>
        <p className="text-lg md:text-xl text-black/70 dark:text-white/70 mb-12 max-w-3xl mx-auto leading-[120%] font-[400]">
          Own fractions of professionally-valued properties through secure SPV
          structures — with transparent updates, real profit distribution, and
          NFT-backed receipts.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
          <Link
            href="/signup"
            className="but text-white px-[40px] text-[16px] py-[11px] rounded-[10px] font-[500] flex items-center justify-center gap-2 hover:opacity-90 transition-all"
          >
            Get Started <ArrowRight size={18} />
          </Link>
          <button className="text-black dark:text-white but2 px-[40px] text-[16px] py-[11px] rounded-[10px] font-[500] flex items-center justify-center gap-2 transition-all hover:bg-black/5 dark:hover:bg-white/5">
            Learn More
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto bg2 overflow-hidden"
      >
        <img
          src="/Market-white.png"
          alt="Market Dashboard Light"
          className="dark:hidden w-full h-auto object-cover"
        />
        <img
          src="/Market.png"
          alt="Market Dashboard Dark"
          className="hidden dark:block w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  </section>
);

const TrustedBy = () => {
  const logos = [
    "image 14.png",
    "image 41.png",
    "image 42.png",
    "image 43.png",
    "image 44.png",
    "image 45.png",
  ];

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="pb-10 pt-[200px] px-6 bg-white dark:bg-[#0F0F0F] transition-colors overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col items-center"
      >
        <p className="text-sm font-medium text-black/40 dark:text-white/40 mb-12 uppercase tracking-[0.3em]">
          Trusted and backed by
        </p>

        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20">
          <motion.div
            className="flex gap-20 items-center w-max"
            animate={{ x: [0, -1035] }} // Adjust based on content width
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {allLogos.map((img, i) => (
              <img
                key={i}
                src={`/${img}`}
                alt="Partner Logo"
                className="h-6 md:h-8 object-contain  transition-all cursor-pointer"
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "5,000+", label: "Total property value on platform" },
    { value: "+32%", label: "Average yearly ROI" },
    { value: "5000+", label: "Number of SPVs created" },
    { value: "50+", label: "Verified valuers count" },
  ];

  return (
    <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#181818] transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center"
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-[500] text-[#6B9E31] mb-3">
              {stat.value}
            </span>
            <span className="text-sm text-black/40 dark:text-white/40 max-w-[140px] leading-relaxed">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const UseCases = () => {
  const cases = [
    {
      title: "SPV-Backed Ownership",
      description:
        "Tokens represent real, legal ownership secured by a certified SPV.",
      image: "/spv.png",
      imageWhite: "/spv-white.png",
      height: "h-[450px]",
      imgClass:
        "w-[213px] h-[250px] object-contain ml-[20px] mt-8 transition-transform duration-700",
    },
    {
      title: "Transparent Valuation",
      description:
        "Professional valuers ensure investors always know true asset value.",
      image: "/verification.png",
      imageWhite: "/verification-white.png",
      height: "h-[350px]",
      imgClass:
        "w-[318px] h-[211px] object-contain ml-[20px] mt-8 transition-transform duration-700",
    },
    {
      title: "Fractional Investing",
      description: "Get real estate exposure with low entry amounts.",
      image: "/fractional.png",
      imageWhite: "/fractional-white.png",
      height: "h-[350px]",
      imgClass:
        "w-[316px] h-[141px] object-contain ml-[20px] mt-8 transition-transform duration-700",
    },
    {
      title: "NFT Ownership Receipts",
      description:
        "Instant, tamper-proof, and transferable proof of investment.",
      image: "/yield.png",
      imageWhite: "/yield-white.png",
      height: "h-[450px]",
      imgClass:
        "w-[256px] h-[289px] object-contain ml-[20px] mt-8 transition-transform duration-700",
    },
    {
      title: "Earn From Real Properties",
      description: "Get rental income and appreciation returns automatically.",
      image: "/receipts.png",
      imageWhite: "/receipts-white.png",
      height: "h-[450px]",
      imgClass:
        "w-[273px] h-[224px] object-contain ml-[20px] mt-8 transition-transform duration-700",
    },
    {
      title: "Secure Verification Workflow",
      description:
        "No fraud — all property documents are validated by experts.",
      image: "/valuation.png",
      imageWhite: "/valuation-white.png",
      height: "h-[350px]",
      imgClass:
        "w-[196px] h-[117px] object-contain ml-[20px] mt-8 transition-transform duration-700",
    },
  ];

  return (
    <section
      id="use-cases"
      className="py-24 px-6 bg-white dark:bg-[#0F0F0F] transition-colors"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden md:block w-[194.5px] h-[1px] bg-gradient-to-r from-black/20 to-transparent dark:from-white/20 dark:to-transparent" />
          <span className="text-[#6B9E31] font-[400] uppercase tracking-widest text-xs">
            Benefits
          </span>
          <div className="hidden md:block w-[194.5px] h-[1px] bg-gradient-to-l from-black/20 to-transparent dark:from-white/20 dark:to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl text-black dark:text-white mb-4 font-[400] leading-[120%]">
          Unlock your equity with <br className="hidden md:block" /> Lanfriq
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="space-y-6">
          {[cases[0], cases[1]].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`rounded-[30px] bg-black/[0.02] dark:bg-[#111111] border border-black/5 dark:border-white/5 p-10 ${item.height} flex flex-col justify-end relative overflow-hidden group`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${item.imgClass} hidden dark:block group-hover:scale-105`}
                />
                <img
                  src={item.imageWhite}
                  alt={item.title}
                  className={`${item.imgClass} block dark:hidden group-hover:scale-105`}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl text-black dark:text-white mb-2 font-[500] leading-[120%]">
                  {item.title}
                </h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-[280px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          {[cases[2], cases[3]].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 2) * 0.15 }}
              className={`rounded-[30px] bg-black/[0.02] dark:bg-[#111111] border border-black/5 dark:border-white/5 p-10 ${item.height} flex flex-col justify-end relative overflow-hidden group`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${item.imgClass} hidden dark:block group-hover:scale-105`}
                />
                <img
                  src={item.imageWhite}
                  alt={item.title}
                  className={`${item.imgClass} block dark:hidden group-hover:scale-105`}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl text-black dark:text-white mb-2 font-[500] leading-[120%]">
                  {item.title}
                </h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-[280px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          {[cases[4], cases[5]].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 4) * 0.15 }}
              className={`rounded-[30px] bg-black/[0.02] dark:bg-[#111111] border border-black/5 dark:border-white/5 p-10 ${item.height} flex flex-col justify-end relative overflow-hidden group`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${item.imgClass} hidden dark:block group-hover:scale-105`}
                />
                <img
                  src={item.imageWhite}
                  alt={item.title}
                  className={`${item.imgClass} block dark:hidden group-hover:scale-105`}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl text-black dark:text-white mb-2 font-[500] leading-[120%]">
                  {item.title}
                </h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-[280px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Add Property",
      description: "Owners upload property details and required documents.",
      image: "/how2.png",
      imageWhite: "/how2-white.png",
      span: "md:col-span-1",
    },
    {
      title: "Verify & Appraise",
      description:
        "Certified surveyors and valuers confirm the property and assign a real valuation.",
      image: "/how1.png",
      imageWhite: "/how1-white.png",
      span: "md:col-span-1",
    },
    {
      title: "Create SPV & Tokenize",
      description:
        "Lanfriq sets up an SPV and divides the property value into digital tokens.",
      image: "/how4.png",
      imageWhite: "/how4-white.png",
      span: "md:col-span-1",
    },
    {
      title: "Investors Buy Tokens",
      description:
        "People purchase fractional shares and receive NFT receipts as proof.",
      image: "/how5.png",
      imageWhite: "/how5-white.png",
      span: "md:col-span-2",
    },
    {
      title: "Earn & Trade",
      description: "Investors receive profits and can resell tokens anytime.",
      image: "/how3.png",
      imageWhite: "/how3-white.png", // Use same for both if white version is missing
      span: "md:col-span-1",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white dark:bg-[#0F0F0F] transition-colors relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-24 relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden md:block w-[80px] h-[1px] bg-black/10 dark:bg-white/10" />
          <span className="text-[#6B9E31] font-[400] uppercase tracking-widest text-xs">
            How it Works
          </span>
          <div className="hidden md:block w-[80px] h-[1px] bg-black/10 dark:bg-white/10" />
        </div>
        <h2 className="text-4xl md:text-5xl text-black dark:text-white font-[400] leading-[120%]">
          Simple steps in tokenizing <br className="hidden md:block" /> an asset
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top 3 Cards */}
        {steps.slice(0, 3).map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="rounded-[30px] bg-black/[0.02] dark:bg-[#111111] border border-black/5 dark:border-white/5 p-10 flex flex-col items-start gap-12 group hover:border-[#6B9E31]/20 transition-all duration-500"
          >
            <div className="w-full aspect-[4/3] relative flex items-center justify-center overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-contain  transition-transform duration-700 hidden dark:block"
              />
              <img
                src={step.imageWhite}
                alt={step.title}
                className="w-full h-full object-contain  transition-transform duration-700 block dark:hidden"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl text-black dark:text-white font-[500]">
                {step.title}
              </h3>
              <p className="text-sm text-black/40 dark:text-white/40 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Bottom 2 Cards with spanning */}
        {steps.slice(3).map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`rounded-[30px] bg-black/[0.02] dark:bg-[#111111] border border-black/5 dark:border-white/5 p-10 flex flex-col justify-between items-start gap-12 group hover:border-[#6B9E31]/20 transition-all duration-500 ${step.span}`}
          >
            {i === 0 ? (
              <>
              
                <div className="w-full aspect-[16/8] relative flex items-center justify-center overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain transition-transform duration-700 hidden dark:block"
                  />
                  <img
                    src={step.imageWhite}
                    alt={step.title}
                    className="w-full h-full object-contain transition-transform duration-700 block dark:hidden"
                  />
                  
                </div >
                  <div className="space-y-3 -mt-[140px]">
                  <h3 className="text-xl text-black dark:text-white font-[500]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-black/40 dark:text-white/40 leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="w-full aspect-[16/9] relative flex items-center justify-center overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain transition-transform duration-700 hidden dark:block"
                  />
                  <img
                    src={step.imageWhite}
                    alt={step.title}
                    className="w-full h-full object-contain transition-transform duration-700 block dark:hidden"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl text-black dark:text-white font-[500]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-black/40 dark:text-white/40 leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Stakeholders = () => {
  const stakeholders = [
    {
      title: "Investors",
      description:
        "Invest in real estate without needing large capital. Buy fractional property tokens, earn returns from property performance, and track your portfolio with full transparency.",
      image: "/investors.png",
      imageWhite: "/investors-white.png",
      features: [
        "Buy fractional property tokens",
        "Receive NFT receipts as proof of ownership",
        "Earn returns from rental income or appreciation",
        "Resell tokens whenever you choose",
      ],
      button: "Start Investing",
      layout: "left",
    },
    {
      title: "Property Owners",
      description:
        "Turn your physical property into digital tokens so you can raise funds, share ownership, or sell faster. Keep full visibility over investor activity and profit distribution.",
      image: "/owners.png",
      imageWhite: "/owners-white.png",
      features: [
        "Upload and verify your property",
        "Get professional valuation",
        "Sell fractions to investors for capital",
        "Tokenize the asset through an SPV",
        "Manage profit updates and property performance",
      ],
      button: "Tokenize your Home",
      layout: "right",
    },
    {
      title: "Businesses & Firms",
      description:
        "Tokenize commercial properties to unlock liquidity and attract multiple investors. Ideal for companies wanting to raise capital while keeping full structural control of their assets.",
      image: "/businesses.png",
      imageWhite: "/businesses-white.png",
      features: [
        "Convert commercial buildings into fractional tokens",
        "Raise capital without selling entire assets",
        "Automate profit distribution to investors",
        "Track ownership and investor activity",
        "Increase liquidity for long-term projects",
      ],
      button: "Tokenize your Properties",
      layout: "left",
    },
    {
      title: "Professional Surveyors & Valuers",
      description:
        "Join Lanfriq's verification network and help ensure property integrity. Surveyors validate documents, inspect properties, and provide valuations that keep investor trust high.",
      image: "/surveyors.png",
      imageWhite: "/surveyors-white.png",
      features: [
        "Verify property documents",
        "Inspect physical properties & Provide annual valuations",
        "Maintain accuracy and transparency on the platform",
        "Earn verification and valuation fees",
      ],
      button: "Join Us",
      layout: "right",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white dark:bg-[#0F0F0F] transition-colors relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-24 relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden md:block w-[100px] h-[1px] bg-black/10 dark:bg-white/10" />
          <span className="text-[#6B9E31] font-[400] uppercase tracking-widest text-xs">
            Who is it for?
          </span>
          <div className="hidden md:block w-[100px] h-[1px] bg-black/10 dark:bg-white/10" />
        </div>
        <h2 className="text-4xl md:text-5xl text-black dark:text-white font-[400] leading-[120%]">
          Built for Every Real Estate <br className="hidden md:block" />{" "}
          Stakeholder
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-32">
        {stakeholders.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: person.layout === "right" ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${person.layout === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-24`}
          >
            {/* Image Card */}
            <div className="flex-1 w-full relative group">
              <div className="rounded-[40px] bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 aspect-square flex items-center justify-center p-[26px] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.title}
                  className="w-full h-full object-contain  transition-transform duration-700 hidden dark:block"
                />
                <img
                  src={person.imageWhite}
                  alt={person.title}
                  className="w-full h-full object-contain  transition-transform duration-700 block dark:hidden"
                />
              </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl text-black dark:text-white font-[500] leading-[120%]">
                  {person.title}
                </h3>
                <p className="text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-lg">
                  {person.description}
                </p>
              </div>

              <ul className="space-y-4">
                {person.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-4 h-4 rounded-full bg-[#6B9E31]/10 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-[#6B9E31]" />
                    </div>
                    <span className="text-sm md:text-base text-black/70 dark:text-white/70">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="bg-[#6B9E31] text-white px-8 py-3.5 rounded-xl font-[500] text-sm hover:opacity-90 transition-all shadow-lg shadow-[#6B9E31]/20">
                {person.button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


const CTA = () => (
  <section className="pb-[150px] px-6 bg-white dark:bg-[#0F0F0F]  transition-colors">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-7xl mx-auto relative rounded-[50px] overflow-hidden min-h-[480px] md:min-h-[540px] flex items-center p-8 md:p-20 group "
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cta-bg-white.png"
          className="dark:hidden w-full h-full object-cover"
          alt="CTA Background Light"
        />
        <img
          src="/cta-bg.png"
          className="hidden dark:block w-full h-full object-cover"
          alt="CTA Background Dark"
        />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl text-black dark:text-white font-[500] mb-12 leading-[120%]">
            Start Your Real Estate <br /> Tokenization Journey
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="but text-white px-8 py-3.5 rounded-[12px] font-[600] flex items-center justify-center gap-3 hover:opacity-90 transition-all text-[15px] shadow-lg shadow-[#6B9E31]/20"
            >
              Start Tokenization <ArrowRight size={20} />
            </Link>
            <button className="text-black dark:text-white px-8 py-3.5 rounded-[12px] font-[600] border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-[15px] backdrop-blur-sm">
              Explore Market
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block relative h-full"
        >
          <img
            src="/cta-image-right.png"
            className="w-full h-auto max-w-lg ml-auto object-contain drop-shadow-2xl"
            alt="Real Estate Illustration"
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-[#6B9E31] selection:text-white bg-white dark:bg-black transition-colors">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <UseCases />
        <Stakeholders />
        <Stats />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
