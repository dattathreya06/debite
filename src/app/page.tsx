'use client'

import { useEffect, useRef } from 'react';
import HeroSlider from '@/components/layout/HeroSlider';
import HorizontalScroll from '@/components/layout/insight-slider';
import MissionStatement from '@/components/layout/mission';
import ResourcesSection from '@/components/layout/resources-section';
import FooterCTA from '@/components/layout/cta';
import MouseTrail from './anim/mouse-trail';

const HomePage = () => {
  return (
    <main className="relative">
      <HeroSlider />
      <MissionStatement />
      <HorizontalScroll />
      <ResourcesSection />


      <FooterCTA
  title="Upgrade your trip experience today"
  buttonText="Get started"
  buttonHref="/sign-up"
  logomarkSrc="/path-to-your-logomark.svg"
/>

    </main>
  );
};

export default HomePage;