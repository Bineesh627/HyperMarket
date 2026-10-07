import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getPost, posts } from "@/lib/gateData";
import { Image } from "@/components/ui/image";
import PostCard from "@/components/blog/PostCard";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-heading text-4xl font-extrabold">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-flex rounded-full bg-[#007BB5] px-6 py-3 font-semibold text-white">
          Back to the blog
        </Link>
      </div>
    );
  }

  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <article className="pb-28">
      <div className="mx-auto max-w-3xl px-5 pt-16 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-black/50 hover:text-[#007BB5]">
          <ArrowLeft className="h-4 w-4" /> The Gate Journal
        </Link>
        <div className="mt-8 flex items-center gap-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#007BB5]">
          <span>{post.category}</span>
          <span className="h-1.5 w-1.5 rotate-45 bg-[#E65100]" />
          <span className="text-black/40">{post.read}</span>
        </div>
        <h1 className="mt-5 font-heading text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-xl leading-[1.6] text-black/60">{post.excerpt}</p>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-5 lg:px-8">
        <Image src={post.image} alt={post.title} className="h-80 w-full rounded-[32px] sm:h-[520px]" fittingType="fill" />
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-5 lg:px-8">
        {post.body.map((p, i) => (
          <p key={i} className="mb-7 text-lg leading-[1.6] text-black/75">
            {p}
          </p>
        ))}

        <div className="mt-14 rounded-3xl bg-[#F5FAFD] p-8">
          <h3 className="font-heading text-2xl font-extrabold tracking-tight">Shop it at your nearest Gate</h3>
          <p className="mt-2 text-black/60 leading-[1.6]">
            Everything mentioned here is stocked across our four stores in Dubai and Ajman.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/stores" className="rounded-full bg-[#E65100] px-6 py-3 font-semibold text-white">
              Find a Gate Store
            </Link>
            <Link to="/promotions" className="rounded-full border border-black/15 px-6 py-3 font-semibold">
              View this week's flyer
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-5 lg:px-8">
        <h3 className="font-heading text-2xl font-extrabold tracking-tight">Keep reading</h3>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          {others.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </div>
    </article>
  );
}