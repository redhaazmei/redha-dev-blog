import Link from "next/link";
import Image from "next/image";
import { LinkBox, LinkOverlay, Box, Heading, Text, useColorModeValue, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.custom(LinkBox);

const BlogCard = ({ title, date, description, category, image, readtime, slug }) => {
  return (
    <>
      <MotionBox bg={useColorModeValue("gray.50", "brand.purple700")} borderRadius="lg" border="solid" borderWidth="1px" borderColor={useColorModeValue("gray.100", "brand.purple700")} overflow="hidden" role="group" _hover={{ cursor: "pointer" }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.05 }}>
        <Image alt={"Banner"} src={image} width={1200} height={630} />
        <Box pt="2" px="6" pb="3">
          <Badge colorScheme={category === "Web Development" ? "blue" : category === "Data Science" ? "green" : category === "ML/AI" ? "purple" : "red"}>{category}</Badge>
          <Text fontSize="sm">
            {readtime} &bull; {date}
          </Text>
        </Box>
        <Box px="6" pb="6">
          <Link href={`/blog/${slug}`}>
            <LinkOverlay>
              <Heading size="md" pb="1" _groupHover={{ color: "brand.red" }}>
                {title}
              </Heading>
              <Text fontSize="sm">{description}</Text>
            </LinkOverlay>
          </Link>
        </Box>
      </MotionBox>
    </>
  );
};

export default BlogCard;
