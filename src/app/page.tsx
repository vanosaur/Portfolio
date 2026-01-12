"use client";

import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ArtSection from "@/components/ArtSection";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div className="bg-black text-white selection:bg-[#fae900] selection:text-black">
      <Navbar />

      <section id="home">
        <HomeSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="art">
        <ArtSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
