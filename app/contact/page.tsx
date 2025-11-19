import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-neutral-950 pt-32 px-6">
            <div className="max-w-3xl mx-auto text-neutral-200">
                <h1 className="text-4xl font-bold mb-8 text-neutral-100">Contact</h1>

                <div className="space-y-6 text-lg">
                    <p>
                        I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                        <h2 className="text-xl font-semibold mb-4 text-neutral-100">Get in touch</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="text-neutral-400">Email:</span>
                                <a href="mailto:davide@marcoli.ch" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    davide@marcoli.ch
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-neutral-400">GitHub:</span>
                                <a href="https://github.com/davidemarcoli" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    github.com/davidemarcoli
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-neutral-400">LinkedIn:</span>
                                <a href="https://ch.linkedin.com/in/davide-marcoli-3b2b321bb" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    linkedin.com/in/davide-marcoli-3b2b321bb
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
