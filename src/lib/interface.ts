import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Button {
  href: string;
  text: string;
  btnType: string;
  target?: string;
}
