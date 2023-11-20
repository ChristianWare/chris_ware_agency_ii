import Label from "../Label/Label";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./PageIntro.module.css";
import { PageIntroProps } from "@/lib/interface";
import { FC } from "react";
import ImageGrid from "../Image/ImageGrid/ImageGrid";
import Img1 from "../../../public/images/img1.png";
import Img2 from "../../../public/images/img2.png";
import Img3 from "../../../public/images/img3.png";
import Img4 from "../../../public/images/img6.png";
import Img5 from "../../../public/images/img5.png";

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
              {/* <ImageGrid
                src1={Img1}
                src2={Img2}
                src3={Img3}
                src4={Img4}
                src5={Img5}
              /> */}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default PageIntro;
