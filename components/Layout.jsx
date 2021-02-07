import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Box bgGradient="linear(to-r, #396afc, #2948ff)" h="2" />
      <Flex justify="center">
        <Box maxW="5xl" w="100%" mt="5" mx="8">
          <Navbar />
          <Box maxW="4xl" w="100%" mx="auto">
            {children}
          </Box>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
