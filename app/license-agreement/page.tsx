import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "End User License Agreement — MassLoader",
  description:
    "Read MassLoader's End User License Agreement (EULA). Understand the terms and conditions for downloading, installing, and using MassLoader software.",
  alternates: {
    canonical: `${BASE_URL}/license-agreement/`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function LicenseAgreementPage() {
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
            End User License Agreement
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-[860px] px-4">
          <div className="prose prose-lg max-w-none text-gray-700 leading-8 space-y-6">

            <p>
              This End User License Agreement (Agreement or License or EULA) is between the end
              user (hereinafter referred to as You or Licensee), and MassLoader software, the
              developer and owner of the program and software (hereinafter referred to as Software).
            </p>
            <p>
              <strong>
                IMPORTANT: BY DOWNLOADING, ACCESSING, INSTALLING OR USING THE SOFTWARE,
                DOCUMENTATION, YOU AGREE TO BE BOUND BY ALL THE TERMS AND CONDITIONS OF THIS
                AGREEMENT.
              </strong>
            </p>
            <p>
              Please read this agreement carefully before downloading or installing the software.
              Top attention should be paid to such clauses including but not limited to Article 4,
              8, 9, 10 in special font. If you disagree with or have any questions concerning this
              END USER LICENSE AGREEMENT (EULA), please contact MassLoader software. Any installing,
              copying, accessing, or using the Licensed Software by you (the "Licensee") constitutes
              an acceptance of, and a promise to comply with, all the terms and conditions of this
              EULA.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">1. LICENSED SOFTWARE</h2>
            <p>
              Licensed software includes but not limited to all the products whose name contains
              MassLoader software.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">2. GRANT OF LICENSE</h2>
            <p>
              Subject to the terms and conditions of this Agreement, MassLoader hereby grants you
              (an individual) the limited, revocable, personal, non-exclusive, and non-transferable
              right to download, install and activate the Software on two separated computers solely
              for your personal, private and non-commercial use, unless you have purchased a
              commercial license from MassLoader. Sharing the Software with others, or allowing
              others to view the contents of this Software, is in violation of the License. You may
              not make the Software available over a network, or in any way provide the Software to
              multiple users, unless you have purchased a multi-user license from MassLoader in
              advance. MassLoader reserves all rights not expressly granted to You in this Agreement.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">3. COPYRIGHT</h2>
            <p>
              All title and copyrights in and to the SOFTWARE (including but not limited to any
              images, photographs, animations, video, audio, music, and text incorporated into the
              SOFTWARE), the accompanying printed materials, and any copies of the SOFTWARE are
              owned by MassLoader or its suppliers. The SOFTWARE is protected by copyright laws and
              international treaty provisions. Therefore, you must treat the SOFTWARE like any other
              copyrighted material, and may not remove or conceal any proprietary notices, labels or
              marks from the Software.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">4. RESTRICTIONS ON USE</h2>
            <p>
              Licensee may not and agrees not to or enable others to modify, adapt, translate,
              sublicense, rent, lease, or loan all or any portion of the Licensed Software or
              Documentation; and
            </p>
            <p>
              Licensee may not and agrees not to or enable others to use a previous version of the
              Licensed Software after receiving a media replacement or upgraded version as a
              replacement to a prior version (in such case Licensee must destroy the prior version);
              and
            </p>
            <p>
              Licensee may not and agrees not to or enable others to remove or obscure Licensor's
              copyright or trademark notices, or the copyright and trademark notices of any third
              parties that Licensor has included in the Licensed Software or Documentation; and
            </p>
            <p>
              Licensee may not and agrees not to or enable others to use the Licensed Software to
              host applications for third parties, as part of a facility management, service
              provider, or service bureau arrangement; and
            </p>
            <p>
              Licensee may not and agrees not to or enable others to use the Licensed Software in
              any manner that is illegal or not authorized by this EULA; and
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">5. COVER CD</h2>
            <p>
              The reproduction and distribution of MassLoader Software (evaluation copy only) in
              various Cover CDs published by associated magazines are allowed. However a copy of
              magazine with CD is required to be sent to MassLoader.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">6. PROTECTION OF PRIVACY</h2>
            <p>
              MassLoader respects and protects your privacy, and will not share, sell, use or
              disclose your personal information to any third-parties, unless your written agreement
              under related law and regulation.
            </p>
            <p>
              Under the following conditions, MassLoader will disclose your personal information
              based on your will or the laws. You will be responsible for the resulting problems.
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-2">
              <li>Obtain your prior authorization;</li>
              <li>Reveal your personal information to offer products and services requested by you;</li>
              <li>According to relevant laws, regulations or requirements of the relevant government agencies;</li>
              <li>To protect MassLoader's legal rights and interests;</li>
              <li>You violate the provisions of the EULA;</li>
            </ol>

            <h2 className="text-xl font-bold text-gray-900 mt-8">7. TERMINATION</h2>
            <p>
              This Agreement is effective until terminated. You may terminate it at any time by
              destroying the Software, together with all copies thereof. MassLoader shall be entitled
              to terminate this EULA immediately upon serving written notice on the Licensee in the
              following circumstances; if Licensee commits a material breach of any of its
              obligations under this EULA which is not capable of remedy or if Licensee commits a
              material breach of any of its obligations under this EULA which is not remedied within
              fifteen (15) calendar days after receipt of a notice from MassLoader. Termination of
              this EULA shall not affect any rights, obligations or liabilities of either party
              which have accrued before termination or which are intended to continue to have effect
              after termination.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">8. NO OTHER WARRANTIES</h2>
            <p className="uppercase text-sm leading-7">
              MassLoader does not warrant that the software is error free. MassLoader disclaims all
              other warranties with respect to the software, either express or implied, including
              but not limited to implied warranties of merchantability, fitness for a particular
              purpose and noninfringement of third party rights. Some jurisdictions do not allow the
              exclusion of implied warranties or limitations on how long an implied warranty may
              last, or the exclusion or limitation of incidental or consequential damages, so the
              above limitations or exclusions may not apply to you. This warranty gives you specific
              legal rights and you may also have other rights which vary from jurisdiction to
              jurisdiction.
            </p>
            <p className="uppercase text-sm leading-7">
              You expressly acknowledge and agree that use of the software is at your sole risk and
              that the entire risk as to satisfactory quality, performance, accuracy and effort is
              with you. Except for the limited warranty on media set forth above and to the maximum
              extent permitted by applicable law, the software is provided "as is", with all faults
              and without warranty of any kind, and MassLoader hereby disclaim all warranties and
              conditions with respect to the software, either express, implied or statutory,
              including, but not limited to, the implied warranties and/or conditions of
              merchantability, of satisfactory quality, of fitness for a particular purpose, of
              accuracy, of quiet enjoyment, and non-infringement of third party rights. MassLoader
              does not warrant against interference with your enjoyment of the software, that the
              functions contained in the software will meet your requirements, that the operation of
              the software will be uninterrupted or error-free, or that defects in the software will
              be corrected. No oral or written information or advice given by MassLoader shall create
              a warranty. Should the software prove defective, you assume the entire cost of all
              necessary servicing, repair or correction. Some jurisdictions do not allow the
              exclusion of implied warranties or limitations on applicable statutory rights of a
              consumer, so the above exclusion and limitations may not apply to you.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">9. LIMITATION OF LIABILITY</h2>
            <p className="uppercase text-sm leading-7">
              In no event will the licensor, or the licensor's affiliates, its employees, agents be
              liable for any damages, claims, or costs whatsoever, or for any consequential,
              indirect, special, punitive, incidental damages, or any loss of profits or savings,
              even if a representative of the licensor or one of the licensor's affiliates has been
              advised of the possibility of such loss, damages, claims, or costs, or for any claim
              by any third party. These limitations and exclusions apply to the extent permitted by
              applicable law in licensee's jurisdiction. The aggregate liability of the licensor,
              and the licensor affiliates, its employees, agents under or in connection with this
              EULA, shall be limited to the fees licensee has paid for the licensed software, if
              any.
            </p>
            <p className="uppercase text-sm leading-7">
              If the software is subject to a threatened, potential or actual claim of infringement
              of another's right for which licensor may be liable, the licensee will make prompt and
              reasonable efforts to stop using and delete the software upon receiving the licensor's
              written notice (including by email), licensor may provide licensee with a replacement
              or updated or modified software free of charge. In such circumstance, licensor shall
              not bear other liabilities to you.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">10. INDEMNIFICATION</h2>
            <p className="uppercase text-sm leading-7">
              Licensee will indemnify and hold licensor harmless from any and all claims, losses,
              liabilities, damages, fines, penalties, costs and expenses (including attorney's fees)
              arising from or relating to licensee's illegal or improper uses of the licensed
              software from any third party. Licensee's obligations under this section shall survive
              the expiration or termination of this agreement.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">11. SEVERABILITY</h2>
            <p>
              In the event of invalidity of any provision of this EULA, the parties agree that such
              invalidity shall not affect the validity of the remaining portions of this EULA.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">12. MISCELLANEOUS</h2>
            <p>
              MassLoader does not allow you to utilize our SOFTWARE to do anything that violates the
              local law or infringe any party's rights or intellectual property. If you utilize our
              SOFTWARE to do the illegal activity or infringe other's rights, the consequent result
              shall be on your own responsibility. If you disagree with this item, please don't
              install and/or use the SOFTWARE.
            </p>
            <p>
              To the maximum extent permitted by law, the final interpretation is left to our
              discretion. Should you have any questions concerning this EULA, or if you desire to
              contact us for any reason, please write to us.
            </p>
            <p>
              Either party's failure to exercise any of its rights or responsibilities shall not
              constitute or be deemed to be a waiver or forfeiture of any such rights. If for any
              reason a court of a competent jurisdiction finds any provision or portion thereof, to
              be unenforceable, illegal, the remainder of this agreement shall continue in full
              force and effect. If there is any conflict between this Agreement and the mandatory
              provision of any law in Licensee's jurisdiction, the latter shall prevail.
            </p>
            <p>
              This agreement shall be governed by the Law of People's Republic of China. Any
              disagreements arising from this agreement shall be consulted, if not, any party can
              attribute on China International Economic and Trade Arbitration Commission, South
              China Sub for the final Arbitration.
            </p>
            <p>
              MassLoader may update this agreement from time to time, you are considered to accept
              such update if you keep using the Software. If you can not accept the updated
              agreement, you may choose to terminate this agreement. Under such circumstance,
              MassLoader will not bear any liabilities or expenses to you.
            </p>
            <p className="uppercase text-sm leading-7 font-semibold">
              Acknowledgment: By installing the software, you acknowledge that you have read and
              understand the foregoing and that you agree to be bound by its terms and conditions.
              You also agree that this agreement is the complete and exclusive statement of
              agreement between the parties and supersedes all proposed or prior agreements, oral or
              written, and any other communications between the parties relating to the license
              described herein.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
