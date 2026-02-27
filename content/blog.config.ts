import type { BlogConfig } from "@/lib/types";
import { siteConfig } from "./site.config";

export const blogConfig: BlogConfig = {
  indexDescription:
    "Tips, guides, and tutorials on downloading and converting videos from your favorite platforms.",
  categoryDescriptionTemplate: `Browse all {label} articles and guides on ${siteConfig.name} Blog.`,
  basePath: "/blog",
};
