import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      
      {/* Hero Banner */}
      <section 
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(180deg, rgba(97,100,255,0.05) 0%, rgba(122,50,253,0.05) 100%)" }}
      >
        <div className="container mx-auto max-w-[1310px] px-4">
          <h1 className="text-[#7A32FD] text-3xl md:text-5xl md:leading-[58px] text-center font-bold">
            Refund Policy
          </h1>
        </div>
      </section>

      {/* Refund Policy Content */}
      <RefundPolicyContent />

      <Footer />
    </div>
  );
}
