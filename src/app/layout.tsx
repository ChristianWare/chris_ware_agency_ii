import type { Metadata } from "next";
import { Inter, Chakra_Petch, Bebas_Neue, Anton } from "next/font/google";
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

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--bebasNeue",
  display: "swap",
  adjustFontFallback: false,
});

const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--anton",
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

const schabo = localFont({
  src: "../../public/fonts/SCHABO.otf",
  variable: "--schabo",
  display: "swap",
});

const acidGrotesk = localFont({
  src: "../../public/fonts/AcidGrotesk.otf",
  variable: "--acidGrotesk",
  display: "swap",
});

const acidGroteskBold = localFont({
  src: "../../public/fonts/AcidGroteskBold.otf",
  variable: "--acidGroteskBold",
  display: "swap",
});

const humaneBold = localFont({
  src: "../../public/fonts/HumaneBold.otf",
  variable: "--humaneBold",
  display: "swap",
});

const humaneExtraLight = localFont({
  src: "../../public/fonts/HumaneExtraLight.otf",
  variable: "--humaneExtraLight",
  display: "swap",
});

const humaneLight = localFont({
  src: "../../public/fonts/HumaneLight.otf",
  variable: "--humaneLight",
  display: "swap",
});

const humaneMedium = localFont({
  src: "../../public/fonts/HumaneMedium.otf",
  variable: "--humaneMedium",
  display: "swap",
});

const messinaBold = localFont({
  src: "../../public/fonts/MessinaBold.ttf",
  variable: "--messinaBold",
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
        className={`${inter.variable} ${chakraPetch.variable} ${schabo.variable} ${acidGrotesk.variable} ${acidGroteskBold.variable} ${humaneBold.variable} ${humaneExtraLight.variable} ${humaneLight.variable} ${humaneMedium.variable} ${messinaBold.variable} ${bebasNeue.variable} ${anton.variable}`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
