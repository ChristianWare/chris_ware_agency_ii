"use client";

import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./AboutSection.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img4.png";
import Check from "../../../public/icons/check.svg";
import Button from "../Button/Button";
import Label from "../Label/Label";
import { fadeIn } from "../../../animation/variants";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <Label text='About Us' />
              <h2 className={styles.heading}>Who Are We?</h2>
              <div className={styles.right}>
                <p className={styles.copy}>
                  The Chris Ware Agency revolutionizes vacation rental property
                  management with personalized, direct booking websites designed
                  to enhance the overall rental experience. Our expertise in the
                  vacation rental industry ensures tailored solutions to
                  maximize your property&#39;s potential. By choosing us, you
                  gain a direct connection with guests, fostering trust and
                  boosting bookings, unlocking the full potential of your
                  vacation rental business.
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
                  <Button
                    href='/about'
                    text='More about us'
                    btnType='tertiary'
                  />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <motion.div
                variants={fadeIn("left", 0.01)}
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
    </div>
  );
};
export default AboutSection;
