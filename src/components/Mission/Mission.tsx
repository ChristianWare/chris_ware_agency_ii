"use client";

import { mission } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Mission.module.css";
import Label from "../Label/Label";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Mission = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <Label text='purpose' />
            <h2 className={styles.topHeading}>Our Mission</h2>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.top}
            >
              <div className={styles.topLeft}>
                <h3 className={styles.heading}>
                  Empowering vacation rental owners with personalized and
                  user-friendly direct booking websites, our mission is to
                  liberate hosts from intermediary platforms, fostering
                  independence, trust, and growth in their businesses, as we
                  redefine the vacation rental experience away from Airbnb. Here
                  are the four ways we plan on accomplishing that goal:
                </h3>
              </div>
              <div className={styles.topRight}></div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.bottom}
            >
              {mission.map((x, index) => (
                <div key={index} className={styles.box}>
                  <span className={styles.index}>Step {index + 1}</span>
                  <h4 className={styles.feature}>{x.feature}</h4>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Mission;
