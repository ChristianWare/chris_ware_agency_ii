import Image from "next/image";
import Label from "../Label/Label";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./ContactHero.module.css";
import Headset from "../../../public/icons/headset.png";

const ContactHero = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.box}>
            <div className={styles.left}>
              <Label text='Contact us' />
              <h1 className={styles.heading}>
                Let us know how{" "}
                <span className={styles.highlight}>we can help</span>
              </h1>
              <p className={styles.copy}>
                Whether you&#39;re a prospective client or have questions about
                our services, reaching out is simple and quick. We&#39;re ready
                to assist you to ensuring a seamless and personalized experience
                as you take the next step in transforming your vacation rental
                business.
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Headset} alt='logo' fill className={styles.img} />
              </div>
            </div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default ContactHero;
