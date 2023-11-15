import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Button {
  href: string;
  text: string;
  btnType: string;
  target?: string;
}

export interface ImageGridProps {
  reverse?: string;
}

export interface PageIntroProps {
  heading: string;
  highlight: string;
  copy: string;
  src: StaticImageData;
}