"use client";

import { useState } from "react";
import { useWeddingStore } from "@/store/wedding-store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Users } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export function AttendanceForm() {
  const { addAttendance, getTotalAttending } = useWeddingStore();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    status: "attending" as "attending" | "not-attending" | "maybe",
    guestCount: 1,
    dietaryRestrictions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    addAttendance(formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        status: "attending",
        guestCount: 1,
        dietaryRestrictions: "",
      });
    }, 3000);
  };

  const totalAttending = getTotalAttending();

  return (
    <section id="rsvp" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-12">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--wedding-dark)] mb-4">
              RSVP
            </h2>
            <p className="text-lg text-[var(--wedding-accent)]">
              Please let us know if you can join us
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[var(--wedding-secondary)] rounded-full">
              <Users className="w-5 h-5 text-[var(--wedding-primary)]" />
              <AnimatedShinyText className="text-[var(--wedding-dark)] font-medium">
                {totalAttending} guests attending
              </AnimatedShinyText>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          {submitted ? (
            <div className="relative glass-card rounded-2xl p-12 text-center shadow-xl overflow-hidden">
              <BorderBeam size={250} duration={12} delay={9} />
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="font-heading text-3xl font-bold text-[var(--wedding-dark)] mb-2">
                Thank You!
              </h3>
              <p className="text-lg text-[var(--wedding-accent)]">
                Your response has been recorded
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative glass-card rounded-2xl p-8 shadow-xl space-y-6 overflow-hidden"
            >
              <BorderBeam size={250} duration={12} delay={9} />

              <div>
                <Label
                  htmlFor="name"
                  className="text-[var(--wedding-dark)] font-medium"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
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
                <Label className="text-[var(--wedding-dark)] font-medium mb-3 block">
                  Will you attend? *
                </Label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      value: "attending",
                      label: "Attending",
                      color: "bg-green-50 border-green-300 text-green-700",
                    },
                    {
                      value: "not-attending",
                      label: "Can't Make It",
                      color: "bg-red-50 border-red-300 text-red-700",
                    },
                    {
                      value: "maybe",
                      label: "Maybe",
                      color: "bg-yellow-50 border-yellow-300 text-yellow-700",
                    },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          status: option.value as any,
                        })
                      }
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                        formData.status === option.value
                          ? option.color
                          : "bg-white border-gray-200 text-gray-600 hover:border-[var(--wedding-primary)]"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label
                  htmlFor="guestCount"
                  className="text-[var(--wedding-dark)] font-medium"
                >
                  Number of Guests *
                </Label>
                <Input
                  id="guestCount"
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guestCount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guestCount: parseInt(e.target.value) || 1,
                    })
                  }
                  className="mt-2 border-[var(--wedding-accent)]/30 focus:border-[var(--wedding-primary)]"
                />
              </div>

              <div>
                <Label
                  htmlFor="dietary"
                  className="text-[var(--wedding-dark)] font-medium"
                >
                  Dietary Restrictions (Optional)
                </Label>
                <Textarea
                  id="dietary"
                  value={formData.dietaryRestrictions}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dietaryRestrictions: e.target.value,
                    })
                  }
                  placeholder="Any allergies or dietary preferences?"
                  className="mt-2 border-[var(--wedding-accent)]/30 focus:border-[var(--wedding-primary)]"
                  rows={3}
                />
              </div>

              <ShimmerButton
                type="submit"
                className="w-full bg-[var(--wedding-primary)] text-white font-medium py-6 text-lg rounded-xl"
                shimmerColor="#f4e5a1"
                shimmerSize="0.1em"
              >
                Submit RSVP
              </ShimmerButton>
            </form>
          )}
        </BlurFade>
      </div>
    </section>
  );
}
