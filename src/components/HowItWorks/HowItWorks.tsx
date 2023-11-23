import { process } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Our process</h2>
              <p className={styles.topText}>
                Our process is structured so that you get the most added value
                for the least amount of time.
              </p>
            </div>
            <div className={styles.right}>
              {process.map((x, index) => (
                <div key={x.id} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.boxLeft}>
                      <div className={styles.indexContainer}>
                        <span className={styles.number}>0{`${index + 1}`}</span>
                      </div>
                    </div>
                    <div className={styles.boxRight}>
                      <h3 className={styles.processName}>{x.processName}</h3>
                      <p className={styles.processDescription}>
                        {x.processDescription}
                      </p>
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
