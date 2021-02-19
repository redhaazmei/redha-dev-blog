import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";

const MDXImage = ({ alt, src, width, height, caption }) => {
  return (
    <Box mb="6">
      <Image alt={alt} src={src} width={width} height={height} />
      <Text fontSize="xs" fontStyle="italic" textAlign="center">
        {caption}
      </Text>
    </Box>
  );
};

export default MDXImage;
