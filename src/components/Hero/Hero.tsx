import styles from "./Hero.module.css";
import LayoutWrapper from "../Layout/LayoutWrapper";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import Button from "../Button/Button";
import Instagram from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Twitter from "../../../public/icons/twitter.svg";
import Facebook from "../../../public/icons/facebook.svg";
import ImageGrid from "../Image/ImageGrid/ImageGrid";
import Label from "../Label/Label";
import Img1 from "../../../public/images/img1.png";
import Img2 from "../../../public/images/img2.png";
import Img3 from "../../../public/images/img3.png";
import Img from "../../../public/images/img6.png";
import Img5 from "../../../public/images/img5.png";
import Image from "next/image";
import Nav from "../Nav/Nav";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={Img}
        alt='img'
        fill
        className={styles.img}
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
        priority
      />
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <Label text='Chris Ware Agency' color='white' />
              <h1 className={styles.heading}>
                Maximize revenue with direct booking solutions
              </h1>
              <p className={styles.copy}>
                Tired of relying solely on platforms like Airbnb or VRBO? We
                empower property owners like you to take control of your
                bookings with a custom website that showcases your unique
                offerings.
              </p>
              <div className={styles.btnContainer}>
                <Button text='Get Consultation' href='/' btnType='primary' />
                {/* <Button text='Details' href='/' btnType='secondary' /> */}
              </div>
            </div>
            <div className={styles.right}></div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Hero;
