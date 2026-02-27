import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import RefundPolicyContent from "../components/RefundPolicyContent";

export const metadata: Metadata = {
  title: "Refund Policy — MassLoader",
  description:
    "Read MassLoader's Refund Policy. We offer a 30-day money-back guarantee. Learn about eligibility and how to request a refund.",
  alternates: {
    canonical: `${BASE_URL}/refund-policy/`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

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
