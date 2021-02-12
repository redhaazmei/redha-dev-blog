import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import theme from "../theme";
import CustomFonts from "../fonts";
import Layout from "components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <CustomFonts />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
