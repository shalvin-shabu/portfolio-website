"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A journey through AI, leadership, and innovation"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-purple to-transparent sm:left-1/2 sm:-translate-x-px" />

          {timeline.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 flex items-start gap-8 sm:mb-16 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="hidden flex-1 sm:block" />

              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-electric/30 bg-[#0A0A0A] shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <span className="text-sm font-bold text-electric">
                  {item.year}
                </span>
              </div>

              <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:border-white/20 hover:shadow-[0_8px_40px_rgba(59,130,246,0.1)]">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
