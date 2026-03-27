"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";
import { locations, waitingTips } from "@/lib/data";
import { MapPin, Clock, Car, Clock3, Users, Utensils } from "lucide-react";

const tipIcons: Record<string, React.ElementType> = {
  clock: Clock,
  users: Users,
  "clock-3": Clock3,
  utensils: Utensils,
};

const borderColors: Record<string, string> = {
  burgundy: "border-t-burgundy",
  forest: "border-t-forest",
};

const badgeColors: Record<string, string> = {
  "본점": "text-burgundy",
  "New": "text-forest",
};

export default function Locations() {
  return (
    <section id="locations" className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold italic text-brown mb-12 text-center"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Visit Us
          </motion.h2>

          {/* Location Cards */}
          <motion.div
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {locations.map((loc) => (
              <motion.div
                key={loc.id}
                variants={fadeInUp}
                className={`bg-ivory p-6 border-t-4 ${borderColors[loc.color]} hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
              >
                {/* Badge + Name */}
                {loc.badge && (
                  <p
                    className={`text-[10px] tracking-[0.2em] uppercase mb-1 ${badgeColors[loc.badge] || "text-brown-lt"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {loc.badge}
                  </p>
                )}
                <h3
                  className="text-xl font-bold italic text-brown mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {loc.name}
                </h3>
                <p className="text-sm text-brown-mid mb-5">{loc.desc}</p>

                {/* Info rows */}
                <div className="border-t border-ivory-dark pt-4 space-y-3 mb-5">
                  <div className="flex items-start gap-2.5 text-sm text-brown-mid">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brown-lt" strokeWidth={1.5} />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-brown-mid">
                    <Clock className="w-4 h-4 mt-0.5 shrink-0 text-brown-lt" strokeWidth={1.5} />
                    <div>
                      <span>{loc.hours}</span>
                      {loc.hoursNote && (
                        <span className="block text-xs text-brown-lt mt-0.5">
                          {loc.hoursNote}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-brown-mid">
                    <Car className="w-4 h-4 mt-0.5 shrink-0 text-brown-lt" strokeWidth={1.5} />
                    <span>{loc.parking}</span>
                  </div>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {loc.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] tracking-wide px-2 py-0.5 bg-ivory-dark text-brown-mid"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Directions button */}
                <a
                  href={loc.naverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 border border-brown text-brown text-[10px] tracking-[0.2em] uppercase hover:bg-brown hover:text-cream transition-colors w-full justify-center"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  길찾기
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Waiting Tips */}
          <motion.div variants={fadeInUp} className="mt-16 bg-ivory p-8">
            <h3
              className="text-lg font-bold italic text-brown mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              웨이팅 꿀팁
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {waitingTips.map((t, i) => {
                const Icon = tipIcons[t.icon] || Clock;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon
                      className="w-4 h-4 mt-0.5 shrink-0 text-burgundy"
                      strokeWidth={1.5}
                    />
                    <p className="text-sm text-brown-mid leading-relaxed">
                      {t.tip}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
