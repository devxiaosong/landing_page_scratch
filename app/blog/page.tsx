import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import BlogListContent from "../components/BlogListContent";
import { getAllPosts, getAllCategories } from "@/lib/posts";

import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog — MassLoader",
  description:
    "Tips, guides, and tutorials on downloading and converting videos from your favorite platforms.",
  alternates: {
    canonical: `${BASE_URL}/blog/`,
  },
  openGraph: {
    title: "Blog — MassLoader",
    description:
      "Tips, guides, and tutorials on downloading and converting videos from your favorite platforms.",
    url: `${BASE_URL}/blog/`,
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "MassLoader Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — MassLoader",
    description:
      "Tips, guides, and tutorials on downloading and converting videos from your favorite platforms.",
    images: [
      "/images/og-default.png",
    ],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div>
      <Header />

      <PageHero
        title="Blog"
        subtitle="Tips, guides & tutorials on downloading and converting videos"
      />

      <BlogListContent posts={posts} categories={categories} />

      <Footer />
    </div>
  );
}
