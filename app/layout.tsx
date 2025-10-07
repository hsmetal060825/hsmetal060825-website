import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "瀚森金屬工程有限公司",
  description: "金屬外牆・玻璃帷幕・鋁包板",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
