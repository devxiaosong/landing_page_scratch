import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CookiesContent from "../components/CookiesContent";

export const metadata: Metadata = {
  title: "Cookie Policy — MassLoader",
  description:
    "Learn how MassLoader uses cookies, web beacons and similar technologies on our website and mobile app. Find out how to manage or block cookies in your browser.",
  alternates: {
    canonical: `${BASE_URL}/cookie-policy/`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function CookiesPage() {
  return (
    <div>
      <Header />

      <PageHero title="Cookies" />

      <CookiesContent />

      <Footer />
    </div>
  );
}
