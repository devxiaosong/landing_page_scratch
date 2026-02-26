export default function ArticleHeroBanner() {
  return (
    <section 
      style={{ 
        background: "linear-gradient(360deg, #FFFDF7 0%, #D2E1FF 100%)"
      }}
    >
      <div 
        className="max-w-[1310px] mx-auto flex px-5 items-center flex-wrap py-8" 
        style={{ minHeight: "500px" }}
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-2xl leading-7">MassLoader Downloader</p>
          
          <p className="text-3xl md:text-4xl leading-10 md:leading-[42px] font-bold mt-3">
            Download Video, Audio from 10,000+ Websites
          </p>
          
          <div>
            <ul className="text-lg leading-7 space-y-2 mt-9 inline-block text-left">
              <li className="relative pl-6 before:content-[''] before:block before:absolute before:w-3.5 before:h-3.5 before:top-1.5 before:left-0 before:bg-[url('/images/single/tick.svg')] before:bg-cover">
                Download Livestream, Video, Audio, Playlist from Various Sites.
              </li>
              <li className="relative pl-6 mt-2 before:content-[''] before:block before:absolute before:w-3.5 before:h-3.5 before:top-1.5 before:left-0 before:bg-[url('/images/single/tick.svg')] before:bg-cover">
                Convert the Downloaded Videos to MP4, MP3 and More.
              </li>
              <li className="relative pl-6 mt-2 before:content-[''] before:block before:absolute before:w-3.5 before:h-3.5 before:top-1.5 before:left-0 before:bg-[url('/images/single/tick.svg')] before:bg-cover">
                Save Video in 720P, 1080P HD, 4K, 8K.
              </li>
            </ul>
          </div>
          
          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row gap-5 mt-6 mb-5 md:mb-0">
            {/* Windows Button */}
            <div className="grid grid-cols-1 gap-7 justify-center lg:justify-start">
              <a 
                href="/download/?product=massloader.exe" 
                target="_blank"
                className="inline-flex justify-center items-center text-lg text-white font-bold rounded-[10px] bg-[#AC32FF] hover:bg-[#9E1EF6] space-x-4 py-[15px] w-[264px]"
              >
                <img 
                  className="inline-block w-[30px]" 
                  src="/images/single/windows.svg" 
                  alt="windows"
                />
                <span className="text-white text-lg leading-5 font-bold">
                  Free Download
                </span>
              </a>
            </div>
            
            {/* Mac Button */}
            <div className="grid grid-cols-1 gap-7 justify-center lg:justify-start">
              <a 
                href="/download/?product=massloader.dmg" 
                target="_blank"
                className="inline-flex justify-center items-center text-lg text-white font-bold rounded-[10px] bg-[#AC32FF] hover:bg-[#9E1EF6] space-x-4 py-[15px] w-[264px]"
              >
                <img 
                  className="inline-block w-[30px]" 
                  src="/images/single/mac.svg" 
                  alt="mac"
                />
                <span className="text-white text-lg leading-5 font-bold">
                  Free Download
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <picture>
            <source 
              srcSet="/images/single/top-banner.webp" 
              type="image/webp"
            />
            <img 
              width="692" 
              height="448" 
              className="mx-auto" 
              src="/images/single/top-banner.png" 
              alt="top banner"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
