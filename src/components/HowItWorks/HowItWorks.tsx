import { process } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./HowItWorks.module.css";
import Label from "../Label/Label";

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <Label color='white' text='How we do things' />
              <h2 className={styles.heading}>Our Process</h2>
              <p className={styles.topText}>
                With these steps, you not only streamline the
                contract process but also provide a dedicated and efficient
                platform for communication, fostering a transparent and
                collaborative relationship with the vacation rental owner.
              </p>
            </div>
            <div className={styles.right}>
              {process.map((x, index) => (
                <div key={x.id} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.boxLeft}>
                      <span className={styles.number}>{`${index + 1}`}</span>
                    </div>
                    <div className={styles.boxRight}>
                      <h3 className={styles.processName}>{x.processName}</h3>
                      <p className={styles.copy}>{x.processDescription}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default HowItWorks;
