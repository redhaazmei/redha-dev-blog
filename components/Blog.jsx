import { Box, Heading, Text } from "@chakra-ui/react";
import CardBlog from "./CardBlog";

const Blog = () => {
  return (
    <>
      <Box mb="12">
        <Box mb="4">
          <Heading letterSpacing="tight">Blog</Heading>
          <Text>Documenting stuffs that I find interesting</Text>
        </Box>
        <CardBlog />
      </Box>
    </>
  );
};

export default Blog;
