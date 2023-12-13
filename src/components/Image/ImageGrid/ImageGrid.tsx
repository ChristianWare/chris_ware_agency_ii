'use client'

import styles from "./ImageGrid.module.css";
import Image from "next/image";
import { ImageGridProps } from "@/lib/interface";
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../animation/variants";

const ImageGrid: FC<ImageGridProps> = ({ src1, src2, src3, src4, src5 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.imgBox400}
          >
            <Image
              src={src1}
              alt='image'
              quality={100}
              className={styles.img400}
            />
          </motion.div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.imgContainer}>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.imgBox100}
            >
              <Image
                src={src4}
                alt='image'
                quality={100}
                className={styles.img100}
              />
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.imgBox200}
          >
            <Image
              src={src2}
              alt='image'
              quality={100}
              className={styles.img200}
            />
          </motion.div>
        </div>
      </div>
      <div className={styles.bottom}>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.imgBox100}
        >
          <Image
            src={src5}
            alt='image'
            quality={100}
            className={styles.img100}
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.imgBox275}
        >
          <Image
            src={src3}
            alt='image'
            quality={100}
            className={styles.img275}
          />
        </motion.div>
      </div>
    </div>
  );
};
export default ImageGrid;
