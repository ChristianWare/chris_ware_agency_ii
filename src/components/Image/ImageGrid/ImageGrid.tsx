import styles from "./ImageGrid.module.css";
import Image from "next/image";
import { ImageGridProps } from "@/lib/interface";
import { FC } from "react";

const ImageGrid: FC<ImageGridProps> = ({ src1, src2, src3, src4, src5 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div className={styles.imgBox400}>
            <Image
              src={src1}
              alt='image'
              quality={100}
              priority={true}
              className={styles.img400}
            />
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.imgContainer}>
            <div className={styles.imgBox100}>
              <Image
                src={src4}
                alt='image'
                quality={100}
                priority={true}
                className={styles.img100}
              />
            </div>
          </div>
          <div className={styles.imgBox200}>
            <Image
              src={src2}
              alt='image'
              quality={100}
              priority={true}
              className={styles.img200}
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.imgBox100}>
          <Image
            src={src5}
            alt='image'
            quality={100}
            priority={true}
            className={styles.img100}
          />
        </div>
        <div className={styles.imgBox275}>
          <Image
            src={src3}
            alt='image'
            quality={100}
            priority={true}
            className={styles.img275}
          />
        </div>
      </div>
    </div>
  );
};
export default ImageGrid;
