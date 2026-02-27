import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import TermsOfUseContent from "../components/TermsOfUseContent";

export const metadata: Metadata = {
  title: "Term Of Service — MassLoader",
  description:
    "Read MassLoader's Terms of Service. Understand your rights and obligations when accessing and using MassLoader's website and software services.",
  alternates: {
    canonical: `${BASE_URL}/term-of-service/`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function TermsOfUsePage() {
  return (
    <div>
      <Header />

      <PageHero title="Term Of Service" />

      <TermsOfUseContent />

      <Footer />
    </div>
  );
}
