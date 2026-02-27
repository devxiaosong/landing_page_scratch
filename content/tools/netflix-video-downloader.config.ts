import type { ToolLandingConfig } from "@/lib/types";
import { BASE_URL } from "@/lib/config";

export const netflixVideoDownloaderConfig: ToolLandingConfig = {
  toolId: "netflix-video-downloader",
  canonicalPath: "/netflix-video-downloader",
  seo: {
    title: "MassLoader Netflix Video Downloader — Download Netflix in 1080p",
    description:
      "Download Netflix videos, movies and TV shows in 1080p HD quality for offline viewing. Supports MP4/MKV output, batch download, and subtitle preservation.",
    primaryKeyword: "Netflix Video Downloader",
    ogImage: "/images/netflix-downloader/netflix-video-downloader.png",
    ogImageAlt: "MassLoader Netflix Video Downloader",
    alternates: {
      canonical: `${BASE_URL}/netflix-video-downloader/`,
    },
  },
  jsonLd: {
    name: "MassLoader Netflix Video Downloader",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Windows, macOS",
    offers: { price: "0.00", priceCurrency: "USD" },
    aggregateRating: { ratingValue: "4.8", ratingCount: "1250" },
  },
  hero: {
    brandTag: "MassLoader",
    title: "Netflix Video Downloader",
    description:
      "Download Netflix movies and TV shows in 1080p HD for offline viewing. One-click to save your favorites in MP4/MKV with subtitles.",
    windowsDownloadUrl: "/download/?product=massloader.exe",
    macDownloadUrl: "/download/?product=massloader.dmg",
    backgroundImage: "/images/onlyfans-downloader/header-bg.png",
    productImage: "/images/netflix-downloader/netflix-video-downloader.png",
    productImageWebp: "/images/netflix-downloader/netflix-video-downloader.png",
    productImageAlt: "Netflix video downloader",
  },
  whySection: {
    title: "Why do you need MassLoader Netflix Downloader?",
    subtitleHighlight: "Netflix app limits",
    subtitle: "offline downloads",
    items: [
      "Netflix's built-in download feature only works inside the app, expires when your plan or title availability changes, and limits how many titles you can keep offline.",
      "With MassLoader Netflix Video Downloader, you can save movies and shows in standard MP4/MKV files, keep them permanently, and watch on any device without the Netflix app.",
    ],
    imageSrc: "/images/onlyfans-downloader/onlyfans-download-restrictions.png",
    imageWebp: "/images/onlyfans-downloader/onlyfans-download-restrictions.webp",
    imageAlt: "Netflix download limits",
    imagePosition: "left",
  },
  howSection: {
    title: "How Can MassLoader Netflix Downloader Help You?",
    subtitleHighlight: "Download Netflix in 1080p",
    subtitle: "with subtitles and multiple formats",
    items: [
      "MassLoader downloads Netflix videos in up to 1080p HD, preserves subtitles and audio tracks, and outputs MP4 or MKV. Batch download entire series or a watchlist in one go.",
      "Watch your saved Netflix content on any player or device, without an active subscription or internet—ideal for travel or limited connectivity.",
    ],
    imageSrc: "/images/onlyfans-downloader/remove-restrictions-from-onlyfans.png",
    imageWebp: "/images/onlyfans-downloader/remove-restrictions-from-onlyfans.webp",
    imageAlt: "Download Netflix for offline viewing",
    imagePosition: "right",
  },
  features: {
    mainTitle:
      "Enjoy Netflix Offline with the Best Netflix Video Downloader",
    autoPlayInterval: 3000,
    transitionDuration: 600,
    features: [
      {
        icon: "/images/onlyfans-downloader/download-default-icon.svg",
        activeIcon: "/images/onlyfans-downloader/download-active-icon.svg",
        tabTitle: "Download Netflix in 1080p",
        contentImage: "/images/onlyfans-downloader/download-onlyfans-video.png",
        contentImageWebp: "/images/onlyfans-downloader/download-onlyfans-video.webp",
        contentTitle: "Download Netflix videos",
        contentTitleHighlight: " in 1080p HD",
        contentDescription: [
          "MassLoader Netflix downloader supports 1080p, 720p, and 480p. Download movies and TV shows from Netflix on Windows or Mac and enjoy them offline with high quality video and audio.",
          "Output is standard MP4 or MKV, so you can play files on any device or media player without the Netflix app.",
        ],
      },
      {
        icon: "/images/onlyfans-downloader/convert-default-icon.svg",
        activeIcon: "/images/onlyfans-downloader/convert-active-icon.svg",
        tabTitle: "Netflix to MP4/MKV",
        contentImage: "/images/onlyfans-downloader/onlyfans-to-mp4.png",
        contentImageWebp: "/images/onlyfans-downloader/onlyfans-to-mp4.webp",
        contentTitle: "Save Netflix as",
        contentTitleHighlight: " MP4 or MKV",
        contentDescription: [
          "Export Netflix content as MP4 or MKV with subtitles and multiple audio tracks preserved. Play on computers, tablets, phones, or USB drives.",
          "No DRM restrictions—your files stay playable offline, anytime.",
        ],
      },
      {
        icon: "/images/onlyfans-downloader/menu-default-icon.svg",
        activeIcon: "/images/onlyfans-downloader/menu-active-icon.svg",
        tabTitle: "Batch Download Netflix",
        contentImage: "/images/onlyfans-downloader/bulk-download-onlyfans.png",
        contentImageWebp: "/images/onlyfans-downloader/bulk-download-onlyfans.webp",
        contentTitle: "Download Netflix",
        contentTitleHighlight: " series in bulk",
        contentDescription: [
          "Select multiple movies or full seasons and download them in batch. MassLoader queues and saves everything in one go.",
          "Build a permanent offline library of your favorite Netflix shows and films.",
        ],
      },
      {
        icon: "/images/onlyfans-downloader/subtitle-default-icon.svg",
        activeIcon: "/images/onlyfans-downloader/subtitle-active-icon.svg",
        tabTitle: "Keep Subtitles & Audio",
        contentImage: "/images/onlyfans-downloader/download-onlyfans-chat-video.png",
        contentImageWebp: "/images/onlyfans-downloader/download-onlyfans-chat-video.webp",
        contentTitle: "Netflix downloads",
        contentTitleHighlight: " with subtitles",
        contentDescription: [
          "Keep embedded subtitles and multiple audio tracks when downloading Netflix content. Choose your preferred language and quality.",
          "MassLoader preserves metadata so your files are organized and ready to play.",
        ],
      },
    ],
  },
  secureSection: {
    subtitleHighlight: "Ad-free and secure",
    subtitle: "Netflix downloading",
    items: [
      "MassLoader Netflix Downloader is ad-free and secure. It does not store your account data and works with your existing Netflix subscription.",
      "Regular updates keep the tool compatible with Netflix and improve security.",
    ],
    imageSrc: "/images/onlyfans-downloader/enjoy-ad-free-onlyfans.png",
    imageWebp: "/images/onlyfans-downloader/enjoy-ad-free-onlyfans.webp",
    imageAlt: "Secure Netflix download",
    imagePosition: "right",
  },
  guide: {
    mainTitle: "How to use MassLoader Netflix Downloader?",
    windowsDownloadUrl: "/download/?product=massloader.exe",
    macDownloadUrl: "/download/?product=massloader.dmg",
    transitionDuration: 500,
    steps: [
      {
        image: "/images/onlyfans-downloader/select-onlyfans-downloader.png",
        imageWebp: "/images/onlyfans-downloader/select-onlyfans-downloader.webp",
        title: "Install and open MassLoader.",
        description: "Download MassLoader, install it, and open the app. Sign in to Netflix in the built-in browser.",
      },
      {
        image: "/images/onlyfans-downloader/play-onlyfans-video.png",
        imageWebp: "/images/onlyfans-downloader/play-onlyfans-video.webp",
        title: "Play the Netflix title you want.",
        description: "In MassLoader's browser, play the movie or episode you want to download from Netflix.",
      },
      {
        image: "/images/onlyfans-downloader/save-onlyfans-video.png",
        imageWebp: "/images/onlyfans-downloader/save-onlyfans-video.webp",
        title: "Download Netflix video.",
        description: "Click the Download button to save the video in your chosen quality and format (MP4/MKV).",
      },
    ],
  },
  pricing: {
    mainTitle: "Compare All Plans",
    headerSectionTitle: "Hot & Popular Features",
    plans: [
      {
        name: "Free",
        downloadUrl: "/download/?product=massloader.dmg",
        buttonText: "Free Trial",
        isPrimary: false,
      },
      {
        name: "Standard",
        downloadUrl: "/download/?product=massloader.dmg",
        buttonText: "Free Trial",
        isPrimary: false,
      },
      {
        name: "Pro",
        icon: "/images/table/pro-icon.svg",
        iconAlt: "pro icon",
        highlightColor: "#4EACEA",
        downloadUrl: "/download/?product=massloader.dmg",
        buttonText: "Free Trial",
        isPrimary: true,
      },
    ],
    features: [
      { name: "Netflix Downloader", isNew: true, free: null, standard: null, pro: true },
      { name: "Amazon Prime Downloader", isNew: true, free: null, standard: null, pro: true },
      { name: "Crunchyroll Downloader", isNew: true, free: null, standard: null, pro: true },
      { name: "OF Video Downloader", isNew: true, free: null, standard: null, pro: true },
      { name: "Disney+ Downloader", isNew: true, free: null, standard: null, pro: true },
      { name: "Hulu Downloader", isNew: true, free: null, standard: null, pro: true },
      { name: "HBO Max Downloader", isNew: true, free: null, standard: null, pro: true },
      {
        name: "Download videos/audio from 10000+ sites",
        free: "3 files",
        standard: true,
        pro: true,
      },
      {
        name: "Convert music from Apple Music, Spotify, Amazon Music, Deezer and TIDAL",
        free: "1 file",
        standard: true,
        pro: true,
      },
      {
        name: "Convert file to MP4, MP3 and orginal format",
        free: "1/3 length",
        standard: true,
        pro: true,
      },
      {
        name: "Download playlist, album, artist and more",
        free: "1 file",
        standard: true,
        pro: true,
      },
      {
        name: "Convert media to 20+ output formats",
        free: null,
        standard: true,
        pro: true,
        isLastInGroup: true,
      },
    ],
  },
  testimonials: {
    mainTitle: "See Why Users Love MassLoader Netflix Downloader",
    transitionDuration: 500,
    testimonials: [
      {
        quote:
          "As a social media marketer, definitely, this is one of the most reliable and professional tools that I have used from 2 years ago and I never separate it ever. Thanks of the professional team of MassLoader for giving me this experience.",
        name: "Arash Ashouri",
        avatar: "/images/onlyfans-downloader/user1.svg",
      },
      {
        quote:
          "I'm using the app from one year now. Everything is fine and the service is just the best. If I have problem, the team is always there to help me! 10/10!",
        name: "Denis Hoshikawa",
        avatar: "/images/onlyfans-downloader/user2.svg",
      },
      {
        quote:
          "I purchased the MassLoader app lifetime license and I am very satisfied. I save time recording videos and I can save the audio of my favorite songs. I recommend this app to everyone!",
        name: "Christopher Gallegos",
        avatar: "/images/onlyfans-downloader/user3.svg",
      },
    ],
  },
  faq: {
    mainTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "Q1. Does MassLoader Netflix Downloader have a free trial?",
        answer:
          "Yes, you can try MassLoader with limited free downloads after installation to test Netflix downloading.",
      },
      {
        question: "Q2. Do I need a Netflix subscription to use MassLoader?",
        answer:
          "Yes, you need an active Netflix subscription to stream and download content. MassLoader works with your account to save videos for offline use.",
      },
      {
        question: "Q3. Is it legal to use MassLoader Netflix Downloader?",
        answer:
          "MassLoader is for personal use to save content you can already access via your Netflix subscription. Use it in accordance with your local laws and Netflix's terms.",
      },
      {
        question: "Q4. Can I watch downloaded Netflix videos on other devices?",
        answer:
          "Yes. MassLoader saves videos as MP4 or MKV files, which you can play on most devices (phones, tablets, PCs, media players) without the Netflix app.",
      },
    ],
  },
  cta: {
    backgroundImage: "/images/onlyfans-downloader/footer-bg.png",
    logo: "/images/netflix-downloader/netflix-video-downloader.png",
    logoAlt: "Netflix downloader",
    title: "Download Your Favorite Netflix Shows with MassLoader Now!",
    windowsDownloadUrl: "/download/?product=massloader.exe",
    macDownloadUrl: "/download/?product=massloader.dmg",
  },
};
