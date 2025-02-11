"use client";

import { useEffect, useRef } from "react";
import HeroSlider from "@/components/layout/HeroSlider";
import HorizontalScrollSection from "@/components/layout/insight-slider";
import MissionStatement from "@/components/layout/mission";
import ResourcesSection from "@/components/layout/resources-section";
import FooterCTA from "@/components/layout/cta";
import MouseTrail from "./anim/mouse-trail";

const HomePage = () => {
  return (
    <main className="relative">
      <HeroSlider />
      <MissionStatement />
      <HorizontalScrollSection
      />
      <ResourcesSection />

      <FooterCTA
        title="Learn how we can transform your Business"
        buttonText="Get started"
        buttonHref="/contact"
      />
    </main>
  );
};

export default HomePage;
