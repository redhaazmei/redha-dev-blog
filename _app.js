import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import theme from "./theme";
import CustomFonts from "./fonts";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <CustomFonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
