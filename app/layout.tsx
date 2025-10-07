export const metadata = { title: "瀚森金屬工程有限公司" };
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="zh-Hant"><body>{children}</body></html>);
}