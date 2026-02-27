import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import BlogListContent from "../../components/BlogListContent";
import { getPostsByCategory, getAllCategories } from "@/lib/posts";
import { blogConfig } from "@/content/blog.config";
import { buildBlogCategoryMetadata } from "@/lib/seo";

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
  return buildBlogCategoryMetadata(blogConfig, cat);
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
