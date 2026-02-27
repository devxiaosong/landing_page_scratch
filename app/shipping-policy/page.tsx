import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ShippingPolicyContent from "../components/ShippingPolicyContent";

export const metadata: Metadata = {
  title: "Shipping Policy — MassLoader",
  description:
    "MassLoader delivers registration codes digitally via email within 24 hours of purchase. No physical shipping involved. Digital products accessible worldwide.",
  alternates: {
    canonical: `${BASE_URL}/shipping-policy/`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

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
