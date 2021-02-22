import Link from "next/link";
import Image from "next/image";
import { LinkBox, LinkOverlay, Box, Flex, Heading, Text, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import blogs from "data/blogs";

const CardBlog2 = () => {
  return (
    <>
      <Box bg={useColorModeValue("gray.50", "brand.purple700")} maxW="sm" borderRadius="lg" overflow="hidden" shadow="lg">
        <Image alt={"Japan"} src={"/images/japan.jpg"} width={1280} height={720} />
        <Box p="4">
          <Heading size="lg">How to add font files to Chakra and Next JS</Heading>
          <Text fontSize="sm">A guide for bringing custom font files to your Chakra UI project running on Next.js</Text>
        </Box>
      </Box>
    </>
  );
};

export default CardBlog2;
