# 参考物料（AI 据此生成 tools / support 配置）

**说明**：本文档是「工具落地页」与「Support 页」的**唯一参考来源**。  
**不要**在 `content/tools/*.config.ts` 或 `content/support/*.config.ts` 里手写或凭空编文案。  
由 **AI 根据本页的文案与参考链接**，生成或更新上述 config 文件；类型与字段以 `lib/types.ts` 和 `docs/landing-spec.md` 为准。

---

## 使用方式

- 在下方各节填写**文案草稿**、**卖点**、**FAQ 思路**、**参考链接**等。
- 需要新增或更新某个工具 / Support 时，让 AI 阅读本页对应小节 + 类型定义，生成符合 `ToolLandingConfig` / `SupportPageConfig` 的 config 文件。

---

## 工具 A（示例：OnlyFans Downloader）

<!-- 
填写说明：你只需要填写你知道的信息，不需要面面俱到。
AI 会根据以下任意组合自动创作所有文案板块：
  - 工具功能 / 一句话描述
  - 目标用户
  - 需要覆盖的关键词（SEO 用）
  - 任何你想强调的卖点或痛点
  - 参考链接（竞品、官网、素材等）
其余内容（标题、Why/How、功能点、使用步骤、FAQ、CTA 等）AI 自动生成，无需手填。
-->

### 我知道的信息

- 工具功能：
- 目标用户：
- 关键词（SEO）：
- 想强调的卖点 / 痛点（随意写）：
- UI 风格偏好（可选，如：深色科技风、清新插画风）：
- 参考链接：

---

## 工具 B（示例：Netflix Video Downloader）

### 我知道的信息

- 工具功能：
- 目标用户：
- 关键词（SEO）：
- 想强调的卖点 / 痛点（随意写）：
- UI 风格偏好（可选，如：深色科技风、清新插画风）：
- 参考链接：

---

## Support 页

### 文案与结构

- 主标题 / 副标题：
- 搜索框占位文案：
- 分类与 Q&A 思路（分类名 + 若干问答）：
- 联系卡片文案（标题、描述、按钮）：

### 参考链接

- 
- 

---

## UI 风格与设计参考

> 在此定义全局 UI 风格，AI 在生成 config（如配色、图片选择）或编写 CSS 时会参考。

- **配色方案**：
  - 主色调（Primary）：
  - 强调色（Accent）：
  - 背景色风格（深色/浅色/渐变）：
- **字体风格**（现代无衬线 / 衬线 / 手写）：
- **图片风格**（扁平插画 / 3D 渲染 / 真实截图 / 极简线条）：
- **圆角与阴影**（大圆角 / 直角 / 强阴影 / 扁平）：
- **参考设计网站**（Dribbble / Behance / 竞品链接）：

---

## Site 品牌信息

> 填写后，AI 据此生成 / 更新 `content/site.config.ts`（`SiteConfig`）。

- 产品名（name）：
- 工作室 / 公司名（studioName，用于版权行）：
- Slogan（siteConfig.slogan，Footer 品牌列副标题）：
- 默认 OG 图路径（defaultOgImage）：
- 默认 title（首页无覆盖时显示）：
- 默认 description（≤160 字符）：
- Google Search Console 验证码（googleVerification，选填）：

---

## Legal Pages

> 每个法律页一个子节。填写后，AI 据此生成 `content/legal/<slug>.md`。
> 正文可以是要点列表或段落草稿，AI 会整理为规范 Markdown；
> 若某页完全没有草稿，请先在此补充再让 AI 生成。

### statement

- label（Footer 显示名）：Statement
- order：1
- SEO description 思路：
- 正文要点 / 草稿：

### license-agreement

- label：License Agreement
- order：2
- SEO description 思路：
- 正文要点 / 草稿：

### terms-of-use

- label：Terms of Use
- order：3
- SEO description 思路：
- 正文要点 / 草稿：

### privacy-policy

- label：Privacy Policy
- order：4
- SEO description 思路：
- 正文要点 / 草稿：

### refund-policy

- label：Refund Policy
- order：5
- SEO description 思路：
- 正文要点 / 草稿：

### cookies

- label：Cookies
- order：6
- SEO description 思路：
- 正文要点 / 草稿：

### shipping-policy

- label：Shipping Policy
- order：7
- SEO description 思路：
- 正文要点 / 草稿：

---

## 其他网站链接（通用参考）

- 
- 
