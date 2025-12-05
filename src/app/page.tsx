"use client";

import { useEffect } from "react";
import { useWeddingStore } from "@/store/wedding-store";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EventDetails } from "@/components/EventDetails";
import { Gallery } from "@/components/Gallery";
import { AttendanceForm } from "@/components/AttendanceForm";
import { GuestMessages } from "@/components/GuestMessages";

export default function Home() {
  const { loadFromStorage } = useWeddingStore();

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <EventDetails />
      <Gallery />
      <AttendanceForm />
      <GuestMessages />

      {/* Footer */}
      <footer className="bg-[var(--wedding-dark)] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-heading text-3xl font-bold mb-4">
            Nobita & Shizuka
          </p>
          <p className="text-white/70 mb-2">August 15, 2025</p>
          <p className="text-white/70 text-sm">
            Thank you for being part of our special day
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-[var(--wedding-primary)]" />
            <span className="text-[var(--wedding-primary)]">♥</span>
            <div className="h-px w-16 bg-[var(--wedding-primary)]" />
          </div>
        </div>
      </footer>
    </main>
  );
}
