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
        fontSize: "3xl",
        fontWeight: "bold",
      },
      h2: {
        fontSize: "2xl",
        fontWeight: "bold",
      },
      h3: {
        fontSize: "xl",
        fontWeight: "bold",
      },
      a: {
        fontWeight: "bold",
        color: "brand.red",
        _hover: {
          textDecoration: "underline",
        },
      },
      code: {
        fontSize: "0.8rem",
        whiteSpace: "pre",
      },
      pre: {
        bg: props.colorMode === "dark" ? "brand.purple700" : "gray.50",
        border: "1px",
        borderColor: "gray.100",
        p: "4",
        overflow: "auto",
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
      color: props.colorMode === "dark" ? "brand.text50" : "gray.600",
    },
    strong: {
      color: props.colorMode === "dark" ? "white" : "black",
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
    text50: "#aba9ae",
    red: "#da3654",
    orange: "#feac0e",
  },
};

const theme = extendTheme({ config, fonts, colors, styles });
export default theme;
