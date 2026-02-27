import type { Metadata } from "next";
import type { ToolLandingConfig, SiteConfig, BlogConfig, SimplePageConfig, SupportPageConfig } from "./types";
import type { CategoryMeta, Post } from "./posts";
import { BASE_URL } from "./config";
import { siteConfig } from "@/content/site.config";

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
      siteName: siteConfig.name,
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
 * 从站点级 SiteConfig 生成根布局（layout.tsx）所需的 Next.js Metadata
 */
export function buildRootLayoutMetadata(
  config: SiteConfig,
  baseUrl: string = BASE_URL
): Metadata {
  const ogImageUrl = config.defaultOgImage.startsWith("http")
    ? config.defaultOgImage
    : `${baseUrl}${config.defaultOgImage}`;

  return {
    title: {
      default: config.defaultTitle,
      template: config.titleTemplate,
    },
    description: config.defaultDescription,
    metadataBase: new URL(baseUrl),
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
    openGraph: {
      siteName: config.name,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: config.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImageUrl],
    },
    ...(config.googleVerification && {
      verification: {
        google: config.googleVerification,
      },
    }),
  };
}

/**
 * 从简单静态页 config 生成 Next.js Metadata（法律页、下载页等）
 */
export function buildSimplePageMetadata(
  config: SimplePageConfig,
  baseUrl: string = BASE_URL
): Metadata {
  const canonical = `${baseUrl}${config.canonicalPath}`;

  return {
    title: config.title,
    description: config.description,
    alternates: { canonical },
    ...(config.robots && { robots: config.robots }),
    ...(config.openGraph && {
      openGraph: {
        title: config.openGraph.title ?? config.title,
        description: config.openGraph.description ?? config.description,
        url: canonical,
        siteName: siteConfig.name,
        type: "website",
      },
    }),
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
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description,
    },
  };
}

/**
 * 博客首页静态 Metadata
 */
export function buildBlogIndexMetadata(
  config: BlogConfig,
  baseUrl: string = BASE_URL
): Metadata {
  const title = `Blog — ${siteConfig.name}`;
  const canonical = `${baseUrl}${config.basePath}/`;
  const ogImageUrl = `${baseUrl}${siteConfig.defaultOgImage}`;

  return {
    title,
    description: config.indexDescription,
    alternates: { canonical },
    openGraph: {
      title,
      description: config.indexDescription,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: `${siteConfig.name} Blog` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: config.indexDescription,
      images: [ogImageUrl],
    },
  };
}

/**
 * 博客分类页动态 Metadata
 */
export function buildBlogCategoryMetadata(
  config: BlogConfig,
  cat: CategoryMeta,
  baseUrl: string = BASE_URL
): Metadata {
  const title = `${cat.label} — ${siteConfig.name} Blog`;
  const description = config.categoryDescriptionTemplate.replace("{label}", cat.label);
  const canonical = `${baseUrl}${config.basePath}/${cat.slug}/`;
  const ogImageUrl = `${baseUrl}${siteConfig.defaultOgImage}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: `${siteConfig.name} Blog — ${cat.label}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

/**
 * 博客文章页动态 Metadata
 */
export function buildBlogPostMetadata(
  config: BlogConfig,
  post: Post,
  baseUrl: string = BASE_URL
): Metadata {
  const title = `${post.title} — ${siteConfig.name} Blog`;
  const ogImage = post.coverImage
    ? (post.coverImage.startsWith("http") ? post.coverImage : `${baseUrl}${post.coverImage}`)
    : `${baseUrl}${siteConfig.defaultOgImage}`;
  const canonical = `${baseUrl}${config.basePath}/${post.category}/${post.slug}/`;

  return {
    title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}
