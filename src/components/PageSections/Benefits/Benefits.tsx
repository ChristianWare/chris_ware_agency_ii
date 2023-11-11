import Image from "next/image";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import styles from "./Benefits.module.css";
import ContentPadding from "@/components/Layout/ContentPadding/ContentPadding";
import { benefits } from "@/lib/data";
import Check from "../../../../public/icons/check.svg";
import Img1 from "../../../../public/images/img2.png";

const Benefits = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.b2}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img1}
                  alt='image'
                  fill
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
            <h2 className={styles.heading}>
              Benefits of a direct booking website
            </h2>

            <p className={styles.headingCopy}>
              Having a direct booking website for your vacation rental property
              instead of relying solely on Airbnb and VRBO can offer several
              benefits. Here are some of the advantages of having your own
              booking website:
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.b1}>
              {benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className={styles.benefitContainer}>
                  <span className={styles.span}>
                    <Check width={20} height={20} className={styles.icon} />
                    <h3 className={styles.benefitHeading}>{benefit.heading}</h3>
                  </span>
                  <p className={styles.benefitDesc}>{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.b3}>
              {benefits.slice(2, 4).map((benefit, index) => (
                <div key={index} className={styles.benefitContainer}>
                  <span className={styles.span}>
                    <Check width={20} height={20} className={styles.icon} />
                    <h3 className={styles.benefitHeading}>{benefit.heading}</h3>
                  </span>
                  <p className={styles.benefitDesc}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};

export default Benefits;
