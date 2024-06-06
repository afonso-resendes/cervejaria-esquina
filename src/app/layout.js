import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/ContentContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cervejaria Esquina",
  description: "Cervejaria Esquina STEAKHOUSE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ margin: 0, border: 0, padding: 0 }}
        className={inter.className}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
