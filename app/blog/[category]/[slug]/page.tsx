import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/config";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ArticleHeroBanner from "../../../components/ArticleHeroBanner";
import ArticleContent from "../../../components/ArticleContent";
import {
  getPost,
  getPostsByCategory,
  generateBlogStaticParams,
} from "@/lib/posts";

interface Props {
  params: { category: string; slug: string };
}

export async function generateStaticParams() {
  return generateBlogStaticParams();
}

export async function generateMetadata({ params }: Props) {
  const post = getPost(params.category, params.slug);
  if (!post) return {};
  const ogImage = post.coverImage ||
    "/images/og-default.png";
  return {
    title: `${post.title} — MassLoader Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `${BASE_URL}/blog/${params.category}/${params.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${params.category}/${params.slug}/`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const post = getPost(params.category, params.slug);

  if (!post) notFound();

  // Get related posts from the same category, exclude current
  const relatedPosts = getPostsByCategory(params.category)
    .filter((p) => p.slug !== params.slug)
    .slice(0, 5);

  return (
    <div>
      <Header />
      <ArticleHeroBanner />
      <ArticleContent post={post} relatedPosts={relatedPosts} />
      <Footer />
    </div>
  );
}
