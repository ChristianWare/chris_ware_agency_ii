import styles from "./ImageGrid.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/img1.png";
import Img2 from "../../../../public/images/img2.png";

const ImageGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <Image
            src={Img1}
            alt='image'
            quality={100}
            priority={true}
            className={styles.img400}
          />
        </div>
        <div className={styles.topRight}>
          <div className={styles.imgContainer}>
            <Image
              src={Img1}
              alt='image'
              quality={100}
              priority={true}
              className={styles.img100}
            />
          <div className={styles.square1}></div>
          </div>
          <Image
            src={Img1}
            alt='image'
            quality={100}
            priority={true}
            className={styles.img200}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.square2}></div>
        <Image
          src={Img1}
          alt='image'
          quality={100}
          priority={true}
          className={styles.img100}
        />
        <Image
          src={Img2}
          alt='image'
          quality={100}
          priority={true}
          className={styles.img275}
        />
      </div>
    </div>
  );
};
export default ImageGrid;
