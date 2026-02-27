import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CookiesContent from "../components/CookiesContent";
import { cookiesPageConfig } from "@/content/pages.config";
import { buildSimplePageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSimplePageMetadata(cookiesPageConfig);

export default function CookiesPage() {
  return (
    <div>
      <Header />

      <PageHero title="Cookies" />

      <CookiesContent />

      <Footer />
    </div>
  );
}
