import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { profile } from "@/content/profile";
import { resolveContent } from "@/lib/utils";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const title = "Adarsh Singh | Software Developer Portfolio";
const description =
  "Portfolio of Adarsh Singh, focused on practical web systems, algorithmic simulations, and DBMS projects.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  applicationName: "Adarsh Singh Portfolio",
  authors: [{ name: profile.fullName, url: profile.github }],
  creator: profile.fullName,
  keywords: [
    "Adarsh Singh",
    "Vaayu0001",
    "portfolio",
    "software developer",
    "Next.js",
    "Traffic Signal Optimizer",
    "DBMS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: "Adarsh Singh Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Adarsh Singh portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Vaayu0001",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f8f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const label = resolveContent(profile.headline, profile.headlineFallback);

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-page"
        >
          Skip to content
        </a>
        <div aria-label={label}>{children}</div>
      </body>
    </html>
  );
}
