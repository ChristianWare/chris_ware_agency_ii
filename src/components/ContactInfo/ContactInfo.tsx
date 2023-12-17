"use client";

import Label from "../Label/Label";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./ContactInfo.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img4.png";
import Insta from "../../../public/icons/insta.svg";
import Email from "../../../public/icons/email.svg";
import Phone from "../../../public/icons/phone.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const ContactInfo = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <Label text='Reach out' />
            <h2 className={styles.heading}>Our Contact Info</h2>
            <div className={styles.right}>
              <p className={styles.copy}>
                Whether you&apos;re a prospective client or have questions about
                our services, reaching out is simple and quick. We&apos;re ready
                to assist you to ensuring a seamless and personalized experience
                as you take the next step in transforming your vacation rental
                business.
              </p>
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.iconTextContainer}
              >
                <div className={styles.itextLeft}>
                  <Phone width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>623-623-6780</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.iconTextContainer}
              >
                <div className={styles.itextLeft}>
                  <Email width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>chris1@chrisware.agency</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.iconTextContainer}
              >
                <div className={styles.itextLeft}>
                  <Insta width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>@chrisware_agency</p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className={styles.right}>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.imgContainer}
            >
              <Image src={Img1} alt='img' fill className={styles.img} />
            </motion.div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default ContactInfo;
