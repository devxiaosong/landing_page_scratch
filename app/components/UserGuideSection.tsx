"use client";

import { useState } from "react";

interface GuideStep {
  image: string;
  imageWebp: string;
  title: string;
  description: string;
}

interface UserGuideSectionProps {
  mainTitle: string;
  steps: GuideStep[];
  windowsDownloadUrl: string;
  macDownloadUrl: string;
  downloadButtonText?: string;
  defaultActiveStep?: number;
  transitionDuration?: number;
}

export default function UserGuideSection({
  mainTitle,
  steps,
  windowsDownloadUrl,
  macDownloadUrl,
  downloadButtonText = "Free Download",
  defaultActiveStep = 0,
  transitionDuration = 500
}: UserGuideSectionProps) {
  const [activeStep, setActiveStep] = useState(defaultActiveStep);
  const [displayStep, setDisplayStep] = useState(defaultActiveStep);
  const [nextStep, setNextStep] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleStepClick = (index: number) => {
    if (index === activeStep || isAnimating) return;

    // 确定滑动方向
    const dir = index > activeStep ? 'right' : 'left';
    setDirection(dir);
    setNextStep(index);
    setIsAnimating(true);
    setAnimationStarted(false);
    
    // 第一帧：渲染两张图但不移动
    requestAnimationFrame(() => {
      // 第二帧：开始移动动画
      requestAnimationFrame(() => {
        setAnimationStarted(true);
      });
    });

    // 动画结束后更新状态
    setTimeout(() => {
      setActiveStep(index);
      setDisplayStep(index);
      setNextStep(null);
      setIsAnimating(false);
      setAnimationStarted(false);
    }, transitionDuration + 100);
  };

  return (
    <section className="bg-white">
      <div className="container max-w-[1310px] mx-auto px-4 py-10 lg:py-20">
        {/* 标题 */}
        <h2 className="text-center text-2xl md:text-[2.5rem] md:leading-[3rem] font-bold text-black">
          {mainTitle}
        </h2>

        {/* 内容区域 */}
        <div className="flex flex-col lg:flex-row items-center mt-5 lg:mt-12.5">
          {/* 左侧图片轮播 */}
          <div className="w-full lg:flex-1 overflow-hidden relative">
            {!isAnimating ? (
              // 非动画状态：只显示当前步骤
              <picture 
                className="rounded-[20px] lg:rounded-[30px] px-4 lg:px-8 pt-6 lg:pt-15 block"
                style={{ 
                  background: "linear-gradient(180deg, #F4FCFF 0%, #F5FBFF 100%)"
                }}
              >
                <source 
                  srcSet={steps[displayStep].imageWebp} 
                  type="image/webp"
                />
                <img 
                  width="762" 
                  height="527" 
                  className="rounded-[20px] lg:rounded-[30px] border-4 lg:border-8 border-[#4EACEA] w-full" 
                  src={steps[displayStep].image} 
                  alt={steps[displayStep].title}
                />
              </picture>
            ) : (
              // 动画状态：显示两张图片的跑马灯效果
              <div 
                className="flex ease-in-out"
                style={{
                  transform: animationStarted 
                    ? (direction === 'right' ? 'translateX(-100%)' : 'translateX(0%)') 
                    : (direction === 'right' ? 'translateX(0%)' : 'translateX(-100%)'),
                  transition: animationStarted ? `transform ${transitionDuration}ms ease-in-out` : 'none'
                }}
              >
                {/* 第一张图片 */}
                <div className="w-full flex-shrink-0">
                  <picture 
                    className="rounded-[20px] lg:rounded-[30px] px-4 lg:px-8 pt-6 lg:pt-15 block"
                    style={{ 
                      background: "linear-gradient(180deg, #F4FCFF 0%, #F5FBFF 100%)"
                    }}
                  >
                    <source 
                      srcSet={steps[direction === 'right' ? displayStep : (nextStep ?? displayStep)].imageWebp} 
                      type="image/webp"
                    />
                    <img 
                      width="762" 
                      height="527" 
                      className="rounded-[20px] lg:rounded-[30px] border-4 lg:border-8 border-[#4EACEA] w-full" 
                      src={steps[direction === 'right' ? displayStep : (nextStep ?? displayStep)].image} 
                      alt={steps[direction === 'right' ? displayStep : (nextStep ?? displayStep)].title}
                    />
                  </picture>
                </div>

                {/* 第二张图片 */}
                <div className="w-full flex-shrink-0">
                  <picture 
                    className="rounded-[20px] lg:rounded-[30px] px-4 lg:px-8 pt-6 lg:pt-15 block"
                    style={{ 
                      background: "linear-gradient(180deg, #F4FCFF 0%, #F5FBFF 100%)"
                    }}
                  >
                    <source 
                      srcSet={steps[direction === 'right' ? (nextStep ?? displayStep) : displayStep].imageWebp} 
                      type="image/webp"
                    />
                    <img 
                      width="762" 
                      height="527" 
                      className="rounded-[20px] lg:rounded-[30px] border-4 lg:border-8 border-[#4EACEA] w-full" 
                      src={steps[direction === 'right' ? (nextStep ?? displayStep) : displayStep].image} 
                      alt={steps[direction === 'right' ? (nextStep ?? displayStep) : displayStep].title}
                    />
                  </picture>
                </div>
              </div>
            )}
          </div>

          {/* 右侧步骤说明 */}
          <div className="w-full lg:w-[26.75rem] lg:ml-10 mt-5 lg:mt-0">
            <div className="p-1 overflow-hidden">
              <div className="flex flex-col space-y-2.5">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-2xl transition-all ${
                      activeStep === index 
                        ? 'border border-[#4EACEA] shadow-[0_1px_7px_0_rgba(77,116,188,0.42)]' 
                        : 'border border-transparent hover:border-[#e0f2ff]'
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    <div className="p-2.5 lg:p-5">
                      <h6 className="text-lg lg:text-2xl lg:leading-[2.125rem] font-semibold">
                        <span className="text-[#4EACEA]">Step{index + 1}:</span> {step.title}
                      </h6>
                      
                      {/* 只显示当前激活步骤的详细描述 */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          activeStep === index 
                            ? 'max-h-40 opacity-100 mt-1 lg:mt-2.5' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-[#292929] text-sm lg:text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 下载按钮组 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-5 md:mt-10 w-full max-w-[496px] mx-auto">
          {/* Windows 下载按钮 */}
          <a 
            href={windowsDownloadUrl}
            target="_blank"
            className="bg-[#4EACEA] border-2 border-[#4EACEA] hover:bg-transparent h-16 lg:h-[68px] px-1 flex text-white hover:text-[#4EACEA] justify-center items-center rounded-[14px] transition-colors"
          >
            <svg width="30" height="30" className="overflow-hidden">
              <use href="/images/svg/common.svg#win"></use>
            </svg>
            <span className="flex flex-col ml-3">
              <b className="text-base lg:text-xl lg:leading-[26px]">{downloadButtonText}</b>
            </span>
          </a>
          
          {/* Mac 下载按钮 */}
          <a 
            href={macDownloadUrl}
            target="_blank"
            className="bg-transparent border-2 border-[#4EACEA] hover:bg-[#4EACEA] h-16 lg:h-[68px] px-1 flex text-[#4EACEA] hover:text-white justify-center items-center rounded-[14px] transition-colors"
          >
            <svg width="30" height="30" className="overflow-hidden">
              <use href="/images/svg/common.svg#mac"></use>
            </svg>
            <span className="flex flex-col ml-3">
              <b className="text-base lg:text-xl lg:leading-[26px]">{downloadButtonText}</b>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
