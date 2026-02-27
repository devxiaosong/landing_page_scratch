import type { ContentBlockSection } from "@/lib/types";

/**
 * 占位：此处插入图文区块 UI（Why / How / Secure 等）。
 * 数据已从 config 传入，重建 UI 时只改本组件内部，保留 props 不变。
 */
export default function ContentBlock(props: ContentBlockSection) {
  return (
    <section data-section="content-block" aria-label="Content block">
      {/* 此处插入图文板块 — 数据: title, subtitle, subtitleHighlight, items, imageSrc, imageWebp, imageAlt, imagePosition */}
    </section>
  );
}
