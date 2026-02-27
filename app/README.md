# app/ — 页面与组件（仅样式与结构）

本目录只负责**样式、布局和组件结构**。所有**文案、数据、FAQ、产品名**等均来自：

- `content/tools/*.config.ts`（工具落地页）
- `content/support/*.config.ts`（Support 页）
- `content/` 下 Markdown（博客，由 `lib/posts.ts` 读取）

**法律页、Download 页**：当前 metadata 在对应 page 内配置；法律正文在各自 `*Content` 占位组件内实现（若未来迁到 `content/legal` 则从 content 读入）。改文案时只改 content 或占位组件内数据源，不在布局组件里写死 copy。

**改版时**：只改本目录下的样式（CSS/Tailwind）、布局、组件拆分；不要在本目录内修改或添加任何文案/数据。修改内容请改 `content/` 或上述 config 文件。
