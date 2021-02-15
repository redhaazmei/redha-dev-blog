import { Box, Flex, Heading, Text, useColorModeValue, SimpleGrid, Stack, Link, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import projects from "data/projects";

const CardProject = () => {
  return (
    <>
      <SimpleGrid columns={[1, 2]} spacing="6">
        {projects.map((project) => {
          return (
            <Box key={project.title} minH="8em" w="100%" bg={useColorModeValue("gray.200", "gray.900")} p="4" role="group">
              <Flex direction="row" mb="3">
                <Box>
                  <Heading size="sm" _groupHover={{ color: "brand.red" }}>
                    {project.title}
                  </Heading>
                  <Text fontSize="sm">{project.description}</Text>
                </Box>
                <Heading fontSize="sm" ml="auto" pl="4">
                  {project.year}
                </Heading>
              </Flex>
              <Stack fontSize="sm" direction="row" spacing="4">
                <LinkBox _hover={{ color: "brand.red" }} display="flex" alignItems="center">
                  <LinkOverlay href={project.website} mr="1" isExternal>
                    Website
                  </LinkOverlay>
                  <FiExternalLink />
                </LinkBox>
                <LinkBox _hover={{ color: "brand.red" }} display="flex" alignItems="center">
                  <LinkOverlay href={project.github} mr="1" isExternal>
                    Github
                  </LinkOverlay>
                  <FiExternalLink />
                </LinkBox>
              </Stack>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default CardProject;
