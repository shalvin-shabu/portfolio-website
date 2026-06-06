"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/navigation";
import TypeWriter from "@/components/ui/TypeWriter";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-purple/5" />
      <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-electric/10 blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-purple/10 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm text-electric"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
            </span>
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          <div className="mt-4 h-10 text-xl font-medium sm:text-2xl lg:text-3xl">
            <TypeWriter words={siteConfig.roles} />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            {siteConfig.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">Explore My Work</Button>
            <Button href={socialLinks.resume} variant="outline">
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost">
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-electric via-purple to-electric opacity-30 blur-2xl animate-pulse" />

            <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-2 border-electric/40 bg-gradient-to-br from-white/[0.05] to-white/[0.02] shadow-[0_0_60px_rgba(59,130,246,0.3)] sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.15),transparent_50%)]" />

              <Image
                src="/shalvin%20photo.jpeg"
                alt={`${siteConfig.name} photo`}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-electric/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 rounded-full border border-purple/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
