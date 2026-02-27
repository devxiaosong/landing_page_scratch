"use client";

/**
 * Footer 内容构成：
 *
 * ── 上方区域（四列）────────────────────────────────────────────────────────
 *
 * [品牌列]
 * - App 图标（来自 siteConfig）
 * - 产品名（siteConfig.name）
 * - Slogan（siteConfig.slogan）
 *
 * [Resources]
 * - How-to Tutorials
 * - User Guide
 *
 * [Support]
 * - Support Center
 * - Contact Us
 *
 * [Language]
 * - 链接列表（与 Support 列渲染方式相同，无下拉框）
 * - 当前：English（/）、Deutsch（/de）
 * - 构建时扫描 app/ 下 BCP-47 格式目录自动生成，当前激活项高亮
 *
 * ── 下方底栏──────────────────────────────────────────────────────────────
 *
 * [法律页链接行]
 * - 由 content/legal/ 目录下的 .md 文件驱动，有几个文件出现几个链接
 * - 顺序由每个文件 frontmatter.order 控制
 * - 通过 lib/legal.ts → getLegalPages() 在服务端读取后传入
 *
 *   content/legal/<slug>.md  frontmatter：
 *     title: string          SEO <title>
 *     description: string    SEO <meta description>
 *     label: string          此处显示的链接文字
 *     order: number          排序
 *
 * [版权行]
 * - Copyright © {new Date().getFullYear()} {siteConfig.studioName}. All rights reserved.
 */
export default function Footer() {
  return (
    <footer data-section="footer" aria-label="Footer">
      {/* 上方主体区：品牌列 + Resources 列 + Support 列 + Language 列 */}

      {/* 下方底栏：法律页链接行 + 版权行 */}
    </footer>
  );
}
