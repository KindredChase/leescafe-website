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
              2020년 판교 백현동 작은 골목에서 시작한 소박한 미국식 식당입니다.
              올드 팝이 흐르는 공간에서, 정성 들여 만든 미국 가정식 한 끼를
              대접합니다.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-brown-mid leading-[1.8] mb-6"
            >
              우리 주방은 매일 아침 직접 끓이는 차우더, 층층이 쌓아올린 라자냐,
              치즈가 흘러나오는 수제 미트볼까지 — 어떤 메뉴를 시켜도
              실패 없는 한 접시를 약속합니다.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-brown-mid leading-[1.8]"
            >
              언제든 와도 동네 사랑방 같은 편안하고 따뜻한 분위기로
              사람과 사람을 연결합니다. 리스카페에 한 번 오시면 또 오게 됩니다.
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
              &ldquo;가격은 좀 있지만,
              <br />
              그만큼의 양과 맛으로
              <br />
              보답하는 곳.
              <br />
              또 갈 의향이
              <br />
              있어요.&rdquo;
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
