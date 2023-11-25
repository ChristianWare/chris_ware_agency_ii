import CircleImage from "../Image/CircleImage/CircleImage";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./Owner.module.css";
import Chris from "../../../public/images/chris.jpeg";
import Label from "../Label/Label";
import Image from "next/image";

const Owner = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <CircleImage src={Chris} />
          </div>
          <div className={styles.right}>
            <Label text='Chris Ware' />
            <h2 className={styles.heading}>Our Founder</h2>
            <div className={styles.container}>
              <p className={styles.copy}>
                Our journey began with a simple mission - to make document
                legalization accessibl e and effortless for all. A group of
                legal enthusiasts saw the difficulties people faced with the
                notary process and decided to do something about it. They
                envisioned a service that would bring the notary to the client,
                irrespective of location, ensuring comfort and convenience.
              </p>
              <br />
              <p className={styles.copy}>
                Our journey began with a simple mission - to make document
                legalization accessibl e and effortless for all. A group of
                legal enthusiasts saw the difficulties people faced with the
                notary process and decided to do something about it.
              </p>
            </div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Owner;
