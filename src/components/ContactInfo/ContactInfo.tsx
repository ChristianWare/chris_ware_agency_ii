import Label from "../Label/Label";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./ContactInfo.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img4.png";
import Check from "../../../public/icons/check.svg";
import Button from "../Button/Button";
import Insta from "../../../public/icons/insta.svg";
import Email from "../../../public/icons/email.svg";
import Phone from "../../../public/icons/phone.svg";

const ContactInfo = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <Label text='About Us' />
            <h2 className={styles.heading}>Our Contact Info</h2>
            <div className={styles.right}>
              <p className={styles.copy}>
                Whether you&apos;re a prospective client or have questions about
                our services, reaching out is simple and quick. We&apos;re ready
                to assist you to ensuring a seamless and personalized experience
                as you take the next step in transforming your vacation rental
                business.
              </p>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Phone width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>480-888-8888</p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Email width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>info@chrisware.agency</p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Insta width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>@chrisware_agency</p>
                </div>
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
export default ContactInfo;
