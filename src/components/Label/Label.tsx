import { FC } from "react";
import styles from "./Label.module.css";

interface Props {
  text: string;
}

const Label: FC<Props> = ({ text }) => {
  return (
    <div>
      <span className={styles.span}>{text}</span>
    </div>
  );
};
export default Label;
