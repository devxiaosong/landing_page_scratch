import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import RefundPolicyContent from "../components/RefundPolicyContent";
import { refundPolicyPageConfig } from "@/content/pages.config";
import { buildSimplePageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSimplePageMetadata(refundPolicyPageConfig);

export default function RefundPolicyPage() {
  return (
    <div>
      <Header />

      <PageHero title="Refund Policy" />

      <RefundPolicyContent />

      <Footer />
    </div>
  );
}
