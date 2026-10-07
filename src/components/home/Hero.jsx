import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B1A22] lg:min-h-[100vh]">
      <Image
        src="/images/hero-banner.jpg"
        alt="Family shopping in a sunlit Gate hypermarket produce aisle"
        className="absolute inset-0 h-full w-full"
        fittingType="fill"
        focalPointY={0.45}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#007BB5]/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pb-40 pt-24 lg:min-h-[100vh] lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex w-fit items-center gap-2.5 rounded-full bg-[#E65100] px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-[0.24em] text-white"
        >
          <span className="h-2 w-2 rotate-45 bg-white" />
          Gate Super Summer Deals
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-5xl font-heading text-[13vw] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-[9vw] lg:text-[6.4vw]"
        >
          Unbeatable
          <br />
          savings around
          <br />
          <span className="text-[#4CC9F0]">the corner</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 max-w-xl text-lg leading-[1.6] text-white/80 sm:text-xl"
        >
          Back to School mega offers, summer fresh halls and Eid specials — live now across four
          Gate stores in Dubai and Ajman.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            to="/promotions"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E65100] px-9 py-5 font-heading text-lg font-bold text-white shadow-2xl shadow-[#E65100]/30 transition-transform duration-300 hover:-translate-y-1"
          >
            Explore This Week's Flyer
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/stores"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-9 py-5 font-heading text-lg font-bold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#1A1A1A]"
          >
            Find a Gate Store
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-white/50 lg:block">
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </div>
    </section>
  );
}