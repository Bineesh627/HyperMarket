import React, { useState } from "react";
import Hero from "@/components/home/Hero";
import StoreSelector from "@/components/home/StoreSelector";
import CampaignHighlights from "@/components/home/CampaignHighlights";
import FreshBand from "@/components/home/FreshBand";
import DirectionsStrip from "@/components/home/DirectionsStrip";

export default function Home() {
  const [selected, setSelected] = useState("al-barsha");

  return (
    <>
      <Hero />
      <StoreSelector selected={selected} onSelect={setSelected} />
      <CampaignHighlights />
      <FreshBand />
      <DirectionsStrip />
    </>
  );
}