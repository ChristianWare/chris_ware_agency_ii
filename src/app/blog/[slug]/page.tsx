import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./SlugPage.module.css";
import SlugImage from "@/components/SlugImage/SlugImage";
import SlugHeading from "@/components/SlugHeading/SlugHeading";
import SlugConclusion from "@/components/SlugConclusion/SlugConclusion";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import ContentPadding from "@/components/Layout/ContentPadding/ContentPadding";
import Link from "next/link";
import { BlogData } from "@/lib/interface";
import BlogPreview from "@/components/BlogPreview/BlogPreview";
import FinalCta from "@/components/FinalCta/FinalCta";
import PageIntro from "@/components/PageIntro/PageIntro";
import Img1 from '../../../../public/images/img6.png'

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => {
    slug: filename.replace(".mdx", "");
  });

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

const blogsDirectory = path.join(process.cwd(), "blogs");
const files = fs.readdirSync(blogsDirectory);

const blogs = files.map((filename: any) => {
  const fileContent = fs.readFileSync(
    path.join(blogsDirectory, filename),
    "utf-8"
  );

  const { data: frontMatter } = matter(fileContent);

  // Define the properties within the `meta` object
  const meta = {
    category: frontMatter.category,
    thumbnaillUrl: frontMatter.thumbnaillUrl,
    date: frontMatter.date,
    readingTime: frontMatter.readingTime,
    title: frontMatter.title,
    description: frontMatter.description,
  };

  return {
    meta,
    slug: filename.replace(".mdx", ""),
  };
});

const components = { SlugImage, SlugHeading, SlugConclusion };

export default function Page({ params }: any) {
  const props = getPost(params);

  return (
    <main>
      <PageIntro
        labelText={props.frontMatter.date}
        heading={props.frontMatter.title}
        copy={props.frontMatter.description}
        src={props.frontMatter.thumbnaillUrl}
      />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.tocContainer}>
                <span className={styles.tocHeadingTitle}>In This Article</span>
                {props.frontMatter.toc.map((x: any, index: number) => (
                  <div key={index}>
                    <p className={styles.heading}>{x.heading}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.mdxContent}>
              <MDXRemote source={props.content} components={components} />
            </div>
            
          </div>
          <h2 className={styles.relatedArticlesHeading}>Relted Articles</h2>
          <div className={styles.relatedArticles}>
            {blogs.slice(0, 3).map((x: BlogData, index: number) => (
              <BlogPreview key={index} mapData={x} />
            ))}
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <FinalCta />
    </main>
  );
}
