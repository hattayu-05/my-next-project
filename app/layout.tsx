import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "SIMPLE",
  description: "テクノロジー企業のコーポレートサイト",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
