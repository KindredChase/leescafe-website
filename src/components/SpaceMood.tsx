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
              올드 팝이 흐르는
              <br />
              공간
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/60 leading-[1.8] self-end"
            >
              자리에 앉으면 잠시라도 외국 여행 온 것 같은 기분이 드는 곳이에요.
              조도를 낮춘 레스토랑, 올드 팝이 흐르고, 소품 하나까지 신경 써
              완성한 공간입니다. 낮에는 브런치, 저녁에는 편안한 디너로 —
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
