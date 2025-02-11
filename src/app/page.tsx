"use client";

import { useEffect, useRef } from "react";
import HeroSlider from "@/components/layout/HeroSlider";
import HorizontalScrollSection from "@/components/layout/insight-slider";
import MissionStatement from "@/components/layout/mission";
import ResourcesSection from "@/components/layout/resources-section";
import FooterCTA from "@/components/layout/cta";
import MouseTrail from "./anim/mouse-trail";
import LogoGrid from "@/components/layout/logo-grid";

const logos = [
  {
    name: "Worldtek",
    imageUrl: "/Worldtek.svg",
    alt: "Worldtek"
  },
  {
    name: "QRPE",
    imageUrl: "/QRPE.svg",
    alt: "QRPE"
  },
  {
    name: "MSGBE",
    imageUrl: "/Msgbe.svg",
    alt: "Msgbe"
  },
  {
    name: "Selfscan",
    imageUrl: "/Selfscan.svg",
    alt: "Selfscan"
  },
];

const HomePage = () => {
  return (
    <main className="relative">
      <HeroSlider />
      <MissionStatement />
      <LogoGrid
  logos={logos}
  title="Our Brands"
  columns={4}
  grayscale={true}
  animate={true}
/>
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
