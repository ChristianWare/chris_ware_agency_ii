import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./AboutSection.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";

const AboutSection = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              <span className={styles.highlight}>Who</span> are we?
            </h2>
            <p className={styles.copy}>
              Having a direct booking website for your vacation rental property
              instead of relying solely on Airbnb and VRBO can offer several
              benefits. Here are some of the advantages of having your own
              booking website:
            </p>
            <p className={styles.copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel placeat numquam debitis quae exercitationem alias corrupti saepe est? Voluptas?</p>
            <p className={styles.copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel placeat numquam debitis quae exercitationem alias corrupti saepe est? Voluptas?</p>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='img' fill className={styles.img} />
            </div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default AboutSection;
