import type { SimplePageConfig } from "@/lib/types";
import { siteConfig } from "./site.config";

export const cookiesPageConfig: SimplePageConfig = {
  title: `Cookie Policy — ${siteConfig.name}`,
  description:
    "Learn how MassLoader uses cookies, web beacons and similar technologies on our website and mobile app. Find out how to manage or block cookies in your browser.",
  canonicalPath: "/cookie-policy/",
  robots: { index: true, follow: false },
};

export const privacyPolicyPageConfig: SimplePageConfig = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description:
    "Read MassLoader's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our video downloader software.",
  canonicalPath: "/privacy-policy/",
  robots: { index: true, follow: false },
};

export const refundPolicyPageConfig: SimplePageConfig = {
  title: `Refund Policy — ${siteConfig.name}`,
  description:
    "Read MassLoader's Refund Policy. We offer a 30-day money-back guarantee. Learn about eligibility and how to request a refund.",
  canonicalPath: "/refund-policy/",
  robots: { index: true, follow: false },
};

export const shippingPolicyPageConfig: SimplePageConfig = {
  title: `Shipping Policy — ${siteConfig.name}`,
  description:
    "MassLoader delivers registration codes digitally via email within 24 hours of purchase. No physical shipping involved. Digital products accessible worldwide.",
  canonicalPath: "/shipping-policy/",
  robots: { index: true, follow: false },
};

export const statementPageConfig: SimplePageConfig = {
  title: `Statement — ${siteConfig.name}`,
  description:
    "MassLoader is for personal use only and should not be used for sharing or pirating. Please comply with the terms of service and enjoy your paid content responsibly.",
  canonicalPath: "/statement/",
  robots: { index: true, follow: false },
};

export const termsOfUsePageConfig: SimplePageConfig = {
  title: `Term Of Service — ${siteConfig.name}`,
  description:
    "Read MassLoader's Terms of Service. Understand your rights and obligations when accessing and using MassLoader's website and software services.",
  canonicalPath: "/term-of-service/",
  robots: { index: true, follow: false },
};

export const licenseAgreementPageConfig: SimplePageConfig = {
  title: `End User License Agreement — ${siteConfig.name}`,
  description:
    "Read MassLoader's End User License Agreement (EULA). Understand the terms and conditions for downloading, installing, and using MassLoader software.",
  canonicalPath: "/license-agreement/",
  robots: { index: true, follow: false },
};

export const downloadPageConfig: SimplePageConfig = {
  title: `Download ${siteConfig.name} — Free Video Downloader for Windows & Mac`,
  description:
    "Download MassLoader for Windows or Mac for free. The most powerful video downloader supporting Netflix, OnlyFans, Amazon Prime, Disney+ and 10,000+ sites.",
  canonicalPath: "/download/",
  openGraph: {
    title: `Download ${siteConfig.name} — Free Video Downloader for Windows & Mac`,
    description:
      "Download MassLoader for Windows or Mac for free. Supports Netflix, OnlyFans, Amazon Prime, Disney+ and 10,000+ sites.",
  },
};
