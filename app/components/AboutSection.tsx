"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-40 px-6 bg-background"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-sm md:text-base tracking-widest text-gold uppercase mb-8">
            About
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight text-text">
            복잡한 정보를
            <br />
            <span className="text-gold">구조</span>로 설계합니다.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 space-y-6 text-base md:text-lg leading-relaxed text-text/70"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            INTERLIMB는 흩어진 정보 사이에 뼈대를 세우고, 가지를 뻗어
            체계적인 구조를 만듭니다.
          </p>
          <p>
            우리는 지식이 단순히 쌓이는 것이 아니라, 서로 연결되고
            성장하는 유기적 시스템이 되어야 한다고 믿습니다.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-16 mx-auto w-12 h-px bg-gold/40"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>
    </section>
  );
}
