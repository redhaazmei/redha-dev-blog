import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const getposts = () => {
  const filenames = fs.readdirSync("blogposts");
  const getAllBlogs = filenames.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const blog = fs.readFileSync(path.join("blogposts", slug + ".mdx"), "utf8");
    const { content, data } = matter(blog);
    const stats = readingTime(content);
    const readtime = stats.text;
    const frontmatter = { ...data, slug: slug, readtime: readtime };
    return frontmatter;
  });

  return getAllBlogs;
};

export { getposts };
