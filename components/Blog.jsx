import { Box, Heading, Text } from "@chakra-ui/react";
import CardBlog from "./CardBlog";

const Blog = () => {
  return (
    <>
      <Box mb="12">
        <Box mb="4">
          <Heading letterSpacing="tight">Blog Posts</Heading>
          <Text>I write about stuffs and technologies I learn, covering Data Science, ML, AI and Web Development.</Text>
        </Box>
        <CardBlog />
      </Box>
    </>
  );
};

export default Blog;
