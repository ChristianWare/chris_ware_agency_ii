import { values } from "@/lib/data";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Values.module.css";
import Label from "../Label/Label";
import Image from "next/image";

const Values = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.contentTop}>
            <div className={styles.left}>
              <Label text='core principles and beliefs' />
              <h2 className={styles.heading}>Our Values</h2>
            </div>
            <div className={styles.right}>
              <p className={styles.topCopy}>
                Our values act as a set of guiding principles and fundamental
                beliefs that influence the behaviors we demonstrate, which shape
                the decisions we collectively make as a team.
              </p>
            </div>
          </div>
          <div className={styles.contentBottom}>
            {values.map((x, index) => (
              <div key={index} className={styles.box}>
                <Image
                  src={x.icon}
                  alt='icon'
                  width={30}
                  height={30}
                  className={styles.icon}
                />
                <h3 className={styles.value}>{x.value}</h3>
                <p className={styles.description}>{x.desc}</p>
              </div>
            ))}
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Values;
