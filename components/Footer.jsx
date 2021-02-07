import Link from "next/link";
import { Flex, Stack, Text, Icon, Divider } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const socials = [
    {
      site: "Github",
      href: "https://github.com/redhaazmei",
      icon: FiGithub,
    },
    {
      site: "Linkedin",
      href: "https://www.linkedin.com/in/redhaazmei/",
      icon: FiLinkedin,
    },
    {
      site: "Twitter",
      href: "https://twitter.com/redhaazmei",
      icon: FiTwitter,
    },
  ];

  return (
    <>
      <Divider pt="10" />
      <Flex as="footer" direction={["column-reverse", "row"]} align="center" justify="space-between" my="8">
        <Text fontSize="xs" py="5">
          &copy; {new Date().getFullYear()} Redha Azmei. All Rights Reserved.
        </Text>
        <Stack direction="row" spacing="3">
          {socials.map((social) => {
            return (
              <a href={social.href} target="_blank" rel="noopener noferrer">
                <Icon as={social.icon} w="5" h="5" _hover={{ color: "brand.400" }} />
              </a>
            );
          })}
        </Stack>
      </Flex>
    </>
  );
};

export default Footer;
