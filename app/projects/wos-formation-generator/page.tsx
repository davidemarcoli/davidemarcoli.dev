import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davide Marcoli - WoS Formation Generator",
  description:
    "An advanced tool for creating and optimizing hero formations for the Bear Hunt event in Whiteout Survival.",
};

export default function WosFormationGenerator() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Whiteout Survival Formation Generator</h1>

      <p className="mb-4">
        The <strong>WoS Formation Generator</strong> is a web-based tool designed
        for players of <em>Whiteout Survival</em>, specifically for the
        <strong> Bear Hunt</strong> event. This tool helps you quickly create optimized hero formations for maximum damage.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why This Tool Exists</h2>
      <p className="mb-4">
        In <em>Whiteout Survival</em>, the Bear Hunt event challenges players to
        make as much damage as possible. Choosing the right heroes can significantly impact your
        overall damage and ranking. Doing this manually is time-consuming and needs expertise,
        so this tool automates the process and makes formation building intuitive and fast.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Technology Stack</h2>
      <p className="mb-4">
        Built using <strong>Next.js</strong> and <strong>TypeScript</strong>, styled
        with <strong>Tailwind CSS</strong>, and deployed on
        <strong> Vercel</strong>. The app ensures a smooth, responsive experience
        across desktop and mobile devices for players on the go.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why It Matters for Players</h2>
      <p className="mb-4">
        High damage scores in Bear Hunt not only boosts personal rewards but also
        contribute to alliance performance. This tool simplifies formation building, 
        allowing you to spend less time planning and more time playing.
        Whether you&apos;re a casual player, the tool helps you compete effectively.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Try It Out</h2>
      <p className="mb-4">
        Use the live tool here:{" "}
        <a
          href="https://wos-formation-generator.davidemarcoli.dev/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          wos-formation-generator.davidemarcoli.dev
        </a>
        . Check out the open-source code on{" "}
        <a
          href="https://github.com/davidemarcoli/wos-formation-generator/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </main>
  );
}
