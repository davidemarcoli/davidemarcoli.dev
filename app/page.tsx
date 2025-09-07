"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skill from "@/components/skill";
import Project from "@/components/project";
import { useGSAP } from "@gsap/react";
import EducationTimeline from "@/components/education-timeline";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function Home() {
  const headerNameRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gradeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const languageSkillsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null); // underline for hero

  // Hero reveal (lightweight clip-path wipe + underline)
  useGSAP(() => {
    const nameEl = nameRef.current;
    const underlineEl = underlineRef.current;
    if (!nameEl || !underlineEl) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      gsap.set(nameEl, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 });
      gsap.set(underlineEl, { scaleX: 1, transformOrigin: "left center" });
      return;
    }

    gsap.set(nameEl, {
      clipPath: "inset(0% 100% 0% 0%)",
      willChange: "clip-path",
    });
    gsap.set(underlineEl, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(nameEl, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9 }, 0)
      .fromTo(
        nameEl,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        0
      )
      .to(
        underlineEl,
        { scaleX: 1, duration: 0.7, ease: "back.out(1.4)" },
        0.5
      );
  }, []);

  useGSAP(
    () => {
      const scrambleTextConfig = {
        scrambleText: {
          text: "{original}",
          chars: "upperAndLowerCase",
          speed: 0.5,
        },
        duration: 2,
      };

      // Animate the header name
      gsap.to(headerNameRef.current, scrambleTextConfig);

      // Remove scramble from the home section (replaced by reveal)
      // gsap.to(nameRef.current, scrambleTextConfig);

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
        }
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
        }
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
        }
      );

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
        }
      );

      // Animate the language skills section
      gsap.fromTo(
        languageSkillsRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.8,
          scrollTrigger: {
            trigger: languageSkillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the skills section
      gsap.fromTo(
        skillsRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div className="relative w-full min-h-dvh">
      <nav className="fixed top-0 w-screen p-4 flex z-[9999] mix-blend-difference backdrop-blur">
        <div className="flex-1 hidden sm:block">
          <a href="#home" className="no-underline text-white text-[13.5px]">
            <div ref={headerNameRef}>Davide Marcoli</div>
          </a>
        </div>
        <div className="flex-1 flex gap-4 justify-center">
           <Link
            href="/posts"
            className="no-underline text-white text-[13.5px] font-medium"
          >
            Posts
          </Link>
          <a
            target="_blank"
            href="https://github.com/davidemarcoli"
            className="no-underline text-white text-[13.5px] font-medium"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://ch.linkedin.com/in/davide-marcoli-3b2b321bb"
            className="no-underline text-white text-[13.5px] font-medium"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            href="mailto:davide@marcoli.ch"
            className="no-underline text-white text-[13.5px] font-medium"
          >
            Mail
          </a>
        </div>
        <div className="flex-1 justify-end hidden sm:flex">
          <a
            href="#home"
            className="no-underline text-white text-[13.5px] font-medium"
          >
            Reload
          </a>
        </div>
      </nav>
      <div
        id="home"
        className="bg-white h-dvh flex items-center justify-center"
      >
        <div className="flex flex-col items-center">
          <div
            ref={nameRef}
            className="text-4xl sm:text-6xl font-bold text-black"
          >
            Davide Marcoli
          </div>
          <div
            ref={underlineRef}
            className="mt-3 h-[2px] bg-black w-24 origin-left scale-x-0"
          />
        </div>
      </div>
      <div
        ref={sectionRef}
        id="about"
        className="min-h-dvh flex flex-col py-8 px-4 sm:px-0 max-w-4xl mx-auto"
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
          <div className="mb-4">
            <p className="text-base font-bold text-gray-100 mb-1">
              Working Student Software Engineering
            </p>
            <p className="text-sm text-gray-300 mb-1">
              SIX Group AG Zurich, CH
            </p>
            <p className="text-xs text-gray-500 mb-3">Aug 2024-Present</p>
            <ul className="list-none pl-0 space-y-3 text-sm text-gray-100">
              <Experience>
                Taking part in research and development of a new ai chatbot for
                large collection of unstructured data
              </Experience>
              <Experience>
                Implementing modular components for internal ui library
              </Experience>
              <Experience>
                <div>
                  Member of the core team for the
                  <a
                    href="https://github.com/six-group/six-webcomponents"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300 mx-1"
                  >
                    six ui library
                  </a>
                  to optimize consistency and developer experience.
                </div>
              </Experience>
            </ul>
          </div>
          <div className="mb-3">
            <p className="text-base font-bold text-gray-100 mb-1">
              Application Developer EFZ
            </p>
            <p className="text-sm text-gray-300 mb-1">
              SIX Group AG Zurich, CH
            </p>
            <p className="text-xs text-gray-500 mb-3">Aug 2020-Aug 2024</p>
            <ul className="list-none pl-0 space-y-3 text-sm text-gray-100">
              <Experience>
                Designing and implementing a risk management tool for internal
                auditing to improve compliance and efficiency.
              </Experience>
              <Experience>
                Implementing a rule based system for validating OpenAPI specs
              </Experience>
              <Experience>
                Working together with experts from various fields to develop an
                application framework to streamline the development process and
                integration with internal systems.
              </Experience>
              <Experience>
                Member of the core team for the six ui library to optimize
                consistency and developer experience.
              </Experience>
            </ul>
          </div>
        </div>
        <div ref={educationRef} className="mb-8 pb-4 border-b-2 border-white">
          <p className="text-sm text-gray-300 mb-1">Education</p>
          {/* <EducationTimeline /> */}
          <div className="space-y-3">
            <Education
              institution="Bachelor of Science in Computer Science"
              location="ZHAW Zurich University of Applied Sciences, CH"
              dates="Aug 2024-Aug 2028 (anticipated)"
            />
            <Education
              institution="Vocational School"
              location="Technische Berufsschule Zurich / Berufsmaturitätsschule Zurich, CH"
              dates="Aug 2020-Aug 2024"
            />
            <Education
              institution="Basic Apprenticeship Year"
              location="NoserYoung Zurich, CH"
              dates="Aug 2020-Aug 2021"
            />
            <Education
              institution="Secondary School"
              location="Secondary School Illnau, CH"
              dates="Aug 2017-Aug 2020"
            />
            <Education
              institution="Primary School"
              location="Primary School Illnau, CH"
              dates="Aug 2011-Aug 2017"
            />
          </div>
        </div>
        <div
          ref={languageSkillsRef}
          className="mb-8 pb-4 border-b-2 border-white"
        >
          <p className="text-sm text-gray-300 mb-1">Language Skills</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm text-gray-100 mt-3">
            <div>
              <span className="font-bold">German:</span> Native
            </div>
            <div>
              <span className="font-bold">English:</span> Advanced
            </div>
            <div>
              <span className="font-bold">French:</span> Intermediate
            </div>
            <div>
              <span className="font-bold">Italian:</span> Beginner
            </div>
          </div>
        </div>
        <div ref={skillsRef} className="pb-4">
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
        <h1 className="text-white text-4xl sm:text-6xl font-sans font-light mb-4 px-8">
          Projects
        </h1>
        <p className="text-gray-400 text-md sm:text-lg mb-16 px-8">
          Showcasing my favorite works and collaborations in web development.
        </p>
        <div className="w-full h-px bg-white"></div>
        <Project title="SIX Web Components" href="/projects/six-webcomponents" />
        <div className="w-full h-px bg-white"></div>
        <Project title="WOS Formation Generator" href="/projects/wos-formation-generator" />
        <div className="w-full h-px bg-white"></div>
        <Project title="SIX Mensa" href="/projects/six-mensa" />
        <div className="w-full h-px bg-white"></div>
        <Project title="davidemarcoli.dev" href="/projects/davidemarcoli.dev" />
      </div>
      {/* Footer */}
      <footer className="bg-white text-black text-center py-6">
        <nav className="flex justify-center gap-6">
          <a href="/imprint" className="hover:underline">Imprint</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Davide Marcoli</p>
      </footer>
      {/* <div className="w-full h-px bg-white"></div> */}
    </div>
  );
}
