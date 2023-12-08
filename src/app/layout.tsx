import type { Metadata } from "next";
import { Inter, Chakra_Petch, Staatliches } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--inter",
  display: "swap",
  adjustFontFallback: false,
});

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--chakraPetch",
  adjustFontFallback: false,
});

const staatliches = Staatliches({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--staatliches",
  adjustFontFallback: false,
});

const schabo = localFont({
  src: "../../public/fonts/SCHABO.otf",
  variable: "--schabo",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${chakraPetch.variable} ${staatliches.variable}`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
