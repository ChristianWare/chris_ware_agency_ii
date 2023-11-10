import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import styles from "./Benefits.module.css";
import ContentPadding from "@/components/Layout/ContentPadding/ContentPadding";
import { benefits } from "@/lib/data";

const Benefits = () => {
  return (
    <div className={styles.content}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              The benefits of a direct booking website
            </h2>
            <p className={styles.headingCopy}>
              Having a direct booking website for your vacation rental property
              instead of relying solely on Airbnb and VRBO (Vacation Rental By
              Owner) can offer several benefits. Here are some of the advantages
              of having your own booking website: - 18px
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.b1}>
              {benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className={styles.benefitContainer}>
                  <h3 className={styles.benefitHeading}>{benefit.heading}</h3>
                  <p className={styles.benefitDesc}>{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className={styles.b2}>circle</div>
            <div className={styles.b3}>
              {benefits.slice(2, 4).map((benefit, index) => (
                <div key={index} className={styles.benefitContainer}>
                  <h3 className={styles.benefitHeading}>{benefit.heading}</h3>
                  <p className={styles.benefitDesc}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};

export default Benefits;
