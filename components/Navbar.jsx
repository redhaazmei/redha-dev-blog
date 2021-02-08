import Link from "next/link";
import { Box, Flex, IconButton, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const links = ["Home", "About", "Blog", "Projects"];

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" my="5">
        <Stack direction="row" py="5" spacing={["3", "5"]}>
          {links.map((link) => {
            return (
              <Box fontSize={["md", "md"]} _hover={{ color: useColorModeValue("brand.darkblue", "brand.lightblue") }}>
                <Link id={link} href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                  <a>{link}</a>
                </Link>
              </Box>
            );
          })}
        </Stack>
        <IconButton variant="solid" aria-label="dark-mode-toggle" icon={colorMode === "dark" ? <FiSun /> : <FiMoon />} onClick={toggleColorMode} />
      </Flex>
    </>
  );
};

export default Navbar;
