import Image from "next/image";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Pricing.module.css";
import { pricing } from "@/lib/data";
import Check from "../../../public/icons/check.svg";
import Button from "../Button/Button";

const Pricing = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Practible Pricing with Monthly{" "}
            <span className={styles.highlight}>Subscriptions</span>
          </h2>
          <p className={styles.copy}>
            These are the prices we charge on a monthly basis. We understand
            that websites can be expensive. So we only charge a small fee. Canel
            anytime, no questions asked. See details below:
          </p>
        </div>
        <div className={styles.bottom}>
          {pricing.map((x) => (
            <div key={x.id} className={styles.card}>
              <div className={styles.box}>
                <h3 className={styles.planName}>{x.plan}</h3>
                <p className={styles.description}>{x.description}</p>
                <hr className={styles.hr} />
                <strong className={styles.price}>
                  $ {x.price} <span className={styles.span}>/ mo</span>
                </strong>
                <p className={styles.includes}>Includes:</p>
                <div className={styles.checkFeatureContainer}>
                  {x.includes.map((y, index) => (
                    <ul key={index} className={styles.featuresList}>
                      <li>
                        <Check width={30} height={30} className={styles.icon} />{" "}
                        {y.feature}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button href='/services' text='More details' btnType='primary' />
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Pricing;
