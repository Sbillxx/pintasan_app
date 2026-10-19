import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Pintasan — satu halaman, semua jalan pintas",
  description: "Kumpulan pintasan ke tool dan situs favorit, ditata rapi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("pintasan-theme")||(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=t;}catch(e){}`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
