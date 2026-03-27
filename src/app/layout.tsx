import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Lees Cafe | 캐주얼 아메리칸 다이너",
  description:
    "2020년 판교에서 시작한 캐주얼 아메리칸 다이너 리스카페. 판교 · 정자 · 여의도에서 만나는 넉넉하고 따뜻한 미 서부식 브런치 & 디너.",
  keywords: [
    "리스카페",
    "판교맛집",
    "정자맛집",
    "여의도맛집",
    "브런치",
    "미국식식당",
    "아메리칸다이너",
    "이탈리안아메리칸",
  ],
  openGraph: {
    title: "Lees Cafe | 캐주얼 아메리칸 다이너",
    description:
      "판교 · 정자 · 여의도에서 만나는 넉넉하고 따뜻한 미 서부식 브런치 & 디너.",
    url: "https://leescafe.vercel.app",
    siteName: "Lees Cafe",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
