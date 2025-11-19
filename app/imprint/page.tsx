export default function ImprintPage() {
    return (
        <main className="min-h-screen bg-neutral-950 pt-32 px-6">
            <div className="max-w-3xl mx-auto text-neutral-200">
                <h1 className="text-4xl font-bold mb-8 text-neutral-100">Imprint</h1>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-neutral-100">Angaben gemäß § 5 TMG</h2>
                        <p className="leading-relaxed">
                            Davide Marcoli<br />
                            Software Engineer<br />
                            Zurich, Switzerland
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-neutral-100">Contact</h2>
                        <p className="leading-relaxed">
                            Email: <a href="mailto:davidemarcoli@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">davidemarcoli@gmail.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-neutral-100">Disclaimer</h2>
                        <div className="space-y-4 text-neutral-300 text-sm">
                            <p>
                                <strong>Haftung für Inhalte</strong><br />
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            </p>
                            <p>
                                <strong>Haftung für Links</strong><br />
                                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            </p>
                            <p>
                                <strong>Urheberrecht</strong><br />
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
