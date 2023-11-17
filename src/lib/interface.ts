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
  src1: StaticImageData;
  src2: StaticImageData;
  src3: StaticImageData;
  src4: StaticImageData;
  src5: StaticImageData;
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