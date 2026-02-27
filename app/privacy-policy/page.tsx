import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";
import { privacyPolicyPageConfig } from "@/content/pages.config";
import { buildSimplePageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSimplePageMetadata(privacyPolicyPageConfig);

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Header />

      {/* 此处插入内页 Hero */}
      <PageHero title="Privacy Policy" />

      <PrivacyPolicyContent />

      <Footer />
    </div>
  );
}
