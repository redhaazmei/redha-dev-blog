import { Box, Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Flex>
        <Box bg="brand.500" w="100%" h="1" />
      </Flex>
      <Box minH="100vh">{children}</Box>
    </>
  );
};

export default Layout;
