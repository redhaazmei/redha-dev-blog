import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
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
    lightblue: "#00c6ff",
    darkblue: "#0072ff",
  },
};

const theme = extendTheme({ config, fonts, colors, styles });
export default theme;
