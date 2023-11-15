"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { useState } from "react";
import ArrowRight from "../../../public/icons/arrowRight.svg";
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
      <div className={styles.layoutWrapper}>
        <div className={styles.contentPadding}>
          <div className={styles.content}>
            <div className={styles.topTop}>
              <div className={styles.leftBorder}>
                <div className={styles.left}>
                  <Link href='/' className={styles.logo}>
                    CWA
                  </Link>
                  <p className={styles.desc}>
                    Opt for your own direct booking website to take control of
                    your vacation rental business, reduce fees, and build a
                    unique brand identity, while enjoying better communication
                    with guests.
                  </p>
                  <p className={styles.desc}>
                    <strong>
                      Phone: <br />
                    </strong>
                    480-300-6003
                    <br />
                    <br />
                    <strong>
                      Email <br />
                    </strong>
                    hello@niertransportation.com
                  </p>
                </div>
              </div>
              <div className={styles.leftBorder2}>
                <div className={styles.right}>
                  <div className={styles.middleDesktop}>
                    {footer.map((f, index) => (
                      <div key={index} className={styles.sectionContainer}>
                        <div className={styles.headingContainer}>
                          <p className={styles.heading}>{f.heading}</p>
                        </div>
                        <div className={styles.footerItemContainer}>
                          {f.section.map((s, index) => (
                            <Link
                              href={s.href}
                              key={index}
                              className={styles.footerItem}
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.bottomDesktop}>
                    <div className={styles.bottomLeft}>
                      <p className={styles.copy}>
                        &copy; 2023 Chris Ware Agency - All Rights Reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.leftBorder3}>
              <div className={styles.middleMobile}>
                {footer.map((f, i) => (
                  <div key={f.id} className={styles.sectionContainer}>
                    <div
                      className={styles.headingContainer}
                      onClick={() => toggle(i)}
                    >
                      <p className={styles.heading}>{f.heading}</p>
                      <span className={styles.arrow}>
                        {selected === i ? (
                          <ArrowRight
                            className={styles.arrowFlip}
                            height={20}
                            width={20}
                          />
                        ) : (
                          <ArrowRight
                            className={styles.arrow}
                            height={20}
                            width={20}
                          />
                        )}
                      </span>
                    </div>
                    <div
                      className={
                        selected === i
                          ? styles.answer + " " + styles.show
                          : styles.answer
                      }
                    >
                      <div className={styles.footerItemContainer}>
                        {f.section.map((s, index) => (
                          <Link
                            href={s.href}
                            key={index}
                            className={styles.footerItem}
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomLeft}>
                <p className={styles.copy}>
                  &copy; 2023 Chris Ware Agency - All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
