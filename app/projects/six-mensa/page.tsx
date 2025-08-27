import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davide Marcoli - SIX Web Components",
  description: "A comprehensive library of web components.",
};

export default function SIXMensa() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">SIX Mensa</h1>

      <p className="mb-4">
        This is a website to check the menu of the canteens at SIX Group in Zurich.
      </p>
      <p className="mb-4">
        Why... because the official website links to a PDF file and I wanted to
        have a better experience.
      </p>
      <div className="mb-4">
        Features:
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Check the menu for the current week</li>
          <li>Compare the menus of the two canteens</li>
          <li>Translate the menu items</li>
          <li>Dark mode support</li>
        </ul>
      </div>
      <p className="mb-4">
        Built with <strong>Next.js</strong> and <strong>TypeScript</strong>, styled
        with <strong>Tailwind CSS</strong>, and deployed on
        <strong> Vercel</strong>.
        I use Regex to parse the menu data from the PDF files. It&apos;s not perfect, but it works
        well enough for my needs. In the future I would like to use AI to improve the parsing.
      </p>
      <p>
        This project is open source and available on{" "}
        <a
          href="https://github.com/davidemarcoli/six-mensa"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
        You can check it out{" "}
        <a
          href="https://mensa.davidemarcoli.dev/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>
    </main>
  );
}
