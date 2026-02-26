interface ContentBlockProps {
  title?: string;
  subtitle: string;
  subtitleHighlight: string;
  items: string[];
  imageSrc: string;
  imageWebp: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  backgroundColor?: string;
}

export default function ContentBlock({
  title,
  subtitle,
  subtitleHighlight,
  items,
  imageSrc,
  imageWebp,
  imageAlt,
  imagePosition,
  backgroundColor = "white"
}: ContentBlockProps) {
  const bgStyle = backgroundColor === "gradient" 
    ? { background: "linear-gradient(180deg, #F4FCFF 0%, #F5FBFF 100%)" }
    : { backgroundColor: "white" };

  return (
    <section style={bgStyle}>
      <div className="container max-w-[1310px] mx-auto px-4 py-10 md:py-20">
        {/* 标题（可选） */}
        {title && (
          <h2 className="text-center text-2xl md:text-[2.5rem] md:leading-[3rem] font-bold text-black">
            {title}
          </h2>
        )}

        {/* 内容区域 */}
        <div className={`flex items-center ${title ? 'pt-10 lg:pt-15' : ''} ${
          imagePosition === "left" 
            ? "flex-col-reverse lg:flex-row" 
            : "flex-col lg:flex-row"
        }`}>
          {/* 图片 */}
          <picture className={`lg:w-1/2 mt-4 lg:mt-0 ${
            imagePosition === "left" ? "lg:pr-[55px]" : "lg:pl-[55px] order-2 lg:order-2"
          }`}>
            <source srcSet={imageWebp} type="image/webp" />
            <img 
              width="586" 
              height="376" 
              src={imageSrc} 
              alt={imageAlt}
              className="max-w-full"
            />
          </picture>

          {/* 文字内容 */}
          <div className={`lg:w-1/2 ${
            imagePosition === "left" ? "lg:pl-[55px]" : "lg:pr-[55px] order-1 lg:order-1"
          }`}>
          <h3 className="text-2xl md:text-[1.75rem] md:leading-[2.5rem] text-[#333333] text-center lg:text-left font-bold">
            <span 
              className="inline-block"
                style={{ 
                  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(78, 172, 234, 0.35) 50.01%, rgba(78, 172, 234, 0.35) 100%)"
                }}
              >
                {subtitleHighlight}
              </span>{" "}
            {subtitle}
          </h3>
            
            <ul className="mt-2.5 lg:mt-[30px] text-base lg:text-lg text-[#333333] space-y-2.5 md:space-y-5">
              {items.map((item, index) => (
                <li key={index} className="relative pl-5 leading-7">
                  <span 
                    className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                    style={{ 
                      backgroundImage: "url('/images/onlyfans-downloader/arrow-icon.svg')"
                    }}
                  ></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
