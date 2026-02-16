"use client";

import { motion } from "framer-motion";

interface InfoCardProps {
  text: string;
  x: string;
  y: string;
  delay: number;
}

export default function InfoCard({ text, x, y, delay }: InfoCardProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <div className="glass rounded-lg px-4 py-3 shadow-lg shadow-black/5 border border-white/50 min-w-[120px] max-w-[180px]">
        <p className="text-xs md:text-sm text-text/80 font-medium leading-snug text-center whitespace-pre-line">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
