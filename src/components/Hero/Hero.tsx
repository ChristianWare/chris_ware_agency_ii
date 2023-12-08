"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "../Layout/LayoutWrapper";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Img from "../../../public/images/img11.png";
import Image from "next/image";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import RotatingText from "../RotatingText/RotatingText";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={Img}
        alt='img'
        fill
        className={styles.img}
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
        priority
      />
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.left}
            >
              <Label text='Chris Ware Agency' color='white' />
              <h1 className={styles.heading}>
                Maximize Revenue with Direct Booking Solutions.
              </h1>
              <h1 className={styles.h2}>humane Bold</h1>
              <h1 className={styles.h3}>humane Medium</h1>
              <h1 className={styles.h4}>humane Light</h1>
              <h1 className={styles.h5}>humane Extra Light</h1>
              <p className={styles.copy}>
                Tired of relying solely on platforms like Airbnb or VRBO? We
                empower property owners to take control of their bookings with a
                custom website to showcase thier unique offerings.
              </p>
              <div className={styles.btnContainer}>
                <Button text='Contact us' href='/contact' btnType='primary' />
              </div>
            </motion.div>
            <div className={styles.right}>
              <RotatingText text='Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency' />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Hero;
