import { extendTheme, propNames } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const fonts = {
  heading: `"Inter", sans-serif`,
  body: `"Inter", sans-serif`,
};

const styles = {
  global: (props) => ({
    "html, body": {
      lineHeight: "tall",
    },
    h1: {
      letterSpacing: "tight",
    },
    p: {
      color: props.colorMode === "dark" ? "gray.400" : "gray.600",
    },
  }),
};

// const styles = {
//   global: {
//     "html, body": {
//       lineHeight: "tall",
//     },
//   },
// };

const colors = {
  brand: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },
  indigo: {
    50: "#EEF2FF",
    100: "#E0E7FF",
    200: "#C7D2FE",
    300: "#A5B4FC",
    400: "#818CF8",
    500: "#6366F1",
    600: "#4F46E5",
    700: "#4338CA",
    800: "#3730A3",
    900: "#312E81",
  },
};

const theme = extendTheme({ config, fonts, colors, styles });
export default theme;
