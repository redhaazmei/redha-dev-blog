import { Box, useColorModeValue } from "@chakra-ui/react";

const MDXBlockquote = ({ children }) => {
  return (
    <Box as="blockquote" bg={useColorModeValue("gray.50", "brand.purple700")} borderLeft="solid" borderColor="brand.red" pl="6" pr="4" py="4" mb="8" fontWeight="bold">
      {children}
    </Box>
  );
};

export default MDXBlockquote;
