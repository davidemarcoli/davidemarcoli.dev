export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        We respect your privacy and comply with applicable data protection laws.
        This website does not collect personal data unless explicitly provided
        by you (e.g., via email).
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies and Analytics</h2>
      <p className="mb-4">
        We may use cookies for improving user experience and Google AdSense to
        display ads. Third-party vendors, including Google, may use cookies to
        serve ads based on your prior visits. You can opt out of personalized
        advertising by visiting{" "}
        <a
          href="https://www.google.com/settings/ads"
          className="text-blue-600 underline"
          target="_blank"
        >
          Google Ads Settings
        </a>
        .
        For analytics, we use Cloudflare Web Analytics and Umami, which do not
        track personal data.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        For questions regarding this policy, please contact us via{" "}
        <a
          href="mailto:davide@marcoli.ch"
          className="text-blue-600 underline"
        >
          davide@marcoli.ch
        </a>
        .
      </p>
    </main>
  );
}
