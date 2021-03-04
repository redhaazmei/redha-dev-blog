import Head from "next/head";
import { Box, Heading, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Redha Azmei</title>
      </Head>
      <Box mb="12">
        <Heading as="h1" fontSize={["3xl", "5xl"]} mb="2">
          Projects
        </Heading>
        <Text pb="4">Writing is a great way for me to document and share my thoughts, especially on the techs I learned and projects I built. Use the search below to find your favourite articles.</Text>
      </Box>
    </>
  );
};

export default Projects;
