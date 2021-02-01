import { Global } from "@emotion/react";

const fontlist = `
@font-face {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/DMSerifDisplay-Regular.ttf) format("ttf");
  }
  
  @font-face {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/DMSans-Regular.ttf) format("ttf");
  }
  
  @font-face {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(/fonts/DMSans-Medium.ttf) format("ttf");
  }
  
  @font-face {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(/fonts/DMSans-Bold.ttf) format("ttf");
  }
  
`;

const CustomFonts = () => {
  return <Global styles={fontlist} />;
};

export default CustomFonts;
