"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";

const spaceTiles = [
  {
    title: "The Ritual",
    titleKo: "브런치 타임",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
  {
    title: "",
    titleKo: "",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    quote: "소품 하나까지 신경 써 완성한, 잠시 여행 온 것 같은 공간.",
  },
  {
    title: "The Collection",
    titleKo: "공간 디테일",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  },
];

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

          {/* Image Grid — 3 tiles */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-3 gap-4"
          >
            {spaceTiles.map((tile, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative aspect-[3/4] overflow-hidden group"
              >
                <Image
                  src={tile.image}
                  alt={tile.titleKo || "리스카페 공간"}
                  fill
                  className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />

                {/* Title overlay at bottom */}
                {tile.title && (
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <p
                      className="text-cream text-lg italic"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {tile.title}
                    </p>
                  </div>
                )}

                {/* Quote overlay for middle tile */}
                {tile.quote && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="bg-forest/90 p-5 max-w-[220px]">
                      <p
                        className="text-cream/90 text-sm italic leading-relaxed"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        &ldquo;{tile.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
