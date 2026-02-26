import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

      {/* Hero Banner */}
      <section
        className="py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(97,100,255,0.05) 0%, rgba(122,50,253,0.05) 100%)",
        }}
      >
        <div className="container mx-auto max-w-[1310px] px-4">
          <h1 className="text-[#7A32FD] text-3xl md:text-5xl md:leading-[58px] text-center font-bold">
            Shipping Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-[860px] px-4">
          <div className="prose prose-lg max-w-none text-gray-700 leading-8 space-y-6">

            <h2 className="text-xl font-bold text-gray-900 mt-2">
              Domestic and International Software Shipping
            </h2>
            <p>
              We strive to deliver your registration code as quickly as possible. After your
              purchase is confirmed, we will send the code via email within 24 hours.
            </p>
            <p>
              Please note: Since our product delivery is entirely digital, there is no physical
              shipping involved. For international customers, our digital products are accessible
              worldwide. However, restrictions may apply in certain regions due to local regulations.
            </p>
            <p>
              If you encounter any issues receiving your registration code or have any questions,
              feel free to contact our customer support team. We&apos;re here to help!
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
