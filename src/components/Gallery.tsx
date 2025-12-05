"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Couple photo 1",
  },
  {
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    alt: "Couple photo 2",
  },
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    alt: "Couple photo 3",
  },
  {
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    alt: "Couple photo 4",
  },
  {
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    alt: "Couple photo 5",
  },
  {
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    alt: "Couple photo 6",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--wedding-dark)] mb-4">
              Our Story
            </h2>
            <p className="text-lg text-[var(--wedding-accent)]">
              Moments we've cherished together
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, idx) => (
            <BlurFade key={idx} delay={0.2 + idx * 0.1} inView>
              <div className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer">
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
