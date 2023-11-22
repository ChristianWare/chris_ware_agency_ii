"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { useState } from "react";
import { footer } from "@/lib/data";

const Footer = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <footer className={styles.container}>
          <div className={styles.content}>
              <div className={styles.right}>
                <div className={styles.middleDesktop}>
                  {footer.map((f, index) => (
                    <div key={index} className={styles.headingContainer}>
                      <p className={styles.heading}>{f.heading}</p>
                    </div>
                  ))}
                </div>
              </div>
            <div className={styles.bottomDesktop}>
              <div className={styles.bottomLeft}>
                <p className={styles.copy}>
                  &copy; 2023 Chris Ware Agency - All Rights Reserved
                </p>
              </div>
            </div>
          </div>
    </footer>
  );
};
export default Footer;
