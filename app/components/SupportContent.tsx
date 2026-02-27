"use client";

import type { SupportCategory } from "@/lib/types";

/** @deprecated Use SupportCategory from @/lib/types */
export type FAQCategory = SupportCategory;

interface Props {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  searchPlaceholder?: string;
  categories: SupportCategory[];
}

/**
 * 占位：此处插入 Support 页主体 UI（分类 + Q&A、搜索等）。
 * 数据已从 config 传入，重建 UI 时只改本组件内部，保留 props 不变。
 */
export default function SupportContent(props: Props) {
  return (
    <section data-section="support-content" aria-label="Support content">
      {/* 此处插入 Support 主体 — 数据: title, titleHighlight, subtitle, searchPlaceholder, categories[] */}
    </section>
  );
}
