import type { PostMeta, CategoryMeta } from "@/lib/posts";

interface Props {
  posts: PostMeta[];
  categories: CategoryMeta[];
  currentCategory?: string;
}

/**
 * 占位：此处插入博客列表页主体 UI（分类侧栏 + 文章列表）。
 * 数据已从 page 传入，重建 UI 时只改本组件内部，保留 props 不变。
 */
export default function BlogListContent(props: Props) {
  return (
    <section data-section="blog-list-content" aria-label="Blog list content">
      {/* 此处插入博客列表主体 — 数据: posts[], categories[], currentCategory? */}
    </section>
  );
}
