"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Swords, LayoutGrid, Utensils } from 'lucide-react';
import Link from 'next/link';

const Works = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const projects = document.querySelectorAll('.project-item');
        projects.forEach(project => {
            const img = project.querySelector('.project-image');
            if (!img) return;

            const handleMouseMove = (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const elPos = project.getBoundingClientRect();
                const x = mouseEvent.clientX - elPos.left;
                const y = mouseEvent.clientY - elPos.top;

                gsap.to(img, {
                    x: x - 200,
                    y: y - 125,
                    duration: 0.4,
                    ease: "power2.out"
                });
            };

            project.addEventListener('mousemove', handleMouseMove);

            return () => {
                project.removeEventListener('mousemove', handleMouseMove);
            };
        });
    }, []);

    return (
        <section id="work" ref={sectionRef} className="py-32 px-6 md:px-20 relative">
            <div className="text-sm text-accent uppercase tracking-widest mb-16 border-b border-white/10 pb-4 section-header">03 / Selected Works</div>

            <div className="flex flex-col w-full">
                {/* Project 1: WOS */}
                <Link href="https://wos-formation-generator.davidemarcoli.dev" target="_blank" className="project-item group relative py-12 border-b border-white/10 cursor-pointer hoverable block">
                    <div className="flex flex-col md:flex-row justify-between items-baseline z-20 relative pointer-events-none">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl md:text-6xl font-bold uppercase group-hover:translate-x-4 transition-transform duration-500 text-transparent stroke-text" style={{ WebkitTextStroke: '1px #fff' }}>WOS Formation Gen</h2>
                            <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-accent" />
                        </div>
                        <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-0">Game Utility • Strategy Optimizer</p>
                    </div>
                    <div className="project-image absolute top-0 left-0 w-[400px] h-[250px] rounded-lg overflow-hidden pointer-events-none hidden md:block border border-white/20 bg-[#1a1a1a]">
                        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-black to-slate-800 p-8 flex items-center justify-center">
                            <Swords className="w-16 h-16 text-blue-400 opacity-50" />
                        </div>
                    </div>
                </Link>

                {/* Project 2: SIX Webcomponents */}
                <Link href="https://github.com/six-group/six-webcomponents" target="_blank" className="project-item group relative py-12 border-b border-white/10 cursor-pointer hoverable block">
                    <div className="flex flex-col md:flex-row justify-between items-baseline z-20 relative pointer-events-none">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl md:text-6xl font-bold uppercase group-hover:translate-x-4 transition-transform duration-500 text-transparent stroke-text" style={{ WebkitTextStroke: '1px #fff' }}>SIX Web Components</h2>
                            <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-accent" />
                        </div>
                        <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-0">Open Source • UI Library</p>
                    </div>
                    <div className="project-image absolute top-0 left-0 w-[400px] h-[250px] rounded-lg overflow-hidden pointer-events-none hidden md:block border border-white/20 bg-[#1a1a1a]">
                        <div className="w-full h-full bg-gradient-to-br from-red-900 via-black to-red-950 p-8 flex items-center justify-center">
                            <LayoutGrid className="w-16 h-16 text-red-500 opacity-50" />
                        </div>
                    </div>
                </Link>

                {/* Project 3: Mensa */}
                <Link href="https://mensa.davidemarcoli.dev" target="_blank" className="project-item group relative py-12 border-b border-white/10 cursor-pointer hoverable block">
                    <div className="flex flex-col md:flex-row justify-between items-baseline z-20 relative pointer-events-none">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl md:text-6xl font-bold uppercase group-hover:translate-x-4 transition-transform duration-500 text-transparent stroke-text" style={{ WebkitTextStroke: '1px #fff' }}>SIX Mensa</h2>
                            <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-accent" />
                        </div>
                        <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-0">Utility App • Food & Dining</p>
                    </div>
                    <div className="project-image absolute top-0 left-0 w-[400px] h-[250px] rounded-lg overflow-hidden pointer-events-none hidden md:block border border-white/20 bg-[#1a1a1a]">
                        <div className="w-full h-full bg-gradient-to-br from-green-900 via-black to-emerald-900 p-8 flex items-center justify-center">
                            <Utensils className="w-16 h-16 text-green-400 opacity-50" />
                        </div>
                    </div>
                </Link>
            </div>

            <div className="mt-16 text-center">
                <Link href="https://github.com/davidemarcoli" target="_blank" className="hoverable inline-block text-accent border-b border-accent pb-1 hover:text-white hover:border-white transition-all">View Github Profile</Link>
            </div>
        </section>
    );
};

export default Works;
