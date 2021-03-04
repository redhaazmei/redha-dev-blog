import { Global } from "@emotion/react";

const fontlist = `
  @font-face {
    font-family: 'DM Sans';
    font-style: bold;
    font-weight: 700;
    font-display: optional;
    src: url(/fonts/DMSans-Bold.ttf);
  }
  @font-face {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src: url(/fonts/DMSans-Regular.ttf);
  }
`;

const CustomFonts = () => {
  return <Global styles={fontlist} />;
};

export default CustomFonts;
