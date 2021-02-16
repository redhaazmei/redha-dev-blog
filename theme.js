import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  body: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
};

const styles = {
  global: (props) => ({
    ".mdx-prose": {
      h1: {
        fontSize: "4xl",
        fontWeight: "bold",
      },
      a: {
        fontWeight: "bold",
        color: "brand.red",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
    "html, body": {
      bg: props.colorMode === "dark" ? "brand.purple900" : "white",
      lineHeight: "tall",
    },
    h1: {
      letterSpacing: "tight",
    },
    p: {
      color: props.colorMode === "dark" ? "gray.300" : "gray.600",
    },
  }),
};

const colors = {
  brand: {
    lightblue: "#00c6ff",
    darkblue: "#0072ff",
    purple50: "#f0eefa",
    purple500: "#2b2236",
    purple700: "#1d1627",
    purple900: "#100818",
    darkgrey: "#3e4955",
    red: "#da3654",
    orange: "#feac0e",
  },
};

const theme = extendTheme({ config, fonts, colors, styles });
export default theme;
