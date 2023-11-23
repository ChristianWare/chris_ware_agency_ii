"use client";

import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Services.module.css";
import Image from "next/image";
import { features } from "@/lib/data";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import Label from "../Label/Label";

const Services = () => {
  const pathname = usePathname();
  return (
    <div className={styles.content}>
      <LayoutWrapper>
        <ContentPadding>
          <Label text='What we do' />
          <h2 className={styles.heading}>We build direct booking websites</h2>
          <p className={styles.topCopy}>We specialize in building direct booking websites that have the following fetures:</p>
          <div className={styles.contentBox}>
            <div className={styles.bottom}>
              {pathname === "/" && (
                <div className={styles.bottomMap}>
                  {features.slice(0, 5).map((x, index) => (
                    <div key={index} className={styles.container}>
                      <div className={styles.box}>
                        <div className={styles.iconContainer}>
                          <Image
                            src={x.icon}
                            alt='icon'
                            width={40}
                            height={40}
                            className={styles.icon}
                          />
                        </div>
                        <h3 className={styles.h3}>{x.service}</h3>
                        <p className={styles.copy}>{x.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {pathname === "/features" && (
                <div className={styles.bottomMap}>
                  {features.map((x, index) => (
                    <div key={index} className={styles.container}>
                      <div className={styles.box}>
                        <div className={styles.iconContainer}>
                          <Image
                            src={x.icon}
                            alt='icon'
                            width={40}
                            height={40}
                            className={styles.icon}
                          />
                        </div>
                        <h3 className={styles.h3}>{x.service}</h3>
                        <p className={styles.copy}>{x.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {pathname === "/" && (
                <div className={styles.btnContainer}>
                  <Button
                    href='/features'
                    text='See all features'
                    btnType='tertiary'
                  />
                </div>
              )}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Services;
