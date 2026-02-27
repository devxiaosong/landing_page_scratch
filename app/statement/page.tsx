import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import StatementContent from "../components/StatementContent";

export const metadata: Metadata = {
  title: "Statement — MassLoader",
  description:
    "MassLoader is for personal use only and should not be used for sharing or pirating. Please comply with the terms of service and enjoy your paid content responsibly.",
  alternates: {
    canonical: `${BASE_URL}/statement/`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

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
