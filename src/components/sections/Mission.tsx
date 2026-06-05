"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export default function Mission() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-electric/10 via-transparent to-purple/10 p-10 sm:p-16"
        >
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-electric/10 blur-[80px]" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-purple/10 blur-[60px]" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-electric">
              Mission
            </span>
            <blockquote className="mt-6 text-xl font-medium leading-relaxed text-white sm:text-2xl lg:text-3xl">
              &ldquo;{siteConfig.mission}&rdquo;
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
