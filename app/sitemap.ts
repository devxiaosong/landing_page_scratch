import { MetadataRoute } from "next";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import { BASE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [

    // ── Core pages ──────────────────────────────────────────
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${BASE_URL}/`,
          de: `${BASE_URL}/de`,
        },
      },
    },
    {
      url: `${BASE_URL}/de`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/netflix-video-downloader/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ── Support ──────────────────────────────────────────────
    {
      url: `${BASE_URL}/support/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${BASE_URL}/support/`,
          de: `${BASE_URL}/de/support`,
        },
      },
    },
    {
      url: `${BASE_URL}/de/support`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── Blog ─────────────────────────────────────────────────
    {
      url: `${BASE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },

    // ── Legal pages ──────────────────────────────────────────
    {
      url: `${BASE_URL}/privacy-policy/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/refund-policy/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/statement`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/license-agreement`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms-of-use`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/shipping-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },

  ];

  // Blog category pages
  const categories = getAllCategories();
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/blog/${cat.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Blog article pages
  const posts = getAllPosts();
  const articlePages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.category}/${post.slug}/`,
    lastModified: post.date ? new Date(post.date).toISOString() : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
