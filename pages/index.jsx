import { Heading } from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>redha.dev</title>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </Head>
      <Heading color="brand.700">Welcome to my blog!</Heading>
    </>
  );
};

export default Home;
