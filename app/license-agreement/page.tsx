import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import LicenseAgreementContent from "../components/LicenseAgreementContent";
import { licenseAgreementPageConfig } from "@/content/pages.config";
import { buildSimplePageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSimplePageMetadata(licenseAgreementPageConfig);

export default function LicenseAgreementPage() {
  return (
    <div>
      <Header />

      <PageHero title="End User License Agreement" />

      <LicenseAgreementContent />

      <Footer />
    </div>
  );
}
