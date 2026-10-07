import React from "react";
import { motion } from "framer-motion";
import { Leaf, Sparkles, HeartHandshake } from "lucide-react";
import { Image } from "@/components/ui/image";

const points = [
  { icon: Leaf, title: "Sorted every morning", text: "Produce is inspected crate by crate before it ever reaches the shelf." },
  { icon: Sparkles, title: "Seasonal feature halls", text: "Whole sections re-dressed for each campaign, not just a shelf tag." },
  { icon: HeartHandshake, title: "Neighbourhood pricing", text: "Value built for the families who live around each of our four stores." },
];

export default function FreshBand() {
  return (
    <section className="relative overflow-hidden bg-[#0B1A22] py-28 lg:py-40">
      <Image
        src="/images/fresh-produce.jpg"
        alt="Dew-covered fresh vegetables in a Gate produce bin"
        className="absolute inset-0 h-full w-full opacity-30"
        fittingType="fill"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A22] via-[#0B1A22]/85 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl"
        >
          The joy of the find, <span className="text-[#4CC9F0]">aisle by aisle.</span>
        </motion.h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <p.icon className="h-9 w-9 text-[#E65100]" />
              <h3 className="mt-5 font-heading text-xl font-bold text-white">{p.title}</h3>
              <p className="mt-3 text-white/65 leading-[1.6]">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}