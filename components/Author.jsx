import { Box, Heading, Text } from "@chakra-ui/react";

const Author = () => {
  return (
    <>
      <Box mb="16">
        <Heading as="h1" fontSize={["2xl", "5xl"]} mb="2">
          Hey, I'm Redha Azmei
        </Heading>
        <Text>I am a Data Scientist with deep interest in ML, AI and modern Web Technologies. I am currently working in the aviation industry based in Malaysia 🇲🇾. I enjoy learning new stuffs by building small scale projects.</Text>
      </Box>
    </>
  );
};

export default Author;
