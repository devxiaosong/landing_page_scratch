export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
  "https://tool-landingpage-template.vercel.app";

// Google Analytics 4 测量 ID
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
