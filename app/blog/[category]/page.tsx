import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/config";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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

      {/* Category Banner */}
      <section
        className="p-10 md:p-20"
        style={{
          backgroundImage:
            "linear-gradient(12deg, rgba(193, 193, 193,0.05) 0%, rgba(193, 193, 193,0.05) 2%,rgba(129, 129, 129,0.05) 2%, rgba(129, 129, 129,0.05) 27%,rgba(185, 185, 185,0.05) 27%, rgba(185, 185, 185,0.05) 66%,rgba(83,83,83, 0.07) 66%, rgba(83,83,83, 0.07) 100%),linear-gradient(321deg, rgba(240, 240, 240,0.05) 0%, rgba(240, 240, 240,0.05) 13%,rgba(231, 231, 231,0.05) 13%, rgba(231, 231, 231,0.05) 34%,rgba(139,139,139, 0) 34%, rgba(139,139,139, 0) 71%,rgba(112, 112, 112,0.05) 71%, rgba(112, 112, 112,0.05) 100%),linear-gradient(334deg, rgb(0,118,209),rgb(0,118,209))",
        }}
      >
        <div className="container mx-auto max-w-[1310px] px-4 text-center">
          <p className="text-gray-200 text-base mb-1">
            <a href="/blog" className="hover:underline">
              Blog
            </a>{" "}
            &rsaquo; {currentCat.label}
          </p>
          <h1 className="text-gray-100 text-4xl font-semibold leading-tight">
            {currentCat.label}
          </h1>
          <p className="text-gray-300 text-base mt-2">
            {currentCat.count} article{currentCat.count !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Blog List */}
      <BlogListContent
        posts={posts}
        categories={categories}
        currentCategory={params.category}
      />

      <Footer />
    </div>
  );
}
