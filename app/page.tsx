"use client";
import SectionWrapper from "@/components/SectionWrapper";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import DevMode from "@/components/DevMode";
import Contact from "@/components/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="pt-24">
      <Hero />

      <SectionWrapper>
        <Skills />
      </SectionWrapper>

      <SectionWrapper>
        <Projects />
      </SectionWrapper>

      <SectionWrapper>
        <DevMode />
      </SectionWrapper>

      <SectionWrapper>
        <Contact />
      </SectionWrapper>
    </main>
  );
}
