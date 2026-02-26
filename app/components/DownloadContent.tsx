"use client";

import { useEffect, useState } from "react";
import { DOWNLOAD_BASE_URL } from "@/lib/config";

export default function DownloadContent() {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    // 自动触发下载
    const timer = setTimeout(() => {
      setDownloading(true);
      // 模拟下载（实际项目中应该触发真实的下载链接）
      // window.location.href = `${DOWNLOAD_BASE_URL}/massloader.dmg`;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleManualDownload = () => {
    // 手动下载
    window.location.href = `${DOWNLOAD_BASE_URL}/massloader.dmg`;
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-[1310px] px-4 py-20 text-center">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl leading-tight mb-2 text-[#333333]">
          Downloading MassLoader for Mac...
        </h1>

        {/* Subtitle with link */}
        <p className="text-xl md:text-2xl leading-normal mb-8 text-[#333333]">
          Your download will start in a few seconds, but if not,{" "}
          <button
            onClick={handleManualDownload}
            className="text-[#2A6DF4] hover:underline cursor-pointer"
          >
            click here
          </button>
        </p>

        {/* Video Player */}
        <div className="flex justify-center">
          <video
            className="inline-block max-w-full rounded-lg shadow-lg"
            src={`${DOWNLOAD_BASE_URL}/MassLoader_User_Guide_Video.mp4`}
            poster="/images/download/massloader-cover.jpg"
            controls
            playsInline
            width="560"
            height="315"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
