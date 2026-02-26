import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SupportContent, { FAQCategory } from "../components/SupportContent";
import ContactCard from "../components/ContactCard";

export const metadata: Metadata = {
  title: "Support — MassLoader Help Center",
  description:
    "Get help with MassLoader. Find answers to common questions about product usage, license, payment, and refund policy. Our support team is here to help.",
  alternates: {
    canonical: `${BASE_URL}/support/`,
    languages: {
      "en": `${BASE_URL}/support/`,
      "de": `${BASE_URL}/de/support`,
      "x-default": `${BASE_URL}/support/`,
    },
  },
  openGraph: {
    title: "Support — MassLoader Help Center",
    description:
      "Get help with MassLoader. Find answers to common questions about product usage, license, payment, and refund policy.",
    url: `${BASE_URL}/support/`,
  },
};

const SUPPORT_CATEGORIES: FAQCategory[] = [
  {
    title: "Product",
    icon: "/images/support/product.svg",
    items: [
      {
        question: "Software cannot working?",
        answer:
          "Please provide the order number and tell us the details of the product not working including error prompts and product screenshots. Our technicians will help you.",
      },
      {
        question: "Software cannot download video/audio?",
        answer: (
          <ol className="list-decimal pl-5">
            <li>Make sure the network environment works normally.</li>
            <li>
              Check the URL you copied from online video address is right.
            </li>
            <li>
              Make sure the video is not protected and the website of this video
              is supported by our software.
            </li>
            <li>
              Click the menu, go to Help &gt; Open Log Folder, then it will
              automatically open the log file. Please compress the Log folder
              and send to us.
            </li>
          </ol>
        ),
      },
      {
        question: "How to download video/audio without converting?",
        answer:
          'Please update to the latest version and choose the Downloading Tab on main interface, then select the output format as "Original Video/Original Audio" in the upper right corner.',
      },
    ],
  },
  {
    title: "License",
    icon: "/images/support/license.svg",
    items: [
      {
        question: "What's the difference between the trial and the full version?",
        answer:
          "Trial version is limited to some features. After you purchase the program, you will be provided the license code which will unlock the limitation.",
      },
      {
        question: "Can I use one license on multiple computers?",
        answer:
          "One license of our software can be used on one PC/Mac only. If you want to use it on multiple computers, you can purchase a Family License, which can support 2-5 PCs/2-5 Macs. If you have commercial use, please feel free to contact us.",
      },
      {
        question: "What if I lost the license code?",
        answer:
          "If you lost your license code, please do not worry. You can request your original license at this page by yourself.",
      },
    ],
  },
  {
    title: "Payment & Refund",
    icon: "/images/support/payment.svg",
    items: [
      {
        question: "What payment method do you accept?",
        answer: "We accept Credit Card.",
      },
      {
        question: "Is it safe to purchase product via your website?",
        answer:
          "Yes, it is 100% secure. The payment platform we utilize is Stripe, which is one of the most trusted ecommerce companies in the world. Your private information such as credit card number and addresses will never be disclosed without your specific permission.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "MassLoader offers a 30-day money back guarantee. If your software does not work properly or there are errors while running, and the problem cannot be solved within an acceptable time, we offer a 30-day money-back guarantee.",
      },
    ],
  },
  {
    title: "Other FAQ",
    icon: "/images/support/other.svg",
    items: [
      {
        question: "How to change the automatic subscription?",
        answer:
          "Please provide your order information. Once we receive it, we will modify it to manual subscription for you.",
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <div>
      <Header />
      <SupportContent
        title="Welcome to"
        titleHighlight="Support"
        subtitle="Our support specialists are here to help."
        searchPlaceholder="Search for keywords..."
        categories={SUPPORT_CATEGORIES}
      />
      <ContactCard
        title="Still need help?"
        description="Submit your questions. One of our specialists will be reaching you soon."
        buttonText="Contact Us"
      />
      <Footer />
    </div>
  );
}
