"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { SparklesText } from "@/components/ui/sparkles-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const weddingDate = new Date("2025-08-15T16:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center wedding-gradient overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#d4af37"
        refresh
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-8 flex justify-center">
            <Heart className="w-16 h-16 text-[var(--wedding-primary)] fill-[var(--wedding-primary)] animate-pulse" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <SparklesText
            className="font-heading text-6xl md:text-8xl font-bold text-[var(--wedding-dark)] mb-4"
            sparklesCount={8}
            colors={{ first: "#d4af37", second: "#8b7355" }}
          >
            Nobita & Shizuka
          </SparklesText>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[var(--wedding-primary)]" />
            <p className="font-heading text-2xl md:text-3xl text-[var(--wedding-accent)] italic">
              are getting married
            </p>
            <div className="h-px w-16 bg-[var(--wedding-primary)]" />
          </div>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <div className="mb-12 space-y-2">
            <p className="text-xl md:text-2xl text-[var(--wedding-dark)] font-medium">
              August 15, 2025
            </p>
            <p className="text-lg md:text-xl text-[var(--wedding-accent)]">
              4:00 PM
            </p>
            <p className="text-lg md:text-xl text-[var(--wedding-accent)]">
              The Grand Estate Gardens, Napa Valley
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <div className="relative glass-card rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <BorderBeam size={250} duration={12} delay={9} />
            <p className="font-heading text-xl text-[var(--wedding-accent)] mb-6">
              Counting down to our special day
            </p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[var(--wedding-primary)] font-heading">
                    {item.value}
                  </div>
                  <div className="text-sm md:text-base text-[var(--wedding-accent)] mt-2">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.6} inView>
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-[var(--wedding-primary)] rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-[var(--wedding-primary)] rounded-full" />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
