"use client";

import { useState } from "react";
import { useWeddingStore } from "@/store/wedding-store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

export function GuestMessages() {
  const { messages, addMessage } = useWeddingStore();
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    addMessage(formData);
    setFormData({ name: "", message: "" });
  };

  const WishCard = ({ name, message }: { name: string; message: string }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
          "glass-card border-[var(--wedding-primary)]/20"
        )}
      >
        <div className="flex items-start gap-3">
          <div className="p-2 bg-[var(--wedding-primary)]/10 rounded-full shrink-0">
            <Heart className="w-4 h-4 text-[var(--wedding-primary)]" />
          </div>
          <div className="flex-1 min-w-0">
            <figcaption className="font-medium text-[var(--wedding-dark)] mb-2">
              {name}
            </figcaption>
            <blockquote className="text-[var(--wedding-accent)] text-sm leading-relaxed">
              {message}
            </blockquote>
          </div>
        </div>
      </figure>
    );
  };

  // Only split into two rows if we have more than 3 messages
  const shouldSplitRows = messages.length > 3;
  const firstRow = shouldSplitRows
    ? messages.slice(0, Math.ceil(messages.length / 2))
    : messages;
  const secondRow = shouldSplitRows
    ? messages.slice(Math.ceil(messages.length / 2))
    : [];

  return (
    <section id="messages" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--wedding-dark)] mb-4">
              Guest Wishes
            </h2>
            <p className="text-lg text-[var(--wedding-accent)]">
              Leave your blessings and well wishes for the happy couple
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="relative glass-card rounded-2xl p-8 shadow-xl overflow-hidden max-w-2xl mx-auto mb-16">
            <BorderBeam size={250} duration={12} delay={9} />
            <h3 className="font-heading text-2xl font-bold text-[var(--wedding-dark)] mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-[var(--wedding-primary)]" />
              Share Your Wishes
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="messageName"
                  className="text-[var(--wedding-dark)] font-medium"
                >
                  Your Name *
                </Label>
                <Input
                  id="messageName"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  required
                  className="mt-2 border-[var(--wedding-accent)]/30 focus:border-[var(--wedding-primary)]"
                />
              </div>
              <div>
                <Label
                  htmlFor="messageText"
                  className="text-[var(--wedding-dark)] font-medium"
                >
                  Your Message *
                </Label>
                <Textarea
                  id="messageText"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your wishes for the couple..."
                  required
                  className="mt-2 border-[var(--wedding-accent)]/30 focus:border-[var(--wedding-primary)]"
                  rows={4}
                />
              </div>
              <ShimmerButton
                type="submit"
                className="w-full bg-[var(--wedding-primary)] text-white font-medium py-4 text-lg rounded-xl"
                shimmerColor="#f4e5a1"
                shimmerSize="0.1em"
              >
                Send Wishes
              </ShimmerButton>
            </form>
          </div>
        </BlurFade>

        {messages.length === 0 ? (
          <BlurFade delay={0.3} inView>
            <Card className="glass-card border-[var(--wedding-primary)]/20 max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-[var(--wedding-primary)]/30 mx-auto mb-4" />
                <p className="text-[var(--wedding-accent)]">
                  Be the first to leave a message!
                </p>
              </CardContent>
            </Card>
          </BlurFade>
        ) : (
          <BlurFade delay={0.3} inView>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((msg) => (
                  <WishCard
                    key={msg.id}
                    name={msg.name}
                    message={msg.message}
                  />
                ))}
              </Marquee>
              {secondRow.length > 0 && (
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                  {secondRow.map((msg) => (
                    <WishCard
                      key={msg.id}
                      name={msg.name}
                      message={msg.message}
                    />
                  ))}
                </Marquee>
              )}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
