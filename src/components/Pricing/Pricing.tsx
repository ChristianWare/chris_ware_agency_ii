"use client";

import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Pricing.module.css";
import { pricing } from "@/lib/data";
import Check from "../../../public/icons/check.svg";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import { fadeIn } from "../../../animation/variants";
import { motion } from "framer-motion";

const Pricing = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Pricing</h2>
            <p className={styles.copy}>
              These are the prices we charge on a monthly basis. We understand
              that websites can be expensive. So we only charge a small fee.
              Canel anytime, no questions asked. See details below:
            </p>
          </div>
          <div className={styles.bottom}>
            {pricing.map((x) => (
              <motion.div
                variants={fadeIn("up", 0.01)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={x.id}
                className={styles.card}
              >
                <div className={styles.box}>
                  <h3 className={styles.planName}>{x.plan}</h3>
                  {typeof x.price === "number" ? (
                    <strong className={styles.price}>$ {x.price}</strong>
                  ) : (
                    <strong className={styles.price}>{x.price}</strong>
                  )}
                  <p className={styles.monthly}>Billed Monthly</p>
                  <p className={styles.description}>{x.description}</p>
                  <hr className={styles.hr} />
                  <p className={styles.includes}>Includes:</p>
                  <div className={styles.checkFeatureContainer}>
                    {x.includes.map((y, index) => (
                      <ul key={index} className={styles.featuresList}>
                        <li>
                          <Check
                            width={20}
                            height={20}
                            className={styles.icon}
                          />{" "}
                          {y.feature}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {pathname === "/" && (
            <div className={styles.btnContainer}>
              <Button href='/features' text='More details' btnType='tertiary' />
            </div>
          )}
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Pricing;
