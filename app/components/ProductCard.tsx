"use client";

import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  status: string;
  features: string[];
}

export default function ProductCard({
  title,
  description,
  status,
  features,
}: ProductCardProps) {
  return (
    <motion.div
      className="relative group glass rounded-2xl p-8 md:p-10 cursor-pointer transition-colors hover:border-gold/40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-gold/5 to-transparent" />

      {/* Golden branch accent */}
      <svg
        className="absolute -top-3 -right-3 w-16 h-16 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        viewBox="0 0 60 60"
      >
        <motion.path
          d="M 50,55 Q 40,40 35,30 Q 30,20 28,10"
          stroke="#D4AF37"
          strokeWidth={1.5}
          strokeLinecap="round"
          fill="none"
          style={{
            filter: "drop-shadow(0 0 4px rgba(212, 175, 55, 0.6))",
          }}
        />
        <circle cx={27} cy={8} r={2.5} fill="#D4AF37" opacity={0.7} />
      </svg>

      <div className="relative z-10">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide rounded-full bg-gold/10 text-gold mb-4">
          {status}
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-text mb-3">
          {title}
        </h3>
        <p className="text-text/60 leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-text/50"
            >
              <span className="w-1 h-1 rounded-full bg-gold" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
