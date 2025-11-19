export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-neutral-950 pt-32 px-6">
            <div className="max-w-3xl mx-auto text-neutral-200">
                <h1 className="text-4xl font-bold mb-8 text-neutral-100">Privacy Policy</h1>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-neutral-100">General Information</h2>
                        <p className="text-neutral-300 mb-4">
                            The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-neutral-100">Data Collection on this Website</h2>
                        <div className="space-y-4 text-neutral-300">
                            <p>
                                <strong>Who is responsible for data collection on this website?</strong><br />
                                The data processing on this website is carried out by the website operator. You can find their contact details in the imprint of this website.
                            </p>
                            <p>
                                <strong>How do we collect your data?</strong><br />
                                On the one hand, your data is collected when you communicate it to us. This can be, for example, data that you enter in a contact form. Other data is collected automatically or with your consent by our IT systems when you visit the website. This is primarily technical data (e.g. internet browser, operating system or time of the page view). This data is collected automatically as soon as you enter this website.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-neutral-100">Analytics and Third-party Tools</h2>
                        <div className="space-y-4 text-neutral-300">
                            <div>
                                <h3 className="font-medium text-neutral-100 mb-2">Cloudflare Web Analytics</h3>
                                <p>
                                    This website uses Cloudflare Web Analytics. Cloudflare Web Analytics does not use any client-side state, such as cookies or localStorage, to collect usage metrics. We also don&apos;t &quot;fingerprint&quot; individuals via their IP address, User Agent string, or any other data for the purpose of displaying analytics.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-neutral-100 mb-2">Umami Analytics</h3>
                                <p>
                                    We use Umami to collect anonymous usage data. Umami does not use cookies and does not collect any personal data.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-neutral-100 mb-2">Google AdSense</h3>
                                <p>
                                    This website uses Google AdSense, a service for including advertisements from Google Inc. (&quot;Google&quot;). Google AdSense uses so-called &quot;cookies&quot;, text files that are stored on your computer and that allow an analysis of the use of the website. Google AdSense also uses so-called web beacons (invisible graphics). Through these web beacons, information such as visitor traffic on these pages can be evaluated.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-neutral-100">Contact</h2>
                        <p className="text-neutral-300">
                            For questions about privacy, please contact us at: <a href="mailto:davidemarcoli@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">davidemarcoli@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
