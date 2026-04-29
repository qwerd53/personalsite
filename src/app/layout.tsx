import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-display-zh",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-body-zh",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dongyang Wang | AI Researcher",
  description:
    "Academic research portfolio for Dongyang Wang — multimodal computer vision, 6D pose estimation, and intelligent perception systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${notoSerifSC.variable} ${notoSansSC.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
