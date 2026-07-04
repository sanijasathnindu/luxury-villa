import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://villaaurelia.example"),
  title: {
    default: "Villa Aurelia | Private Luxury Villa in Uluwatu, Bali",
    template: "%s | Villa Aurelia",
  },
  description:
    "A cinematic private luxury villa in Uluwatu, Bali with six suites, infinity pool, ocean views, private chef, concierge service, and resort-level amenities.",
  applicationName: "Villa Aurelia",
  keywords: [
    "luxury villa Bali",
    "Uluwatu private villa",
    "infinity pool villa",
    "private chef villa",
    "luxury resort residence",
  ],
  authors: [{ name: "Villa Aurelia" }],
  creator: "Villa Aurelia",
  publisher: "Villa Aurelia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Villa Aurelia",
    title: "Villa Aurelia | Private Luxury Villa in Uluwatu, Bali",
    description:
      "Six private suites, cliffside infinity pool, chef-led dining, and discreet concierge service on Bali's Uluwatu coast.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=86",
        width: 1600,
        height: 900,
        alt: "Villa Aurelia luxury tropical villa with pool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Aurelia | Private Luxury Villa in Uluwatu, Bali",
    description:
      "A cinematic private villa with six suites, infinity pool, private chef, concierge, and ocean views.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=86",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f0e0c]">{children}</body>
    </html>
  );
}
