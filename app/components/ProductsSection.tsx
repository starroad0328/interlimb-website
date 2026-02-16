"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "NotioClass",
    description:
      "Notion 기반 학습 관리 시스템. 수업 자료, 과제, 피드백을 하나의 구조 안에서 관리합니다.",
    status: "Coming Soon",
    features: [
      "Notion 템플릿 기반 수업 관리",
      "학생별 진도 추적",
      "과제 제출 및 피드백 시스템",
      "자동화된 알림 체계",
    ],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-32 md:py-40 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-sm md:text-base tracking-widest text-gold uppercase text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Products
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
