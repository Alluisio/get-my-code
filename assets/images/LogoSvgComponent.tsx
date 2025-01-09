import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

const LogoSvgComponent = (props: SvgProps) => (
  <Svg width={179} height={198} fill="none" {...props}>
    <Path
      fill="#fff"
      d="m25.929 152.292 49.685-11.921-14.519 48.99-35.166-37.069Z"
    />
    <Rect
      width={169}
      height={155}
      y={10.807}
      fill="#fff"
      rx={22}
      transform="rotate(-3.666 0 10.807)"
    />
    <Path
      stroke="#132742"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M80.533 87.12a21.874 21.874 0 0 0 32.987 2.362l13.125-13.125a21.873 21.873 0 0 0-15.544-37.07 21.875 21.875 0 0 0-15.387 6.139l-7.525 7.481"
    />
    <Path
      stroke="#132742"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M98.033 78.37a21.874 21.874 0 0 0-32.988-2.363L51.92 89.132a21.875 21.875 0 0 0 30.931 30.931l7.482-7.481"
    />
  </Svg>
);
export default LogoSvgComponent;
