import React, { useState } from "react";
import { MessageCircle, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { stores, BRAND } from "@/lib/gateData";
import SectionTitle from "@/components/site/SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", branch: stores[0].slug, message: "" });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pb-28">
      <section className="border-b border-black/5 bg-[#F5FAFD] px-5 pb-16 pt-20 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            kicker="Contact us"
            title="Talk to your Gate store."
            blurb="Send us a general enquiry, call a branch directly, or message us on WhatsApp — we usually reply within a few hours."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 pt-16 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div className="rounded-[32px] border border-black/10 p-8 shadow-[0_25px_70px_-50px_rgba(0,0,0,0.4)] sm:p-10">
          {sent ? (
            <div className="py-14 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-[#007BB5]" />
              <h3 className="mt-6 font-heading text-2xl font-extrabold">Thank you, {form.name || "friend"}!</h3>
              <p className="mt-3 text-black/60 leading-[1.6]">
                Your enquiry has reached our customer service team. We'll be in touch shortly.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", branch: stores[0].slug, message: "" });
                }}
                className="mt-8 rounded-full border border-black/15 px-6 py-3 font-semibold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <h3 className="font-heading text-2xl font-extrabold tracking-tight">General enquiry</h3>
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={set("name")}
                  className="w-full rounded-2xl border border-black/15 px-5 py-4 text-lg outline-none transition-colors focus:border-[#007BB5]"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  className="w-full rounded-2xl border border-black/15 px-5 py-4 text-lg outline-none transition-colors focus:border-[#007BB5]"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-branch" className="mb-2 block text-sm font-semibold">Which store?</label>
                <select
                  id="contact-branch"
                  name="branch"
                  value={form.branch}
                  onChange={set("branch")}
                  className="w-full rounded-2xl border border-black/15 px-5 py-4 text-lg outline-none transition-colors focus:border-[#007BB5]"
                >
                  {stores.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  className="w-full rounded-2xl border border-black/15 px-5 py-4 text-lg outline-none transition-colors focus:border-[#007BB5]"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#E65100] px-8 py-4 font-heading text-lg font-bold text-white shadow-lg shadow-[#E65100]/25 transition-transform hover:-translate-y-1"
              >
                <Send className="h-5 w-5" /> Send enquiry
              </button>
            </form>
          )}
        </div>

        <div>
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-3xl bg-[#1FA855] p-7 text-white transition-transform hover:-translate-y-1"
          >
            <MessageCircle className="h-10 w-10 shrink-0" />
            <span>
              <span className="block font-heading text-xl font-bold">Chat on WhatsApp</span>
              <span className="text-white/85">Fastest way to reach customer service</span>
            </span>
          </a>

          <div className="mt-8 space-y-4">
            <h3 className="font-heading text-xl font-extrabold tracking-tight">Direct branch contacts</h3>
            {stores.map((s) => (
              <div key={s.slug} className="rounded-2xl border border-black/10 p-6">
                <span className="font-heading text-lg font-bold">{s.name}</span>
                <p className="mt-1 text-sm text-black/55 leading-[1.6]">{s.address}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={`tel:${s.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#007BB5] px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    <Phone className="h-4 w-4" /> {s.phone}
                  </a>
                  <span className="inline-flex items-center rounded-full border border-black/10 px-4 py-2.5 text-sm font-semibold">
                    {s.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <a
            href={`mailto:${BRAND.email}`}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-[#007BB5]"
          >
            <Mail className="h-5 w-5" /> {BRAND.email}
          </a>
        </div>
      </section>
    </div>
  );
}