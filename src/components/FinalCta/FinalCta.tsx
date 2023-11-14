import Button from "../Button/Button";
import CircleImage from "../Image/CircleImage/CircleImage";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./FinalCta.module.css";

const FinalCta = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <CircleImage />
          </div>
          <div className={styles.bottom}>
            <SectionHeading
              headingText='Final CTA Here'
              copyText='Like what you see?  Reach out today to learn how you can get more bookings with your own personalized direct booking website for your vacation rental website.'
            />
            <div className={styles.btnContainer}>
              <Button text='Contact us' btnType='primary' href='/' />
              <Button text='Request demo' btnType='secondary' href='/' />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default FinalCta;
