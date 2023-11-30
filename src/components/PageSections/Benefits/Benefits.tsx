"use client";

import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import styles from "./Benefits.module.css";
import ContentPadding from "@/components/Layout/ContentPadding/ContentPadding";
import { benefits } from "@/lib/data";
import { useState } from "react";
import Arrow from "../../../../public/icons/downArrow.svg";
import ImageGrid from "@/components/Image/ImageGrid/ImageGrid";
import Img1 from "../../../../public/images/img1.png";
import Img2 from "../../../../public/images/img2.png";
import Img3 from "../../../../public/images/img3.png";
import Img4 from "../../../../public/images/img6.png";
import Img5 from "../../../../public/images/img5.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../animation/variants";

const Benefits = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <section className={styles.content}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <ImageGrid
                src1={Img5}
                src2={Img4}
                src3={Img3}
                src4={Img2}
                src5={Img1}
              />
            </div>
            <div className={styles.right}>
              <h2 className={styles.heading}>
                Benefits
              </h2>
              <p className={styles.copy}>
                Having a direct booking website for your vacation rental
                property instead of relying solely on Airbnb and VRBO can offer
                several benefits. Here are some of the advantages of having your
                own booking website:
              </p>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.grid}
              >
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className={
                      selected === i
                        ? styles.benefitContainer +
                          " " +
                          styles.showBorder +
                          " " +
                          styles.selected
                        : styles.benefitContainer
                    }
                    onClick={() => toggle(i)}
                  >
                    <div className={styles.bcLeft}>
                      <h3 className={styles.benefitHeading}>
                        <span className={styles.index}>0{i + 1}.</span>{" "}
                        {benefit.heading}
                      </h3>
                      <div
                        className={
                          selected === i
                            ? styles.answerContainer + " " + styles.show
                            : styles.answerContainer
                        }
                      >
                        <p className={styles.benefitDesc}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                    <div className={styles.bcRight}>
                      {selected === i ? (
                        <Arrow
                          className={styles.iconFlip}
                          width={20}
                          height={20}
                        />
                      ) : (
                        <Arrow className={styles.icon} width={20} height={20} />
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};

export default Benefits;
