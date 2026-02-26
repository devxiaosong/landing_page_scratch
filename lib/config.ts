export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
  "https://tool-landingpage-template.vercel.app";

// 去掉协议前缀的纯域名，用于法律文本等场景
export const SITE_DOMAIN = BASE_URL.replace(/^https?:\/\//, "");

export const CONTACT_EMAIL = `contact@${SITE_DOMAIN}`;

// 下载子域名，用于软件安装包、视频等静态资源
export const DOWNLOAD_BASE_URL =
  process.env.NEXT_PUBLIC_DOWNLOAD_BASE_URL ||
  "https://download.tool-landingpage-template.vercel.app";

// Google Analytics 4 测量 ID
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
