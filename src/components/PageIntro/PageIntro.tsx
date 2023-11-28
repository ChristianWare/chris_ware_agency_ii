import Image from "next/image";
import Label from "../Label/Label";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./PageIntro.module.css";
import { PageIntroProps } from "@/lib/interface";
import { FC } from "react";
import Nav from "../Nav/Nav";

const PageIntro: FC<PageIntroProps> = ({ heading, copy, src }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={src}
        alt='img'
        fill
        className={styles.img}
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
        priority
      />
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <h1 className={styles.heading}>{heading}</h1>
              <p className={styles.copy}>{copy}</p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default PageIntro;
