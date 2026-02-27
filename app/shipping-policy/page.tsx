import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ShippingPolicyContent from "../components/ShippingPolicyContent";
import { shippingPolicyPageConfig } from "@/content/pages.config";
import { buildSimplePageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSimplePageMetadata(shippingPolicyPageConfig);

export default function ShippingPolicyPage() {
  return (
    <div>
      <Header />

      <PageHero title="Shipping Policy" />

      <ShippingPolicyContent />

      <Footer />
    </div>
  );
}
