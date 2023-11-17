"use client";

import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Services.module.css";
import Image from "next/image";
import { features } from "@/lib/data";
import CircleImage from "../Image/CircleImage/CircleImage";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import Img from "../../../public/images/img3.png";

const Services = () => {
  const pathname = usePathname();
  return (
    <div className={styles.content}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.contentBox}>
            {pathname === "/" && (
              <div className={styles.top}>
                <CircleImage src={Img} />
              </div>
            )}
            <div className={styles.bottom}>
              <h2 className={styles.heading}>
                We build direct booking sites that include the following
                fetures:
              </h2>
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
              {pathname === "/" && (
                <div className={styles.btnContainer}>
                  <Button
                    href='/features'
                    text='See all features'
                    btnType='primary'
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
