interface Props {
  title?: string;
  description?: string;
  buttonText?: string;
  contactEmail?: string;
}

/**
 * 占位：此处插入联系卡片 UI（Support 页底部）。
 * 数据已从 config 传入，重建 UI 时只改本组件内部，保留 props 不变。
 */
export default function ContactCard(props: Props) {
  return (
    <section data-section="contact-card" aria-label="Contact card">
      {/* 此处插入联系卡片 — 数据: title, description, buttonText, contactEmail */}
    </section>
  );
}
