import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import StatementContent from "../components/StatementContent";
import { statementPageConfig } from "@/content/pages.config";
import { buildSimplePageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSimplePageMetadata(statementPageConfig);

export default function StatementPage() {
  return (
    <div>
      <Header />

      <PageHero title="Statement" />

      <StatementContent />

      <Footer />
    </div>
  );
}
