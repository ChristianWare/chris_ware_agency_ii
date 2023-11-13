import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Services.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";
import Img2 from "../../../public/images/img2.png";
import { features } from "@/lib/data";

const Services = () => {
  return (
    <div className={styles.content}>
      <LayoutWrapper>
        <ContentPadding>
          <SectionHeading
            headingText='Your personalized direct booking website includes the following features:'
            copyText='Building an effective direct booking website for your vacation rental home is crucial for attracting and converting potential guests. Here are some key features and elements we will build for you:'
          />
          <div className={styles.bottom}>
            {features.map((x, index) => (
              <div key={index} className={styles.container}>
                <div className={styles.iconContainer}>
                  <Image
                    src={x.icon}
                    alt='icon'
                    width={50}
                    height={50}
                    className={styles.icon}
                  />
                </div>
                <h3 className={styles.h3}>{x.service}</h3>
                <p className={styles.copy}>{x.description}</p>
              </div>
            ))}
            <div className={styles.container}>
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='alt' fill className={styles.img} />
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Services;
