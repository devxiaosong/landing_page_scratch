"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  mainTitle: string;
  faqs: FAQ[];
  expandIcon?: string;
  collapseIcon?: string;
  defaultOpenIndex?: number;
  questionColor?: string;
  activeQuestionColor?: string;
  itemBackgroundColor?: string;
}

export default function FAQSection({
  mainTitle,
  faqs,
  expandIcon = "/images/onlyfans-downloader/expand-icon.svg",
  collapseIcon = "/images/onlyfans-downloader/close-icon.svg",
  defaultOpenIndex = 0,
  questionColor = "#333333",
  activeQuestionColor = "#4EACEA",
  itemBackgroundColor = "#F9F9F9"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container max-w-[1310px] mx-auto px-4 py-10 md:py-20">
        {/* 标题 */}
        <h2 className="text-center text-[1.5rem]/[1.75rem] lg:text-[2.5rem]/[3rem] font-bold text-black">
          {mainTitle}
        </h2>

        {/* FAQ 列表 */}
        <div className="space-y-4 mt-8 lg:mt-15">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-[10px]"
              style={{ backgroundColor: itemBackgroundColor }}
            >
              {/* 问题标题 */}
              <div 
                className="p-5 flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span 
                  className="lg:text-lg font-bold"
                  style={{ 
                    color: openIndex === index ? activeQuestionColor : questionColor 
                  }}
                >
                  {faq.question}
                </span>
                
                {/* 展开/折叠图标 */}
                <div 
                  className="ml-2.5 w-5 h-5 bg-no-repeat bg-center bg-contain transition-transform flex-shrink-0"
                  style={{
                    backgroundImage: `url('${openIndex === index ? collapseIcon : expandIcon}')`
                  }}
                />
              </div>

              {/* 答案内容 */}
              {openIndex === index && (
                <div className="px-8 pb-6 -mt-2 relative z-1 text-[#292929] text-sm lg:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
