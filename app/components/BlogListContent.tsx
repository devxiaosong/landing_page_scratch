import { PostMeta, CategoryMeta } from "@/lib/posts";

interface Props {
  posts: PostMeta[];
  categories: CategoryMeta[];
  currentCategory?: string;
}

export default function BlogListContent({
  posts,
  categories,
  currentCategory,
}: Props) {
  return (
    <section className="py-10 md:py-20 px-10 md:px-20 md:pt-10">
      <div className="container mx-auto max-w-[1310px]">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="px-10 pb-10 border shadow-md sticky top-16 rounded-[10px] overflow-hidden">
              <div className="text-2xl font-semibold bg-[#2A6DF4] -mx-10 text-white flex justify-center items-center py-5 space-x-3">
                <img
                  width="36"
                  height="36"
                  src="/images/blog/product.svg"
                  alt="product"
                />
                <span>All Topics</span>
              </div>
              <ul className="text-center mt-8 space-y-3">
                {/* All Posts link */}
                <li
                  className={`text-lg hover:text-[#2A6DF4] ${
                    !currentCategory ? "text-[#2A6DF4] font-semibold" : ""
                  }`}
                >
                  <a href="/blog">All Posts</a>
                </li>
                {/* Dynamic categories */}
                {categories.map((cat) => (
                  <li
                    key={cat.slug}
                    className={`text-lg hover:text-[#2A6DF4] ${
                      currentCategory === cat.slug
                        ? "text-[#2A6DF4] font-semibold"
                        : ""
                    }`}
                  >
                    <a href={`/blog/${cat.slug}`}>
                      {cat.label}
                      <span className="ml-1 text-sm text-gray-400">
                        ({cat.count})
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Article List */}
          <div className="lg:col-span-3">
            {posts.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                No articles found.
              </div>
            ) : (
              posts.map((post) => (
                <article
                  key={`${post.category}/${post.slug}`}
                  className="shadow-md mb-4 md:mb-6 p-5 md:p-8"
                >
                  <a
                    className="block mb-3 text-lg md:text-2xl font-semibold hover:text-[#1684F5]"
                    href={`/blog/${post.category}/${post.slug}`}
                  >
                    {post.title}
                  </a>

                  <div className="mb-3 text-[#555a5d]">
                    <p>
                      {post.excerpt}{" "}
                      <a
                        href={`/blog/${post.category}/${post.slug}`}
                        className="text-[#1684F5]"
                      >
                        read more
                      </a>
                    </p>
                  </div>

                  <div className="flex items-center text-[#555a5d]">
                    <img
                      className="w-8 rounded-full mr-2"
                      src={post.avatar}
                      alt={post.author}
                    />
                    <span>{post.author}</span>
                    <p className="ml-3">{post.date}</p>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
