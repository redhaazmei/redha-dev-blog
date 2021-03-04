import { Global } from "@emotion/react";

const fontlist = `
  @font-face {
    font-family: 'Barlow';
    font-style: bold;
    font-weight: 700;
    font-display: optional;
    src: url(/fonts/Barlow-Bold.ttf);
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src: url(/fonts/Inter-Regular.ttf);
  }
`;

const CustomFonts = () => {
  return <Global styles={fontlist} />;
};

export default CustomFonts;
