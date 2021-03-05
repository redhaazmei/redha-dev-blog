import { Box, Heading, Text } from "@chakra-ui/react";

const Author = () => {
  return (
    <>
      <Box mb="16">
        <Heading as="h1" fontSize={["1.7rem", "5xl"]} mb="2">
          Hi, I'm Redha Azmei 👋
        </Heading>
        <Text>A Data Scientist with deep interest in ML, AI and modern Web Technologies. Currently working in the aviation industry based in Malaysia 🇲🇾. Welcome to my personal space where I share all my thoughts on techs.</Text>
      </Box>
    </>
  );
};

export default Author;
