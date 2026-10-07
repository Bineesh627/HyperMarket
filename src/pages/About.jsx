import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Users, ShieldCheck, Store } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionTitle from "@/components/site/SectionTitle";

const values = [
  { icon: Leaf, title: "Freshness first", text: "Daily deliveries and a strict morning sort across every produce hall." },
  { icon: ShieldCheck, title: "Quality commitment", text: "Sourcing standards and cold-chain checks documented at every store." },
  { icon: Users, title: "Community values", text: "Local hiring, neighbourhood pricing and support for community events." },
  { icon: Store, title: "Growing carefully", text: "Four stores today, each opened only when we could staff it properly." },
];

export default function About() {
  return (
    <div className="pb-28">
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden bg-[#0B1A22]">
        <Image
          src="/images/about-hero.jpg"
          alt="Gate hypermarket entrance looking out to a sunny UAE street"
          className="absolute inset-0 h-full w-full"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14 lg:px-8">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-[#4CC9F0]">Our story</span>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
            From one shop in Deira to four Gate stores
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
        <p className="text-xl leading-[1.6] text-black/75">
          Gate began as a single neighbourhood grocery on Sabkha Road, serving the traders and
          families of old Deira. The idea was simple: keep the fresh sections genuinely fresh, price
          honestly, and know your customers by name.
        </p>
        <p className="mt-7 text-lg leading-[1.6] text-black/70">
          Three decades on, that shop has become four hypermarkets across Dubai and Ajman — Al
          Barsha, Al Quoz, Sabkha and Ajman. Each one is stocked for the neighbourhood it sits in,
          because a family in Al Nuaimiya does not shop the same way as a contractor stopping in Al
          Quoz at seven in the morning.
        </p>
        <p className="mt-7 text-lg leading-[1.6] text-black/70">
          We deliberately do not sell online. What we do instead is invest everything into the visit
          itself: wide bright aisles, seasonal feature halls that change several times a year, and
          teams who have often been with us for over a decade. Our seasonal circulars exist to tell
          you what is worth coming in for this week.
        </p>
        <p className="mt-7 text-lg leading-[1.6] text-black/70">
          Growth, for us, is measured in trust rather than store count. When we open a fifth Gate, it
          will be because a neighbourhood asked for one.
        </p>
      </section>

      <section className="bg-[#F5FAFD] px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle kicker="What we stand for" title="Four commitments, four stores." align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.4)]"
              >
                <v.icon className="h-9 w-9 text-[#E65100]" />
                <h3 className="mt-5 font-heading text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-black/60 leading-[1.6]">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-8">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Come see the difference in person.
        </h2>
        <Link
          to="/stores"
          className="mt-8 inline-flex rounded-full bg-[#E65100] px-9 py-5 font-heading text-lg font-bold text-white transition-transform hover:-translate-y-1"
        >
          Find a Gate Store
        </Link>
      </section>
    </div>
  );
}