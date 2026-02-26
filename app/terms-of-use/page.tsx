import type { Metadata } from "next";
import { BASE_URL, SITE_DOMAIN, CONTACT_EMAIL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Term Of Service — MassLoader",
  description:
    "Read MassLoader's Terms of Service. Understand your rights and obligations when accessing and using MassLoader's website and software services.",
  alternates: {
    canonical: `${BASE_URL}/term-of-service/`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function TermsOfUsePage() {
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
            Term Of Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-[860px] px-4">
          <div className="prose prose-lg max-w-none text-gray-700 leading-8 space-y-6">

            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">
              Please read this statement of privacy practices carefully before using our service
            </h2>
            <p>
              {SITE_DOMAIN} ("Our", "We" or "Us") is comprised of web pages containing information
              provided by us. Your access to the Site is offered to you conditioned on your
              acceptance of these Terms of Service together with our statement of privacy practices,
              which is incorporated herein by this reference and found at ("Terms"). If the terms of
              this agreement are considered an offer, acceptance is expressly limited to such terms.
              If you do not unconditionally agree to all the terms and conditions of this agreement,
              you have no right to use the Site/Client and any other linked services.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">1. ACCESS TO THE SERVICES</h2>
            <p>
              Please note that we reserves the right, in its sole discretion, to change these Terms
              at any time upon notice. You can review the most current version of Terms at any time.
              The updated Terms are binding on you on the version date indicated in the updated
              Terms. If you do not agree to the updated Terms, please discontinue your use of this
              service. Your continued use of the service after the effective date will constitute
              your acceptance of the updated Terms.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">2. Third Party Products and Services</h2>
            <p>
              MassLoader's websites and products may include products or services owned by third
              party websites. Such products or services owned by third party websites are only for
              your convenience. MassLoader shall not be responsible for the license restrictions and
              legality of any content of such products or services owned by third party websites.
              You might need to review and agree to applicable rules of use when using such products
              or services owned by third party websites. In addition, a link to a third party
              website does not imply that MassLoader endorses the site or the products or services
              referenced therein.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">3. FEEDBACK</h2>
            <p>
              Any user generated contents, including but not limited to users comments, suggestions,
              ideas, or other related or unrelated information, provided by you or any other party
              in the form of email or other submissions to us (excluding material that you post on
              the Service in accordance with these Terms) (collectively "Feedback"), are
              non-confidential and you hereby grant us and our subsidiaries and affiliates a
              nonexclusive, royalty-free, perpetual, irrevocable, and fully sub-licensable right to
              use your Feedback and comments for any purpose without compensation or attribution to
              you.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">4. TRADEMARKS</h2>
            <p>
              MassLoader, the MassLoader logos, and any other product or service name or slogan
              displayed on the Service are trademarks or registered trademarks, and may not be
              copied, imitated or used, in whole or in part, without the prior written consent and
              approval of the applicable trademark holder. All other trademarks, registered
              trademarks, product names and company names or logos mentioned on the Service are the
              reserved property of their respective owners. Reference to any products, services,
              processes or other information, by trade name, trademark, manufacturer, supplier or
              otherwise, does not constitute or imply endorsement, sponsorship, or recommendation
              thereof by us, or vice versa.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">5. OWNERSHIP AND INTELLECTUAL PROPERTY RIGHTS</h2>
            <p>
              MassLoader own and/or the authorized user of all right, title, and interest, patents,
              designs, including all intellectual property rights, in and to the Services, and any
              services made available in connection with the Service provided to you and we reserve
              the right to revoke the use of license granted to you. Except for those rights
              expressly stated and granted in these Terms, no other rights are granted, either
              expressly stated or implied, to you. All copying, distribution or other use of the
              Service or any third party services or content except as expressly permitted hereunder
              is prohibited without the prior written consent of the relevant rights holders. You
              accept that you shall not at any point in time question or dispute the legal ownership
              of these properties with MassLoader.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">6. INDEMNIFICATION</h2>
            <p>
              You will defend, indemnify and hold harmless MassLoader, its subsidiaries, affiliates,
              partners and third-party advertisers and their respective directors, officers, agents,
              employees, licensors, and suppliers from and against any costs, damages, expenses, and
              liabilities (including, but not limited to, reasonable attorneys' fees) arising out of
              or related to your use of the Service, your violation of these Terms or any Policies,
              or your violation of any rights of a third party or applicable legislation.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">7. WARRANTY DISCLAIMER</h2>
            <p>
              To the maximum extent permitted by applicable law, the Site and Content are provided
              "AS IS," "WITH ALL FAULTS," and "AS AVAILABLE" and the entire risk of use and
              performance, remains with you. {SITE_DOMAIN}, its suppliers, and licensors DO NOT MAKE
              ANY representations, warranties, or conditions, express, implied, or statutory and
              hereby disclaim any implied warranties of merchantability, merchantable quality,
              fitness for a particular purpose, title, quiet Enjoyment, or non-infringement. In
              particular, {SITE_DOMAIN}, its suppliers, and licensors make no warranty that the Site
              or Content:
            </p>
            <ul className="list-none space-y-2 pl-2">
              <li>(A) will meet your requirements;</li>
              <li>(B) will be available or provided on an uninterrupted, timely, secure, or error-free basis;</li>
              <li>(C) any information or content obtained through the SITE will be accurate, complete, or reliable; or</li>
              <li>(D) that any defects or errors therein will be corrected.</li>
            </ul>
            <p>
              All Content you download or obtain through the Site is accessed at your own risk, and
              you will be solely responsible for any damage or loss that results therefrom.
            </p>
            <p>
              Although every precaution has been taken to verify the accuracy of the information
              contained herein, neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or suitability of the
              information, materials and software found or offered on this website for any particular
              purpose. You acknowledge that such information and materials may contain inaccuracies
              or errors and we expressly exclude liability for any such inaccuracies or errors to
              the fullest extent permitted by law.
            </p>
            <p>
              You may use any information, materials or software on this website which is entirely
              at your own risk. It shall be your own responsibility to ensure that any products,
              services or information available through this website meet your specific requirements.
            </p>
            <p>
              Some contents on our webpage originated from the Internet, and they are for display
              exclusively. All rights reserved by the authors. Should this violate your rights,
              kindly advise us in writing. We shall delete your documents without hesitation and
              delay.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">8. CONTACT</h2>
            <p>
              If you have any questions, complaints, or claims with respect to the Services, you
              may contact us at:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#7A32FD] hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-sm text-gray-500">Comply with the law HK</p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
