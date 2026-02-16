"use client";

import { motion } from "framer-motion";

// All coordinates in a unified viewBox: branches grow from soil at bottom-center
const branchPaths = [
  // Main trunk rising from soil
  { d: "M 500,600 Q 500,520 498,440 Q 496,380 500,310", w: 5.5, delay: 0 },
  // Left main branch
  { d: "M 499,420 Q 460,370 400,320 Q 340,270 270,240", w: 4.5, delay: 0.2 },
  // Right main branch
  { d: "M 501,400 Q 550,350 610,300 Q 670,260 740,240", w: 4.5, delay: 0.25 },
  // Center-up branch
  { d: "M 500,360 Q 505,300 510,240 Q 515,180 520,130", w: 4, delay: 0.35 },
  // Upper-left branch (from left main)
  { d: "M 400,320 Q 360,270 330,220 Q 310,185 300,150", w: 3.5, delay: 0.5 },
  // Upper-right branch (from right main)
  { d: "M 610,300 Q 650,250 690,210 Q 720,180 750,150", w: 3.5, delay: 0.5 },
  // Far left twig
  { d: "M 340,270 Q 280,250 220,240 Q 170,235 130,230", w: 3, delay: 0.7 },
  // Far right twig
  { d: "M 670,260 Q 720,240 780,230 Q 830,225 870,220", w: 3, delay: 0.7 },
  // Lower-right branch
  { d: "M 501,470 Q 560,440 640,410 Q 710,385 790,370", w: 3.8, delay: 0.3 },
  // Lower-right sub twig
  { d: "M 710,385 Q 760,360 810,330 Q 850,305 880,280", w: 3, delay: 0.6 },
  // Small left sub-branch tip
  { d: "M 270,240 Q 230,225 190,215", w: 2.5, delay: 0.85 },
  // Small right sub-branch tip
  { d: "M 740,240 Q 790,225 830,215", w: 2.5, delay: 0.85 },
];

export default function GoldenTree() {
  return (
    <svg viewBox="0 0 1000 750" className="w-full h-full">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="100%" x2="40%" y2="0%">
          <stop offset="0%" stopColor="#A8893A" />
          <stop offset="30%" stopColor="#C5A358" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="85%" stopColor="#E2C55E" />
          <stop offset="100%" stopColor="#C5A358" />
        </linearGradient>
        <filter id="branchGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0.2 0 0 0.08  0 0.8 0 0 0.04  0 0 0.2 0 0  0 0 0 0.5 0"
          />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="soilGrad" cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#6B5B45" />
          <stop offset="60%" stopColor="#4A3D2E" />
          <stop offset="100%" stopColor="#3A2F22" />
        </radialGradient>
        <radialGradient id="soilGlow" cx="50%" cy="20%" r="70%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.2} />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity={0} />
        </radialGradient>
      </defs>

      {/* === Glow layer (blurred behind branches) === */}
      {branchPaths.map((b, i) => (
        <motion.path
          key={`glow-${i}`}
          d={b.d}
          stroke="#D4AF37"
          strokeWidth={b.w + 8}
          strokeLinecap="round"
          fill="none"
          opacity={0.12}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ pathLength: { duration: 1.6, delay: b.delay, ease: "easeInOut" } }}
          style={{ filter: "blur(10px)" }}
        />
      ))}

      {/* === Main branch strokes === */}
      {branchPaths.map((b, i) => (
        <motion.path
          key={`branch-${i}`}
          d={b.d}
          stroke="url(#goldGrad)"
          strokeWidth={b.w}
          strokeLinecap="round"
          fill="none"
          filter="url(#branchGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.6, delay: b.delay, ease: "easeInOut" },
            opacity: { duration: 0.2, delay: b.delay },
          }}
        />
      ))}

      {/* === Highlight layer (bright inner stroke) === */}
      {branchPaths.map((b, i) => (
        <motion.path
          key={`hi-${i}`}
          d={b.d}
          stroke="#EDD97F"
          strokeWidth={Math.max(b.w - 2.5, 0.8)}
          strokeLinecap="round"
          fill="none"
          opacity={0.25}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ pathLength: { duration: 1.6, delay: b.delay + 0.1, ease: "easeInOut" } }}
        />
      ))}

      {/* === Soil mound (integrated at base of trunk) === */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Warm glow behind soil */}
        <ellipse cx={500} cy={620} rx={80} ry={50} fill="url(#soilGlow)" />
        {/* Soil shape */}
        <path
          d="M 445,645 Q 450,610 465,595 Q 478,583 492,580 Q 500,578 508,580 Q 522,583 535,595 Q 550,610 555,645 Q 530,655 500,657 Q 470,655 445,645 Z"
          fill="url(#soilGrad)"
        />
        {/* Soil texture */}
        <path
          d="M 465,615 Q 478,605 492,600 Q 508,597 520,602 Q 532,607 540,618"
          stroke="#7A6B52"
          strokeWidth={0.8}
          fill="none"
          opacity={0.4}
        />
        <path
          d="M 452,632 Q 470,622 490,617 Q 510,614 530,620 Q 545,625 550,635"
          stroke="#5C4D3A"
          strokeWidth={0.6}
          fill="none"
          opacity={0.3}
        />
        <circle cx={475} cy={610} r={1.5} fill="#5C4D3A" opacity={0.5} />
        <circle cx={520} cy={607} r={1.2} fill="#6B5B45" opacity={0.4} />
        <circle cx={498} cy={590} r={1} fill="#5C4D3A" opacity={0.4} />
      </motion.g>
    </svg>
  );
}
