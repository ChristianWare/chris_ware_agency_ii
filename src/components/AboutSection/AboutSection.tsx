import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./AboutSection.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";
import Check from "../../../public/icons/check.svg";
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                itaque corporis ullam accusantium voluptatum tempora commodi
                doloribus aut, dolorum maiores repellendus iusto nobis placeat.
                Dignissimos laborum atque fugiat soluta vel.
              </p>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Check width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus, aliquam voluptas.
                  </p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Check width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis deserunt sed magni libero.
                  </p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Check width={25} height={25} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Facilis deserunt sed magni libero.
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
