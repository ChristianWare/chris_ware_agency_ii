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
}) => {
  return (
    <div className={styles.container}>
      
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <Label text={labelText} />
              <h1 className={styles.heading}>
                {heading} <span className={styles.highlight}>{highlight}</span>{" "}
              </h1>
              <p className={styles.copy}>{copy}</p>
            </div>
            <div className={styles.right}>
              
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default PageIntro;
