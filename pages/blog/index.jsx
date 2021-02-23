import fs from "fs";
import path from "path";
import matter, { read } from "gray-matter";
import readingTime from "reading-time";
import Head from "next/head";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BlogCard from "components/BlogCard";

const Blog = ({ getAllBlogs }) => {
  getAllBlogs.sort((a, b) => Number(new Date(b.frontmatter.date)) - Number(new Date(a.frontmatter.date)));
  return (
    <>
      <Head>
        <title>Blog | Redha Azmei</title>
      </Head>
      <Box mb="16">
        <Heading as="h1" fontSize={["2xl", "5xl"]} mb="2">
          Blog
        </Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto accusamus, dolore porro non, mollitia nemo delectus corporis, sapiente maxime vero possimus necessitatibus veritatis ipsum impedit maiores voluptas hic nihil.</Text>
      </Box>
      <SimpleGrid columns={[1, 2, 2, 3]} spacing="8" mb="6">
        {getAllBlogs.map(({ frontmatter }) => {
          return <BlogCard title={frontmatter.title} date={frontmatter.date} description={frontmatter.description} category={frontmatter.category} image={frontmatter.image} slug={frontmatter.slug} readtime={frontmatter.readtime} />;
        })}
      </SimpleGrid>
    </>
  );
};

export const getStaticProps = async () => {
  const filenames = fs.readdirSync("blogposts");
  const getAllBlogs = filenames.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const blog = fs.readFileSync(path.join("blogposts", slug + ".mdx"), "utf8");
    const { content, data } = matter(blog);
    const stats = readingTime(content);
    const readtime = stats.text;
    const frontmatter = { ...data, slug: slug, readtime: readtime };
    return { frontmatter };
  });
  return {
    props: { getAllBlogs },
  };
};

export default Blog;
