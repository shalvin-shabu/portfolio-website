"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

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
            <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.02]">
              <div className="text-center">
                <svg className="mx-auto h-8 w-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.665-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <p className="mt-2 text-sm text-gray-500">
                  GitHub Contribution Graph Placeholder
                </p>
              </div>
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
