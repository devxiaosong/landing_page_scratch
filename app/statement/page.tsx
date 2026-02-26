import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
            Statement
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-[860px] px-4">
          <div className="prose prose-lg max-w-none text-gray-700 leading-8 space-y-6">
            <p>
              MassLoader allows you to download your favorite shows and watch
              streaming videos offline anytime, anywhere. In this way, it
              overcomes problems such as poor network quality limitations.
            </p>
            <p>
              However, please be aware that MassLoader is for personal use only
              and should not be used for sharing or pirating. MassLoader does not
              support any piracy or commercial sharing actions. Sharing content
              outside of your household can lead to account banning and other
              legal risks.
            </p>
            <p>
              When using MassLoader software, every person should have their own
              relevant streaming account and downloader license. Please comply
              with the terms of service and enjoy your paid content responsibly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
