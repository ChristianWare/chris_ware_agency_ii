"use client";

import { techStack } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./TechStack.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const TechStack = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Our Ecosystem</h2>
            <p className={styles.copy}>
              We do not use old, slow and outdated tech to build our website,
              such as Wordpress or Godaddy. We build every website with pure
              HTML, CSS and Javascript code. Here is a list of technologies that
              we use to build your personalized direct booking website for your
              vacation rental homes:
            </p>
          </div>
          <div className={styles.bottom}>
            {techStack.map((x, index) => (
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={index}
                className={styles.box}
              >
                <Image
                  src={x.icon}
                  alt='tech icon'
                  width={40}
                  height={40}
                  className={styles.icon}
                />
                <h3 className={styles.name}>{x.name}</h3>
              </motion.div>
            ))}
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default TechStack;
