"use client";

import { motion } from "framer-motion";
import IsometricGrid from "./IsometricGrid";
import GoldenTree from "./GoldenTree";
import InfoCard from "./InfoCard";

const infoCards = [
  { text: "INTERLIMB", x: "15%", y: "50%", delay: 1.6 },
  { text: "성장이 가능해지는\n구조를 설계하는 조직", x: "55%", y: "14%", delay: 1.8 },
  { text: "보이지 않는\n기반에서 시작", x: "42%", y: "40%", delay: 2.0 },
  { text: "보이지 않는\n기반에서 시작", x: "72%", y: "24%", delay: 2.2 },
  { text: "확장이 발생하는\n연결", x: "82%", y: "45%", delay: 2.4 },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#F0F0F2]"
    >
      {/* Isometric 3D tile grid */}
      <IsometricGrid />

      {/* Unified golden tree (branches + soil) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[90vw] max-w-[900px] aspect-[4/3]">
          <GoldenTree />
        </div>
      </div>

      {/* Info cards at branch tips (desktop only) */}
      <div className="absolute inset-0 hidden md:block">
        {infoCards.map((card, i) => (
          <InfoCard key={i} {...card} />
        ))}
      </div>

      {/* Logo top-left */}
      <motion.div
        className="absolute top-6 left-6 md:top-8 md:left-10 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="font-display text-lg md:text-xl font-bold tracking-widest text-text">
          INTERLIMB
        </span>
      </motion.div>

      {/* Hamburger menu icon top-right */}
      <motion.div
        className="absolute top-6 right-6 md:top-8 md:right-10 z-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <button className="flex flex-col gap-[6px] p-1" aria-label="Menu">
          <span className="block w-7 h-[2px] bg-text/70" />
          <span className="block w-7 h-[2px] bg-text/70" />
        </button>
      </motion.div>

      {/* Sparkle icon bottom-right */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 0.4, rotate: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 text-text/25" fill="currentColor">
          <path d="M16 0 L18.5 12.5 L32 16 L18.5 19.5 L16 32 L13.5 19.5 L0 16 L13.5 12.5 Z" />
        </svg>
      </motion.div>

      {/* Mobile fallback */}
      <div className="relative z-10 text-center md:hidden mt-24">
        <motion.h1
          className="font-display text-3xl font-bold tracking-widest text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          INTERLIMB
        </motion.h1>
        <motion.p
          className="mt-3 text-sm tracking-widest text-text/50 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          구조를 설계한다
        </motion.p>
      </div>
    </section>
  );
}
