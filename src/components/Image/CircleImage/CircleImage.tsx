import Image from 'next/image';
import styles from './CircleImage.module.css'
import Img1 from "../../../../public/images/img2.png";

const CircleImage = () => {
  return (
    <div className={styles.b2}>
      <div className={styles.imgContainer}>
        <Image
          src={Img1}
          alt='image'
          fill
          objectFit='cover'
          className={styles.img}
        />
      </div>
    </div>
  );
}
export default CircleImage