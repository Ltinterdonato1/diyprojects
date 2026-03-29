"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface ServiceCarouselProps {
  items: MediaItem[];
}

export default function ServiceCarousel({ items }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  const next = () => setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="relative h-64 w-full group overflow-hidden bg-stone-100">
      {items[currentIndex].type === "image" ? (
        <Image
          src={items[currentIndex].src}
          alt="Service view"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <iframe
          src={`${items[currentIndex].src}embed`}
          className="w-full h-full border-none"
          allowTransparency
          allow="encrypted-media"
        />
      )}

      {/* Navigation Arrows */}
      <button
        onClick={(e) => { e.preventDefault(); prev(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-1 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); next(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-1 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {items.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === currentIndex ? "bg-amber-500 w-3" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
