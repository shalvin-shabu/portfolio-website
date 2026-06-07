"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { socialLinks } from "@/data/navigation";

const username = socialLinks.github.split("/").pop() ?? "shalvin-shabu";

const featuredRepos = [
  { name: "smart-microlab", description: "AI healthcare monitoring system", language: "Python", stars: 12 },
  { name: "prephub", description: "NLP learning assistant", language: "Python", stars: 8 },
  { name: "legal-assistant", description: "Legal NLP simplifier", language: "Python", stars: 5 },
];

const techStats = [
  { name: "Python", percentage: 65 },
  { name: "JavaScript", percentage: 15 },
  { name: "C", percentage: 10 },
  { name: "Other", percentage: 10 },
];

export default function GitHub() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Open source contributions and repositories"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contribution Graph
            </h3>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <img
                src={`https://ghchart.rshah.org/${username}`}
                alt={`GitHub contribution graph for ${username}`}
                className="mx-auto w-full rounded-xl object-contain"
              />
              <p className="mt-3 text-center text-sm text-gray-400">
                Live GitHub contribution graph for <span className="font-medium text-white">{username}</span>.
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Technology Usage
            </h3>
            <div className="space-y-4">
              {techStats.map((tech) => (
                <div key={tech.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-300">{tech.name}</span>
                    <span className="text-gray-500">{tech.percentage}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-electric to-purple"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {featuredRepos.map((repo, index) => (
            <GlassCard key={repo.name} delay={index * 0.1}>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.349.349 0 01-.21.63v1.5a.75.75 0 01-.75.75H2.5A2.5 2.5 0 010 14.5v-12z" />
                </svg>
                <span className="text-sm font-medium text-electric">
                  {repo.name}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-400">{repo.description}</p>
              <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-electric" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.719-4.194L.897 7.743a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                  </svg>
                  {repo.stars}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
