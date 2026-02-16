"use client";

import { motion } from "framer-motion";

export default function CenterStructure() {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2"
      style={{ bottom: "22%" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <svg viewBox="0 0 180 100" className="w-32 h-auto md:w-40">
        <defs>
          {/* Soil gradient */}
          <radialGradient id="soilGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#6B5B45" />
            <stop offset="50%" stopColor="#4A3D2E" />
            <stop offset="100%" stopColor="#3A2F22" />
          </radialGradient>
          {/* Warm glow under the mound */}
          <radialGradient id="soilGlow" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity={0} />
          </radialGradient>
        </defs>

        {/* Warm glow behind soil */}
        <ellipse cx={90} cy={55} rx={70} ry={40} fill="url(#soilGlow)" />

        {/* Organic soil mound shape */}
        <path
          d="M 40,75 Q 45,50 55,40 Q 65,30 80,28 Q 90,26 100,28 Q 115,32 125,42 Q 135,52 140,75 Q 120,82 90,84 Q 60,82 40,75 Z"
          fill="url(#soilGrad)"
        />
        {/* Soil texture highlights */}
        <path
          d="M 55,55 Q 60,48 70,44 Q 80,40 90,40 Q 100,40 108,44"
          stroke="#7A6B52"
          strokeWidth={0.8}
          fill="none"
          opacity={0.5}
        />
        <path
          d="M 48,65 Q 60,58 75,54 Q 90,51 105,54 Q 120,58 132,65"
          stroke="#5C4D3A"
          strokeWidth={0.6}
          fill="none"
          opacity={0.4}
        />
        {/* Small particles */}
        <circle cx={65} cy={50} r={1.5} fill="#5C4D3A" opacity={0.6} />
        <circle cx={110} cy={48} r={1.2} fill="#6B5B45" opacity={0.5} />
        <circle cx={85} cy={35} r={1} fill="#5C4D3A" opacity={0.4} />
        <circle cx={95} cy={60} r={1.8} fill="#4A3D2E" opacity={0.3} />
      </svg>
    </motion.div>
  );
}
