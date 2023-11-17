import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./CompHist.module.css";
import Image from "next/image";
import ImageGrid from "../Image/ImageGrid/ImageGrid";
import Img1 from "../../../public/images/img1.png";
import Img2 from "../../../public/images/img2.png";
import Img3 from "../../../public/images/img3.png";
import Img4 from "../../../public/images/img6.png";
import Img5 from "../../../public/images/img5.png";

const CompHist = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              The birth of an{" "}
              <span className={styles.highlight}>unparalleled</span> web
              development service
            </h2>
            <br />
            <p className={styles.copy}>
              Our journey began with a simple mission - to make document
              legalization accessibl e and effortless for all. A group of legal
              enthusiasts saw the difficulties people faced with the notary
              process and decided to do something about it. They envisioned a
              service that would bring the notary to the client, irrespective of
              location, ensuring comfort and convenience.
            </p>
            <br />
            <p className={styles.copy}>
              The concept turned into reality and thus, our notary service was
              born. Initially, we focused on mobile notary services, going from
              door-to-door, building trust with each document signed. As the
              digital revolution unfolded, we introduced remote notarization,
              revolutionizing the way people viewed the notarization process.
            </p>
            <br />
            <p className={styles.copy}>
              Today, we&#39;re proud to be the trusted choice for countless
              clients, eliminating the hurdles of traditional notary services
              with our innovative solutions.
            </p>
          </div>
          <div className={styles.right}>
            <ImageGrid
              src1={Img2}
              src2={Img1}
              src3={Img5}
              src4={Img4}
              src5={Img3}
            />
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default CompHist;
