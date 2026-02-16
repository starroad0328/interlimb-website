import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INTERLIMB — 구조를 설계한다",
  description:
    "INTERLIMB는 복잡한 정보를 구조화하여 명확한 시스템으로 설계하는 회사입니다. NotioClass를 통해 지식의 체계를 만듭니다.",
  keywords: ["INTERLIMB", "NotioClass", "구조 설계", "정보 구조화"],
  openGraph: {
    title: "INTERLIMB — 구조를 설계한다",
    description:
      "복잡한 정보를 구조화하여 명확한 시스템으로 설계합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
