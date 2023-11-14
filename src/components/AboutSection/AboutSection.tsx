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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                itaque corporis ullam accusantium voluptatum tempora commodi
                doloribus aut, dolorum maiores repellendus iusto nobis placeat.
                Dignissimos laborum atque fugiat soluta vel.
              </p>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Insta width={25} height={25} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aliquam voluptas! Dignissimos harum expedita a pariatur eum labore eaque odio est placeat error, nam eveniet, quas, ab quam atque quis.
                  </p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Insta width={25} height={25} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis deserunt sed magni libero reiciendis beatae ipsam iste assumenda corrupti eius impedit nam voluptatum quo perspiciatis enim, a, nihil cumque ut!
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
