import { useState } from "react";
import Head from "next/head";
import { getposts } from "lib/getposts";
import { Box, Heading, Input, InputGroup, InputRightElement, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import BlogCard from "components/BlogCard";

const Blog = ({ posts }) => {
  const [search, setSearch] = useState("");
  const filteredposts = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <Head>
        <title>Blog | Redha Azmei</title>
      </Head>
      <Box mb="12">
        <Heading as="h1" fontSize={["2xl", "5xl"]} mb="2">
          Blog
        </Heading>
        <Text pb="4">Writing is a great way for me to document and share my thoughts, especially on the techs I learned and projects I built. Use the search below to find your favourite articles.</Text>
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
  const posts = getposts();
  return {
    props: { posts },
  };
};

export default Blog;
