import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "굿럭키 — 하루를 같이 챙기는 AI 럭키",
  description:
    "아침·낮·저녁, 럭키가 먼저 말 걸어 하루를 같이 챙겨요. 로그인 없이 바로 시작.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://fastly.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface">{children}</body>
    </html>
  );
}
