import type { Metadata } from "next";
import type { ToolLandingConfig, FAQSection, SupportPageConfig } from "./types";
import { BASE_URL } from "./config";

/**
 * 从工具落地页 config 生成 Next.js Metadata（title、description、OG、Twitter、canonical、hreflang）
 */
export function buildToolMetadata(
  config: ToolLandingConfig,
  baseUrl: string = BASE_URL
): Metadata {
  const { seo } = config;
  const canonical =
    (seo.alternates?.canonical ?? `${baseUrl}${config.canonicalPath}`.replace(/\/$/, "")) ||
    `${baseUrl}/`;
  const canonicalWithSlash = canonical.endsWith("/") ? canonical : `${canonical}/`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalWithSlash,
      ...(seo.alternates?.languages && Object.keys(seo.alternates.languages).length > 0
        ? { languages: seo.alternates.languages }
        : {}),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalWithSlash,
      siteName: "MassLoader",
      type: "website",
      images: [
        {
          url: seo.ogImage.startsWith("http") ? seo.ogImage : `${baseUrl}${seo.ogImage}`,
          width: 1200,
          height: 630,
          alt: seo.ogImageAlt ?? seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage.startsWith("http") ? seo.ogImage : `${baseUrl}${seo.ogImage}`],
    },
  };
}

/**
 * 生成 SoftwareApplication 类型 JSON-LD（用于工具落地页）
 */
export function buildSoftwareApplicationJsonLd(
  config: ToolLandingConfig,
  baseUrl: string = BASE_URL
): object {
  const jsonLd = config.jsonLd;
  const name = jsonLd?.name ?? config.seo.title;
  const image = config.seo.ogImage.startsWith("http")
    ? config.seo.ogImage
    : `${baseUrl}${config.seo.ogImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    ...(config.seo.ogImage && { image }),
    applicationCategory: jsonLd?.applicationCategory ?? "MultimediaApplication",
    operatingSystem: jsonLd?.operatingSystem ?? "Windows, macOS",
    offers: jsonLd?.offers
      ? {
          "@type": "Offer",
          price: jsonLd.offers.price,
          priceCurrency: jsonLd.offers.priceCurrency,
        }
      : { "@type": "Offer", price: "0", priceCurrency: "USD" },
    ...(jsonLd?.aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: jsonLd.aggregateRating.ratingValue,
        ratingCount: jsonLd.aggregateRating.ratingCount,
      },
    }),
  };
}

/**
 * 生成 FAQPage 类型 JSON-LD（用于 FAQ 区块）
 */
export function buildFaqJsonLd(faq: FAQSection): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * 从 Support 页 config 生成 Next.js Metadata
 */
export function buildSupportMetadata(
  config: SupportPageConfig,
  baseUrl: string = BASE_URL
): Metadata {
  const { seo } = config;
  const canonical = seo.canonical.endsWith("/") ? seo.canonical : `${seo.canonical}/`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      ...(seo.languages && Object.keys(seo.languages).length > 0 ? { languages: seo.languages } : {}),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: "MassLoader",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description,
    },
  };
}
