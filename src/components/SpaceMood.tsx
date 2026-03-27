"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";
import { spaceFeatures } from "@/lib/data";
import { Music, Sun, Gem, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  music: Music,
  sun: Sun,
  gem: Gem,
  sparkles: Sparkles,
};

export default function SpaceMood() {
  return (
    <section id="space" className="py-24 lg:py-32 bg-brown text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-16">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold italic text-cream leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              경쾌한 에너지가
              <br />
              채우는 공간
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/60 leading-[1.8] self-end"
            >
              경쾌한 빈티지 팝과 친절한 에너지가 채우는 공간.
              미국 다이너 감성의 세심한 소품 구성과 활기찬 분위기 속에서,
              낮에는 넉넉한 브런치, 저녁에는 따뜻한 디너를 즐기세요.
              어떤 시간에 와도 리스카페입니다.
            </motion.p>
          </div>

          {/* Feature Grid — 2x2 */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {spaceFeatures.map((f) => {
              const Icon = iconMap[f.icon];
              return (
                <motion.div
                  key={f.icon}
                  variants={fadeInUp}
                  className="bg-brown-mid/20 border border-cream/10 p-8 hover:-translate-y-1 transition-transform duration-300"
                >
                  {Icon && (
                    <Icon
                      className="w-6 h-6 text-cream/50 mb-4"
                      strokeWidth={1.5}
                    />
                  )}
                  <h3
                    className="text-base font-bold italic text-cream mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm text-cream/50 leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
