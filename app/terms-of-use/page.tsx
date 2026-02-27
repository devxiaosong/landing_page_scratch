import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import TermsOfUseContent from "../components/TermsOfUseContent";
import { termsOfUsePageConfig } from "@/content/pages.config";
import { buildSimplePageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSimplePageMetadata(termsOfUsePageConfig);

export default function TermsOfUsePage() {
  return (
    <div>
      <Header />

      <PageHero title="Term Of Service" />

      <TermsOfUseContent />

      <Footer />
    </div>
  );
}
