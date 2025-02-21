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
    alt: "Worldtek",
    href: "https://worldtek.in/",
    width: 140,
    height: 100,
  },
  {
    name: "QRPE",
    imageUrl: "/QRPE.svg",
    alt: "QRPE",
    href: "https://qrpe.in/",
    width: 140,
    height: 100,
  },
  {
    name: "MSGBE",
    imageUrl: "/Msgbe.svg",
    alt: "Msgbe",
    href: "http://msgbe.in/",
    width: 140,
    height: 100,
  },
  {
    name: "Selfscan",
    imageUrl: "/Selfscan.svg",
    alt: "Selfscan",
    href: "https://selfscan.in/",
    width: 140,
    height: 100,
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
      <HorizontalScrollSection />
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
