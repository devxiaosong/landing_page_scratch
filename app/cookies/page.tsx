import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
            Cookies
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-[860px] px-4">
          <div className="prose prose-lg max-w-none text-gray-700 leading-8 space-y-6">

            <p>
              Our website and mobile app uses cookies. By using our website, mobile app and
              agreeing to this policy, you consent to our use of cookies, web beacons and similar
              technologies in accordance with the terms of this policy.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">
              What are Cookies and how we use Cookies?
            </h2>
            <p>
              Cookies are small pieces of text containing a string of alphanumeric characters which
              are stored on the browser or your device when you visit a website or application. A
              cookie helps the website to remember information about your visit, like your
              preferences, so that the next visit will become easier. Cookies play an important role
              in improving your experience browsing our websites.
            </p>
            <p>
              We may use both session cookies and persistent cookies. Session cookies are deleted
              from your computer or device after you close the browser. Persistent cookies will
              remain stored till they are deleted or reach the expiry date. Please note if you
              delete or choose not to accept the cookies, you may not be able to utilize the
              features of MassLoader products and services to their fullest potential.
            </p>
            <p>
              We may also use third-party cookies sometimes. For example, we use Google Analytics
              to accomplish some analysis work. MassLoader does not process or respond to the web
              browser DNT (Do Not Track) signal or other similar transmissions that indicate to
              disable online tracking of users who use MassLoader products and services.
            </p>
            <p>
              Google Analytics is a web analytics service offered by Google Inc. to help track and
              report website traffic. Google Analytics doesn't identify users and your IP address
              will not be associated with other data held by Google. We use the anonymous
              information to analyze our websites and improve the content and user experiences.
              Learn more about{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7A32FD] hover:underline"
              >
                Google Privacy &amp; Terms
              </a>
              .
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">
              How to Block or Delete Cookies
            </h2>
            <p>
              You can check or change the type of cookies you accept within your browser setting at
              any time. For details, visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7A32FD] hover:underline"
              >
                aboutcookies.org
              </a>
              . You can also restrict all cookies any time through your browser settings. However,
              if you restrict cookies on your browser or device (including essential cookies) you
              may not be able to make use of our Services or website.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
