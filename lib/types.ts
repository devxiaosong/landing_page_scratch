/**
 * 工具落地页内容 schema（Tool Landing Page Config）
 * 所有文案与数据仅在此类型约束下配置，页面只负责展示，不硬编码内容。
 */

// ── SEO 与路由 ─────────────────────────────────────────────────────────────

export interface ToolSeo {
  title: string;
  description: string;
  /** 主关键词，用于 H1/标题等 */
  primaryKeyword?: string;
  /** OG/Twitter 图，建议 1200x630 */
  ogImage: string;
  ogImageAlt?: string;
  /** 多语言/多版本 canonical 与 hreflang */
  alternates?: {
    canonical: string;
    languages?: Record<string, string>;
  };
}

/** SoftwareApplication 结构化数据（JSON-LD） */
export interface ToolJsonLd {
  name: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: string;
    ratingCount: string;
  };
}

// ── Hero ───────────────────────────────────────────────────────────────────

export interface HeroSection {
  brandTag: string;
  title: string;
  description: string;
  windowsDownloadUrl: string;
  macDownloadUrl: string;
  windowsText?: string;
  macText?: string;
  safetyText?: string;
  backgroundImage: string;
  productImage: string;
  productImageWebp: string;
  productImageAlt: string;
}

// ── ContentBlock（Why / How / Secure 等图文区块）───────────────────────────

export interface ContentBlockSection {
  title?: string;
  subtitle: string;
  subtitleHighlight: string;
  items: string[];
  imageSrc: string;
  imageWebp: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  backgroundColor?: "white" | "gradient";
}

// ── Features Tab ──────────────────────────────────────────────────────────

export interface FeatureTabItem {
  icon: string;
  activeIcon: string;
  tabTitle: string;
  contentImage: string;
  contentImageWebp: string;
  contentTitle: string;
  contentTitleHighlight: string;
  contentDescription: string[];
}

export interface FeaturesSection {
  mainTitle: string;
  features: FeatureTabItem[];
  autoPlayInterval?: number;
  transitionDuration?: number;
}

// ── User Guide ─────────────────────────────────────────────────────────────

export interface GuideStep {
  image: string;
  imageWebp: string;
  title: string;
  description: string;
}

export interface UserGuideSection {
  mainTitle: string;
  steps: GuideStep[];
  windowsDownloadUrl: string;
  macDownloadUrl: string;
  downloadButtonText?: string;
  defaultActiveStep?: number;
  transitionDuration?: number;
}

// ── Plan Table ─────────────────────────────────────────────────────────────

export interface PlanColumn {
  name: string;
  icon?: string;
  iconAlt?: string;
  highlightColor?: string;
  downloadUrl: string;
  buttonText: string;
  isPrimary?: boolean;
}

export interface PlanFeatureRow {
  name: string;
  isNew?: boolean;
  free: string | boolean | null;
  standard: string | boolean | null;
  pro: string | boolean | null;
  isLastInGroup?: boolean;
}

export interface PlanTableSection {
  mainTitle: string;
  headerSectionTitle?: string;
  plans: PlanColumn[];
  features: PlanFeatureRow[];
  checkIconUrl?: string;
  checkIconAlt?: string;
  emptySymbol?: string;
}

// ── Testimonials ───────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
}

export interface TestimonialsSection {
  mainTitle: string;
  testimonials: Testimonial[];
  quotationMarksIcon?: string;
  quotationMarksAlt?: string;
  ratingIcon?: string;
  ratingAlt?: string;
  arrowIcon?: string;
  arrowAlt?: string;
  backgroundColor?: string;
  transitionDuration?: number;
}

// ── FAQ ───────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  mainTitle: string;
  faqs: FAQItem[];
  expandIcon?: string;
  collapseIcon?: string;
  defaultOpenIndex?: number;
  questionColor?: string;
  activeQuestionColor?: string;
  itemBackgroundColor?: string;
}

// ── CTA ───────────────────────────────────────────────────────────────────

export interface CTASection {
  backgroundImage: string;
  logo: string;
  logoAlt: string;
  logoWidth?: number;
  logoHeight?: number;
  title: string;
  windowsDownloadUrl: string;
  macDownloadUrl: string;
  downloadButtonText?: string;
  cardGradient?: string;
  buttonShadow?: string;
}

// ── 工具落地页完整配置 ──────────────────────────────────────────────────────

export interface ToolLandingConfig {
  /** 工具唯一标识，用于路由/注册（如 onlyfans-downloader, netflix-video-downloader） */
  toolId: string;
  /** 该落地页的 canonical 路径（如 "/" 或 "/netflix-video-downloader"） */
  canonicalPath: string;
  seo: ToolSeo;
  jsonLd?: ToolJsonLd;

  hero: HeroSection;
  /** 痛点 / 为什么需要 */
  whySection: ContentBlockSection;
  /** 如何帮助用户 */
  howSection: ContentBlockSection;
  /** 功能展示（Tab/轮播等） */
  features: FeaturesSection;
  /** 安全/信任等可选图文块 */
  secureSection?: ContentBlockSection;
  /** 使用步骤 */
  guide: UserGuideSection;
  /** 价格/版本对比 */
  pricing: PlanTableSection;
  /** 用户评价 */
  testimonials: TestimonialsSection;
  /** 常见问题 */
  faq: FAQSection;
  /** 底部 CTA */
  cta: CTASection;
}

// ── 简单静态页配置（法律页、下载页等）─────────────────────────────────────

export interface SimplePageConfig {
  title: string;
  description: string;
  /** canonical 路径（含尾部斜杠，如 "/cookie-policy/"） */
  canonicalPath: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  openGraph?: {
    title?: string;
    description?: string;
  };
}

// ── 博客配置 ────────────────────────────────────────────────────────────────

export interface BlogConfig {
  /** 博客首页描述 */
  indexDescription: string;
  /** 分类页描述模板，{label} 为分类名占位符 */
  categoryDescriptionTemplate: string;
  /** 博客路径前缀，用于 canonical（不含尾部斜杠，如 "/blog"） */
  basePath: string;
}

// ── 站点级全局配置 ──────────────────────────────────────────────────────────

export interface SiteConfig {
  /** 站点名称，用于 OG siteName、title template 等 */
  name: string;
  /** 版权声明中的工作室/公司名称，如 "MassLoader Studio" */
  studioName: string;
  /** Next.js title template，%s 为页面标题占位符 */
  titleTemplate: string;
  /** 默认 title（无页面覆盖时使用） */
  defaultTitle: string;
  /** 默认 description */
  defaultDescription: string;
  /** 默认 OG 图路径（相对或绝对 URL） */
  defaultOgImage: string;
  /** Google Search Console 验证码 */
  googleVerification?: string;
}

// ── Support 页 ─────────────────────────────────────────────────────────────

export interface SupportFAQItem {
  question: string;
  /** 纯文本或有序列表（字符串数组渲染为 <ol><li>） */
  answer: string | string[];
}

export interface SupportCategory {
  title: string;
  icon: string;
  items: SupportFAQItem[];
}

export interface SupportPageConfig {
  seo: {
    title: string;
    description: string;
    canonical: string;
    languages?: Record<string, string>;
  };
  content: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
  };
  categories: SupportCategory[];
  contactCard: {
    title: string;
    description: string;
    buttonText: string;
  };
}
