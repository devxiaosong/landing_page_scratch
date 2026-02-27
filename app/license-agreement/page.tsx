import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import LicenseAgreementContent from "../components/LicenseAgreementContent";

export const metadata: Metadata = {
  title: "End User License Agreement — MassLoader",
  description:
    "Read MassLoader's End User License Agreement (EULA). Understand the terms and conditions for downloading, installing, and using MassLoader software.",
  alternates: {
    canonical: `${BASE_URL}/license-agreement/`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

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
