"use client";

import { useEffect, useState } from "react";
import ClosingCta from "@/components/ClosingCta";
import Community from "@/components/Community";
import Evening from "@/components/Evening";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LangProvider from "@/components/LangProvider";
import Questions from "@/components/Questions";
import StickyCta from "@/components/StickyCta";
import WhoFor from "@/components/WhoFor";
import WhyCards from "@/components/WhyCards";

function Page() {
  // The sticky bar appears once the hero has left the viewport. It is hidden
  // from 768px up in CSS, so this only ever matters on a phone.
  const [stickyLive, setStickyLive] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setStickyLive(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <WhyCards />
        <HowItWorks />
        <Evening />
        <WhoFor />
        <Community />
        <Questions />
        <ClosingCta />
      </main>
      <Footer stickyLive={stickyLive} />
      <StickyCta live={stickyLive} />
    </>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
