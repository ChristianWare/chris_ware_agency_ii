import { FC } from "react";
import styles from "./SectionHeading.module.css";

interface Props {
  headingText: string;
  copyText: string;
}

const SectionHeading: FC<Props> = ({ headingText, copyText }) => {
  return (
    <div className={styles.top}>
      <h2 className={styles.heading}>{headingText}</h2>
      <p className={styles.copy}>{copyText}</p>
    </div>
  );
};
export default SectionHeading;
