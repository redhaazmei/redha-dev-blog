import Image from "next/image";
import { Button } from "@chakra-ui/react";
import MDXCode from "components/MDXCode";
import MDXImage from "components/MDXImage";
import MDXBlockquote from "components/MDXBlockquote";

const MDXComponents = {
  MDXImage,
  Image,
  Button,
  code: MDXCode,
  blockquote: MDXBlockquote,
};

export default MDXComponents;
