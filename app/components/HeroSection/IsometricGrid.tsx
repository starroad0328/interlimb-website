"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function IsometricGrid() {
  const scrollY = useMotionValue(0);
  const gridTranslateY = useTransform(scrollY, [0, 1000], [0, 100]);

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const tiles = [];
  const cols = 16;
  const rows = 16;
  const tileW = 100;
  const tileH = 58;
  const offsetX = ((cols + rows) * tileW) / 4;
  const offsetY = 100;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = (col - row) * (tileW / 2) + offsetX;
      const y = (col + row) * (tileH / 2) + offsetY;
      const depth = 5;

      tiles.push(
        <g key={`${row}-${col}`}>
          {/* Top face */}
          <polygon
            points={`${x},${y} ${x + tileW / 2},${y - tileH / 2} ${x + tileW},${y} ${x + tileW / 2},${y + tileH / 2}`}
            fill="#F5F5F6"
            stroke="#DDDFE3"
            strokeWidth={0.6}
          />
          {/* Right depth face */}
          <polygon
            points={`${x + tileW},${y} ${x + tileW},${y + depth} ${x + tileW / 2},${y + tileH / 2 + depth} ${x + tileW / 2},${y + tileH / 2}`}
            fill="#D8DAE0"
          />
          {/* Left depth face */}
          <polygon
            points={`${x},${y} ${x},${y + depth} ${x + tileW / 2},${y + tileH / 2 + depth} ${x + tileW / 2},${y + tileH / 2}`}
            fill="#E4E6EA"
          />
        </g>
      );
    }
  }

  const svgW = (cols + rows) * (tileW / 2) + tileW;
  const svgH = (cols + rows) * (tileH / 2) + tileH + offsetY;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      style={{ y: gridTranslateY }}
    >
      <svg
        className="absolute top-1/2 left-1/2"
        style={{
          width: `${svgW}px`,
          height: `${svgH}px`,
          transform: `translate(-50%, -50%)`,
        }}
        viewBox={`0 0 ${svgW} ${svgH}`}
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="35%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.08} />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity={0} />
          </radialGradient>
        </defs>
        {tiles}
        <ellipse
          cx={svgW / 2}
          cy={svgH / 2}
          rx={svgW * 0.3}
          ry={svgH * 0.3}
          fill="url(#centerGlow)"
        />
      </svg>
    </motion.div>
  );
}
