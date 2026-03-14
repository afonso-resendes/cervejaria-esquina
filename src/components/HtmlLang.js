"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = pathname?.startsWith("/en") ? "en" : "pt";
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
