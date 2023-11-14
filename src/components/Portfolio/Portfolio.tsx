import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img2.png";
import Button from "../Button/Button";
import { caseStudies } from "@/lib/data";

const Portfolio = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.top}>
          <SectionHeading
            headingText='Case Studies'
          />
        </div>
        {caseStudies.map((x, index) => (
          <div className={styles.bottom} key={index}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='hello' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.container}>
                <span className={styles.span}>Project {index + 1}</span>
                <h3 className={styles.company}>{x.company}</h3>
                <h4 className={styles.companyDesc}>{x.companyDesc}</h4>
                <p className={styles.projectDetails}>{x.projectDetails}</p>
                <div className={styles.btnContainer}>
                  <Button btnType='primary' href={x.href} text='Live site' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Portfolio;
