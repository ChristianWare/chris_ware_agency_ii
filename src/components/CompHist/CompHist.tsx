import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./CompHist.module.css";
import ImageGrid from "../Image/ImageGrid/ImageGrid";
import Img1 from "../../../public/images/img1.png";
import Img2 from "../../../public/images/img2.png";
import Img3 from "../../../public/images/img3.png";
import Img4 from "../../../public/images/img6.png";
import Img5 from "../../../public/images/img5.png";
import Label from "../Label/Label";

const CompHist = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <Label text='About Us' />
            <h2 className={styles.heading}>
              About the CWA
            </h2>
            <br />
            <p className={styles.copy}>
              Our journey began with the realization that personalized, direct
              booking websites can elevate the vacation rental experience,
              offering a unique connection between owners and guests. Chris Ware
              brings a wealth of expertise to the helm, ensuring that each
              website is not just a platform, but a personalized reflection of
              the property&#39;s charm.
            </p>
            <br />
            <p className={styles.copy}>
              Our values are rooted in transparency, innovation, and a
              commitment to helping property owners take control of their
              bookings. We employ cutting-edge technologies in every website we
              build, ensuring seamless functionality, eye-catching designs, and
              user-friendly experiences. We don&#39;t just create
              websites; we craft digital experiences that transform the way you
              engage with your guests and shape the future of your vacation
              rental business.
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
