import React from "react";
import { posts } from "@/lib/gateData";
import PostCard from "@/components/blog/PostCard";
import SectionTitle from "@/components/site/SectionTitle";

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <div className="pb-28">
      <section className="border-b border-black/5 bg-[#F5FAFD] px-5 pb-16 pt-20 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            kicker="Local stories & guides"
            title="The Gate Journal."
            blurb="Seasonal recipes, family shopping guides and community notes from our four neighbourhoods across Dubai and Ajman."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2">
          <PostCard post={featured} featured />
          {rest.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i + 1} />
          ))}
        </div>
      </section>
    </div>
  );
}