import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ButtonProps {
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
  highlight?: string;
  copy: string;
}

export interface BlogSectionProps {
  blogData: any;
}

export interface BlogData {
  meta: {
    category: string;
    thumbnaillUrl: string;
    date: string;
    readingTime: number;
    title: string;
    description: string;
  };
  slug: string;
}

export interface BlogPreviewProps {
  mapData: BlogData;
  key: number;
}
