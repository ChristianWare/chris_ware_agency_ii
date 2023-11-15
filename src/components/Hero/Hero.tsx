import styles from "./Hero.module.css";
import LayoutWrapper from "../Layout/LayoutWrapper";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import Button from "../Button/Button";
import Instagram from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Twitter from "../../../public/icons/twitter.svg";
import Facebook from "../../../public/icons/facebook.svg";
import ImageGrid from "../Image/ImageGrid/ImageGrid";

const Hero = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.heading}>
                We transform your vacation rental dreams into seamless{" "}
                <span className={styles.highlight}>online booking</span>{" "}
                realities.
              </h1>
              <p className={styles.copy}>
                Opt for your own direct booking website to take control of your
                vacation rental business, reduce fees, and build a unique brand
                identity, while enjoying better communication with guests.
              </p>
              <div className={styles.btnContainer}>
                <Button text='Get Consultation' href='/' btnType='primary' />
                <Button text='Details' href='/' btnType='secondary' />
              </div>
              <div className={styles.leftBottom}>
                <div className={styles.lb1}>hello@chrisware.agency</div>
                <div className={styles.lb2}>
                  <Instagram width={20} height={20} className={styles.icon} />
                  <LinkedIn width={20} height={20} className={styles.icon} />
                  <Twitter width={20} height={20} className={styles.icon} />
                  <Facebook width={20} height={20} className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <ImageGrid />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Hero;
