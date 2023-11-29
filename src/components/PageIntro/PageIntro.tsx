"use client";

import Image from "next/image";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./PageIntro.module.css";
import { PageIntroProps } from "@/lib/interface";
import { FC } from "react";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import Label from "../Label/Label";

const PageIntro: FC<PageIntroProps> = ({ heading, copy, src, labelCopy }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={src}
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
            <div className={styles.left}></div>
            <motion.div
              variants={fadeIn("up", 0.03)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.right}
            >
              <Label text={labelCopy as string} color='green' />
              <h1 className={styles.heading}>{heading}</h1>
              <p className={styles.copy}>{copy}</p>
            </motion.div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default PageIntro;
