interface HeroBannerProps {
  brandTag: string;
  title: string;
  description: string;
  windowsDownloadUrl: string;
  macDownloadUrl: string;
  windowsText?: string;
  macText?: string;
  safetyText?: string;
  backgroundImage: string;
  productImage: string;
  productImageWebp: string;
  productImageAlt: string;
}

export default function HeroBanner({
  brandTag,
  title,
  description,
  windowsDownloadUrl,
  macDownloadUrl,
  windowsText = "For Windows 11/10",
  macText = "For macOS 10.10 or later",
  safetyText = "100% Safe & Clean",
  backgroundImage,
  productImage,
  productImageWebp,
  productImageAlt
}: HeroBannerProps) {
  return (
    <section 
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="container max-w-[1310px] mx-auto py-10 md:py-0 px-4 flex flex-col lg:flex-row items-center justify-between min-h-[536px]">
        {/* 左侧内容 */}
        <div className="w-full lg:w-1/2 lg:pr-16">
          {/* 品牌标签 */}
          <div className="text-center lg:text-left">
            <div 
              className="inline-block rounded-full px-3 py-1.5 text-white text-base lg:text-xl"
              style={{ background: "linear-gradient(150deg, #FF9D3A 0%, #FFA84B 100%)" }}
            >
              {brandTag}
            </div>
          </div>

          {/* 主标题 */}
          <h1 className="text-2xl lg:text-[42px] lg:leading-[50px] text-white font-bold text-center lg:text-left mt-4">
            {title}
          </h1>

          {/* 描述 */}
          <p className="text-sm lg:text-lg lg:leading-7 text-white mt-2 lg:mt-6 text-center lg:text-left lg:pr-10">
            {description}
          </p>

          {/* 下载按钮 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center lg:justify-start mt-5 md:mt-10 max-w-[496px] mx-auto lg:mx-0">
            {/* Windows 按钮 */}
            <a 
              href={windowsDownloadUrl}
              target="_blank"
              className="bg-white border-2 border-white hover:bg-transparent h-16 lg:h-17 px-1 flex text-[#0C1C29] hover:text-white justify-center items-center rounded-[14px] transition-colors"
            >
              <svg width="30" height="30" className="flex-shrink-0">
                <use href="/images/svg/common.svg#win"></use>
              </svg>
              <span className="flex flex-col ml-3">
                <strong className="lg:text-xl lg:leading-7">Free Download</strong>
                <p className="text-xs">{windowsText}</p>
              </span>
            </a>

            {/* Mac 按钮 */}
            <a 
              href={macDownloadUrl}
              target="_blank"
              className="bg-transparent hover:bg-white border-2 border-white h-16 lg:h-17 px-1 flex text-white hover:text-[#0C1C29] justify-center items-center rounded-[14px] transition-colors"
            >
              <svg width="30" height="30" className="flex-shrink-0">
                <use href="/images/svg/common.svg#mac"></use>
              </svg>
              <span className="flex flex-col ml-3">
                <strong className="lg:text-xl lg:leading-7">Free Download</strong>
                <p className="text-xs">{macText}</p>
              </span>
            </a>
          </div>

          {/* 安全提示 */}
          <div className="text-sm text-white mt-2.5 md:mt-6 flex items-center justify-center lg:justify-start">
            <img 
              width="20" 
              height="20" 
              className="mr-2" 
              src="/images/onlyfans-downloader/safe.svg" 
              alt="safe" 
            />
            <span className="text-white/60">{safetyText}</span>
          </div>
        </div>

        {/* 右侧图片 */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <picture>
            <source 
              srcSet={productImageWebp}
              type="image/webp" 
            />
            <img 
              width="617" 
              height="536" 
              src={productImage}
              alt={productImageAlt}
              className="w-full h-auto"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
