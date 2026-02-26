import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { BASE_URL, GA_ID } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    default: "MassLoader — Best Video Downloader for Netflix, OnlyFans & More",
    template: "%s — MassLoader",
  },
  description:
    "MassLoader is a professional video downloader supporting Netflix, OnlyFans, Amazon Prime, Disney+ and 10,000+ sites. Download videos in 1080p HD with one click.",
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    siteName: "MassLoader",
    type: "website",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "MassLoader Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "/images/og-default.png",
    ],
  },
  verification: {
    google: "Dwo9AIBGROv1P2p7BxptuxAH_Hx7LL6lGp_CM-9MuUA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
    </html>
  );
}
