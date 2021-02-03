import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Flex justify="center">
        <Box maxW="5xl" w="100%" mt="5">
          <Navbar />
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
