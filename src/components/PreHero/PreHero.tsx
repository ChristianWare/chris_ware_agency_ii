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
              While common listing platforms like Airbnb and VRBO can give your
              property visibility, dedicated rental property managers must
              establish websites to attract more direct bookings. Here&#39;s
              why...
            </h2>
          </div>
        </div>
        <div className={styles.contentBottom}>
          {preHero.map((x, index) => (
            <div key={index} className={styles.box}>
              <Image
                src={x.icon}
                alt='icon'
                width={30}
                height={30}
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
