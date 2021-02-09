import { Box, Flex, Heading, Text, useColorModeValue, SimpleGrid, Stack, Link } from "@chakra-ui/react";
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
                  <Heading size="sm" _groupHover={{ color: useColorModeValue("brand.darkblue", "brand.lightblue") }}>
                    {project.title}
                  </Heading>
                  <Text fontSize="sm">{project.description}</Text>
                </Box>
                <Heading fontSize="sm" ml="auto">
                  {project.year}
                </Heading>
              </Flex>
              <Stack fontSize="sm" direction="row" spacing="4">
                <Box display="flex" alignItems="center">
                  <Link href={project.website} mr="1" isExternal>
                    Website
                  </Link>
                  <FiExternalLink />
                </Box>
                <Box display="flex" alignItems="center">
                  <Link href={project.github} mr="1" isExternal>
                    Github
                  </Link>
                  <FiExternalLink />
                </Box>
              </Stack>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default CardProject;
