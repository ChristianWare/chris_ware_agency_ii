import { process } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Your website <br /> in{" "}
              <span className={styles.highlight}>4 steps</span>
            </h2>
            <p className={styles.topText}>
              Our process is structured so that you get the most added value for
              the least amount of time.
            </p>
          </div>
          <div className={styles.right}>
            {process.map((x, index) => (
              <div key={x.id} className={styles.card}>
                <span className={styles.number}>0{`${index + 1}`}</span>
                <h3 className={styles.processName}>{x.processName}</h3>
                <p className={styles.processDescription}>
                  {x.processDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default HowItWorks;
