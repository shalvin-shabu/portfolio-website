"use client";

import { leadershipRoles } from "@/data/leadership";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const iconMap: Record<string, React.ReactNode> = {
  president: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  megaphone: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66c.057.02.113.04.17.061 1.483.89 2.716 2.213 3.527 3.72m-2.04-1.02a18.01 18.01 0 00-3.527-3.72A8.966 8.966 0 006 3.75c-1.89 0-3.47.997-4.112 2.56m7.024 4.92a18.667 18.667 0 00-1.485-2.74" />
    </svg>
  ),
  calendar: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  flag: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0h2.25m-2.25 0h5.25M6 7.5h3m-3 4.5h3m-3 4.5h3M6 7.5v9m9-9v9m0-9h2.25m-2.25 0H21m-2.25 0v9m0-9v9" />
    </svg>
  ),
};

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Leadership"
          subtitle="Driving technology communities and innovation"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {leadershipRoles.map((role, index) => (
            <GlassCard key={role.title} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple/30 bg-purple/10 text-purple">
                  {iconMap[role.icon]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-electric">
                    {role.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {role.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
