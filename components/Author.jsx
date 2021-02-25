import { Box, Heading, Text } from "@chakra-ui/react";

const Author = () => {
  return (
    <>
      <Box mb="16">
        <Heading as="h1" fontSize={["2xl", "5xl"]} mb="2">
          Hi, I'm Redha Azmei 👋
        </Heading>
        <Text>I am a Data Scientist with deep interest in ML, AI and modern Web Technologies. I am currently working in the aviation industry based in Malaysia 🇲🇾. Addicted to learning and building techs.</Text>
      </Box>
    </>
  );
};

export default Author;
