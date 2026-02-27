# 工具落地页规范（Landing Spec）

本规范定义「工具类软件落地页」必须展示的信息板块与 SEO 要求。页面 UI 可随项目或 AI 重构而变化，但**信息架构与 SEO 行为**应与此文档一致。

---

## 1. 信息架构（必选板块）

每个工具落地页**必须**包含以下板块，且数据均来自 `content/tools/<toolId>.config.ts` 中的 `ToolLandingConfig`，页面不得硬编码文案。

| 板块 | 用途 | 对应 config 字段 | SEO 要求 |
|------|------|------------------|----------|
| **Hero** | 主标题、一句话价值、下载入口 | `hero` | 页面唯一 `<h1>` 来自 `hero.title`，含主关键词 |
| **Why** | 痛点 / 为什么需要 | `whySection` | 自然语言说明，可含长尾关键词 |
| **How** | 如何帮助用户 | `howSection` | 价值主张与使用场景 |
| **Features** | 功能展示（Tab/轮播/宫格等） | `features` | 3–6 个功能点，每项有标题与说明 |
| **Secure**（可选） | 安全/信任说明 | `secureSection` | 可无，若有则与产品一致 |
| **Guide** | 使用步骤 | `guide` | 有序步骤，便于 HowTo schema |
| **Pricing** | 价格/版本对比 | `pricing` | 表格或列表，信息清晰 |
| **Testimonials** | 用户评价 | `testimonials` | 若干条评价，可复用或按产品区分 |
| **FAQ** | 常见问题 | `faq` | 若干 Q&A，用于 FAQ schema |
| **CTA** | 底部下载/行动号召 | `cta` | 主按钮与文案一致 |

板块**出现顺序**建议：Hero → Why → How → Features → Secure（若有）→ Guide → Pricing → Testimonials → FAQ → CTA。顺序可在 UI 重构时调整，但不得缺少任一必选板块。

---

## 2. SEO 规范

### 2.1 元数据（Metadata）

- **来源**：必须由 `lib/seo.ts` 的 `buildToolMetadata(config)` 生成，页面不手写 `title`、`description`、`openGraph`、`twitter`。
- **内容**：
  - `title`、`description` 来自 `config.seo`，且与当前工具主题一致（如 Netflix 页不得出现 OnlyFans 主关键词）。
  - `canonical` 默认由 `config.canonicalPath` 与 `BASE_URL` 拼出；若在 config 中提供 `seo.alternates.canonical` 则优先使用。
  - 多语言时在 config 中提供 `seo.alternates.languages`，由 `buildToolMetadata` 写入 `alternates.languages`。

### 2.2 标题与结构

- 每页有且仅有一个 `<h1>`，内容来自 `config.hero.title`。
- 各板块标题使用 `<h2>` 或 `<h3>`，来自对应 config 的 `mainTitle` 或等价字段。
- 不在页面内硬编码产品名、卖点句，全部从 config 读取。

### 2.3 结构化数据（JSON-LD）

- **SoftwareApplication**：由 `lib/seo.ts` 的 `buildSoftwareApplicationJsonLd(config)` 生成，页面统一注入（如 `<script type="application/ld+json">`）。
- **FAQPage**：可由 `buildFaqJsonLd(config.faq)` 生成并注入，或由 FAQ 组件输出，二者择一，避免重复。

### 2.4 其他

- `robots.txt`、`sitemap.xml` 由 `app/robots.ts`、`app/sitemap.ts` 生成；**新增工具页时须在 `app/sitemap.ts` 中加入该页 URL**。
- 生产环境必须设置 `NEXT_PUBLIC_BASE_URL` 为正式域名，否则 canonical 与 OG 会指向错误域名。

---

## 3. 内容与 UI 分离

- **内容层**：所有文案、图片路径、功能列表、FAQ、价格表等，仅存在于 `content/tools/*.config.ts` 及 `lib/types.ts` 的 `ToolLandingConfig` 类型中。
- **表现层**：`app/**/page.tsx` 与 `app/components/**` 只负责从 config 读取数据并渲染，不包含产品名、卖点等硬编码字符串。
- **SEO 层**：`lib/seo.ts` 提供 `buildToolMetadata`、`buildSoftwareApplicationJsonLd`、`buildFaqJsonLd`，页面只调用这些函数，不手写 meta 或 JSON-LD 内容。

重构 UI（例如将 Features 从轮播改为宫格）时，只需改组件与布局，config 与类型保持不变；新增工具时，新增一份 config 并让对应页面引用即可。

---

## 4. 其他页面（与框架一致）

- **Support 页**：内容来自 `content/support/*.config.ts`（`SupportPageConfig`），metadata 由 `buildSupportMetadata(config)` 生成。类型见 `lib/types.ts`。
- **博客**：文章来自 `content/` 下 Markdown，由 `lib/posts.ts` 读取；metadata 在对应 page 中基于 post 生成。
- **法律页 / Download 页**：当前 metadata 在 page 内配置；正文在对应 `*Content` 占位组件内实现或未来从 `content/legal` 读入。新增此类页时保持「内容与 UI 分离」原则，文案不写死在组件中。

---

## 5. 参考

- 类型定义：`lib/types.ts`（`ToolLandingConfig`、`SupportPageConfig` 及各 section 类型）
- SEO 实现：`lib/seo.ts`（`buildToolMetadata`、`buildSoftwareApplicationJsonLd`、`buildFaqJsonLd`、`buildSupportMetadata`）
- 示例 config：`content/tools/onlyfans-downloader.config.ts`、`content/tools/netflix-video-downloader.config.ts`、`content/support/support.en.config.ts`

## 6. 内容来源：参考物料（tools / support）

**tools 与 support 的 config 内容不手填**。可用的文案草稿、卖点、FAQ 思路及其他网站的参考链接，统一放在 **`docs/reference-material.md`**。  
由 **AI 根据该文档** 生成或更新 `content/tools/*.config.ts` 与 `content/support/*.config.ts`，类型与板块仍须符合 `lib/types.ts` 与本文档。详见 `.cursor/rules/content-from-reference.mdc`。
