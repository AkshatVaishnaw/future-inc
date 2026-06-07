import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://futureinc.agency"),
  title: {
    default: "Future Inc — AI Marketing Agency",
    template: "%s | Future Inc",
  },
  description:
    "Future Inc is a premium AI-powered digital marketing agency helping businesses scale through AI automation, Meta Ads, Google Ads, SEO, and cutting-edge web development.",
  keywords: [
    "AI marketing agency",
    "digital marketing",
    "Meta Ads",
    "Google Ads",
    "SEO",
    "AI automation",
    "web development",
    "CRM automation",
    "WhatsApp automation",
    "content marketing",
  ],
  authors: [{ name: "Future Inc" }],
  creator: "Future Inc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://futureinc.agency",
    siteName: "Future Inc",
    title: "Future Inc — AI Marketing Agency",
    description:
      "We build brands, generate leads, and scale businesses using AI, Performance Marketing, SEO, and Automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Future Inc — AI Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Inc — AI Marketing Agency",
    description:
      "We build brands, generate leads, and scale businesses using AI, Performance Marketing, SEO, and Automation.",
    images: ["/og-image.png"],
    creator: "@futureinc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
