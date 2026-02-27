interface Props {
  title?: string;
  subtitle?: React.ReactNode;
  /** 如面包屑等，可选 */
  breadcrumb?: React.ReactNode;
}

/**
 * 占位：此处插入内页 Hero/标题区 UI（法律页、博客列表、分类页等）。
 * 重建 UI 时只改本组件内部，保留 props 不变。
 */
export default function PageHero(props: Props) {
  return (
    <section data-section="page-hero" aria-label="Page hero">
      {/* 此处插入内页 Hero — 数据: title, subtitle, breadcrumb */}
    </section>
  );
}
