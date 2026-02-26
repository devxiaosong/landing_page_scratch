"use client";

import { usePathname, useRouter } from "next/navigation";

const translations = {
  en: {
    slogan: "Make your life better",
    resources: "Resources",
    tutorials: "How-to Tutorials",
    tutorialsHref: "/blog/guide",
    userGuide: "User Guide",
    userGuideHref: "/blog/guide/massloader-video-downloader",
    support: "Support",
    supportCenter: "Support Center",
    supportCenterHref: "/support/",
    contactUs: "Contact Us",
    contactUsHref: "/support/#still-need-help",
    language: "Language",
    statement: "Statement",
    licenseAgreement: "License Agreement",
    termsOfUse: "Terms of Use",
    privacyPolicy: "Privacy Policy",
    refundPolicy: "Refund Policy",
    cookies: "Cookies",
    shippingPolicy: "Shipping Policy",
    copyright: "Copyright © 2026 MassLoader Studio. All rights reserved.",
  },
  de: {
    slogan: "Mach dein Leben besser",
    resources: "Ressourcen",
    tutorials: "Anleitungen",
    tutorialsHref: "/blog/guide",
    userGuide: "Benutzerhandbuch",
    userGuideHref: "/blog/guide/massloader-video-downloader",
    support: "Support",
    supportCenter: "Support-Center",
    supportCenterHref: "/de/support/",
    contactUs: "Kontakt",
    contactUsHref: "/de/support/#still-need-help",
    language: "Sprache",
    statement: "Erklärung",
    licenseAgreement: "Lizenzvertrag",
    termsOfUse: "Nutzungsbedingungen",
    privacyPolicy: "Datenschutz",
    refundPolicy: "Rückerstattung",
    cookies: "Cookies",
    shippingPolicy: "Versandrichtlinie",
    copyright: "Copyright © 2026 MassLoader Studio. Alle Rechte vorbehalten.",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const isGerman = pathname.startsWith("/de");
  const t = isGerman ? translations.de : translations.en;

  // Detect if currently on a support page
  const isOnSupport =
    pathname === "/support" ||
    pathname === "/de/support" ||
    pathname.startsWith("/de/support/");

  const handleLanguageSelect = (code: string) => {
    if (code === "en") {
      router.push(isOnSupport ? "/support" : "/");
    } else if (code === "de") {
      router.push(isOnSupport ? "/de/support" : "/de");
    }
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ];

  return (
    <footer className="bg-black text-white pt-12 md:pt-15">
      <div className="container mx-auto max-w-[1310px] px-4 pb-12 md:pb-12.5">
        <div className="flex flex-wrap">
          {/* Logo & Slogan */}
          <div className="w-full md:w-1/2 lg:w-1/4 relative z-10 flex flex-col items-start md:items-center mb-8 lg:mb-0">
            <img
              src="/images/logo/MassLoader.svg"
              alt="MassLoader"
              className="w-14 h-14"
            />
            <a href="/">
              <h2 className="text-[30px] font-bold text-white mt-2">
                MassLoader
              </h2>
            </a>
            <p
              className="text-lg md:text-2xl text-white mt-3 md:mt-3"
              style={{ fontFamily: "'Hurricane', cursive" }}
            >
              {t.slogan}
            </p>
          </div>

          {/* Resources */}
          <div className="w-1/2 lg:w-1/4 relative z-10 lg:text-center">
            <dl className="inline-block text-left">
              <dt className="text-xl text-white font-bold pb-2.5">
                {t.resources}
              </dt>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href={t.tutorialsHref} className="hover:underline">
                  {t.tutorials}
                </a>
              </dd>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href={t.userGuideHref} className="hover:underline">
                  {t.userGuide}
                </a>
              </dd>
            </dl>
          </div>

          {/* Support */}
          <div className="w-1/2 lg:w-1/4 relative z-10 lg:text-center">
            <dl className="inline-block text-left">
              <dt className="text-xl text-white font-bold pb-2.5">
                {t.support}
              </dt>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href={t.supportCenterHref} className="hover:underline">
                  {t.supportCenter}
                </a>
              </dd>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href={t.contactUsHref} className="hover:underline">
                  {t.contactUs}
                </a>
              </dd>
            </dl>
          </div>

          {/* Language Selector */}
          <div className="w-1/2 lg:w-1/4 relative z-10 lg:text-center">
            <dl className="inline-block text-left">
              <dt className="text-xl text-white font-bold pb-2.5">{t.language}</dt>
              {languages.map((lang) => (
                <dd key={lang.code} className="mt-2.5">
                  <button
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`text-sm hover:underline cursor-pointer ${
                      (lang.code === "de") === isGerman
                        ? "text-white"
                        : "text-white opacity-70"
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </button>
                </dd>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-white opacity-20" />

      {/* Bottom Section */}
      <div className="container mx-auto max-w-[1310px] px-4 py-7.5 md:pt-5 md:pb-3">
        <div className="flex text-sm text-white opacity-70 flex-wrap justify-center">
          <div className="flex flex-wrap justify-center">
            <a href="/statement" className="hover:underline">
              {t.statement}
            </a>
            <span className="mx-2">|</span>
            <a href="/license-agreement" className="hover:underline">
              {t.licenseAgreement}
            </a>
            <span className="mx-2">|</span>
            <a href="/terms-of-use" className="hover:underline">
              {t.termsOfUse}
            </a>
            <span className="mx-2">|</span>
            <a href="/privacy-policy/" className="hover:underline">
              {t.privacyPolicy}
            </a>
            <span className="mx-2">|</span>
            <a href="/refund-policy/" className="hover:underline">
              {t.refundPolicy}
            </a>
            <span className="mx-2">|</span>
            <a href="/cookies" className="hover:underline">
              {t.cookies}
            </a>
            <span className="mx-2">|</span>
            <a href="/shipping-policy" className="hover:underline">
              {t.shippingPolicy}
            </a>
          </div>
        </div>
        <p className="text-sm text-white opacity-70 text-center mt-5">
          {t.copyright}
        </p>
      </div>
    </footer>
  );
}
