import { Box, Flex, Heading, Text, useColorModeValue, SimpleGrid, Stack, Link } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import projects from "data/projects";

const CardProject = () => {
  const gradientRight = "linear(to-r, brand.lightblue, brand.darkblue)";
  const gradientLeft = "linear(to-l, brand.lightblue, brand.darkblue)";
  return (
    <>
      <SimpleGrid columns={[1, 2]} spacing="6">
        {projects.map((project) => {
          return (
            <Box minH="8em" w="100%" bg={useColorModeValue("gray.200", "gray.700")} p="4">
              <Flex direction="row" mb="2">
                <Box>
                  <Heading size="sm" bgGradient={useColorModeValue(gradientLeft, gradientRight)} bgClip="text">
                    {project.title}
                  </Heading>
                  <Text fontSize="sm">{project.description}</Text>
                </Box>
                <Heading fontSize="sm" ml="auto">
                  {project.year}
                </Heading>
              </Flex>
              <Stack direction="row" spacing="4">
                <Link fontSize="sm" href="https://chakra-ui.com" isExternal>
                  Website <FiExternalLink />
                </Link>
                <Link fontSize="sm" href="https://chakra-ui.com" isExternal>
                  Github
                  <FiExternalLink display="inline" />
                </Link>
              </Stack>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default CardProject;
