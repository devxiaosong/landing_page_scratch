import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Post, PostMeta } from "@/lib/posts";

interface Props {
  post: Post;
  relatedPosts?: PostMeta[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function getChildText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getChildText).join("");
  if (
    children !== null &&
    typeof children === "object" &&
    "props" in (children as React.ReactElement)
  ) {
    return getChildText((children as React.ReactElement).props.children);
  }
  return "";
}

const H2_BADGE_URL =
  "/images/single/h2-number.svg";

export default function ArticleContent({ post, relatedPosts = [] }: Props) {
  // Build h2 index map from pre-extracted headings
  const h2Headings = post.headings.filter((h) => h.level === 2);
  const h2IndexMap = new Map(h2Headings.map((h, i) => [h.id, i + 1]));

  // Build h2 components with numbered badge
  const markdownComponents = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ children }: any) => {
      const text = getChildText(children);
      const id = slugify(text);
      const num = String(h2IndexMap.get(id) || 0).padStart(2, "0");
      return (
        <h2
          id={id}
          className="text-[26px] font-semibold my-6 mt-10 py-6 px-4 border border-dashed border-[#C6C6C6] rounded-[10px] bg-[#F5F5F5] flex items-center not-prose"
        >
          <span
            className="inline-flex items-center justify-center flex-shrink-0 w-[57px] h-[38px] mr-3 text-lg font-semibold text-white"
            style={{
              backgroundImage: `url('${H2_BADGE_URL}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              paddingLeft: "12px",
            }}
          >
            {num}
          </span>
          {children}
        </h2>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ children }: any) => {
      const text = getChildText(children);
      const id = slugify(text);
      return (
        <h3 id={id} className="text-[21px] font-semibold mb-2.5 mt-6">
          {children}
        </h3>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: ({ children }: any) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
          {children}
        </table>
      </div>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    thead: ({ children }: any) => (
      <thead className="bg-[#2A6DF4] text-white">{children}</thead>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    th: ({ children }: any) => (
      <th className="px-4 py-3 text-left font-semibold">{children}</th>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    td: ({ children }: any) => (
      <td className="px-4 py-3 border-t border-gray-100">{children}</td>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tr: ({ children }: any) => (
      <tr className="even:bg-gray-50">{children}</tr>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code: ({ inline, children }: any) => {
      if (inline) {
        return (
          <code className="bg-gray-100 text-[#c7254e] px-1.5 py-0.5 rounded text-sm font-mono">
            {children}
          </code>
        );
      }
      return (
        <pre className="bg-[#1e1e1e] text-[#d4d4d4] rounded-[10px] p-5 overflow-x-auto my-5 text-sm font-mono leading-6">
          <code>{children}</code>
        </pre>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: ({ src, alt }: any) => (
      <div className="my-5">
        <img
          className="mx-auto max-w-full rounded-lg"
          src={src}
          alt={alt || ""}
        />
      </div>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: ({ href, children }: any) => (
      <a href={href} className="text-[#30A2FF] hover:underline">
        {children}
      </a>
    ),
  };

  // Only show h2 headings in TOC
  const tocHeadings = post.headings.filter((h) => h.level === 2);

  return (
    <section className="p-10 md:px-20 md:pb-20 md:pt-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex xl:flex-row flex-col justify-center">
          {/* Main Content */}
          <div className="xl:flex-grow flex flex-col">
            <div className="post-entry-content py-10 px-6 border border-solid border-[#E6E6E6] rounded-[10px]">
              {/* Article Title */}
              <h1 className="text-2xl md:text-4xl leading-8 md:leading-[42px] font-bold text-center 2xl:px-14">
                {post.title}
              </h1>

              {/* Author Info */}
              <div className="flex justify-between md:items-center mt-10 flex-col md:flex-row">
                <div className="flex items-center mb-0">
                  <img
                    className="rounded-full mr-2.5 w-16 h-16"
                    src={post.avatar}
                    alt={post.author}
                  />
                  <div className="flex flex-col justify-center mb-0">
                    <span>
                      By{" "}
                      <span className="text-[#30A2FF]">{post.author}</span>
                    </span>
                    <span className="mt-2">Last Update: {post.date}</span>
                  </div>
                </div>
                <div className="mt-5 md:mt-0">
                  Category:{" "}
                  <a
                    className="text-[#30A2FF] hover:underline"
                    href={`/blog/${post.category}`}
                  >
                    {post.categoryLabel}
                  </a>
                </div>
              </div>

              {/* Table of Contents */}
              {tocHeadings.length > 0 && (
                <article className="py-6 px-5 rounded-[10px] mb-5 bg-[#EAF6FF] mt-8">
                  <span className="block text-[#30A2FF] font-bold text-xl">
                    Content
                  </span>
                  <ul className="space-y-1 mt-4 mb-0">
                    {tocHeadings.map((heading, index) => (
                      <li key={heading.id} className="flex">
                        <span className="mr-1">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={`#${heading.id}`}
                          className="text-base leading-8 text-[#1684F5] cursor-pointer hover:underline"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {/* Article Body */}
              <div className="article-content text-[#555A5D] prose prose-lg max-w-none prose-p:text-[#555A5D] prose-li:text-[#555A5D] prose-headings:text-gray-800">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={markdownComponents}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Author Bio */}
              <div className="flex items-center border border-solid border-[#A3D6FF] rounded-[10px] px-5 py-10 mt-10">
                <img
                  className="rounded-full mr-5 w-16 h-16"
                  src={post.avatar}
                  alt={post.author}
                />
                <div>
                  <span className="text-xl font-bold">{post.author}</span>
                  <div className="desc mt-3 text-[#555A5D]">
                    {post.authorBio}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="xl:w-[252px] xl:ml-6 relative flex-shrink-0 mt-10 xl:mt-0">
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <article className="p-6 border border-solid border-[#E6E6E6] rounded-[10px]">
                <div className="flex items-center text-xl font-bold">
                  <span className="mr-1">Popular Topics</span>
                  <span>🔥</span>
                </div>
                <ul className="text-sm leading-6 space-y-2.5 list-disc pl-5 mt-2.5">
                  {relatedPosts.map((p) => (
                    <li key={p.slug}>
                      <a
                        href={`/blog/${p.category}/${p.slug}`}
                        className="cursor-pointer hover:text-[#2A6DF4]"
                      >
                        {p.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            )}

            {/* Quick Navigation (TOC) */}
            {tocHeadings.length > 0 && (
              <article className="p-6 border border-solid border-[#E6E6E6] rounded-[10px] mt-6">
                <div className="text-xl font-bold">Quick Navigation</div>
                <ul className="text-sm leading-6 space-y-2.5 mt-2.5">
                  {tocHeadings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="cursor-pointer hover:text-[#2A6DF4]"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            )}

            {/* Download CTA Box */}
            <article className="px-6 pt-6 pb-2 rounded-[10px] mt-6 bg-[#EAF6FF]">
              <div className="flex justify-center items-center text-xl font-bold">
                <img
                  className="mr-5 w-[46px] h-[46px]"
                  src="/images/logo/MassLoader.svg"
                  alt="logo"
                />
                <span className="text-[#AC32FF]">MassLoader</span>
              </div>
              <div className="text-2xl font-bold mt-5 text-center">
                Best Video Downloader
              </div>
              <div className="text-center mt-3">
                <a
                  href="/download/?product=massloader.exe"
                  className="inline-flex justify-center items-center text-lg text-white font-bold rounded-[10px] bg-[#AC32FF] hover:bg-[#9E1EF6] space-x-4 py-3 px-6"
                >
                  <span>🪟</span>
                  <span className="text-white text-sm leading-4 font-bold">
                    Free Download
                  </span>
                </a>
                <div className="mt-3">
                  <a
                    href="/download/?product=massloader.dmg"
                    className="text-sm hover:underline"
                  >
                    Available for Mac &gt;&gt;
                  </a>
                </div>
              </div>
              <img
                className="mx-auto mt-4"
                src="/images/single/top-banner.png"
                alt="download video"
                width="180"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
