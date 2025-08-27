export default function Imprint() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Imprint</h1>
      <p>
        This website is operated by:
        <br />
        <strong>Davide Marcoli</strong>
        <br />
        Location: Zurich, Switzerland
      </p>
      <p className="mt-4">
        Email:{" "}
        <a
          href="mailto:davide@marcoli.ch"
          className="text-blue-600 underline"
        >
          davide@marcoli.ch
        </a>
      </p>
      <p className="mt-4">
        Responsible for the content under Swiss law: Davide Marcoli.
      </p>
    </main>
  );
}
