import { Box, Flex, Text } from "@chakra-ui/react";

const MDXBlockquote = ({ children }) => {
  return (
    <Box as="blockquote" borderLeft="solid" borderColor="brand.red" pl="6" fontWeight="bold" fontStyle="italic">
      {children}
    </Box>
  );
};

export default MDXBlockquote;
