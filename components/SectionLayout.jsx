import { Box, Heading, Text } from "@chakra-ui/react";

const SectionLayout = ({ heading, text, children }) => {
  return (
    <>
      <Box mb="12">
        <Box mb="4">
          <Heading letterSpacing="tight">{heading}</Heading>
          <Text>{text}</Text>
        </Box>
        {children}
      </Box>
    </>
  );
};

export default SectionLayout;
