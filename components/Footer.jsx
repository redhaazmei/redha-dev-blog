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
      <Divider pt="2" />
      <Flex as="footer" direction={["column-reverse", "row"]} align="center" justify="space-between" my="8">
        <Text as="h6" fontSize="xs" py="5">
          &copy; {new Date().getFullYear()} Redha Azmei. All Rights Reserved.
        </Text>
        <Stack direction="row" spacing="3">
          {socials.map((social) => {
            return (
              <a key={social.site} href={social.href} target="_blank" rel="noopener noferrer">
                <Icon as={social.icon} w="5" h="5" _hover={{ color: "brand.red" }} />
              </a>
            );
          })}
        </Stack>
      </Flex>
    </>
  );
};

export default Footer;
