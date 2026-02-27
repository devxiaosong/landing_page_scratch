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

<!-- 以下为示例结构，按实际工具替换或复制多节 -->

### 文案与卖点

- 主标题 / 一句话价值：
- 痛点（Why）：
- 如何帮助（How）：
- 功能点（3–6 条）：
- 使用步骤简述：
- 价格/版本说明：
- 用户评价/证言（可简短）：
- FAQ 问题与答案思路：
- CTA 按钮文案：

### 参考链接（其他网站、竞品、素材）

- 
- 

---

## 工具 B（示例：Netflix Video Downloader）

### 文案与卖点

（同上结构）

### 参考链接

- 
- 

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
