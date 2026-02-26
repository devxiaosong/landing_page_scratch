import { CONTACT_EMAIL } from "@/lib/config";

export default function RefundPolicyContent() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto max-w-[1310px] px-4 text-left">
        {/* Introduction */}
        <p className="text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px]">
          At MassLoader, our customers are very important and we do our best to fulfill all their requirements. All our programs come with a free trial version that you can use to evaluate the program before purchase.
        </p>
        <p className="text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-2.5">
          If you discover an issue with the program within 30 days after your purchase, email our support team with the details of the problem. Please allow 24 hours for a response. This period can however be longer (up to 3 days) on the weekends or national holiday.
        </p>

        {/* Free Trial & Upgrade */}
        <h2 className="text-[#333333] text-2xl md:text-[34px] leading-8 md:leading-[44px] font-bold mt-[60px]">
          Free Trial &amp; Upgrade
        </h2>
        <p className="text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-5">
          Some of our products are completely free and all of the paid tools have a free trial version. We provide the free trial version to avoid customer dissatisfaction and refund problems later.
        </p>
        <p className="text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-2.5">
          We therefore encourage you to download the free trial version of the program first before making the purchase. This way you can decide if the program is sufficient for your needs.
        </p>
        <p className="text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-2.5">
          Once you purchase the program, all future updates will be completely free of charge. You purchase the license and enjoy using the program for a life time.
        </p>

        {/* 30-Day Moneyback Guarantee */}
        <h2 className="text-[#333333] text-2xl md:text-[34px] leading-8 md:leading-[44px] font-bold mt-[60px]">
          30-Day Moneyback Guarantee
        </h2>
        <p className="text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-2.5">
          We can offer a refund on all MassLoader products within 30 days of purchase. The refund will only be approved and guaranteed under the circumstances listed below. If the purchase period the money-back guarantee period (30 days), the refund will not be processed.
        </p>

        {/* Acceptable Refund Circumstances */}
        <h2 className="text-[#333333] text-2xl md:text-[34px] leading-8 md:leading-[44px] font-bold mt-[60px]">
          Acceptable Refund Circumstances
        </h2>
        <p className="text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-2.5">
          We will only process refund requests under the following circumstances:
        </p>
        <ol className="list-decimal list-inside text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-2.5 space-y-2">
          <li>If you accidentally purchased the wrong products from MassLoader and then purchased the right product within 30 days.</li>
          <li>If you purchase the same product twice or two products with the same function. In this case MassLoader will process a refund for one of the products.</li>
          <li>If you didn&apos;t activate the product after the purchase and our customer support team failed to respond within 24 hours of your inquiry.</li>
          <li>If the MassLoader tool your purchased has technical problems and our technical team is unable to find a solution in 30 days.</li>
        </ol>

        {/* Unacceptable Refund Circumstances */}
        <h2 className="text-[#333333] text-2xl md:text-[34px] leading-8 md:leading-[44px] font-bold mt-[60px]">
          Unacceptable Refund Circumstances
        </h2>
        <p className="text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-2.5">
          We strongly advise all our customers to download the free trial version of the program first. Most refund request that we get are often due to the customer&apos;s lack of information about the product.
        </p>
        <p className="text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-2.5">
          We will not process a refund under the following circumstances:
        </p>
        <ol className="list-decimal list-inside text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-2.5 space-y-2">
          <li>If you purchase a program that is incompatible with your computer or device. For example, if you have a Mac and choose the Windows version, we will not process a refund. Or if you demonstrate a lack of knowledge about the products function or what it is used for.</li>
          <li>If you simply change your mind about the product after you have purchased it.</li>
          <li>If you fail to update the program when MassLoader provides an updated version.</li>
          <li>If there are no technical issues with the software that we can find.</li>
          <li>If you request a refund because of technical issues, but you failed to seek help for these technical issues from our support team.</li>
          <li>If you fail to implement any troubleshooting or repair steps that our technical team provide within 30 days of reporting the issue to us. And if you fail to provide any requested additional information about the problem you&apos;re having.</li>
          <li>If you don&apos;t receive a registration code for the product, but you fail to contact customer support for assistance.</li>
          <li>If you request a refund after 30 days</li>
        </ol>

        {/* How to Request a Refund */}
        <h2 className="text-[#333333] text-2xl md:text-[34px] leading-8 md:leading-[44px] font-bold mt-[60px]">
          How to Request a Refund?
        </h2>
        <p className="text-[#333333] text-sm md:text-base leading-[22px] md:leading-[26px] mt-2.5">
          To request a refund, send and email to {CONTACT_EMAIL}. Refunds are processed within 3-5 days. Once the refund is issued, the account for the product will be deactivated.
        </p>
      </div>
    </section>
  );
}
