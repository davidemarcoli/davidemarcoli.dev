export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-neutral-950 py-32 px-6">
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

                            <div>
                                <h3 className="font-medium text-neutral-100 mb-2">Ezoic Services</h3>
                                <p>
                                    This website uses the services of Ezoic Inc. (“Ezoic”), including to manage third-party interest-based advertising.
                                    Ezoic may employ a variety of technologies on this website, including tools to serve content, display advertisements and enable advertising to visitors of this website, which may utilize first and third-party cookies.
                                    A cookie is a small text file sent to your device by a web server that enables the website to remember information about your browsing activity.
                                    First-party cookies are created by the site you are visiting, while third-party cookies are set by domains other than the one you're visiting.
                                    Ezoic and our partners may place third-party cookies, tags, beacons, pixels, and similar technologies to monitor interactions with advertisements and optimize ad targeting.
                                    Please note that disabling cookies may limit access to certain content and features on the website, and rejecting cookies does not eliminate advertisements but will result in non-personalized advertising.
                                    You can find more information about cookies and how to manage them <a href="https://allaboutcookies.org/">here</a>. The following information may be collected, used, and stored in a cookie when serving personalized ads:
                                    <ul className="list-disc list-inside">
                                        <li>IP address</li>
                                        <li>Operating system type and version</li>
                                        <li>Device type</li>
                                        <li>Language preferences</li>
                                        <li>Web browser type</li>
                                        <li>Email (in a hashed or encrypted form)</li>
                                    </ul>
                                    Ezoic and its partners may use this data in combination with information that has been independently collected to deliver targeted advertisements across various platforms and websites. Ezoic’s partners may also gather additional data, such as unique IDs, advertising IDs, geolocation data, usage data, device information, traffic data, referral sources, and interactions between users and websites or advertisements, to create audience segments for targeted advertising across different devices, browsers, and apps. You can find more information about interest-based advertising and how to manage them <a href="https://youradchoices.com/">here</a>. You can view Ezoic’s privacy policy <a href="https://ezoic.com/privacy/">here</a>, or for additional information about Ezoic’s advertising and other partners, you can view Ezoic’s advertising partners <a href="https://www.ezoic.com/privacy-policy/advertising-partners/">here</a>.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-neutral-100">Contact</h2>
                        <p className="text-neutral-300">
                            For questions about privacy, please contact us at: <a href="mailto:davide@marcoli.ch" className="text-blue-400 hover:text-blue-300 transition-colors">davide@marcoli.ch</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
