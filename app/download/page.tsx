import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DownloadContent from "../components/DownloadContent";

export const metadata: Metadata = {
  title: "Download MassLoader — Free Video Downloader for Windows & Mac",
  description:
    "Download MassLoader for Windows or Mac for free. The most powerful video downloader supporting Netflix, OnlyFans, Amazon Prime, Disney+ and 10,000+ sites.",
  alternates: {
    canonical: `${BASE_URL}/download/`,
  },
  openGraph: {
    title: "Download MassLoader — Free Video Downloader for Windows & Mac",
    description:
      "Download MassLoader for Windows or Mac for free. Supports Netflix, OnlyFans, Amazon Prime, Disney+ and 10,000+ sites.",
    url: `${BASE_URL}/download/`,
  },
};

export default function DownloadPage() {
  return (
    <div>
      <Header />
      <DownloadContent />
      <Footer />
    </div>
  );
}
