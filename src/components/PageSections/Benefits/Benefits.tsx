"use client";

import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import styles from "./Benefits.module.css";
import ContentPadding from "@/components/Layout/ContentPadding/ContentPadding";
import { benefits } from "@/lib/data";
import CircleImage from "@/components/Image/CircleImage/CircleImage";
import { useState } from "react";
import Arrow from "../../../../public/icons/downArrow.svg";
import ImageGrid from "@/components/Image/ImageGrid/ImageGrid";

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
              {/* <CircleImage /> */}
              <ImageGrid reverse='reverse' />
            </div>
            <div className={styles.right}>
              <h2 className={styles.heading}>
                What are the <span className={styles.highlight}> benefits</span>{" "}
                of a direct booking website?
              </h2>
              <p className={styles.copy}>
                Having a direct booking website for your vacation rental
                property instead of relying solely on Airbnb and VRBO can offer
                several benefits. Here are some of the advantages of having your
                own booking website:
              </p>
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className={
                    selected === i
                      ? styles.benefitContainer + " " + styles.showBorder
                      : styles.benefitContainer
                  }
                  onClick={() => toggle(i)}
                >
                  <div className={styles.bcLeft}>
                    <h3 className={styles.benefitHeading}>
                      <span className={styles.index}>0{i + 1}</span>{" "}
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
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};

export default Benefits;
