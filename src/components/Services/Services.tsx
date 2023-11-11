import { indvService } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Services.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const Services = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <SectionHeading
            headingText='Our Developers specialize in the following fields'
            copyText='Having a direct booking website for your vacation rental property instead of relying solely on Airbnb and VRBO can offer several benefits. Here are some of the advantages of having your own booking website:'
          />
          <div className={styles.middle}>
            {indvService.map((x, index) => (
              <h3 key={index} className={styles.serviceHeading}>
                {x.service}
              </h3>
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
            <div className={styles.five}></div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Services;
