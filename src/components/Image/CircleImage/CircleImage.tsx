"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./CircleImage.module.css";
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../animation/variants";

interface Props {
  src: StaticImageData;
}

const CircleImage: FC<Props> = ({ src }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className={styles.b2}
    >
      <div className={styles.imgContainer}>
        <Image src={src} alt='image' fill className={styles.img} />
      </div>
    </motion.div>
  );
};
export default CircleImage;
