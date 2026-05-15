import { Nunito, Roboto_Slab } from "next/font/google";
import "./globals.css";

export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  // weight: ["700"],
});
export const robotoslab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  // weight: ["400", "600", "800"],
});

export const metadata = {
  title: "BookVerse | HomePage",
  description: "BookVerse is an Online Book Borrowing  Online Platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`h-full antialiased`}>
      <body
        className={`${robotoslab.className} ${nunito.className} min-h-full flex flex-col`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
