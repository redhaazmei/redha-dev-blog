import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { useState } from "react";
import Head from "next/head";
import { Box, Heading, Input, InputGroup, InputRightElement, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import BlogCard from "components/BlogCard";

const Blog = ({ getAllBlogs }) => {
  const [search, setSearch] = useState("");
  const filteredposts = getAllBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <Head>
        <title>Blog | Redha Azmei</title>
      </Head>
      <Box mb="12">
        <Heading as="h1" fontSize={["2xl", "5xl"]} mb="2">
          Blog
        </Heading>
        <Text pb="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto accusamus, dolore porro non, mollitia nemo delectus corporis, sapiente maxime vero possimus necessitatibus veritatis ipsum impedit maiores voluptas hic nihil.</Text>
        <InputGroup>
          <Input placeholder="Search Blog" bg={useColorModeValue("gray.50", "brand.purple700")} focusBorderColor="brand.red" onChange={(e) => setSearch(e.target.value)} />
          <InputRightElement children={<FiSearch />} />
        </InputGroup>
      </Box>
      {!filteredposts.length && <Text>No post matches the given query.</Text>}
      <SimpleGrid columns={[1, 2, 2, 3]} spacing="8" mb="6">
        {filteredposts.map((post) => {
          return <BlogCard id={post.title} title={post.title} date={post.date} description={post.description} category={post.category} image={post.image} slug={post.slug} readtime={post.readtime} />;
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
    return frontmatter;
  });
  return {
    props: { getAllBlogs },
  };
};

export default Blog;
