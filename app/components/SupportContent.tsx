"use client";

import { useState, useMemo } from "react";

export interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

export interface FAQCategory {
  title: string;
  icon: string;
  items: FAQItem[];
}

interface Props {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  searchPlaceholder?: string;
  categories: FAQCategory[];
}

// Highlight matching keyword in text
function Highlight({ text, keyword }: { text: string; keyword: string }) {
  if (!keyword.trim()) return <>{text}</>;
  const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 text-gray-900 rounded px-0.5">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function SupportContent({
  title = "Welcome to",
  titleHighlight = "Support",
  subtitle = "Our support specialists are here to help.",
  searchPlaceholder = "Search for keywords...",
  categories,
}: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const isSearching = searchQuery.trim().length > 0;

  // Filter by question and answer text; auto-expand all matched when searching
  const filteredCategories = useMemo(() => {
    if (!isSearching) return categories;
    const q = searchQuery.toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          const inQuestion = item.question.toLowerCase().includes(q);
          const inAnswer =
            typeof item.answer === "string" &&
            item.answer.toLowerCase().includes(q);
          return inQuestion || inAnswer;
        }),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [searchQuery, categories, isSearching]);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenQuestion(null);
  };

  const toggleQuestion = (key: string) => {
    setOpenQuestion(openQuestion === key ? null : key);
  };

  const scrollToCategory = (index: number) => {
    setOpenCategory(index);
    setOpenQuestion(null);
    setTimeout(() => {
      const element = document.getElementById(`category-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setOpenQuestion(null);
    setOpenCategory(null);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setOpenQuestion(null);
    setOpenCategory(null);
  };

  // When searching, all matched categories expand automatically
  const isCategoryOpen = (index: number) =>
    isSearching ? true : openCategory === index;

  // When searching, all matched questions expand automatically
  const isQuestionOpen = (key: string) =>
    isSearching ? true : openQuestion === key;

  return (
    <section className="pt-20 bg-white">
      <div className="container mx-auto max-w-[1310px] px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          {title} <span className="text-[#7A32FD]">{titleHighlight}</span>
        </h1>
        <p className="text-xl text-center text-gray-700 mb-20">{subtitle}</p>

        {/* Search Bar */}
        <div className="max-w-[742px] mx-auto flex items-center border-b-2 border-gray-600 pb-2.5 mb-20">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600 flex-shrink-0"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={handleSearchChange}
            className="flex-1 ml-4 bg-transparent outline-none text-base h-7 text-gray-900"
          />
          {isSearching && (
            <button
              onClick={clearSearch}
              className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Clear search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          )}
        </div>

        {/* Category Cards — always show all, hidden while searching */}
        {!isSearching && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => scrollToCategory(index)}
                className="bg-white rounded-[20px] border border-gray-200 pt-12 pb-8 cursor-pointer hover:shadow-[0_1px_4px_0_rgba(122,50,253,0.5)] transition-all"
              >
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-[60px] h-[60px] mx-auto mb-12"
                />
                <div className="text-center text-xl font-bold text-gray-900">
                  {category.title}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Search result count */}
        {isSearching && (
          <div className="mb-8 text-gray-500 text-sm">
            {filteredCategories.length > 0 ? (
              <>
                Found{" "}
                <span className="font-semibold text-[#7A32FD]">
                  {filteredCategories.reduce((acc, c) => acc + c.items.length, 0)}
                </span>{" "}
                result{filteredCategories.reduce((acc, c) => acc + c.items.length, 0) !== 1 ? "s" : ""} for{" "}
                <span className="font-semibold text-gray-700">&ldquo;{searchQuery}&rdquo;</span>
              </>
            ) : (
              <>
                No results for{" "}
                <span className="font-semibold text-gray-700">&ldquo;{searchQuery}&rdquo;</span>
              </>
            )}
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="pb-20">
          {filteredCategories.length === 0 && isSearching ? (
            <div className="text-center py-20 text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <p className="text-lg">No matching questions found.</p>
              <button onClick={clearSearch} className="mt-4 text-[#7A32FD] hover:underline text-sm">
                Clear search
              </button>
            </div>
          ) : (
            filteredCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                id={`category-${categoryIndex}`}
                className="border-2 border-gray-200 rounded-lg mb-5"
              >
                {/* Category Header */}
                <div
                  onClick={() => !isSearching && toggleCategory(categoryIndex)}
                  className={`flex justify-between items-center py-9 px-6 ${!isSearching ? "cursor-pointer" : "cursor-default"}`}
                >
                  <span className="text-xl font-bold text-gray-900">
                    {category.title}
                  </span>
                  {!isSearching && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-[#7A32FD] transition-transform ${
                        isCategoryOpen(categoryIndex) ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </div>

                {/* Category Content */}
                {isCategoryOpen(categoryIndex) && (
                  <div className="px-10 pb-10">
                    {category.items.map((item, itemIndex) => {
                      const questionKey = `${categoryIndex}-${itemIndex}`;
                      const isOpen = isQuestionOpen(questionKey);

                      return (
                        <div
                          key={itemIndex}
                          className={`border-2 border-[#DFD6F0] rounded-lg ${
                            itemIndex > 0 ? "mt-10" : ""
                          }`}
                        >
                          {/* Question */}
                          <div
                            onClick={() => !isSearching && toggleQuestion(questionKey)}
                            className={`flex justify-between items-center py-7 px-5 ${!isSearching ? "cursor-pointer" : "cursor-default"}`}
                          >
                            <span className="text-lg font-bold text-gray-900">
                              {isSearching ? (
                                <Highlight text={item.question} keyword={searchQuery} />
                              ) : (
                                item.question
                              )}
                            </span>
                            {!isSearching && (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`text-[#7A32FD] transition-transform flex-shrink-0 ml-4 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              >
                                <path d="M19 9l-7 7-7-7"></path>
                              </svg>
                            )}
                          </div>

                          {/* Answer */}
                          {isOpen && (
                            <div className="px-5 pb-7 -mt-5 text-gray-600 text-base">
                              <div className="mt-3">
                                {isSearching && typeof item.answer === "string" ? (
                                  <Highlight text={item.answer} keyword={searchQuery} />
                                ) : (
                                  item.answer
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
