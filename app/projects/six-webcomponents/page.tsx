import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davide Marcoli - SIX Web Components",
  description: "A comprehensive library of web components.",
};

export default function SixWebComponents() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">SIX Web Components Library</h1>

      <p className="mb-4">
        The <b>SIX Web Components</b> library is an open-source, framework-agnostic
        UI toolkit developed by SIX Group to accelerate the creation of web
        applications while ensuring consistent alignment with the SIX Corporate
        Styleguide. It delivers a wide range of ready-to-use Web Components built
        with modern web standards and performance in mind.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Key Features</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <b>Framework-Agnostic:</b> Offers dedicated wrappers for React,
          Angular, and Vue, plus support for plain JavaScript—making it highly
          versatile for various frontend architectures.
        </li>
        <li>
          <b>Built on Web Components:</b> Utilizes standards-based Web Components
          compiled with Stencil for high performance and browser compatibility.
        </li>
        <li>
          <b>Corporate Styling Compliance:</b> Ensures visual and interaction
          consistency by adhering to the SIX Corporate Styleguide.
        </li>
        <li>
          <b>Rich Documentation & Examples:</b> Ships with VitePress-based API
          documentation and demo apps across Angular, JS, Vue (and React),
          providing quick onboarding.
        </li>
        <li>
          <b>Open Source & Modular Structure:</b> Released under the Apache-2.0
          license with a modular code structure for easy maintenance and
          contribution.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Architecture Overview</h2>
      <p className="mb-4">
        The library is built on Stencil, a compiler that generates standards-compliant
        Web Components. This ensures that the components are lightweight, fast, and
        compatible across modern browsers.
        <br />
        For each supported framework (React, Angular, Vue), there are dedicated
        wrapper packages that make integration seamless. The core component library is
        maintained separately, allowing for independent updates and enhancements.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why It Matters</h2>
      <p>
        The SIX Web Components library empowers teams to maintain a consistent
        design system across multiple applications and frameworks. Its open-source
        nature invites internal and external contributions, fostering innovation
        and quality. Built with performance and clarity in mind, it&apos;s a powerful tool
        for building trustworthy, enterprise-grade user interfaces.
      </p>
    </main>
  );
}
