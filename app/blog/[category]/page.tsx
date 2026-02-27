import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/config";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import BlogListContent from "../../components/BlogListContent";
import { getPostsByCategory, getAllCategories } from "@/lib/posts";

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props) {
  const categories = getAllCategories();
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return {};
  return {
    title: `${cat.label} — MassLoader Blog`,
    description: `Browse all ${cat.label} articles and guides on MassLoader Blog.`,
    alternates: {
      canonical: `${BASE_URL}/blog/${params.category}/`,
    },
    openGraph: {
      title: `${cat.label} — MassLoader Blog`,
      description: `Browse all ${cat.label} articles and guides on MassLoader Blog.`,
      url: `${BASE_URL}/blog/${params.category}/`,
      images: [
        {
          url: "/images/og-default.png",
          width: 1200,
          height: 630,
          alt: `MassLoader Blog — ${cat.label}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${cat.label} — MassLoader Blog`,
      description: `Browse all ${cat.label} articles and guides on MassLoader Blog.`,
      images: [
        "/images/og-default.png",
      ],
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const categories = getAllCategories();
  const currentCat = categories.find((c) => c.slug === params.category);

  if (!currentCat) notFound();

  const posts = getPostsByCategory(params.category);

  if (posts.length === 0) notFound();

  return (
    <div>
      <Header />

      <PageHero
        title={currentCat.label}
        subtitle={`${currentCat.count} article${currentCat.count !== 1 ? "s" : ""}`}
        breadcrumb={
          <>
            <a href="/blog">Blog</a> &rsaquo; {currentCat.label}
          </>
        }
      />

      {/* 此处插入博客列表 */}
      <BlogListContent
        posts={posts}
        categories={categories}
        currentCategory={params.category}
      />

      <Footer />
    </div>
  );
}
