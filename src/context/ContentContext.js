"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getContentData } from "@/actions/getData";

const LanguageContext = createContext();

import { en } from "@/locales/en";
import { pt } from "@/locales/pt";

function processData(data, language) {
  if (!data) return {};
  let processedData = {};
  for (const key in data) {
    if (key.endsWith(`_${language}`)) {
      processedData[key.replace(`_${language}`, "")] = data[key];
    } else if (!key.endsWith("_en") && !key.endsWith("_pt")) {
      processedData[key] = data[key];
    }
  }
  return processedData;
}

function getContentForLang(data, lang) {
  const contentData = processData(data, lang);
  return lang === "en" ? { ...contentData, ...en } : { ...contentData, ...pt };
}

function getLocaleFromPathname(pathname) {
  return pathname?.startsWith("/en") ? "en" : "pt";
}

export const LanguageProvider = ({ children, initialData }) => {
  const router = useRouter();
  const pathname = usePathname();
  const localeFromPath = getLocaleFromPathname(pathname);
  const [language, setLanguageState] = useState(localeFromPath || "pt");
  const [isLoading, setIsLoading] = useState(!initialData);
  const [allContent, setAllContent] = useState(initialData ?? null);
  const [content, setContent] = useState(() =>
    initialData ? getContentForLang(initialData, localeFromPath || "pt") : null
  );
  const [sliderImages, setSliderImages] = useState(
    initialData
      ? [
          initialData.slider_image1,
          initialData.slider_image2,
          initialData.slider_image3,
          initialData.slider_image4,
        ].filter(Boolean)
      : []
  );

  const setLanguage = (lang) => {
    const path = lang === "en" ? "/en" : "/";
    if (pathname !== path) {
      router.push(path);
    }
    setLanguageState(lang);
  };

  useEffect(() => {
    const locale = getLocaleFromPathname(pathname);
    setLanguageState(locale);
  }, [pathname]);

  useEffect(() => {
    const applyData = (data) => {
      setAllContent(data);
      setSliderImages([
        data?.slider_image1,
        data?.slider_image2,
        data?.slider_image3,
        data?.slider_image4,
      ].filter(Boolean));
      setContent(getContentForLang(data || {}, language));
    };

    if (initialData) {
      applyData(initialData);
      setIsLoading(false);
    } else {
      const fetchData = async () => {
        setIsLoading(true);
        const data = await getContentData();
        applyData(data);
        setIsLoading(false);
      };
      fetchData();
    }
  }, [initialData]);

  useEffect(() => {
    if (language && allContent) {
      setContent(getContentForLang(allContent, language));
    }
  }, [language, allContent]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, isLoading, content, sliderImages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
