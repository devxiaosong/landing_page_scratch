import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SupportContent from "../../components/SupportContent";
import ContactCard from "../../components/ContactCard";
import { supportDeConfig } from "@/content/support/support.de.config";
import { buildSupportMetadata } from "@/lib/seo";

const config = supportDeConfig;

export const metadata: Metadata = buildSupportMetadata(config);

export default function SupportPageDE() {
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
