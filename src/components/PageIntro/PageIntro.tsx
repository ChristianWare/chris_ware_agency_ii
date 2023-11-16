import Label from "../Label/Label";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./PageIntro.module.css";
import { PageIntroProps } from "@/lib/interface";
import { FC } from "react";

const PageIntro: FC<PageIntroProps> = ({ heading, highlight, copy, src }) => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <Label text='About US' />
            <h1 className={styles.heading}>
              {heading} <span className={styles.highlight}>{highlight}</span>{" "}
            </h1>
            <p className={styles.copy}>{copy}</p>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default PageIntro;
