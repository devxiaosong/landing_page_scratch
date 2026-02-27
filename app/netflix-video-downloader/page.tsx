import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import ContentBlock from "../components/ContentBlock";
import FeaturesTab from "../components/FeaturesTab";
import UserGuideSection from "../components/UserGuideSection";
import PlanTable from "../components/PlanTable";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import { netflixVideoDownloaderConfig } from "@/content/tools/netflix-video-downloader.config";
import {
  buildToolMetadata,
  buildSoftwareApplicationJsonLd,
} from "@/lib/seo";

const config = netflixVideoDownloaderConfig;

export const metadata: Metadata = buildToolMetadata(config);

export default function NetflixDownloaderPage() {
  const softwareJsonLd = buildSoftwareApplicationJsonLd(config);

  return (
    <div>
      <Header />

      {/* 此处插入 Hero 板块 */}
      <HeroBanner {...config.hero} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      {/* 此处插入 Why 板块 */}
      <ContentBlock {...config.whySection} />
      {/* 此处插入 How 板块 */}
      <ContentBlock {...config.howSection} />
      {/* 此处插入 Features 板块 */}
      <FeaturesTab {...config.features} />
      {config.secureSection && (
        <>
          {/* 此处插入 Secure 板块 */}
          <ContentBlock {...config.secureSection} />
        </>
      )}
      {/* 此处插入 User Guide 板块 */}
      <UserGuideSection {...config.guide} />
      {/* 此处插入 Plan Table 板块 */}
      <PlanTable {...config.pricing} />
      {/* 此处插入 Testimonials 板块 */}
      <TestimonialsSection {...config.testimonials} />
      {/* 此处插入 FAQ 板块 */}
      <FAQSection {...config.faq} />
      {/* 此处插入 CTA 板块 */}
      <CTASection {...config.cta} />

      <Footer />
    </div>
  );
}
