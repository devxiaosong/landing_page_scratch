import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DownloadContent from "../components/DownloadContent";
import { downloadPageConfig } from "@/content/pages.config";
import { buildSimplePageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSimplePageMetadata(downloadPageConfig);

export default function DownloadPage() {
  return (
    <div>
      <Header />
      <DownloadContent />
      <Footer />
    </div>
  );
}
