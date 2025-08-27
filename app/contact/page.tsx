export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="mb-4">
        If you would like to get in touch, please use the information below:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Email: <a href="mailto:davide@marcoli.ch" className="text-blue-600 underline">davide@marcoli.ch</a></li>
        <li>GitHub: <a href="https://github.com/davidemarcoli" className="text-blue-600 underline" target="_blank">github.com/davidemarcoli</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/davide-marcoli-3b2b321bb" className="text-blue-600 underline" target="_blank">LinkedIn Profile</a></li>
      </ul>
    </main>
  );
}
