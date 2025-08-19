import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const APP_NAME = "Davide Marcoli";
const APP_DESCRIPTION =
  "Personal website of Davide Marcoli, a Swiss developer based near Zurich.";
const APP_URL = "https://davidemarcoli.dev";
const AUTHOR_NAME = "Davide Marcoli";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  applicationName: APP_NAME,
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: [
    AUTHOR_NAME,
    "Software Engineer",
    "Zurich",
    "Switzerland",
    "Portfolio",
  ],
  authors: [{ name: AUTHOR_NAME, url: APP_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: APP_URL,
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1362,
        height: 482,
        alt: APP_NAME,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/icon-192x192.png", sizes: "192x192" },
    { rel: "icon", url: "/icon-256x256.png", sizes: "256x256" },
    { rel: "icon", url: "/icon-384x384.png", sizes: "384x384" },
    { rel: "icon", url: "/icon-512x512.png", sizes: "512x512" },
  ],
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
