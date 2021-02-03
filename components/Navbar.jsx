import { Box, Flex, Heading, IconButton, Stack, useColorMode } from "@chakra-ui/react";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" my="5">
        <Stack direction="row" py="5" spacing="5">
          <Box>Home</Box>
          <Box>About</Box>
          <Box>Blog</Box>
          <Box>Projects</Box>
        </Stack>
        <IconButton colorScheme="purple" variant="outline" aria-label="dark-mode-toggle" icon={<FiSun />} onClick={toggleColorMode} />
      </Flex>
    </>
  );
};

export default Navbar;
