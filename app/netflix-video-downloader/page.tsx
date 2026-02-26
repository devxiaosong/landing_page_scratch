import type { Metadata } from "next";
import { BASE_URL } from "@/lib/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

export const metadata: Metadata = {
  title: "MassLoader Netflix Video Downloader — Download Netflix in 1080p",
  description:
    "Download Netflix videos, movies and TV shows in 1080p HD quality for offline viewing. Supports MP4/MKV output, batch download, and subtitle preservation.",
  alternates: {
    canonical: `${BASE_URL}/netflix-video-downloader/`,
  },
  openGraph: {
    title: "MassLoader Netflix Video Downloader — Download Netflix in 1080p",
    description:
      "Download Netflix videos, movies and TV shows in 1080p HD quality for offline viewing. Supports MP4/MKV output, batch download, and subtitle preservation.",
    url: `${BASE_URL}/netflix-video-downloader/`,
    images: [
      {
        url: "/images/netflix-downloader/netflix-video-downloader.png",
        width: 1200,
        height: 630,
        alt: "MassLoader Netflix Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MassLoader Netflix Video Downloader — Download Netflix in 1080p",
    description:
      "Download Netflix videos, movies and TV shows in 1080p HD quality for offline viewing.",
    images: [
      "/images/netflix-downloader/netflix-video-downloader.png",
    ],
  },
};
import ContentBlock from "../components/ContentBlock";
import FeaturesTab from "../components/FeaturesTab";
import UserGuideSection from "../components/UserGuideSection";
import PlanTable from "../components/PlanTable";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

// Hero Banner 数据
const HERO_DATA = {
  brandTag: "MassLoader",
  title: "OnlyFans Video Downloader",
  description: "Download OnlyFans videos from favorite creators in 1080p quality with one-click and enjoy OnlyFans videos offline on any device!",
  windowsDownloadUrl: "/download/?product=massloader.exe",
  macDownloadUrl: "/download/?product=massloader.dmg",
  backgroundImage: "/images/onlyfans-downloader/header-bg.png",
  productImage: "/images/onlyfans-downloader/onlyfans-downloader.png",
  productImageWebp: "/images/onlyfans-downloader/onlyfans-downloader.webp",
  productImageAlt: "onlyfans downloader"
};

// Why Need Section 数据
const WHY_NEED_DATA = {
  title: "Why do you need MassLoader OnlyFans Downloader?",
  subtitleHighlight: "OnlyFans does not natively allow",
  subtitle: "downloads",
  items: [
    "Since Onlyfans itself does not have a download function, you cannot download any videos or pictures directly from the OnlyFans platform. So, what if you want to download videos from the accounts you're subscribed to?",
    "If you want to preserve content from favorite creators in case it gets deleted or don't want to pay monthly to access the same content, you can use our iDowneGo Video Downloader to download them and keep those OnlyFans contents permanently."
  ],
  imageSrc: "/images/onlyfans-downloader/onlyfans-download-restrictions.png",
  imageWebp: "/images/onlyfans-downloader/onlyfans-download-restrictions.webp",
  imageAlt: "onlyfans download restrictions",
  imagePosition: "left" as const
};

// How Can Help Section 数据
const HOW_CAN_HELP_DATA = {
  title: "How Can MassLoader OnlyFans Downloader Help You?",
  subtitleHighlight: "Download OnlyFans videos",
  subtitle: "in high quality for offline viewing",
  items: [
    "As the best OnlyFans downloader, MassLoader can help you download OnlyFans videos/images in high quality for offline viewing. Besides, MassLoader OnlyFans Downloader also supports downloading videos from OnlyFans message/chat, batch downloading from creator homepages, etc.",
    "With the help of MassLoader OnlyFans Downloader, you can avoid losing access if a subscription expires or content is removed, and all downloads can be saved on your laptop permanently."
  ],
  imageSrc: "/images/onlyfans-downloader/remove-restrictions-from-onlyfans.png",
  imageWebp: "/images/onlyfans-downloader/remove-restrictions-from-onlyfans.webp",
  imageAlt: "remove restrictions from onlyfans",
  imagePosition: "right" as const
};

// Features Tab 数据
const FEATURES_TAB_DATA = {
  mainTitle: "Enjoy Effective OnlyFans Video Download Experience with the Best OnlyFans Downloader",
  autoPlayInterval: 3000, // 自动切换间隔（毫秒）
  transitionDuration: 600, // 转场动画持续时间（毫秒）
  features: [
    {
      icon: "/images/onlyfans-downloader/download-default-icon.svg",
      activeIcon: "/images/onlyfans-downloader/download-active-icon.svg",
      tabTitle: "Download OnlyFans Video",
      contentImage: "/images/onlyfans-downloader/download-onlyfans-video.png",
      contentImageWebp: "/images/onlyfans-downloader/download-onlyfans-video.webp",
      contentTitle: "Download OnlyFans videos",
      contentTitleHighlight: " in 1080p HD resolution",
      contentDescription: [
        "MassLoader OnlyFans downloader offers multiple options, including 1080p, 720p, and 480p resolutions. You can download high-definition videos from OnlyFans on Windows or Mac based on your preference.",
        "Moreover, the OnlyFans Video Downloader will remove DRM protected of your subscribed or even free content and offer AAC2.0 audio track.  So you can enjoy any OnlyFans contents offline no matter where you are and whenever you want."
      ]
    },
    {
      icon: "/images/onlyfans-downloader/convert-default-icon.svg",
      activeIcon: "/images/onlyfans-downloader/convert-active-icon.svg",
      tabTitle: "OnlyFans Video to MP4/MKV",
      contentImage: "/images/onlyfans-downloader/onlyfans-to-mp4.png",
      contentImageWebp: "/images/onlyfans-downloader/onlyfans-to-mp4.webp",
      contentTitle: "Download OnlyFans Video",
      contentTitleHighlight: " to MP4/MKV File",
      contentDescription: [
        "By downloading OnlyFans videos in MP4 or MKV format, you can enjoy the content on computers, tablets, smartphones, media players, or even transfer it to USB drive.",
        "Whether you're at home or traveling, MassLoader makes it easy to watch your favorite OnlyFans videos without an internet connection."
      ]
    },
    {
      icon: "/images/onlyfans-downloader/menu-default-icon.svg",
      activeIcon: "/images/onlyfans-downloader/menu-active-icon.svg",
      tabTitle: "Bulk Download OnlyFans Contents",
      contentImage: "/images/onlyfans-downloader/bulk-download-onlyfans.png",
      contentImageWebp: "/images/onlyfans-downloader/bulk-download-onlyfans.webp",
      contentTitle: "Download OnlyFans Videos",
      contentTitleHighlight: "/Pitures in Bulk",
      contentDescription: [
        "MassLoader OnlyFans Downloader offers downloads in batch mode, you do not have to download video or image from your favorite creators one by one.",
        "By open your subscribed creator homepage, this OnlyFans video downloader could detect and then list all available videos or images from the account, then one-click to download all contents automatically."
      ]
    },
    {
      icon: "/images/onlyfans-downloader/subtitle-default-icon.svg",
      activeIcon: "/images/onlyfans-downloader/subtitle-active-icon.svg",
      tabTitle: "Save OnlyFans Chat Videos",
      contentImage: "/images/onlyfans-downloader/download-onlyfans-chat-video.png",
      contentImageWebp: "/images/onlyfans-downloader/download-onlyfans-chat-video.webp",
      contentTitle: "Download OnlyFans Message",
      contentTitleHighlight: "/Chat Videos",
      contentDescription: [
        "Sometimes, your favorite creator sends picture or videos through messages/chats on OnlyFans as a bonus privately. What to do if you want to save these contents to your local devices for offline watching?",
        "MassLoader OnlyFans Downloader will help you, it can download videos from OnlyFans chat without quality loss and download OnlyFans message videos in up to 1080p at 10X speed."
      ]
    }
  ]
};

// Secure Download Section 数据
const SECURE_DOWNLOAD_DATA = {
  subtitleHighlight: "Enjoy ad-free and 100% secure",
  subtitle: "download experience",
  items: [
    "MassLoader OnlyFans Downloader is ad-free and 100% secure. It can operate securely without storing user data, and with a built-in OnlyFans browser, it can reduce the risk of account exposure.",
    "Plus, MassLoader provides regular updates to enhance security and fix potential risks."
  ],
  imageSrc: "/images/onlyfans-downloader/enjoy-ad-free-onlyfans.png",
  imageWebp: "/images/onlyfans-downloader/enjoy-ad-free-onlyfans.webp",
  imageAlt: "enjoy ad free onlyfans",
  imagePosition: "right" as const
};

// User Guide Section 数据
const USER_GUIDE_DATA = {
  mainTitle: "How to use MassLoader OnlyFans Downloader?",
  windowsDownloadUrl: "/download/?product=massloader.exe",
  macDownloadUrl: "/download/?product=massloader.dmg",
  transitionDuration: 500, // 转场动画持续时间（毫秒）
  steps: [
    {
      image: "/images/onlyfans-downloader/select-onlyfans-downloader.png",
      imageWebp: "/images/onlyfans-downloader/select-onlyfans-downloader.webp",
      title: "Select the MassLoader OnlyFans Downloader.",
      description: "Double click MassLoader and then enter onlyfans.com via its built-in browser."
    },
    {
      image: "/images/onlyfans-downloader/play-onlyfans-video.png",
      imageWebp: "/images/onlyfans-downloader/play-onlyfans-video.webp",
      title: "Play OnlyFans video in MassLoader.",
      description: "Sign in to the OnlyFans website using your subscription account, and play the video you want to download."
    },
    {
      image: "/images/onlyfans-downloader/save-onlyfans-video.png",
      imageWebp: "/images/onlyfans-downloader/save-onlyfans-video.webp",
      title: "Start to download videos on OnlyFans.",
      description: "Click on the Download button to start downloading the video being played."
    }
  ]
};

// Plan Table 数据
const PLAN_TABLE_DATA = {
  mainTitle: "Compare All Plans",
  headerSectionTitle: "Hot & Popular Features",
  plans: [
    {
      name: "Free",
      downloadUrl: "/download/?product=massloader.dmg",
      buttonText: "Free Trial",
      isPrimary: false
    },
    {
      name: "Standard",
      downloadUrl: "/download/?product=massloader.dmg",
      buttonText: "Free Trial",
      isPrimary: false
    },
    {
      name: "Pro",
      icon: "/images/table/pro-icon.svg",
      iconAlt: "pro icon",
      highlightColor: "#4EACEA",
      downloadUrl: "/download/?product=massloader.dmg",
      buttonText: "Free Trial",
      isPrimary: true
    }
  ],
  features: [
    { name: "Netflix Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Amazon Prime Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Crunchyroll Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "OF Video Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Disney+ Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Hulu Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "HBO Max Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Download videos/audio from 10000+ sites", free: "3 files", standard: true, pro: true },
    { name: "Convert music from Apple Music, Spotify, Amazon Music, Deezer and TIDAL", free: "1 file", standard: true, pro: true },
    { name: "Convert file to MP4, MP3 and orginal format", free: "1/3 length", standard: true, pro: true },
    { name: "Download playlist, album, artist and more", free: "1 file", standard: true, pro: true },
    { name: "Convert media to 20+ output formats", free: null, standard: true, pro: true, isLastInGroup: true }
  ]
};

// Testimonials Section 数据
const TESTIMONIALS_DATA = {
  mainTitle: "See Why Users Love MassLoader OnlyFans Downloader",
  transitionDuration: 500, // 转场动画持续时间（毫秒）
  testimonials: [
    {
      quote: "As a social media marketer, definitely, this is one of the most reliable and professional tools that I have used from 2 years ago and I never separate it ever. Thanks of the professional team of MassLoader for giving me this experience.",
      name: "Arash Ashouri",
      avatar: "/images/onlyfans-downloader/user1.svg"
    },
    {
      quote: "I'm using the app from one year now. Everything is fine and the service is just the best. If I have problem, the team is always there to help me! 10/10!",
      name: "Denis Hoshikawa",
      avatar: "/images/onlyfans-downloader/user2.svg"
    },
    {
      quote: "I purchased the MassLoader app lifetime license and I am very satisfied. I save time recording videos and I can save the audio of my favorite songs. I recommend this app to everyone!",
      name: "Christopher Gallegos",
      avatar: "/images/onlyfans-downloader/user3.svg"
    }
  ]
};

// FAQ Section 数据
const FAQ_DATA = {
  mainTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "Q1. Does MassLoader OnlyFans Downloader have a free trial?",
      answer: "Yes, you can have 1 free download to test the app after you install MassLoader OnlyFans Video on your computer."
    },
    {
      question: "Q2. Can I download OnlyFans videos without a subscription to OnlyFans?",
      answer: "No, you cannot download OnlyFans videos without an active OnlyFans subscription."
    },
    {
      question: "Q3. Is it legal & safe to use MassLoader OnlyFans Downloader?",
      answer: "Yes, MassLoader OnlyFans Downloader is legal for only personal use, and it's secured with a built-in browser without storing use data."
    },
    {
      question: "Q4. Can I watch downloaded OnlyFans videos on other devices?",
      answer: "Yes, you can download OnlyFans videos in MP4 or MKV formats, which can be playable on most devices (phones, PCs, tablets)."
    }
  ]
};

// CTA Section 数据
const CTA_DATA = {
  backgroundImage: "/images/onlyfans-downloader/footer-bg.png",
  logo: "/images/onlyfans-downloader/onlyfans-logo.svg",
  logoAlt: "onlyfans logo",
  title: "Download Your Favorite Videos with MassLoader OnlyFans Downloader Now!",
  windowsDownloadUrl: "/download/?product=massloader.exe",
  macDownloadUrl: "/download/?product=massloader.dmg"
};

export default function NetflixDownloaderPage() {

  return (
    <div>
      <Header />
      
      {/* Hero Banner */}
      <HeroBanner {...HERO_DATA} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "MassLoader Netflix Video Downloader",
            "operatingSystem": "Windows, macOS",
            "applicationCategory": "MultimediaApplication",
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            }
          })
        }}
      />
      
      {/* Why Need Section */}
      <ContentBlock {...WHY_NEED_DATA} />
      
      {/* How Can Help Section */}
      <ContentBlock {...HOW_CAN_HELP_DATA} />
      
      {/* Features Tab Section */}
      <FeaturesTab {...FEATURES_TAB_DATA} />
      
      {/* Secure Download Section */}
      <ContentBlock {...SECURE_DOWNLOAD_DATA} />
      
      {/* User Guide Section */}
      <UserGuideSection {...USER_GUIDE_DATA} />
      
      {/* Plan Table Section */}
      <PlanTable {...PLAN_TABLE_DATA} />
      
      {/* Testimonials Section */}
      <TestimonialsSection {...TESTIMONIALS_DATA} />
      
      {/* FAQ Section */}
      <FAQSection {...FAQ_DATA} />
      
      {/* CTA Section */}
      <CTASection {...CTA_DATA} />

      <Footer />
    </div>
  );
}
