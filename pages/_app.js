import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import "focus-visible/dist/focus-visible";
import theme from "../theme";
import CustomFonts from "../fonts";
import Layout from "components/Layout";
import MDXComponents from "components/MDXComponents";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          <CustomFonts />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
