import { Global } from "@emotion/react";

const fontlist = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/Inter-Regular.ttf);
  }
  @font-face {
    font-family: 'Inter';
    font-style: bold;
    font-weight: 700;
    font-display: swap;
    src: url(/fonts/Inter-Bold.ttf);
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/OpenSans-Regular.ttf);
  }
  @font-face {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/DMSans-Regular.ttf);
  }
  @font-face {
    font-family: 'DM Sans';
    font-style: bold;
    font-weight: 700;
    font-display: swap;
    src: url(/fonts/DMSans-Bold.ttf);
  }
`;

const CustomFonts = () => {
  return <Global styles={fontlist} />;
};

export default CustomFonts;
