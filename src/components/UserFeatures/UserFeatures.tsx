"use client";

import Image from "next/image";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./UserFeatures.module.css";
import { guestData } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const UserFeatures = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <h2 className={styles.heading}>Guest Access Includes:</h2>
          <div className={styles.mapBox}>
            {guestData.map((x, index) => (
              <div key={index} className={styles.cardContainer}>
                <motion.div
                  variants={fadeIn("up", 0.02)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className={styles.card}
                >
                  <div className={styles.left}>
                    <div className={styles.logoImageContainer}>
                      <Image
                        src={x.icon}
                        alt='logo'
                        width={50}
                        height={50}
                        className={styles.logo}
                      />
                    </div>
                    <h3 className={styles.category}>{x.category}</h3>
                    {x.tasks.map((y, i) => (
                      <p key={i} className={styles.task}>
                        {y.task}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default UserFeatures;
