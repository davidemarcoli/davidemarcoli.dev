"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skill from "@/components/skill";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gradeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the grade section
      gsap.fromTo(
        gradeRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gradeRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Animate the about section
      gsap.fromTo(
        aboutRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Animate the experience section
      gsap.fromTo(
        experienceRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    // Animate the education section
    gsap.fromTo(
      educationRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full min-h-dvh">
      <div className="bg-white h-dvh flex items-center justify-center">
        <div className="text-4xl font-bold text-black">Davide Marcoli</div>
      </div>
      <div
        ref={sectionRef}
        className="min-h-dvh flex flex-col py-8 max-w-4xl mx-auto"
      >
        <div ref={gradeRef} className="mb-8 pb-4 border-b-2 border-white">
          <p className="text-lg md:text-xl text-gray-100 mb-3">
            Application Developer EFZ ≈ 5.6 Final Grade
          </p>
        </div>
        <div ref={aboutRef} className="mb-8 pb-4 border-b-2 border-white">
          <p className="text-sm text-gray-300 mb-1">About Me</p>
          <p className="text-base leading-relaxed text-gray-100 mb-3">
            Hi, my name is Davide, I&apos;m a swiss developer based near Zurich.
            I&apos;m currently working at{" "}
            <a
              target="_blank"
              className="underline duration-500 hover:text-zinc-300"
              href="https://sixgroup.com"
            >
              SIX
            </a>{" "}
            and studying computer science at the{" "}
            <a
              target="_blank"
              className="underline duration-500 hover:text-zinc-300"
              href="https://zhaw.ch"
            >
              ZHAW
            </a>
            .
          </p>
        </div>
        <div ref={experienceRef} className="mb-8 pb-4 border-b-2 border-white">
          <p className="text-sm text-gray-300 mb-1">Professional Experience</p>
          <div className="mb-3">
            <p className="text-base font-bold text-gray-100 mb-1">
              Application Developer EFZ
            </p>
            <p className="text-sm text-gray-300 mb-1">
              SIX Group AG Zurich, CH
            </p>
            <p className="text-xs text-gray-500 mb-3">Aug 2020-Current</p>
            <ul className="list-none pl-0 space-y-3 text-sm text-gray-100">
              <Experience>
                Designing and implementing a risk management tool for internal
                auditing to improve compliance and efficiency.
              </Experience>
              <Experience>
                Implemented a CI/CD infrastructure with OpenShift for efficient
                deployments
              </Experience>
              <Experience>
                Automated tests with GitLab pipelines to ensure scalable and
                reliable releases
              </Experience>
              <Experience>
                Member of the core team component for the six ui library to
                optimize consistency and developer experience.
              </Experience>
            </ul>
          </div>
        </div>
        <div ref={educationRef} className="mb-8 pb-4 border-b-2 border-white">
          <p className="text-sm text-gray-300 mb-1">Education</p>
          <div className="space-y-3">
            <Education
              institution="Primary School"
              location="Primary School Illnau, CH"
              dates="Aug 2011-Aug 2017"
            />
            <Education
              institution="Secondary School"
              location="Secondary School Illnau, CH"
              dates="Aug 2017-Aug 2020"
            />
            <Education
              institution="Basic Apprenticeship Year"
              location="NoserYoung Zurich, CH"
              dates="Aug 2020-Aug 2021"
            />
            <Education
              institution="Vocational School"
              location="Technische Berufsschule Zurich / Berufsmaturitätsschule Zurich, CH"
              dates="Aug 2020-Aug 2025"
            />
            <Education
              institution="Bachelor of Science in Computer Science"
              location="ZHAW Zurich University of Applied Sciences, CH"
              dates="Aug 2025-Aug 2028 (anticipated)"
            />
          </div>
        </div>
        <div className="mb-8 pb-4 border-b-2 border-white">
          <p className="text-sm text-gray-300 mb-1">Language Skills</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm text-gray-100 mt-3">
            <div>
              <span className="font-bold">German:</span> Native Language
            </div>
            <div>
              <span className="font-bold">English:</span> Advanced
            </div>
            <div>
              <span className="font-bold">French:</span> Intermediate
            </div>
            <div>
              <span className="font-bold">Italian:</span> Basic Knowledge
            </div>
          </div>
        </div>
        <div className="pb-4">
          <p className="text-sm text-gray-300 mb-1">Skills</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-gray-100 mt-3">
            <Skill>HTML/CSS</Skill>
            <Skill>TS/JS</Skill>
            <Skill>Angular</Skill>
            <Skill>React</Skill>
            <Skill>Spring</Skill>
            <Skill>Docker</Skill>
            <Skill>Kubernetes</Skill>
            <Skill>Java</Skill>
            <Skill>Python</Skill>
            <Skill>Langchain</Skill>
            <Skill>Postgres (pgvector)</Skill>
            <Skill>Git</Skill>
          </div>
          {/* <button className="text-black bg-white rounded-sm p-2 w-full mt-5">
            CTRL + P
          </button> */}
        </div>
      </div>
      <div id="projects" className="bg-black min-h-96vh p-8">
        <h1 className="text-white text-6xl font-sans font-light mb-4 px-8">
          Projects
        </h1>
        <p className="text-gray-400 text-lg mb-16 px-8">
          Showcasing my favorite works and collaborations in web development.
        </p>
        <div className="w-full h-px bg-white"></div>
        <div className="relative w-full py-8 cursor-pointer flex items-center justify-between">
          <div className="relative z-10 px-8 flex-grow">
            <h2 className="text-white text-5xl font-sans font-light">
              SIX Web Components
            </h2>
          </div>
        </div>
        <div className="w-full h-px bg-white"></div>
        <div className="relative w-full py-8 cursor-pointer flex items-center justify-between">
          <div className="relative z-10 px-8 flex-grow">
            <h2 className="text-white text-5xl font-sans font-light">
              Riven
            </h2>
          </div>
        </div>
        <div className="w-full h-px bg-white"></div>
        <div className="relative w-full py-8 cursor-pointer flex items-center justify-between">
          <div className="relative z-10 px-8 flex-grow">
            <h2 className="text-white text-5xl font-sans font-light">
              davidemarcoli.dev
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
