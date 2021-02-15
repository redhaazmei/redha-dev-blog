import Link from "next/link";
import { LinkBox, LinkOverlay, Box, Flex, Heading, Text, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import blogs from "data/blogs";

const CardBlog = () => {
  return (
    <>
      <SimpleGrid columns={[1]} spacing="4">
        {blogs.map((blog) => {
          return (
            <LinkBox key={blog.id} minH="2em" w="100%" bg={[useColorModeValue("gray.200", "gray.900"), "inherit"]} _hover={{ bg: useColorModeValue("gray.200", "gray.900"), cursor: "pointer" }} p="4" role="group">
              <Flex direction={["column", "row"]} justify="space-between">
                <Box pb="2">
                  <Link href={`/blog/${blog.slug}`}>
                    <LinkOverlay>
                      <Heading size="sm" _groupHover={{ color: "brand.red" }}>
                        {blog.title}
                      </Heading>
                      <Text fontSize="sm">{blog.description}</Text>
                    </LinkOverlay>
                  </Link>
                </Box>
                <Heading fontSize={["xs", "sm"]} mb="auto">
                  {blog.date}
                </Heading>
              </Flex>
            </LinkBox>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default CardBlog;
