import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./AboutSection.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img4.png";
import Check from "../../../public/icons/check.svg";
import Button from "../Button/Button";
import Label from "../Label/Label";

const AboutSection = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <Label text='About Us' />
            <h2 className={styles.heading}>
              <span className={styles.highlight}>Who</span> are we?
            </h2>
            <div className={styles.right}>
              <p className={styles.copy}>
                Welcome to the Chris Ware Agency, where we transform the way you
                manage your vacation rental properties. We specialize in
                crafting personalized, direct booking websites tailored to
                elevate your vacation home rental experience. We understand the
                ins and outs of the vacation rental industry, and we&#39;re
                passionate about helping you maximize your property&#39;s
                potential. With our expertise, you can establish a direct
                connection with your guests, foster trust, and ultimately
                increase bookings. Join us in unlocking the full potential of
                your vacation rental busines. here are some benefits and
                features:
              </p>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Check width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                    Tailored Solutions for Your Property
                  </p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Check width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                    Maximize Revenue with Direct Bookings
                  </p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Check width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                    Professional Guidance Every Step of the Way
                  </p>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button href='/about' text='More about us' btnType='primary' />
              </div>
            </div>
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
