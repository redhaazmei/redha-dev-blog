import Image from "next/image";
import { Badge, Box, Stack, Heading, Text } from "@chakra-ui/react";

const BlogTitle = ({ title, date, readtime, category }) => {
  return (
    <>
      <Box mb="12">
        <Heading fontSize={["4xl", "6xl"]} mb="3">
          {title}
        </Heading>
        <Stack spacing={["auto", "4"]} direction={["column", "row"]}>
          <Text>🗓️ {date}</Text>
          <Text d={["none", "block"]}>|</Text>
          <Text>⏱️ {readtime}</Text>
          <Text d={["none", "block"]}>|</Text>
          <Text alignItems="center">
            <Badge colorScheme={category === "Web Development" ? "blue" : category === "Data Science" ? "green" : category === "ML/AI" ? "purple" : "red"}>{category}</Badge>
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default BlogTitle;
