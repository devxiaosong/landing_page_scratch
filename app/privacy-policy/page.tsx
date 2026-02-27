import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — MassLoader",
  description:
    "Read MassLoader's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our video downloader software.",
  alternates: {
    canonical: `${BASE_URL}/privacy-policy/`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

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
