import Link from "next/link";
import styles from "./BlogPreview.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/img1.png";

const BlogPreview = () => {
  return (
    // <div className={styles.container} key={key}>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          {/* <Link href={`/blog/${mapData.slug}`}> */}
          <Link href='/'>
            <Image
              alt='image'
              //   src={mapData.meta.thumbnaillUrl}
              src={Img1}
              fill
              className={styles.img}
            />
          </Link>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.dateTimeContainer}>
            {/* <time dateTime='2023-02-02'>{mapData.meta.date}</time> */}
            <time dateTime='2023-02-02'>11-14-2023</time>
          </div>
          <Link href='/' passHref>
            <h2 className={styles.title}>Title Here</h2>
          </Link>
          {/* <Link href={`/blog/${mapData.slug}`} passHref>
            <h2 className={styles.title}>{mapData.meta.title}</h2>
          </Link> */}
          {/* <p className={styles.copy}>{mapData.meta.description}</p> */}
          <p className={styles.copy}>description here</p>
        </div>
      </div>
    </div>
  );
};
export default BlogPreview;
