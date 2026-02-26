import { SITE_DOMAIN, CONTACT_EMAIL, BASE_URL } from "@/lib/config";

export default function PrivacyPolicyContent() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto max-w-[1310px] px-4 text-left">
        {/* Introduction */}
        <p className="text-[#333333] text-base md:text-lg leading-6">
          Here at MassLoader Office, doing business as {SITE_DOMAIN} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), we know that our users care about how your personal information is used and shared. We take your privacy seriously. Please read the following to learn more about our Privacy Policy.
        </p>
        <p className="text-[#333333] text-base md:text-lg leading-6 mt-5">
          By visiting or using the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, process and share your information as described herein.
        </p>
        <p className="text-[#333333] text-base md:text-lg leading-6 mt-5">
          Any capitalized terms used herein without definition shall have the meaning given to them in the End User License Agreement: {BASE_URL}/license-agreement.
        </p>

        {/* PRIVACY PRINCIPLES */}
        <h2 className="text-[#333333] text-2xl md:text-[26px] leading-9 font-bold mt-5">
          PRIVACY PRINCIPLES
        </h2>
        <dl className="text-[#333333] text-base md:text-lg leading-6 mt-4">
          <dt>
            This Privacy Policy reflects the following three principles that we strive to uphold in providing you with the services on our Services:
          </dt>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            We will only collect information that helps us to improve our Services;
          </dd>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            You may provide and we only collect information that can identify you personally (&quot;Personal Information&quot;) in order to provide the Services;
          </dd>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            Our privacy practices will be transparent to you.
          </dd>
        </dl>

        {/* WHAT DOES THIS PRIVACY POLICY COVER? */}
        <h2 className="text-[#333333] text-2xl md:text-[26px] leading-9 font-bold mt-5">
          WHAT DOES THIS PRIVACY POLICY COVER?
        </h2>
        <p className="text-[#333333] text-base md:text-lg leading-6 mt-5">
          This Privacy Policy covers our treatment of information that we gather when you are accessing or using our Services. This policy does not apply to the practices of companies that we do not own or control (including, without limitation, the third party content providers from whom you may receive content through the Services), or to individuals that we do not employ or manage.
        </p>
        <p className="text-[#333333] text-base md:text-lg leading-6 mt-5">
          Company does not knowingly collect or solicit Personal Information from anyone under the age of 13 or knowingly allow such persons to register. If you are under 13, please do not attempt to register for the Website or send any information about yourself to us, including your name, address, telephone number, or email address. No one under age 13 may provide any personal information to Company or on the Website. In the event that we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you believe that we might have any information from or about a child under 13, please contact us at {CONTACT_EMAIL}
        </p>

        {/* WHAT INFORMATION DOES MassLoader.COM COLLECT? */}
        <h2 className="text-[#333333] text-2xl md:text-[26px] leading-9 font-bold mt-5">
          WHAT INFORMATION DOES MassLoader.COM COLLECT?
        </h2>
        <dl className="text-[#333333] text-base md:text-lg leading-6 mt-4">
          <dt>
            The information we collect can be generally placed in two categories: 1) data on how the user uses our Services; 2) aggregate data on content the user engages with. We may use this information to personalize and improve our services, to fulfill your requests for certain products and services, and to analyze how you use the Services. We may provide this information to our partners, so that they, too, can provide you with an optimal experience, but we never disclose information to a partner in a manner that would identify you personally. Here are a few examples of data we collect when you use our Services:
          </dt>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            Whenever you interact with our website, we automatically receive and record information on our server logs from your browser including your IP address, &quot;cookie&quot; information, and the page you requested. &quot;Cookies&quot; are identifiers we transfer to your computer or mobile device that allow us to recognize your computer or device and tell us how and when the Services are visited and by how many people. You may be able to change the preferences on your browser or device to prevent or limit your computer or device&apos;s acceptance of cookies, but this may prevent you from taking advantage of some of our features. We may use Google Analytics to gather non-Personal Information. In such cases, you may have the option to disable certain features as described below.
          </dd>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            Google Analytics is a web analytics service provided by Google, Inc. (&quot;Google&quot;). Google Analytics uses cookies to help the website analyze how individuals use the Website and Apps. The non-Personal Information generated by the cookie about your use of the site will be transmitted to and stored by Google on servers in the United States of America (&quot;USA&quot;). Google will use this information for the purpose of evaluating your use of the site, compiling reports on site activity for our purpose, evaluation and providing other services relating to the site activity and Internet usage. Google will not associate your IP address with any other data held by Google. You may disable cookies within your browser, however please note that if you do this you may not be able to use the full functionality of the site. By using this site, you consent to the processing of data about you by Google in the manner and for the purposes set out above. For certain browsers, you can also prevent Google from collecting information (including your IP address) via cookies and processing this information by downloading this browser plugin and installing it: http://tools.google.com/dlpage/gaoptout.
          </dd>
        </dl>

        <dl className="text-[#333333] text-base md:text-lg leading-6 mt-2.5">
          <dt>A few particular features to note:</dt>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            If you&apos;re using our software and it crashes, the crash report sent to our server may contain some information about the operating system that you use.
          </dd>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            If you download content via our desktop software, we store a copy to your computer so that the next time you connect your phone you don&apos;t have to download it again
          </dd>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            If you provide us with your name and email address, we will use this information for the purpose of contacting you regarding our services and products. You may opt out of such communications at any time by unsubscribing through our website or contacting us through one of the methods listed at the end of this policy
          </dd>
        </dl>

        <dl className="text-[#333333] text-base md:text-lg leading-6 mt-2.5">
          <dt>
            The data we collect is sent to the Company servers in the USA in aggregate form and added to our system for analysis. Our Services do NOT collect the following information:
          </dt>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            Your phone number
          </dd>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            Your friends&apos; phone numbers
          </dd>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            Your cat&apos;s phone number
          </dd>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            Any of the content of your text messages, either sent or received
          </dd>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            Your music, photos, or videos
          </dd>
          <dd className="relative pl-5 mt-2.5 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#333333] before:rounded-full">
            The content you download via Company
          </dd>
        </dl>

        <p className="text-[#333333] text-base md:text-lg leading-6 mt-2.5">
          We do not purport to have listed all possible disclosures that we might make. This Privacy Policy is intended to help you understand our general practices. This policy is not a promise that your information will never be disclosed except as described above. For example, third parties may unlawfully intercept or access information transmitted to or contained on the site, technologies may malfunction or not work as anticipated, or someone might access, abuse or misuse information, despite a lack of permission. Although we use what we believe to be commercially reasonable practices to protect your privacy, that does not mean, and you should not expect it to mean, that your information or communications will always be private or protected.
        </p>
        <p className="text-[#333333] text-base md:text-lg leading-6 mt-2.5">
          We generally will retain information for as long as required, allowed or for as long as we believe it useful. If you cease using the website, or your permission to use the website is terminated, we may continue to use and disclose your Personal Information in accordance with this Privacy Policy as amended from time to time. We do not undertake retention obligations through this Privacy Policy. We may dispose of information in our discretion without notice, subject to applicable law.
        </p>
      </div>
    </section>
  );
}
