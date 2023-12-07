"use client";

import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img2.png";
import Button from "../Button/Button";
import { caseStudies } from "@/lib/data";
import Label from "../Label/Label";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Portfolio = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.top}>
          <SectionHeading headingText='Projects' />
        </div>
        {caseStudies.map((x, index) => (
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.bottom}
            key={index}
          >
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={x.src} alt='hello' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.container}>
                <div className={styles.c1}>
                  <Label text={`Project ${index + 1}`} />
                  <h3 className={styles.company}>{x.company}</h3>
                  <p className={styles.projectDetails}>{x.projectDetails}</p>
                </div>
                <div className={styles.c2}>
                  <div className={styles.btnContainer}>
                    <Button btnType='tertiary' href={x.href} text='Live site' />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Portfolio;
