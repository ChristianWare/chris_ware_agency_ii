import { values } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Values.module.css";
import Check from "../../../public/icons/check.svg";

const Values = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Values Guiding our Decisions
          </h2>
          <p className={styles.copy}>
            These are the prices we charge on a monthly basis. We understand
            that websites can be expensive. So we only charge a small fee. Canel
            anytime, no questions asked. See details below:
          </p>
        </div>
        <div className={styles.bottom}>
          {values.map((x, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.box}>
                <div className={styles.iconContainer}>
                  <Check width={40} height={40} className={styles.icon} />
                </div>
                <h3 className={styles.value}>{x.value}</h3>
                <p className={styles.description}>{x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Values;
