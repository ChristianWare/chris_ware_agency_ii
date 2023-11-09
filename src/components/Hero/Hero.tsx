import Image from "next/image";

import styles from "./Hero.module.css";
import LayoutWrapper from "../Layout/LayoutWrapper";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";

const Hero = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1>Modern rental luxury complex</h1>
              <p>Main paragraph here</p>
              <div className={styles.btnCointainer}>2 btns here</div>
            </div>
            <div className={styles.right}>
              background Image here. pos rel.
              <div className={styles.r1}>
                Rotating circle btn here leading to the next section of the
                site.
              </div>
            </div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Hero;
