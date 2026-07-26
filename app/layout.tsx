import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sketchon.kr"),
  title: {
    default: "스케치온 | 교육 · 영상제작 전문기업",
    template: "%s | 스케치온",
  },
  description:
    "스케치온은 AI, 진로, 취업, 창업, 창직, 기업교육 등 다양한 교육 서비스와 강의영상, 브랜드필름, 웹드라마 등 영상제작 서비스를 제공합니다.",
  keywords: [
    "스케치온",
    "SKETCHON",
    "AI교육",
    "진로교육",
    "취업교육",
    "창업교육",
    "창직교육",
    "기업교육",
    "영상제작",
    "브랜드필름",
    "웹드라마",
  ],
  openGraph: {
    title: "스케치온 | 교육 · 영상제작 전문기업",
    description:
      "당신의 다음 장면을, 스케치하다. 교육으로 방향을 그리고, 영상으로 이야기를 완성합니다.",
    url: "https://sketchon.kr",
    siteName: "스케치온",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}