
import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "瀚森金屬工程 HS Metal Façade",
  description: "金屬帷幕牆｜鋁包板｜玻璃帷幕｜不鏽鋼帷幕｜金屬格柵。十年以上大型商辦與科技廠房經驗。",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
