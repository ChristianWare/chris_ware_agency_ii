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
  labelText: string;
  heading: string;
  highlight: string;
  copy: string;
  src: StaticImageData;
  labelText2: string;
  heading2: string;
  copy2: string;
  src2: StaticImageData;
}