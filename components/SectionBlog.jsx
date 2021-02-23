import { Box, Heading, Text } from "@chakra-ui/react";
import BlogCard from "components/BlogCard";

const SectionBlog = () => {
  return (
    <>
      <Box mb="12">
        <Box mb="4">
          <Heading letterSpacing="tight">Blog</Heading>
          <Text>Documenting stuffs that I find interesting</Text>
        </Box>
      </Box>
    </>
  );
};

export default SectionBlog;
