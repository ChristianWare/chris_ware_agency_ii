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
import Img4 from "../../../public/images/img6.png";
import Img5 from "../../../public/images/img5.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <Label text='Chris Ware Agency' />
              <h1 className={styles.heading}>
                We transform your vacation rental dreams into seamless{" "}
                <span className={styles.highlight}>online booking</span>{" "}
                realities.
              </h1>
                {/* Opt for your own direct booking website to take control of your
                vacation rental business, reduce fees, and build a unique brand
                identity, while enjoying better communication with guests. */}
              <p className={styles.copy}>
                Tired of relying solely on platforms like Airbnb or VRBO? We
                empower property owners like you to take control of your
                bookings with a custom website that showcases your unique
                offerings.
              </p>
              <div className={styles.btnContainer}>
                <Button text='Get Consultation' href='/' btnType='primary' />
                <Button text='Details' href='/' btnType='secondary' />
              </div>
              <div className={styles.leftBottom}>
                {/* <div className={styles.lb1}>hello@chrisware.agency</div> */}
                <div className={styles.lb2}>
                  <Instagram width={20} height={20} className={styles.icon} />
                  <LinkedIn width={20} height={20} className={styles.icon} />
                  <Twitter width={20} height={20} className={styles.icon} />
                  <Facebook width={20} height={20} className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <ImageGrid
                src1={Img1}
                src2={Img2}
                src3={Img3}
                src4={Img4}
                src5={Img5}
              />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Hero;
