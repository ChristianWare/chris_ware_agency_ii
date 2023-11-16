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
                Opt for your own direct booking website to take control of your
                vacation rental business, reduce fees, and build a unique brand
                identity, while enjoying better communication with guests.
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
