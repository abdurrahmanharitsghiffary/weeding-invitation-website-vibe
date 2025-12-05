"use client";

import { Calendar, Clock, MapPin, Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";

export function EventDetails() {
  return (
    <section id="details" className="py-20 px-4 wedding-gradient">
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--wedding-dark)] mb-4">
              Event Details
            </h2>
            <p className="text-lg text-[var(--wedding-accent)]">
              Everything you need to know about our special day
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <BlurFade delay={0.2} inView>
            <Card className="relative overflow-hidden glass-card border-[var(--wedding-primary)]/20">
              <BorderBeam size={200} duration={15} delay={5} />
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--wedding-primary)]/10 rounded-full">
                    <Calendar className="w-6 h-6 text-[var(--wedding-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[var(--wedding-dark)] mb-2">
                      Ceremony
                    </h3>
                    <p className="text-[var(--wedding-accent)] mb-1">
                      <strong>Date:</strong> August 15, 2025
                    </p>
                    <p className="text-[var(--wedding-accent)]">
                      <strong>Time:</strong> 4:00 PM - 5:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <Card className="relative overflow-hidden glass-card border-[var(--wedding-primary)]/20">
              <BorderBeam size={200} duration={15} delay={7} />
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--wedding-primary)]/10 rounded-full">
                    <Clock className="w-6 h-6 text-[var(--wedding-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[var(--wedding-dark)] mb-2">
                      Reception
                    </h3>
                    <p className="text-[var(--wedding-accent)] mb-1">
                      <strong>Date:</strong> August 15, 2025
                    </p>
                    <p className="text-[var(--wedding-accent)]">
                      <strong>Time:</strong> 6:00 PM - 11:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>

        <BlurFade delay={0.4} inView>
          <Card className="relative overflow-hidden glass-card border-[var(--wedding-primary)]/20 mb-8">
            <BorderBeam size={300} duration={15} delay={10} />
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[var(--wedding-primary)]/10 rounded-full">
                  <MapPin className="w-6 h-6 text-[var(--wedding-primary)]" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[var(--wedding-dark)] mb-2">
                    Venue
                  </h3>
                  <p className="text-[var(--wedding-accent)] mb-1">
                    The Grand Estate Gardens
                  </p>
                  <p className="text-[var(--wedding-accent)]">
                    1234 Vineyard Lane, Napa Valley, CA 94558
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border-2 border-[var(--wedding-primary)]/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.17907296407!2d-122.41941550000001!3d38.2975381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085030e1a90e7c5%3A0x7a9b0f3b0f3b0f3b!2sNapa%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue Location"
                />
              </div>
            </CardContent>
          </Card>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <Card className="relative overflow-hidden glass-card border-[var(--wedding-primary)]/20">
            <BorderBeam size={200} duration={15} delay={12} />
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--wedding-primary)]/10 rounded-full">
                  <Shirt className="w-6 h-6 text-[var(--wedding-primary)]" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[var(--wedding-dark)] mb-2">
                    Dress Code
                  </h3>
                  <p className="text-[var(--wedding-accent)]">
                    Formal / Black Tie Optional
                  </p>
                  <p className="text-[var(--wedding-accent)] text-sm mt-2">
                    We kindly request that guests dress in formal attire. Ladies
                    in elegant dresses, gentlemen in suits or tuxedos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </section>
  );
}
