"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";
import { menus, brand } from "@/lib/data";

const tagColors: Record<string, string> = {
  Best: "bg-burgundy text-cream",
  Signature: "bg-forest text-cream",
  Popular: "bg-brown text-cream",
  Must: "bg-burgundy-lt text-cream",
};

export default function SignatureMenu() {
  return (
    <section id="menu" className="py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Header row */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <motion.p
                variants={fadeInUp}
                className="text-[11px] tracking-[0.3em] text-brown-lt uppercase mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The Selection
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold italic text-brown"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                시그니처 메뉴
              </motion.h2>
            </div>
            <motion.a
              variants={fadeInUp}
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-[11px] tracking-[0.15em] text-burgundy uppercase hover:text-burgundy-lt transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              전체 메뉴 보기 &rarr;
            </motion.a>
          </div>

          {/* Card Grid */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menus.map((menu, i) => (
              <motion.div
                key={menu.id}
                variants={fadeInUp}
                className="group bg-cream overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {menu.tag && (
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 text-[10px] tracking-[0.15em] uppercase ${tagColors[menu.tag] || "bg-brown text-cream"}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {menu.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3
                      className="text-lg font-bold text-brown"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {menu.name}
                    </h3>
                    <span
                      className="text-sm text-burgundy shrink-0 ml-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {menu.price}
                    </span>
                  </div>
                  <p className="text-sm text-brown-mid leading-relaxed">
                    {menu.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile: full menu link */}
          <motion.div variants={fadeInUp} className="mt-8 sm:hidden text-center">
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.15em] text-burgundy uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              전체 메뉴 보기 &rarr;
            </a>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 border border-dashed border-brown-lt/50 p-6 text-center"
          >
            <p className="text-sm text-brown-mid">
              전체 메뉴·가격·시즌 메뉴는{" "}
              <a
                href="https://map.naver.com/p/search/리스카페"
                target="_blank"
                rel="noopener noreferrer"
                className="text-burgundy underline underline-offset-2"
              >
                네이버 지도
              </a>
              {" "}또는{" "}
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-burgundy underline underline-offset-2"
              >
                인스타그램({brand.instagram})
              </a>
              에서 확인해 주세요.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
