import { preHero } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./PreHero.module.css";
import Image from "next/image";

const PreHero = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.layoutWrapper}>
        <div className={styles.contentPadding}>
          <div className={styles.content}>
            {preHero.map((x, index) => (
              <div key={index} className={styles.container}>
                <div className={styles.iconContainer}>
                  <Image
                    src={x.icon}
                    alt='icon'
                    width={40}
                    height={40}
                    className={styles.icon}
                  />
                </div>
                <h2 className={styles.feature}>{x.feature}</h2>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreHero;
