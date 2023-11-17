import Image from "next/image";
import Button from "../Button/Button";
import Label from "../Label/Label";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./PageIntro.module.css";
import { PageIntroProps } from "@/lib/interface";
import { FC } from "react";

const PageIntro: FC<PageIntroProps> = ({
  labelText,
  heading,
  highlight,
  copy,
  src,
  labelText2,
  heading2,
  copy2,
  src2,
}) => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <Label text={labelText} />
            <h1 className={styles.heading}>
              {heading} <span className={styles.highlight}>{highlight}</span>{" "}
            </h1>
            <p className={styles.copy}>{copy}</p>
            <Button btnType='secondary' href='/contact' text='Request a demo' />
          </div>
          <div className={styles.bottom}>
            <div className={styles.imgContainer}>
              <Image src={src} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.box}>
              <div className={styles.infoLeft}>
                <Label text={labelText2} />
                <h2>{heading2}</h2>
                <p className={styles.copyii}>{copy2}</p>
              </div>
              <div className={styles.infoRight}>
                <div className={styles.logoImageContainer}>
                  <Image
                    src={src2}
                    alt='logo'
                    fill
                    className={styles.logo}
                  />
                </div>
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default PageIntro;
