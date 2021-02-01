import { Global } from "@emotion/react";

const fontlist = `
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/Inter-Regular.ttf) format("ttf");
  }
`;

const CustomFonts = () => {
  return <Global styles={fontlist} />;
};

export default CustomFonts;
