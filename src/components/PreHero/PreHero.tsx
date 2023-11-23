import { preHero } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./PreHero.module.css";
import Arrow from "../../../public/icons/downArrow.svg";

const PreHero = () => {
  return (
    // <LayoutWrapper>
      // <ContentPadding>
        <div className={styles.content}>
          {preHero.map((x, index) => (
            <div key={index} className={styles.container}>
              <h2 className={styles.feature}>{x.feature}</h2>
              <p className={styles.desc}>{x.desc}</p>
              <div className={styles.arrowContainer}>
                <Arrow width={20} height={20} className={styles.icon} />
              </div>
            </div>
          ))}
        </div>
      // </ContentPadding>
    // </LayoutWrapper>
  );
};
export default PreHero;
