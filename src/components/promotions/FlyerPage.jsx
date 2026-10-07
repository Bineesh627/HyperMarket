import React from "react";
import { Image } from "@/components/ui/image";

const accents = {
  azure: "from-[#007BB5] to-[#00456A]",
  ember: "from-[#E65100] to-[#8C2F00]",
  green: "from-[#1F7A3D] to-[#0C3D1E]",
};

export default function FlyerPage({ page, campaign, index, total }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <Image src={campaign.cover} alt={campaign.title} className="absolute inset-0 h-full w-full" fittingType="fill" />
      <div className={`absolute inset-0 bg-gradient-to-br opacity-90 ${accents[page.accent] || accents.azure}`} />

      <div className="relative flex h-full flex-col justify-between p-7 text-white sm:p-12">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full bg-white/20 px-4 py-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.24em] backdrop-blur-sm sm:text-xs">
            {page.kicker}
          </span>
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Gate · {campaign.id.replace(/-/g, " ")}
          </span>
        </div>

        <div>
          <h3 className="font-heading text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {page.title}
          </h3>
          <p className="mt-4 max-w-md text-base leading-[1.6] text-white/85 sm:text-lg">{page.blurb}</p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {page.cats.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          <span>In-store only · while stocks last</span>
          <span>
            {index + 1} / {total}
          </span>
        </div>
      </div>
    </div>
  );
}