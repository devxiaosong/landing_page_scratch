import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SupportContent from "../components/SupportContent";
import ContactCard from "../components/ContactCard";
import { supportEnConfig } from "@/content/support/support.en.config";
import { buildSupportMetadata } from "@/lib/seo";

const config = supportEnConfig;

export const metadata: Metadata = buildSupportMetadata(config);

export default function SupportPage() {
  return (
    <div>
      <Header />
      <SupportContent
        title={config.content.title}
        titleHighlight={config.content.titleHighlight}
        subtitle={config.content.subtitle}
        searchPlaceholder={config.content.searchPlaceholder}
        categories={config.categories}
      />
      <ContactCard
        title={config.contactCard.title}
        description={config.contactCard.description}
        buttonText={config.contactCard.buttonText}
      />
      <Footer />
    </div>
  );
}
