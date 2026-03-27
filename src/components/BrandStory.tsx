"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";

export default function BrandStory() {
  return (
    <section id="story" className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left: Text */}
          <div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold italic text-brown mb-8 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              백현동 골목에서
              <br />
              시작된 이야기
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown-mid leading-[1.8] mb-6"
            >
              2020년 판교 백현동 작은 골목에서 시작한 캐주얼 아메리칸 다이너.
              뉴잉글랜드 클램 차우더부터 샌프란시스코 갈릭 누들, 이탈리안-아메리칸
              라자냐까지 — 미국 각지의 맛을 한 공간에 담았습니다.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-brown-mid leading-[1.8] mb-6"
            >
              경쾌한 빈티지 팝과 친절한 에너지가 채우는 공간에서,
              아낌없이 담아낸 넉넉한 한 접시를 대접합니다.
              모든 메인 디쉬는 일반적인 1인분 기준을 초과하는 넉넉한 양으로 제공됩니다.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-brown-mid leading-[1.8]"
            >
              시끌벅적하고 활기찬 다이너 분위기 속에서
              미국 서부의 에너지를 느껴보세요. 리스카페에 한 번 오시면 또 오게 됩니다.
            </motion.p>
          </div>

          {/* Right: Quote Block */}
          <motion.div
            variants={fadeInUp}
            className="bg-forest p-10 lg:p-14 flex flex-col justify-center min-h-[360px]"
          >
            <p
              className="text-cream/90 text-xl lg:text-2xl italic leading-[1.6] mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;웨이팅이 아깝지 않은
              <br />
              확실한 맛.
              <br />
              첫 방문 이후
              <br />
              자연스럽게 단골이
              <br />
              되었습니다.&rdquo;
            </p>
            <div className="border-t border-cream/20 pt-4">
              <p
                className="text-cream/50 text-[11px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                정자점 방문 손님
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
