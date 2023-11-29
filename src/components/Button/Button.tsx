import { FC } from "react";
import Link from "next/link";
import { ButtonProps } from "@/lib/interface";

import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({ href = "", text, btnType, target = "" }) => {
  return (
    <button className={styles.container}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        <div className={styles.btnInner}>
          <span className={styles.btnSlide}></span>
          <span className={styles.btnContent}>{text}</span>
        </div>
        {/* {text} */}
      </Link>
    </button>
  );
};
export default Button;
