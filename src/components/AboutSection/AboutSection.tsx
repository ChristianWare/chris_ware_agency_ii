import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./AboutSection.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";
import Insta from "../../../public/icons/instagram.svg";
import Button from "../Button/Button";

const AboutSection = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              <span className={styles.highlight}>Who</span> are we?
            </h2>
            <div className={styles.right}>
              <p className={styles.copy}>
                At Nier Transportation, we&#39;re more than a car service;
                we&#39;re your trusted partner in high end transportation. With
                a passion for providing the best car service in the Phoenix
                Metro area, we&#39;ve been serving the Arizona community for 25
                years. Our mission is clear: to provide an unparalleled, high
                end, late model car service near you while ensuring your
                comfort, safety, and peace of mind.
              </p>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Insta width={25} height={25} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                    Our experienced and courteous drivers are the epitome of
                    professionalism, providing you with a seamless journey from
                    start to finish.
                  </p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Insta width={25} height={25} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                    Whether you require airport transfers, city tours, or
                    executive transportation, we have tailored services to suit
                    every need.
                  </p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Insta width={25} height={25} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                    Our fleet of meticulously maintained black cars exudes class
                    and style, ensuring that you arrive at your destination not
                    just comfortably, but with an air of distinction.
                  </p>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button href='/about' text='More about us' btnType='primary' />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='img' fill className={styles.img} />
            </div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default AboutSection;
