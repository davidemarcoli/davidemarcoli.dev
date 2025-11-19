"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDownRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial state - hide elements
        gsap.set('.hero-line', { y: 200 });
        gsap.set('.hero-sub', { opacity: 0, y: 20 });

        const handleLoadingComplete = () => {
            const tl = gsap.timeline();

            tl.to('.hero-line', {
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power4.out"
            })
                .to('.hero-sub', {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out"
                }, "-=0.5");
        };

        window.addEventListener('loading-complete', handleLoadingComplete);

        return () => {
            window.removeEventListener('loading-complete', handleLoadingComplete);
        };
    }, []);

    return (
        <section className="h-screen w-full flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
            <div className="hero-content relative z-10" ref={heroRef}>
                <h1 className="text-[11vw] md:text-[9vw] leading-[0.85] font-bold uppercase tracking-tighter mix-blend-overlay opacity-90">
                    <div className="overflow-hidden"><span className="hero-line inline-block">Davide</span></div>
                    <div className="overflow-hidden"><span className="hero-line inline-block text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)' }}>Marcoli</span></div>
                    <div className="overflow-hidden">
                        <span className="hero-line inline-block text-[4vw] md:text-[3vw] normal-case tracking-normal font-normal text-[#ccfd3a] mt-4 block">
                            &lt;Software Engineer /&gt;
                        </span>
                    </div>
                </h1>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-6xl">
                    <p className="text-gray-400 max-w-sm text-lg leading-relaxed hero-sub">
                        Swiss developer based near Zurich. Building open-source components, AI solutions, and robust web architecture.
                    </p>
                    <div className="mt-8 md:mt-0 hero-sub flex flex-col items-end">
                        <div className="text-right mb-4 text-sm text-gray-500 uppercase tracking-widest">
                            Working @ SIX Group <br /> Studying @ ZHAW
                        </div>
                        <Link href="#work" className="group hoverable relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-black transition duration-300 ease-out rounded-full bg-[#ccfd3a] shadow-lg">
                            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                            <span className="relative flex items-center gap-2">Selected Works <ArrowDownRight className="w-4 h-4" /></span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 text-xs uppercase tracking-[0.2em]">
                Scroll
            </div>
        </section>
    );
};

export default Hero;
