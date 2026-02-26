"use client";

import { useState, useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  mainTitle: string;
  testimonials: Testimonial[];
  quotationMarksIcon?: string;
  quotationMarksAlt?: string;
  ratingIcon?: string;
  ratingAlt?: string;
  arrowIcon?: string;
  arrowAlt?: string;
  backgroundColor?: string;
  transitionDuration?: number;
}

export default function TestimonialsSection({
  mainTitle,
  testimonials,
  quotationMarksIcon = "/images/onlyfans-downloader/quotation-marks-icon.svg",
  quotationMarksAlt = "quotation marks icon",
  ratingIcon = "/images/onlyfans-downloader/five-star.svg",
  ratingAlt = "five star",
  arrowIcon = "/images/onlyfans-downloader/white-arrow.svg",
  arrowAlt = "arrow",
  backgroundColor = "linear-gradient(180deg, #F4FCFF 0%, #F5FBFF 100%)",
  transitionDuration = 500
}: TestimonialsSectionProps) {
  // 克隆首尾元素实现无限循环
  const extendedTestimonials = [
    ...testimonials.slice(-2), // 克隆最后2个放在开头
    ...testimonials,
    ...testimonials.slice(0, 2) // 克隆前2个放在结尾
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // 从真实的第一个元素开始（索引2）
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  // 处理无限循环的边界重置
  useEffect(() => {
    if (!isTransitioning) return;

    // 清除之前的定时器
    if (transitionRef.current) {
      clearTimeout(transitionRef.current);
    }

    // 动画结束后检查是否需要重置位置
    transitionRef.current = setTimeout(() => {
      setIsTransitioning(false);

      // 如果滑到了克隆的最后元素，跳回真实的第一个
      if (currentIndex >= testimonials.length + 2) {
        setCurrentIndex(2);
      }
      // 如果滑到了克隆的第一个元素，跳回真实的最后一个
      else if (currentIndex < 2) {
        setCurrentIndex(testimonials.length + 1);
      }

      // 重新启用过渡
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }, transitionDuration);

    return () => {
      if (transitionRef.current) {
        clearTimeout(transitionRef.current);
      }
    };
  }, [currentIndex, testimonials.length, transitionDuration, isTransitioning]);

  return (
    <section 
      className="py-10 md:py-20"
      style={{ background: backgroundColor }}
    >
      <div className="container max-w-[1310px] mx-auto px-4">
        {/* 标题和导航 */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h2 className="font-bold text-[1.5rem]/[2rem] lg:text-[2.5rem]/[3rem] text-black lg:flex-1 text-center lg:text-left">
            {mainTitle}
          </h2>

          {/* 导航箭头 - 添加 hover 效果 */}
          <div className="lg:flex-1 flex items-center justify-end mt-5 lg:mt-0">
            <button 
              onClick={handlePrev}
              className="w-[60px] h-[60px] mr-2.5 lg:mr-5 cursor-pointer rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#4EACEA] hover:scale-110 hover:shadow-lg group relative"
              aria-label={`Previous ${arrowAlt}`}
            >
              {/* 默认状态：显示图片箭头 */}
              <div 
                className="absolute inset-0 bg-contain bg-no-repeat bg-center group-hover:opacity-0 transition-opacity duration-300"
                style={{ backgroundImage: `url('${arrowIcon}')` }}
              />
              {/* Hover状态：显示白色SVG箭头 */}
              <svg 
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-[60px] h-[60px] ml-2.5 lg:ml-5 cursor-pointer rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#4EACEA] hover:scale-110 hover:shadow-lg group relative"
              aria-label={`Next ${arrowAlt}`}
            >
              {/* 默认状态：显示图片箭头（旋转180度） */}
              <div 
                className="absolute inset-0 bg-contain bg-no-repeat bg-center transform rotate-180 group-hover:opacity-0 transition-opacity duration-300"
                style={{ backgroundImage: `url('${arrowIcon}')` }}
              />
              {/* Hover状态：显示白色SVG箭头 */}
              <svg 
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 评价卡片轮播 - 显示 2.5 个卡片 */}
        <div className="mt-5 lg:mt-15 overflow-hidden">
          <div 
            className="flex ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 40}%)`,
              transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none'
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full lg:w-[40%] flex-shrink-0 px-2 lg:px-2.5"
              >
                <div className="bg-white shadow-[0px_1px_6px_0px_rgba(166,196,216,0.5)] rounded-[20px] py-5 lg:py-7.5 px-6 lg:px-10 h-full flex flex-col justify-between">
                  {/* 评价内容 */}
                  <div>
                    <img 
                      width="60" 
                      height="60" 
                      src={quotationMarksIcon} 
                      alt={quotationMarksAlt}
                    />
                    <p className="mt-3 lg:mt-5 lg:text-lg text-[#292929]">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* 用户信息 */}
                  <div className="mt-5 lg:mt-7.5 border-t border-[#D8D8D8] pt-5 lg:pt-7.5 flex items-center">
                    <img 
                      width="54" 
                      height="54" 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                    />
                    <div className="ml-3 lg:ml-5">
                      <p className="lg:text-lg text-[#292929] lg:mb-2">
                        {testimonial.name}
                      </p>
                      <img 
                        width="168" 
                        height="24" 
                        src={ratingIcon} 
                        alt={ratingAlt}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 移动端指示器 */}
        <div className="flex justify-center mt-5 lg:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 transition-all ${
                (currentIndex - 2) % testimonials.length === index ? "bg-[#4EACEA] w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
