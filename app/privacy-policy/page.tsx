import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      
      {/* Hero Banner */}
      <section 
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(180deg, rgba(97,100,255,0.05) 0%, rgba(122,50,253,0.05) 100%)" }}
      >
        <div className="container mx-auto max-w-[1310px] px-4">
          <h1 className="text-[#7A32FD] text-3xl md:text-5xl md:leading-[58px] text-center font-bold">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <PrivacyPolicyContent />

      <Footer />
    </div>
  );
}
