"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '@/components/layout/Navbar';
import ThreeBackground from '@/components/effects/ThreeBackground';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Works from '@/components/sections/Works';
import Contact from '@/components/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger on mount to ensure positions are correct
    ScrollTrigger.refresh();
  }, []);

  return (
    <main className="relative w-full">
      <Navbar />
      <ThreeBackground />

      <Hero />
      <About />
      <Experience />
      <Works />
      <Contact />
    </main>
  );
}
