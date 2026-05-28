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
        id="support_a"
        x1={9.998}
        y1={13.147}
        x2={14.6026}
        y2={21.148}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="support_b"
        x1={16.0735}
        y1={4.017}
        x2={18.3269}
        y2={20.3663}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="support_c"
        x1={9.995}
        y1={0.9928}
        x2={14.5988}
        y2={9.0037}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="support_d"
        x1={3.9265}
        y1={4.018}
        x2={6.1799}
        y2={20.3673}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <Path
        d="M12.401 13.147a3.958 3.958 0 01-4.8 0l-3.583 3.579a9 9 0 0011.96 0z"
        fill="url(#support_a)"
      />
      <Path
        d="M16.726 4.019l-3.579 3.579a3.958 3.958 0 010 4.8l3.579 3.579a9 9 0 000-11.96z"
        fill="url(#support_b)"
      />
      <Path
        d="M10 1a8.934 8.934 0 00-5.984 2.274l3.579 3.579a3.958 3.958 0 014.8 0l3.579-3.579A8.934 8.934 0 0010 1z"
        fill="url(#support_c)"
      />
      <Path
        d="M6.853 7.599L3.274 4.018a9 9 0 000 11.96l3.579-3.579a3.958 3.958 0 010-4.8z"
        fill="url(#support_d)"
      />
    </Svg>
  );
}

export default SvgComponent;
