import React from "react";
import { stores } from "@/lib/gateData";
import StoresMap from "@/components/stores/StoresMap";
import StoreCard from "@/components/stores/StoreCard";
import SectionTitle from "@/components/site/SectionTitle";

export default function Stores() {
  return (
    <div className="pb-28">
      <section className="border-b border-black/5 bg-[#F5FAFD] px-5 pb-16 pt-20 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            kicker="Store finder"
            title="Four Gate stores. Dubai & Ajman."
            blurb="Pick the branch closest to you for exact directions, phone lines, opening hours and local photos."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-14 lg:px-8">
        <StoresMap />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {stores.map((s, i) => (
            <StoreCard key={s.slug} store={s} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}