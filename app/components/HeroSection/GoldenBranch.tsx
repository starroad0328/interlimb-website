"use client";

import { motion } from "framer-motion";

// Organic, thick golden branches matching the sample
const branchPaths = [
  // Main trunk from soil upward
  { d: "M 400,520 Q 400,460 398,400 Q 396,350 400,300", w: 5, delay: 0 },
  // Left main branch
  { d: "M 400,380 Q 370,340 320,300 Q 270,260 210,230", w: 4, delay: 0.2 },
  // Right main branch
  { d: "M 400,360 Q 440,320 490,280 Q 540,240 600,220", w: 4, delay: 0.25 },
  // Upper-left branch
  { d: "M 320,300 Q 290,260 260,220 Q 240,190 230,150", w: 3.5, delay: 0.5 },
  // Upper-right branch
  { d: "M 490,280 Q 520,240 560,200 Q 590,170 620,140", w: 3.5, delay: 0.5 },
  // Far left twig
  { d: "M 270,260 Q 220,240 170,230 Q 130,225 100,220", w: 3, delay: 0.7 },
  // Far right twig
  { d: "M 540,240 Q 590,220 640,210 Q 680,205 720,200", w: 3, delay: 0.7 },
  // Center-up branch
  { d: "M 400,320 Q 405,270 410,220 Q 415,170 420,120", w: 3.5, delay: 0.4 },
  // Small left sub-branch
  { d: "M 210,230 Q 180,210 150,200", w: 2.5, delay: 0.9 },
  // Small right sub-branch
  { d: "M 600,220 Q 640,200 680,190", w: 2.5, delay: 0.9 },
  // Lower-right branch
  { d: "M 400,420 Q 450,400 510,380 Q 570,360 640,350", w: 3.5, delay: 0.35 },
  // Lower-right sub twig
  { d: "M 570,360 Q 610,340 660,310 Q 690,290 720,270", w: 2.8, delay: 0.65 },
];

export default function GoldenBranch() {
  return (
    <svg
      viewBox="0 0 800 700"
      className="absolute inset-0 w-full h-full"
      style={{ filter: "drop-shadow(0 0 12px rgba(197, 163, 88, 0.3))" }}
    >
      <defs>
        {/* Gold gradient for branches */}
        <linearGradient id="goldGrad" x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#B8943E" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#E8C96A" />
          <stop offset="100%" stopColor="#C5A358" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="branchGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0.1  0 1 0 0 0.05  0 0 1 0 0  0 0 0 0.6 0"
          />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow layer (behind) */}
      {branchPaths.map((branch, i) => (
        <motion.path
          key={`glow-${i}`}
          d={branch.d}
          stroke="#D4AF37"
          strokeWidth={branch.w + 6}
          strokeLinecap="round"
          fill="none"
          opacity={0.15}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            pathLength: { duration: 1.5, delay: branch.delay, ease: "easeInOut" },
          }}
          style={{ filter: "blur(8px)" }}
        />
      ))}

      {/* Main branch strokes */}
      {branchPaths.map((branch, i) => (
        <motion.path
          key={`branch-${i}`}
          d={branch.d}
          stroke="url(#goldGrad)"
          strokeWidth={branch.w}
          strokeLinecap="round"
          fill="none"
          filter="url(#branchGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.5, delay: branch.delay, ease: "easeInOut" },
            opacity: { duration: 0.3, delay: branch.delay },
          }}
        />
      ))}

      {/* Highlight layer (thinner, brighter) */}
      {branchPaths.map((branch, i) => (
        <motion.path
          key={`highlight-${i}`}
          d={branch.d}
          stroke="#E8D07A"
          strokeWidth={Math.max(branch.w - 2, 1)}
          strokeLinecap="round"
          fill="none"
          opacity={0.3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            pathLength: { duration: 1.5, delay: branch.delay + 0.1, ease: "easeInOut" },
          }}
        />
      ))}
    </svg>
  );
}
