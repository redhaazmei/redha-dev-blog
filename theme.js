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
        fontSize: ["3xl", "4xl"],
        fontFamily: "heading",
        fontWeight: "bold",
        mb: "2",
      },
      h2: {
        fontSize: ["2xl", "3xl"],
        fontFamily: "heading",
        fontWeight: "bold",
        mb: "2",
        "& code": {
          fontSize: "1.2rem",
          fontWeight: "bold",
        },
      },
      h3: {
        fontSize: ["lg", "xl"],
        fontFamily: "heading",
        fontWeight: "bold",
        mb: "2",
      },
      p: {
        mb: "8",
      },
      a: {
        fontWeight: "bold",
        color: "brand.red",
        textDecoration: "underline",
        _hover: {
          color: "brand.red100",
        },
      },
      pre: {
        bg: props.colorMode === "dark" ? "brand.purple700" : "gray.900",
        px: "4",
        pb: "1",
        mb: "8",
      },
      code: {
        px: "1",
        py: "0.1rem",
        fontSize: "0.9rem",
        fontWeight: "normal",
        color: props.colorMode === "dark" ? "white" : "black",
        bg: props.colorMode === "dark" ? "brand.purple500" : "gray.100",
        border: "1px solid",
        borderColor: props.colorMode === "dark" ? "brand.purple500" : "gray.300",
        borderRadius: "md",
      },
      blockquote: {
        "& p": {
          mb: "0",
        },
      },
      ul: {
        listStylePosition: "outside",
        pl: "5",
        mb: "8",
      },
      ol: {
        listStylePosition: "outside",
        mb: "8",
      },
      li: {
        pl: "1",
        mb: "3",
      },
      hr: {
        mb: "8",
      },
    },
    "html, body": {
      bg: props.colorMode === "dark" ? "brand.purple900" : "white",
      lineHeight: "tall",
    },
    h1: {
      letterSpacing: "tight",
    },
    "p, ul, ol, li": {
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
    red100: "#b3213c",
    orange: "#feac0e",
  },
};

const theme = extendTheme({ config, fonts, colors, styles });
export default theme;
