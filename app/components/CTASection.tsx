interface CTASectionProps {
  backgroundImage: string;
  logo: string;
  logoAlt: string;
  logoWidth?: number;
  logoHeight?: number;
  title: string;
  windowsDownloadUrl: string;
  macDownloadUrl: string;
  downloadButtonText?: string;
  cardGradient?: string;
  buttonShadow?: string;
}

export default function CTASection({
  backgroundImage,
  logo,
  logoAlt,
  logoWidth = 84,
  logoHeight = 84,
  title,
  windowsDownloadUrl,
  macDownloadUrl,
  downloadButtonText = "Free Download",
  cardGradient = "linear-gradient(180deg, #4E85EA 0%, #4EACEA 100%)",
  buttonShadow = "0px 4px 4px 0px rgba(0,0,0,0.25)"
}: CTASectionProps) {
  return (
    <section 
      className="py-10 md:py-15 relative"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* 蒙层 */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      <div className="container max-w-[1310px] mx-auto px-4 relative z-[1]">
        <div 
          className="rounded-[20px] md:rounded-[40px] p-8 md:p-[50px] flex flex-col items-center"
          style={{ 
            background: cardGradient
          }}
        >
          {/* Logo图标 */}
          <img 
            width={logoWidth}
            height={logoHeight}
            src={logo}
            alt={logoAlt}
            className={`w-[${logoWidth}px] h-[${logoHeight}px]`}
          />
          
          {/* 标题 */}
          <h4 className="text-white text-center text-lg md:text-2xl md:leading-[34px] font-bold mt-4 md:mt-6 max-w-[740px] mx-auto">
            {title}
          </h4>
          
          {/* 下载按钮组 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-5 md:mt-[30px] w-full max-w-[496px]">
            {/* Windows 下载按钮 */}
            <a 
              href={windowsDownloadUrl}
              target="_blank"
              className="bg-white border border-white hover:bg-transparent h-16 lg:h-[68px] px-1 flex text-[#0C1C29] hover:text-white justify-center items-center rounded-[14px] transition-colors"
              style={{ boxShadow: buttonShadow }}
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
              className="bg-transparent hover:bg-white border border-white h-16 lg:h-[68px] px-1 flex text-white hover:text-[#0C1C29] justify-center items-center rounded-[14px] transition-colors"
              style={{ boxShadow: buttonShadow }}
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
      </div>
    </section>
  );
}
