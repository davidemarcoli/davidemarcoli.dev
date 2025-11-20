"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Server, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const textEl = textRef.current;
        if (!textEl) return;

        // Text Highlight Logic
        const words = textEl.textContent?.split(' ') || [];
        textEl.textContent = '';
        words.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.opacity = '0.2';
            span.style.transition = 'opacity 0.3s';
            textEl.appendChild(span);
        });

        const spans = textEl.querySelectorAll('span');
        gsap.to(spans, {
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 70%',
                end: 'bottom 70%',
                scrub: 1
            },
            opacity: 1,
            stagger: 0.02
        });

        // Cards Stagger
        gsap.from('.skill-card', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 50%'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });

    }, []);

    return (
        <section id="about" ref={sectionRef} className="min-h-screen py-24 px-6 md:px-20 flex flex-col justify-center relative bg-black/50 backdrop-blur-sm">
            <div className="max-w-6xl w-full mx-auto">
                <div className="text-sm text-accent uppercase tracking-widest mb-8 border-b border-white/10 pb-4 section-header">01 / Profile</div>

                <p className="text-2xl md:text-5xl font-medium leading-tight about-text mb-16" ref={textRef}>
                    Hi, I'm Davide. I'm a Software Engineer specializing in modern frontend architectures and backend systems. Currently shaping internal tools at SIX Group while pursuing my CS degree.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                    <div className="skill-card p-6 border border-white/10 hover:border-accent/50 transition-colors duration-500 group bg-white/5 backdrop-blur-sm rounded-sm">
                        <div className="flex justify-between items-start mb-4">
                            <Layers className="w-8 h-8 text-accent" />
                            <span className="text-xs font-mono text-gray-500">01</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Frontend & UI</h3>
                        <ul className="text-gray-400 text-sm space-y-2 font-mono">
                            <li>Angular & React</li>
                            <li>TypeScript / JavaScript</li>
                            <li>Web Components (Lit)</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>

                    <div className="skill-card p-6 border border-white/10 hover:border-accent/50 transition-colors duration-500 group bg-white/5 backdrop-blur-sm rounded-sm">
                        <div className="flex justify-between items-start mb-4">
                            <Server className="w-8 h-8 text-accent" />
                            <span className="text-xs font-mono text-gray-500">02</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Backend & AI</h3>
                        <ul className="text-gray-400 text-sm space-y-2 font-mono">
                            <li>Java & Spring</li>
                            <li>Python & Langchain</li>
                            <li>Postgres (pgvector)</li>
                            <li>Docker & Kubernetes</li>
                        </ul>
                    </div>

                    <div className="skill-card p-6 border border-white/10 hover:border-accent/50 transition-colors duration-500 group bg-white/5 backdrop-blur-sm rounded-sm">
                        <div className="flex justify-between items-start mb-4">
                            <Globe className="w-8 h-8 text-accent" />
                            <span className="text-xs font-mono text-gray-500">03</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Languages</h3>
                        <ul className="text-gray-400 text-sm space-y-2 font-mono">
                            <li>German <span className="text-xs opacity-50 ml-2">NATIVE</span></li>
                            <li>English <span className="text-xs opacity-50 ml-2">ADVANCED</span></li>
                            <li>French <span className="text-xs opacity-50 ml-2">INTERMEDIATE</span></li>
                            <li>Italian <span className="text-xs opacity-50 ml-2">BEGINNER</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
