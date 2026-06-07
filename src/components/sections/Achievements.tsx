"use client";

import { useState } from "react";
import { achievements } from "@/data/achievements";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(
    null as (typeof achievements)[number] | null
  );

  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Recognition and certifications in AI and technology"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const hasCertificate = Boolean(achievement.imageUrl || achievement.pdfUrl);

            return (
              <button
                key={achievement.title}
                type="button"
                onClick={() => setSelectedAchievement(achievement)}
                className="w-full text-left"
              >
                <GlassCard
                  delay={index * 0.1}
                  hover={hasCertificate}
                  className={
                    achievement.highlight
                      ? "border-electric/30 bg-gradient-to-br from-electric/10 to-purple/10 sm:col-span-2 lg:col-span-1"
                      : ""
                  }
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        achievement.highlight
                          ? "border border-electric/30 bg-electric/10 text-electric"
                          : "border border-white/10 bg-white/5 text-purple"
                      }`}
                    >
                      {achievement.icon === "rocket" ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {achievement.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-electric">
                        {achievement.subtitle}
                      </p>
                      <p className="mt-2 text-sm text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </button>
            );
          })}
        </div>
      </div>

      {selectedAchievement ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-electric/70">
                  Certificate Preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {selectedAchievement.title}
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  {selectedAchievement.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAchievement(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close certificate preview</span>
              </button>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
                {selectedAchievement.imageUrl ? (
                  <img
                    src={selectedAchievement.imageUrl}
                    alt={`Certificate preview for ${selectedAchievement.title}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex min-h-[320px] items-center justify-center bg-white/5 p-8 text-center text-sm text-gray-400">
                    No certificate preview available.
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="space-y-4">
                  <p className="text-sm text-gray-300">{selectedAchievement.description}</p>
                  {selectedAchievement.issuedBy ? (
                    <p className="text-sm text-white/80">
                      <span className="font-semibold text-white">Issued by:</span> {selectedAchievement.issuedBy}
                    </p>
                  ) : null}
                  {selectedAchievement.issuedDate ? (
                    <p className="text-sm text-white/80">
                      <span className="font-semibold text-white">Issued date:</span> {selectedAchievement.issuedDate}
                    </p>
                  ) : null}
                </div>

                {selectedAchievement.pdfUrl || selectedAchievement.imageUrl ? (
                  <a
                    href={selectedAchievement.pdfUrl ?? selectedAchievement.imageUrl}
                    download={selectedAchievement.downloadFileName ?? undefined}
                    className="inline-flex items-center justify-center rounded-full bg-electric px-6 py-3 text-sm font-medium text-white shadow-lg shadow-electric/25 transition hover:shadow-electric/40"
                  >
                    {selectedAchievement.pdfUrl ? "Download PDF" : "Download certificate photo"}
                  </a>
                ) : (
                  <p className="text-sm text-gray-400">This achievement does not have a downloadable certificate yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
