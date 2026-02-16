import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFDFD",
        grid: "#E5E7EB",
        gold: {
          DEFAULT: "#C5A358",
          light: "#D4AF37",
        },
        text: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Pretendard", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.1em",
      },
    },
  },
  plugins: [],
};

export default config;
