import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
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
        mb: "2",
      },
      h2: {
        fontSize: ["xl", "2xl"],
        fontWeight: "bold",
        letterSpacing: "tight",
        mb: "2",
        "& code": {
          fontSize: "1rem",
          fontWeight: "bold",
        },
      },
      h3: {
        fontSize: ["lg", "xl"],
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
        overflow: "scroll",
        whiteSpace: "pre",
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
