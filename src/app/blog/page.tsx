import { BlogSectionProps, BlogData } from "@/lib/interface";
import { FC } from "react";
import { usePathname } from "next/navigation";
import PageIntro from "@/components/PageIntro/PageIntro";
import BlogSection from "@/components/BlogSection/BlogSection";

const BlogPage: FC<BlogSectionProps> = ({ blogData }) => {
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const blogsDirectory = path.join(process.cwd(), "blogs");
const files = fs.readdirSync(blogsDirectory);
const blogs = files.map((filename: any) => {
  const fileContent = fs.readFileSync(
    path.join(blogsDirectory, filename),
    "utf-8"
  );
  const { data: frontMatter } = matter(fileContent);
  return {
    meta: frontMatter,
    slug: filename.replace(".mdx", ""),
  };
});

  return (
    <>
      <PageIntro
        labelText='Blog'
        heading='our'
        highlight='Insights'
        copy="We're on a mission to redefine the vacation rental experience by empowering property owners to seize control of their bookings. Discover the narrative behind our commitment to personalized, direct booking websites and join us in transforming the way you connect with your guests."
      />
      <BlogSection blogData={blogs} />
    </>
  );
};
export default BlogPage;
