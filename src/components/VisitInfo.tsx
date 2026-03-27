"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";
import { brand, locations } from "@/lib/data";
import { Camera } from "lucide-react";

const notices = [
  {
    title: "웨이팅 안내",
    border: "border-l-burgundy",
    text: "판교점은 현장 웨이팅만 가능합니다. 주말·점심시간대는 30분~1시간 대기가 발생할 수 있습니다. 여의도점은 캐치테이블 예약이 가능합니다.",
  },
  {
    title: "예약 안내",
    border: "border-l-forest",
    text: "판교점·정자점은 별도 예약 없이 선착순 입장입니다. 여의도점은 캐치테이블에서 예약 가능하며, 워크인도 환영합니다.",
  },
  {
    title: "최신 정보",
    border: "border-l-brown-lt",
    text: "영업시간·메뉴·가격은 지점과 계절에 따라 변동될 수 있습니다. 방문 전 인스타그램 또는 네이버 지도에서 최신 정보를 확인해 주세요.",
  },
];

export default function VisitInfo() {
  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-[11px] tracking-[0.3em] text-brown-lt uppercase mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Before You Visit
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold italic text-brown mb-12"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            방문 안내
          </motion.h2>

          {/* Notice blocks */}
          <motion.div variants={stagger} className="space-y-4 mb-12">
            {notices.map((n) => (
              <motion.div
                key={n.title}
                variants={fadeInUp}
                className={`bg-cream border-l-4 ${n.border} p-6`}
              >
                <h3
                  className="text-sm font-bold text-brown mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {n.title}
                </h3>
                <p className="text-sm text-brown-mid leading-relaxed">
                  {n.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* SNS Links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-burgundy text-cream text-[11px] tracking-[0.15em] uppercase hover:bg-burgundy-lt transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Camera className="w-4 h-4" strokeWidth={1.5} />
              {brand.instagram}
            </a>
            {locations.map((loc) => (
              <a
                key={loc.id}
                href={loc.naverUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-forest text-forest text-[11px] tracking-[0.15em] uppercase hover:bg-forest hover:text-cream transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                네이버 &middot; {loc.name}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
