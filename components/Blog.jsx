import { Box, Heading, Text } from "@chakra-ui/react";
import CardBlog from "./CardBlog";
import CardBlog2 from "./CardBlog2";

const Blog = () => {
  return (
    <>
      <Box mb="12">
        <Box mb="4">
          <Heading letterSpacing="tight">Blog</Heading>
          <Text>Documenting stuffs that I find interesting</Text>
        </Box>
        <CardBlog2 />
        <CardBlog />
      </Box>
    </>
  );
};

export default Blog;
