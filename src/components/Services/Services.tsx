import { indvService } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Services.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";
import Img2 from "../../../public/images/img2.png";

const Services = () => {
  return (
    <div className={styles.content}>
      <LayoutWrapper>
        <ContentPadding>
          <SectionHeading
            headingText='Our Developers specialize in the following fields'
            copyText='Having a direct booking website for your vacation rental property instead of relying solely on Airbnb and VRBO can offer several benefits. Here are some of the advantages of having your own booking website:'
          />

          <div className={styles.bottom}>
            <div className={styles.one}>
              <Image src={Img1} alt='image' fill className={styles.img} />
              <h3 className={styles.shOne}>Service One</h3>
            </div>
            <div className={styles.two}>
              <Image src={Img2} alt='image' fill className={styles.img} />
              <h3 className={styles.shTwo}>Service Two</h3>
            </div>
            <div className={styles.three}>
              <Image src={Img1} alt='image' fill className={styles.img} />
              <h3 className={styles.shThree}>Service Three</h3>
            </div>
            <div className={styles.four}>
              <Image src={Img2} alt='image' fill className={styles.img} />
              <h3 className={styles.shFour}>Service Four</h3>
            </div>
            <div className={styles.five}>
              <Image src={Img1} alt='image' fill className={styles.img} />
              <h3 className={styles.shFive}>Service Five</h3>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Services;
