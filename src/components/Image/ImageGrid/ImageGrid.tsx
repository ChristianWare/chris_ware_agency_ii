import styles from "./ImageGrid.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/img1.png";

const ImageGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <Image
            src={Img1}
            alt='image'
            // fill
            width={400}
            height={400}
            quality={100}
            priority={true}
            className={styles.img}
          />
        </div>
        <div className={styles.topRight}>
          <div className={styles.imgContainer}>
            <Image
              src={Img1}
              alt='image'
              width={100}
              height={100}
              quality={100}
              priority={true}
              className={styles.img}
            />
          </div>
          <Image
            src={Img1}
            alt='image'
            width={200}
            height={200}
            quality={100}
            priority={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.square}></div>
        <Image
          src={Img1}
          alt='image'
          width={100}
          height={100}
          quality={100}
          priority={true}
          className={styles.img}
        />
        <Image
          src={Img1}
          alt='image'
          // fill
          width={275}
          height={275}
          quality={100}
          priority={true}
          className={styles.img}
        />
      </div>
    </div>
  );
};
export default ImageGrid;
