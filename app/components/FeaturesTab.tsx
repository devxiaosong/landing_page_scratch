"use client";

import { useState, useEffect } from "react";

interface FeatureTab {
  icon: string;
  activeIcon: string;
  tabTitle: string;
  contentImage: string;
  contentImageWebp: string;
  contentTitle: string;
  contentTitleHighlight: string;
  contentDescription: string[];
}

interface FeaturesTabProps {
  mainTitle: string;
  features: FeatureTab[];
  autoPlayInterval?: number;
  transitionDuration?: number; // 转场动画持续时间（毫秒）
}

export default function FeaturesTab({
  mainTitle,
  features,
  autoPlayInterval = 3000,
  transitionDuration = 500
}: FeaturesTabProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [displayTab, setDisplayTab] = useState(0);
  const [nextTab, setNextTab] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  // 切换tab的函数
  const switchTab = (newIndex: number) => {
    if (newIndex === activeTab || isAnimating) return;
    
    // 确定滑动方向
    const dir = newIndex > activeTab ? 'right' : 'left';
    setDirection(dir);
    setNextTab(newIndex);
    setIsAnimating(true);
    setAnimationStarted(false);
    
    // 第一帧：渲染两组内容但不移动
    requestAnimationFrame(() => {
      // 第二帧：开始移动动画
      requestAnimationFrame(() => {
        setAnimationStarted(true);
      });
    });

    // 动画结束后更新状态
    setTimeout(() => {
      setActiveTab(newIndex);
      setDisplayTab(newIndex);
      setNextTab(null);
      setIsAnimating(false);
      setAnimationStarted(false);
    }, transitionDuration + 100);
  };

  // 启动自动播放
  useEffect(() => {
    if (isAnimating) return; // 动画进行中时不启动新的定时器
    
    const timer = setTimeout(() => {
      const nextIndex = (activeTab + 1) % features.length;
      switchTab(nextIndex);
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [activeTab, isAnimating, autoPlayInterval, features.length]);

  // 手动点击切换
  const handleTabClick = (index: number) => {
    switchTab(index);
  };

  return (
    <section 
      style={{ 
        background: "linear-gradient(180deg, #4E85EA 0%, #4EACEA 100%)"
      }}
    >
      <div className="container max-w-[1310px] mx-auto px-4 py-10 md:py-20">
        {/* 标题 */}
        <h2 className="text-center text-2xl md:text-[2.5rem] md:leading-[3rem] font-bold text-white">
          {mainTitle}
        </h2>

        {/* 标签导航 */}
        <div className="mt-5 md:mt-15 overflow-hidden p-[3px]">
          <div className="flex border-b border-solid border-[rgba(255,255,255,0.2)]">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex-1 text-center cursor-pointer relative ${
                  activeTab === index ? 'text-white font-semibold' : 'text-[#CADEF9]'
                }`}
                onClick={() => handleTabClick(index)}
              >
                <div className="flex flex-col items-center py-4 md:py-0">
                  <div 
                    className="w-10 h-10 bg-no-repeat"
                    style={{
                      backgroundImage: `url('${
                        activeTab === index ? feature.activeIcon : feature.icon
                      }')`
                    }}
                  ></div>
                  <span className="mt-1 lg:mt-3 inline-block pb-1 md:pb-6 text-sm md:text-base">
                    {feature.tabTitle}
                  </span>
                </div>
                {activeTab === index && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-white rounded"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 内容区域 */}
        <div className="mt-6 overflow-hidden relative">
          {!isAnimating ? (
            // 非动画状态：只显示当前内容
            <div className="flex flex-col-reverse lg:flex-row items-center">
              {/* 左侧图片 */}
              <picture className="lg:w-1/2 mt-5 lg:mt-0 px-4 lg:px-0 lg:pr-[55px]">
                <source 
                  srcSet={features[displayTab].contentImageWebp} 
                  type="image/webp"
                />
                <img 
                  width="586" 
                  height="420" 
                  src={features[displayTab].contentImage} 
                  alt={features[displayTab].contentTitle}
                  className="max-w-full"
                />
              </picture>

              {/* 右侧文字内容 */}
              <div className="lg:w-1/2 mt-5 lg:mt-0 lg:pl-[55px]">
                <h3 className="text-center lg:text-left text-2xl md:text-[1.75rem] md:leading-[2.5rem] font-bold text-white">
                  <span 
                    className="inline-block"
                    style={{ 
                      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgb(78, 220, 255) 50.01%, rgb(78, 220, 255) 100%)"
                    }}
                  >
                    {features[displayTab].contentTitle}
                  </span>
                  {features[displayTab].contentTitleHighlight}
                </h3>
                
                <ul className="mt-2.5 lg:mt-[30px] text-base lg:text-lg text-white space-y-2.5 md:space-y-5">
                  {features[displayTab].contentDescription.map((text, index) => (
                    <li key={index} className="relative pl-5 leading-7">
                      <span 
                        className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                        style={{ 
                          backgroundImage: "url('/images/onlyfans-downloader/arrow-icon-1.svg')"
                        }}
                      ></span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            // 动画状态：显示两组内容的跑马灯效果
            <div 
              className="flex ease-in-out"
              style={{
                transform: animationStarted 
                  ? (direction === 'right' ? 'translateX(-100%)' : 'translateX(0%)') 
                  : (direction === 'right' ? 'translateX(0%)' : 'translateX(-100%)'),
                transition: animationStarted ? `transform ${transitionDuration}ms ease-in-out` : 'none'
              }}
            >
              {/* 第一组内容 */}
              <div className="w-full flex-shrink-0">
                <div className="flex flex-col-reverse lg:flex-row items-center">
                  {/* 左侧图片 */}
                  <picture className="lg:w-1/2 mt-5 lg:mt-0 px-4 lg:px-0 lg:pr-[55px]">
                    <source 
                      srcSet={features[direction === 'right' ? displayTab : (nextTab ?? displayTab)].contentImageWebp} 
                      type="image/webp"
                    />
                    <img 
                      width="586" 
                      height="420" 
                      src={features[direction === 'right' ? displayTab : (nextTab ?? displayTab)].contentImage} 
                      alt={features[direction === 'right' ? displayTab : (nextTab ?? displayTab)].contentTitle}
                      className="max-w-full"
                    />
                  </picture>

                  {/* 右侧文字内容 */}
                  <div className="lg:w-1/2 mt-5 lg:mt-0 lg:pl-[55px]">
                    <h3 className="text-center lg:text-left text-2xl md:text-[1.75rem] md:leading-[2.5rem] font-bold text-white">
                      <span 
                        className="inline-block"
                        style={{ 
                          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgb(78, 220, 255) 50.01%, rgb(78, 220, 255) 100%)"
                        }}
                      >
                        {features[direction === 'right' ? displayTab : (nextTab ?? displayTab)].contentTitle}
                      </span>
                      {features[direction === 'right' ? displayTab : (nextTab ?? displayTab)].contentTitleHighlight}
                    </h3>
                    
                    <ul className="mt-2.5 lg:mt-[30px] text-base lg:text-lg text-white space-y-2.5 md:space-y-5">
                      {features[direction === 'right' ? displayTab : (nextTab ?? displayTab)].contentDescription.map((text, index) => (
                        <li key={index} className="relative pl-5 leading-7">
                          <span 
                            className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                            style={{ 
                              backgroundImage: "url('/images/onlyfans-downloader/arrow-icon-1.svg')"
                            }}
                          ></span>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 第二组内容 */}
              <div className="w-full flex-shrink-0">
                <div className="flex flex-col-reverse lg:flex-row items-center">
                  {/* 左侧图片 */}
                  <picture className="lg:w-1/2 mt-5 lg:mt-0 px-4 lg:px-0 lg:pr-[55px]">
                    <source 
                      srcSet={features[direction === 'right' ? (nextTab ?? displayTab) : displayTab].contentImageWebp} 
                      type="image/webp"
                    />
                    <img 
                      width="586" 
                      height="420" 
                      src={features[direction === 'right' ? (nextTab ?? displayTab) : displayTab].contentImage} 
                      alt={features[direction === 'right' ? (nextTab ?? displayTab) : displayTab].contentTitle}
                      className="max-w-full"
                    />
                  </picture>

                  {/* 右侧文字内容 */}
                  <div className="lg:w-1/2 mt-5 lg:mt-0 lg:pl-[55px]">
                    <h3 className="text-center lg:text-left text-2xl md:text-[1.75rem] md:leading-[2.5rem] font-bold text-white">
                      <span 
                        className="inline-block"
                        style={{ 
                          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgb(78, 220, 255) 50.01%, rgb(78, 220, 255) 100%)"
                        }}
                      >
                        {features[direction === 'right' ? (nextTab ?? displayTab) : displayTab].contentTitle}
                      </span>
                      {features[direction === 'right' ? (nextTab ?? displayTab) : displayTab].contentTitleHighlight}
                    </h3>
                    
                    <ul className="mt-2.5 lg:mt-[30px] text-base lg:text-lg text-white space-y-2.5 md:space-y-5">
                      {features[direction === 'right' ? (nextTab ?? displayTab) : displayTab].contentDescription.map((text, index) => (
                        <li key={index} className="relative pl-5 leading-7">
                          <span 
                            className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                            style={{ 
                              backgroundImage: "url('/images/onlyfans-downloader/arrow-icon-1.svg')"
                            }}
                          ></span>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
