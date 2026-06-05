"use client";

import { impactStats } from "@/data/site";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Impact() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl sm:p-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {impactStats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
