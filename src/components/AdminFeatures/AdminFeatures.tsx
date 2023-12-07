"use client";

import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./AdminFeatures.module.css";
import { adminData } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const AdminFeatures = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Admin Access</h2>
              <p className={styles.topText}>
                Our process is structured so that you get the most added value
                for the least amount of time.
              </p>
            </div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.right}
            >
              {adminData.map((x, index) => (
                <div key={index} className={styles.box}>
                  <div className={styles.boxLeft}>
                    <div className={styles.number}>
                      <span className={styles.number}>{`${index + 1}`}</span>
                    </div>
                  </div>
                  <div className={styles.boxRight}>
                    <h3 className={styles.processName}>{x.category}</h3>
                    {x.tasks.map((y, i) => (
                      <p key={i} className={styles.task}>
                        {y.task}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default AdminFeatures;
