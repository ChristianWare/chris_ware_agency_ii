import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Services.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import { features } from "@/lib/data";

const Services = () => {
  return (
    <div className={styles.content}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <SectionHeading
              headingText='Three important fetaures every direct booking website should have:'
              copyText='Building an effective direct booking website for your vacation rental home is crucial for attracting and converting potential guests. Here are some key features and elements we will build for you:'
            />
          </div>
          <div className={styles.bottom}>
            {features.map((x, index) => (
              <div key={index} className={styles.container}>
                <div className={styles.box}>
                  <div className={styles.iconContainer}>
                    <Image
                      src={x.icon}
                      alt='icon'
                      width={40}
                      height={40}
                      className={styles.icon}
                    />
                  </div>
                  <h3 className={styles.h3}>{x.service}</h3>
                  <p className={styles.copy}>{x.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Services;
