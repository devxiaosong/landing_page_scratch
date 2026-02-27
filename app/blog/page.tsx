import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import BlogListContent from "../components/BlogListContent";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import { blogConfig } from "@/content/blog.config";
import { buildBlogIndexMetadata } from "@/lib/seo";

export const metadata: Metadata = buildBlogIndexMetadata(blogConfig);

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
