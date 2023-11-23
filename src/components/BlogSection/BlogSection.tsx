"use client";

import Image from "next/image";
import BlogPreview from "../BlogPreview/BlogPreview";
import { BlogSectionProps, BlogData } from "@/lib/interface";
import Button from "../Button/Button";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./BlogSection.module.css";
import Megaphone from "../../../public/icons/megaphone.png";
import { usePathname } from "next/navigation";
import { FC } from "react";

const BlogSection: FC<BlogSectionProps> = ({ blogData }) => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.mainContent}>
            <div className={styles.top}>
              <div className={styles.logoImageContainer}>
                <Image
                  src={Megaphone}
                  alt='logo'
                  fill
                  className={styles.logo}
                />
              </div>
              <h2 className={styles.heading}>Our insights</h2>
              <p className={styles.copy}>
                Explore our blog for the latest updates, travel tips, and
                industry insights to enhance your vacation rental hosting
                experience.
              </p>
            </div>
            <div className={styles.content}>
              {blogData.map((x: BlogData, index: number) => (
                <BlogPreview key={index} mapData={x} />
              ))}
            </div>
            <div className={styles.btnContainer}>
              {pathname !== "/blog" && (
                <Button href='/about' text='All blogs' btnType='secondary' />
              )}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default BlogSection;
