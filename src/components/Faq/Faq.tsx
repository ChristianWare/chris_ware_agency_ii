"use client";

import { useState } from "react";
import styles from "./Faq.module.css";
import LayoutWrapper from "../Layout/LayoutWrapper";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import { faqs } from "@/lib/data";
import Arrow from "../../../public/icons/downArrow.svg";
import Label from "../Label/Label";

const Faq = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <Label text="FAQ's" />
              <h2 className={styles.heading}>Frequently asked questions</h2>
              <p className={styles.topText}>
                Here are some commonly asked questions and their answers below.
                If you don&#39;t see your questions here, call us any time.
              </p>
            </div>
            <div className={styles.bottom}>
              {faqs.slice(0, 5).map((x, i) => (
                <div
                  key={x.id}
                  className={
                    selected === i
                      ? styles.qaContainer + " " + styles.showBorder
                      : styles.qaContainer
                  }
                  onClick={() => toggle(i)}
                >
                  <div className={styles.headingArrowContainer}>
                    <h3 className={styles.question} lang='en'>
                      <span className={styles.index}>0{i + 1} </span>
                      {x.question}
                    </h3>
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
                  <div
                    className={
                      selected === i
                        ? styles.answerContainer + " " + styles.show
                        : styles.answerContainer
                    }
                  >
                    <p className={styles.answer} lang='en'>
                      {x.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.btnContainer}></div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Faq;
