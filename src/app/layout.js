import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Nunito, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});
export const robotoslab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookVerse | HomePage",
  description: "BookVerse is an Online Book Borrowing  Online Platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased  ${nunito.className} ${robotoslab.className}`}
    >
      <body className={` min-h-full flex flex-col`}>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
