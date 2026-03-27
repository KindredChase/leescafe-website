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
            올드 팝송이
            <br />
            흐르는,
            <br />
            작은 미국식
            <br />
            식당.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base text-brown-mid max-w-sm leading-relaxed font-light"
          >
            판교 &middot; 정자 &middot; 여의도에서 만나는
            미국 가정식 브런치 &amp; 디너. 소박하지만 넉넉한 한 끼를 대접합니다.
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
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
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
              &ldquo;보이는 것보다 양이 엄청나게 많아요.&rdquo;
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
