import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davide Marcoli - SIX Web Components",
  description: "A comprehensive library of web components.",
};

export default function DavideMarcoliDev() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">davidemarcoli.dev</h1>

      <p className="mb-4">
        This is my personal website where I share my projects and personal experiences.
        It serves as a portfolio to document my journey as a developer.
      </p>
      <p className="mb-4">
        Built with <strong>Next.js</strong> and <strong>TypeScript</strong>, styled
        with <strong>Tailwind CSS</strong>, and deployed on
        <strong> Vercel</strong>.
        It uses GSAP for animations on the homepage.
      </p>
      <p>
        This version is heavily inspired by the Stefan Laux (<a href="https://www.stefan-laux.dev/" target="_blank">stefan-laux.dev</a>). Thanks Stefan for the inspiration!
      </p>
    </main>
  );
}
