import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const BlogTitle = ({ title, date, readTime }) => {
  return (
    <>
      <Box mb="16">
        <Heading fontSize={["4xl", "6xl"]}>{title}</Heading>
        <Flex>
          <Text>{date}</Text>
          <Text>{readTime}</Text>
        </Flex>
      </Box>
    </>
  );
};

export default BlogTitle;
