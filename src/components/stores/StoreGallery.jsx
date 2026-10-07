import React from "react";
import { Image } from "@/components/ui/image";

const extra = [
  "/images/fresh-produce.jpg",
  "/images/flyer-ramadan.jpg",
  "/images/blog-budget.jpg",
];

export default function StoreGallery({ store }) {
  const shots = [store.image, ...extra];
  return (
    <div className="mt-24">
      <h3 className="font-heading text-3xl font-extrabold tracking-tight">
        Inside {store.name.replace("Gate — ", "")}
      </h3>
      <p className="mt-3 max-w-xl text-lg leading-[1.6] text-black/60">
        Photos from this branch, shared by our shoppers and store team.
      </p>
      <div className="mt-9 flex snap-x gap-5 overflow-x-auto pb-4">
        {shots.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${store.name} photo ${i + 1}`}
            className="h-64 w-[85%] shrink-0 snap-start rounded-3xl sm:w-[420px]"
            fittingType="fill"
          />
        ))}
      </div>
    </div>
  );
}