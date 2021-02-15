import Link from "next/link";
import { gradientLeft, gradientRight } from "components/Gradient";
import { Button, Flex, Heading, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import CustomHead from "components/CustomHead";

const Home = () => {
  return (
    <>
      <CustomHead title="404 | Redha Azmei" />
      <Flex justify="center" mb="4">
        <Flex textAlign="center" maxW="2xl" direction="column" align="center" justify="center">
          <Heading as="h1" size="4xl">
            404 Error
          </Heading>
          <Heading as="h1" fontSize={["2xl", "5xl"]} pb="4">
            Page Not Found
          </Heading>
          <Text pb="4">It seems you've found something that used to exist, or you spelled something wrong. I'm guessing you spelled something wrong. Can you double check that URL?</Text>
          <Link href="/">
            <Button variant="outline" color={useColorModeValue("black", "white")} bg="transparent" borderColor="brand.red" border="2px" _hover={{ bg: "brand.red", color: "white" }} leftIcon={<FiHome />}>
              Back to Home
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
