"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.from('.timeline-item', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 60%'
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="py-24 px-6 md:px-20 relative border-t border-white/5">
            <div className="max-w-6xl w-full mx-auto">
                <div className="text-sm text-accent uppercase tracking-widest mb-16 section-header">02 / Experience & Education</div>

                <div className="space-y-12 relative before:absolute before:left-0 md:before:left-[16rem] before:top-0 before:h-full before:w-[1px] before:bg-white/10">

                    {/* Job 1 */}
                    <div className="flex flex-col md:flex-row md:gap-12 relative timeline-item">
                        <div className="md:w-64 flex-shrink-0 mb-2 md:mb-0 text-right md:pr-8">
                            <div className="text-accent font-mono text-sm">Aug 2024 — Present</div>
                            <div className="text-gray-500 text-xs mt-1">Zurich, CH</div>
                        </div>
                        <div className="flex-grow pl-8 border-l border-accent md:border-none relative md:before:absolute md:before:left-[-5px] md:before:top-1.5 md:before:w-2.5 md:before:h-2.5 md:before:bg-accent md:before:rounded-full">
                            <h3 className="text-2xl font-bold">Working Student Software Engineering</h3>
                            <div className="text-gray-400 mb-4">SIX Group AG</div>
                            <p className="text-gray-300 leading-relaxed max-w-2xl">
                                Research and development of a new AI chatbot for large collections of unstructured data.
                                Member of the core team for the SIX UI library, implementing modular components to optimize consistency and developer experience.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-gray-400">AI / R&D</span>
                                <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-gray-400">Web Components</span>
                            </div>
                        </div>
                    </div>

                    {/* Education 1 */}
                    <div className="flex flex-col md:flex-row md:gap-12 relative timeline-item">
                        <div className="md:w-64 flex-shrink-0 mb-2 md:mb-0 text-right md:pr-8">
                            <div className="text-white font-mono text-sm">Aug 2024 — 2028</div>
                            <div className="text-gray-500 text-xs mt-1">Anticipated</div>
                        </div>
                        <div className="flex-grow pl-8 border-l border-white/20 md:border-none relative md:before:absolute md:before:left-[-5px] md:before:top-1.5 md:before:w-2.5 md:before:h-2.5 md:before:bg-gray-600 md:before:rounded-full">
                            <h3 className="text-xl font-bold">BSc in Computer Science</h3>
                            <div className="text-gray-400">ZHAW Zurich University of Applied Sciences</div>
                        </div>
                    </div>

                    {/* Job 2 */}
                    <div className="flex flex-col md:flex-row md:gap-12 relative timeline-item">
                        <div className="md:w-64 flex-shrink-0 mb-2 md:mb-0 text-right md:pr-8">
                            <div className="text-white font-mono text-sm">Aug 2020 — Aug 2024</div>
                            <div className="text-gray-500 text-xs mt-1">4 Years</div>
                        </div>
                        <div className="flex-grow pl-8 border-l border-white/20 md:border-none relative md:before:absolute md:before:left-[-5px] md:before:top-1.5 md:before:w-2.5 md:before:h-2.5 md:before:bg-gray-600 md:before:rounded-full">
                            <h3 className="text-xl font-bold">Application Developer EFZ</h3>
                            <div className="text-gray-400 mb-4">SIX Group AG</div>
                            <p className="text-gray-300 leading-relaxed max-w-2xl text-sm">
                                Designed risk management tools for internal auditing. Implemented rule-based systems for validating OpenAPI specs.
                                Co-developed an application framework to streamline development processes.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-gray-400">Risk Management</span>
                                <span className="px-3 py-1 border border-white/20 rounded-full text-xs text-gray-400">OpenAPI</span>
                            </div>
                        </div>
                    </div>

                    {/* Education 2 */}
                    <div className="flex flex-col md:flex-row md:gap-12 relative timeline-item">
                        <div className="md:w-64 flex-shrink-0 mb-2 md:mb-0 text-right md:pr-8">
                            <div className="text-white font-mono text-sm">2020 — 2024</div>
                            <div className="text-gray-500 text-xs mt-1">Grade 5.6</div>
                        </div>
                        <div className="flex-grow pl-8 border-l border-white/20 md:border-none relative md:before:absolute md:before:left-[-5px] md:before:top-1.5 md:before:w-2.5 md:before:h-2.5 md:before:bg-gray-600 md:before:rounded-full">
                            <h3 className="text-xl font-bold">Vocational School (BMS)</h3>
                            <div className="text-gray-400">TBZ Zurich</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
