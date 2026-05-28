import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <LinearGradient
        id="faq_a"
        x1={10}
        y1={1}
        x2={16.93}
        y2={25.606}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <Path
        d="M10 1a9 9 0 109 9 9.01 9.01 0 00-9-9zm0 14.25a.75.75 0 11.75-.75.75.75 0 01-.75.75zm1.187-4.769a.753.753 0 00-.437.682v.337a.75.75 0 11-1.5 0v-.337a2.26 2.26 0 011.309-2.044 2.451 2.451 0 001.316-1.744 1.875 1.875 0 10-3.75 0 .75.75 0 01-1.5 0 3.375 3.375 0 016.75 0 3.908 3.908 0 01-2.188 3.107z"
        fill="url(#faq_a)"
      />
    </Svg>
  );
}

export default SvgComponent;
