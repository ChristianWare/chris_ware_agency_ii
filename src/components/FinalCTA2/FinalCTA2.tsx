"use client";

import Image from "next/image";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import Img from "../../../public/images/img10.png";
import styles from "./FinalCTA2.module.css";
import Button from "../Button/Button";
import RotatingText from "../RotatingText/RotatingText";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import Label from "../Label/Label";

const FinalCTA2 = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.container}>
          <div className={styles.imgOverlay}></div>
          <Image
            src={Img}
            alt='img'
            fill
            className={styles.img}
            sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
          />
          <div className={styles.content}>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.left}
            >
              <Label text='Chris Ware Agency' color='white' />
              <h2 className={styles.heading}>
                We are your direct booking experts.
              </h2>
              <p className={styles.copy}>
                Our custom direct booking websites empower property owners,
                providing control, flexibility, and increased revenue compared
                to traditional platforms like Airbnb. Elevate your rental
                business, stand out from the crowd, and maximize your profits
                with our tailored solutions.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text='480-623-6780'
                  href='tel:+4806236780'
                  btnType='primary'
                />
              </div>
            </motion.div>
            <div className={styles.right}>
              <RotatingText text='Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency' />
            </div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default FinalCTA2;
