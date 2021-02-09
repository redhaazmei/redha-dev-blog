import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import CardProject from "./CardProject";

const Project = () => {
  return (
    <>
      <Box mb="12">
        <Box mb="4">
          <Heading letterSpacing="tight">Projects</Heading>
          <Text>List of projects and involvements.</Text>
        </Box>
        <CardProject />
      </Box>
    </>
  );
};

export default Project;
