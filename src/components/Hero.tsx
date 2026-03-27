"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-6 pt-28 pb-16 lg:pt-32 lg:pb-24">
        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={item}
            className="text-[11px] tracking-[0.3em] text-brown-lt uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Established 2020 / 판교
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold italic leading-[1.15] text-brown"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            샌프란시스코의
            <br />
            활기가 담긴,
            <br />
            캐주얼 아메리칸
            <br />
            다이너.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base text-brown-mid max-w-sm leading-relaxed font-light"
          >
            판교 &middot; 정자 &middot; 여의도에서 만나는
            아낌없이 담아낸, 넉넉하고 따뜻한 미 서부식 한 끼.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mt-2">
            <a
              href="#menu"
              className="inline-flex items-center px-7 py-3 bg-burgundy text-cream text-[11px] tracking-[0.2em] uppercase hover:bg-burgundy-lt transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              메뉴 보기
            </a>
            <a
              href="#story"
              className="inline-flex items-center px-7 py-3 border border-brown text-brown text-[11px] tracking-[0.2em] uppercase hover:bg-brown hover:text-cream transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              우리 이야기
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full">
            <Image
              src="/menu/hero-main.jpg"
              alt="리스카페 레스토랑 분위기"
              fill
              priority
              className="object-cover brightness-90 sepia-[0.1]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Quote overlay — bottom right of image */}
          <div className="absolute bottom-6 right-0 translate-x-2 lg:translate-x-8 bg-forest p-5 max-w-[240px] shadow-lg">
            <p
              className="text-cream/90 text-sm italic leading-relaxed mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;미국 감성 제대로 나는 분위기.&rdquo;
            </p>
            <p
              className="text-cream/50 text-[10px] tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &mdash; 네이버 블로그 리뷰
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
