import Header from "../components/Header";
import Footer from "../components/Footer";
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

      {/* Hero Banner */}
      <section
        className="p-10 md:p-20"
        style={{
          backgroundImage:
            "linear-gradient(12deg, rgba(193, 193, 193,0.05) 0%, rgba(193, 193, 193,0.05) 2%,rgba(129, 129, 129,0.05) 2%, rgba(129, 129, 129,0.05) 27%,rgba(185, 185, 185,0.05) 27%, rgba(185, 185, 185,0.05) 66%,rgba(83,83,83, 0.07) 66%, rgba(83,83,83, 0.07) 100%),linear-gradient(321deg, rgba(240, 240, 240,0.05) 0%, rgba(240, 240, 240,0.05) 13%,rgba(231, 231, 231,0.05) 13%, rgba(231, 231, 231,0.05) 34%,rgba(139,139,139, 0) 34%, rgba(139,139,139, 0) 71%,rgba(112, 112, 112,0.05) 71%, rgba(112, 112, 112,0.05) 100%),linear-gradient(334deg, rgb(0,118,209),rgb(0,118,209))",
        }}
      >
        <div className="container mx-auto max-w-[1310px] px-4 text-center">
          <h1 className="text-gray-100 text-4xl font-semibold mb-2 leading-tight">
            Blog
          </h1>
          <p className="text-gray-200 text-lg mt-2">
            Tips, guides & tutorials on downloading and converting videos
          </p>
        </div>
      </section>

      {/* Blog List */}
      <BlogListContent posts={posts} categories={categories} />

      <Footer />
    </div>
  );
}
