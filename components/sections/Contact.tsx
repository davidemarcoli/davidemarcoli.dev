"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Magnetic from '@/components/ui/Magnetic';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom bottom',
                scrub: 1
            },
            y: 100,
            opacity: 0
        });
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="min-h-[80vh] py-24 px-6 md:px-20 flex flex-col justify-center items-center text-center relative bg-black">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black"></div>

            <div className="relative z-10 max-w-4xl">
                <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 contact-title" ref={titleRef}>
                    Let's build the <br /> <span className="text-[#ccfd3a]">Future.</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">Interested in my work? Feel free to reach out for collaborations or just a chat.</p>

                <Magnetic>
                    <a href="mailto:davide@marcoli.ch" className="hoverable inline-flex items-center justify-center px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-[#ccfd3a] transition-colors duration-300">
                        davide@marcoli.ch
                    </a>
                </Magnetic>
            </div>

            <footer className="absolute bottom-8 w-full flex justify-between px-6 md:px-20 text-xs text-gray-600 uppercase tracking-widest flex-col md:flex-row gap-4 md:gap-0 items-center md:items-start">
                <div>&copy; 2025 Davide Marcoli</div>
                <div className="flex space-x-6">
                    <Link href="/contact" className="hover:text-white transition-colors hoverable">Contact</Link>
                    <Link href="/imprint" className="hover:text-white transition-colors hoverable">Imprint</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors hoverable">Privacy</Link>
                    <Link href="/posts" className="hover:text-white transition-colors hoverable">Blog</Link>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
