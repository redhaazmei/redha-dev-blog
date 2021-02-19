import { extendTheme, useBreakpointValue } from "@chakra-ui/react";

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
        fontSize: ["2xl", "3xl"],
        fontWeight: "bold",
      },
      h2: {
        fontSize: ["xl", "2xl"],
        fontWeight: "bold",
        "& code": {
          fontSize: "1rem",
          fontWeight: "bold",
        },
      },
      h3: {
        fontSize: ["lg", "xl"],
        fontWeight: "bold",
      },
      p: {
        mb: "6",
      },
      a: {
        fontWeight: "bold",
        color: "brand.red",
        _hover: {
          textDecoration: "underline",
        },
      },
      code: {
        px: "1",
        fontSize: "0.8rem",
        fontWeight: "normal",
        color: props.colorMode === "dark" ? "white" : "black",
        bg: props.colorMode === "dark" ? "brand.purple500" : "gray.100",
        border: "1px solid",
        borderColor: props.colorMode === "dark" ? "brand.purple700" : "gray.100",
        borderRadius: "md",
      },
      pre: {
        p: "4",
        mb: "6",
        bg: props.colorMode === "dark" ? "brand.purple700" : "gray.50",
        overflow: "auto",
        "& code": {
          fontSize: "0.8rem",
          fontWeight: "normal",
          whitespace: "pre",
          bg: "none",
          border: "none",
        },
      },
      ul: {
        listStyle: "inside",
      },
      ol: {
        listStyle: "inside",
      },
      hr: {
        mb: "6",
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
