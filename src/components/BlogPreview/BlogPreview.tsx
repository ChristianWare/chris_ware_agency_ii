import Link from "next/link";
import styles from "./BlogPreview.module.css";
import Image from "next/image";
import { FC } from "react";
import { BlogPreviewProps } from "@/lib/interface";

const BlogPreview: FC<BlogPreviewProps> = ({ mapData, key }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Link href={`/blog/${mapData.slug}`}>
            <Image
              alt='image'
              src={mapData.meta.thumbnaillUrl}
              fill
              className={styles.img}
            />
          </Link>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.dateTimeContainer}>
            <time dateTime='2023-02-02'>{mapData.meta.date}</time>
          </div>
          <Link href={`/blog/${mapData.slug}`} passHref>
            <h2 className={styles.title}>{mapData.meta.title}</h2>
          </Link>
          <p className={styles.copy}>{mapData.meta.description}</p>
        </div>
      </div>
    </div>
  );
};
export default BlogPreview;
