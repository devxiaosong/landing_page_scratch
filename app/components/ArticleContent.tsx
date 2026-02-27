import type { Post, PostMeta } from "@/lib/posts";

interface Props {
  post: Post;
  relatedPosts?: PostMeta[];
}

/**
 * 占位：此处插入博客文章正文 + 相关推荐 UI。
 * 数据已从 page 传入（post, relatedPosts），重建 UI 时只改本组件内部，保留 props 不变。
 */
export default function ArticleContent(props: Props) {
  return (
    <section data-section="article-content" aria-label="Article content">
      {/* 此处插入文章正文与相关推荐 — 数据: post (content, headings, ...), relatedPosts[] */}
    </section>
  );
}
