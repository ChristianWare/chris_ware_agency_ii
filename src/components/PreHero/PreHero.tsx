import { preHero } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./PreHero.module.css";
import Image from "next/image";

const PreHero = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.contentTop}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h2 className={styles.topCopy}>
              While common listing platforms like as Airbnb and VRBO can yield
              substantial visibility and reservations, it is crucial for
              dedicated rental property managers to establish their own website
              in order to attract more direct bookings.
            </h2>
          </div>
        </div>
        <div className={styles.contentBottom}>
          {preHero.map((x, index) => (
            <div key={index} className={styles.box}>
              <Image
                src={x.icon}
                alt='icon'
                width={40}
                height={40}
                className={styles.icon}
              />
              <h3 className={styles.value}>{x.feature}</h3>
              <p className={styles.description}>{x.desc}</p>
            </div>
          ))}
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default PreHero;
