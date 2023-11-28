"use client";

import Image from "next/image";
import BlogPreview from "../BlogPreview/BlogPreview";
import { BlogSectionProps, BlogData } from "@/lib/interface";
import Button from "../Button/Button";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./BlogSection.module.css";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { fadeIn } from "../../../animation/variants";
import { motion } from "framer-motion";

const BlogSection: FC<BlogSectionProps> = ({ blogData }) => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.mainContent}>
            <div className={styles.top}>
              {pathname !== "/blog" && (
                <>
                  <h2 className={styles.heading}>Blog</h2>
                  <p className={styles.copy}>
                    Explore our blog for the latest updates, travel tips, and
                    industry insights to enhance your vacation rental hosting
                    experience.
                  </p>
                </>
              )}
              {pathname === "/blog" && (
                <>
                  <h2 className={styles.heading}>Latest Articles</h2>
                </>
              )}
            </div>
            <div className={styles.border}>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.content}
              >
                {blogData.map((x: BlogData, index: number) => (
                  <BlogPreview key={index} mapData={x} />
                ))}
              </motion.div>
            </div>
            <div className={styles.btnContainer}>
              {pathname !== "/blog" && (
                <Button href='/about' text='All blogs' btnType='tertiary' />
              )}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default BlogSection;
