import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={48.001}
      height={48}
      viewBox="0 0 48.001 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <LinearGradient
        id="dating_a"
        x1={22.5469}
        y1={23.6533}
        x2={49.7615}
        y2={20.8729}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#ffd653" />
        <Stop offset={1} stopColor="#ff6500" />
      </LinearGradient>
      <LinearGradient
        id="dating_b"
        x1={-2.3276}
        y1={19.6656}
        x2={34.0649}
        y2={23.3833}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <Path d="M48.001 24a24 24 0 11-24-24 24 24 0 0124 24z" fill="#dfe8f5" />
      <Path
        d="M28.136 33.285C23.8 26.788 22.16 21.811 22.129 18.18c-.08-9.718 11.377-9.72 13.397-3.186C41.52 11.7 49.76 19.66 42.949 26.592c-2.539 2.588-7.177 5.032-14.813 6.693z"
        fill="url(#dating_a)"
      />
      <Path
        d="M25.92 39.98c5.798-8.688 7.99-15.347 8.032-20.196.113-12.995-15.206-12.998-17.913-4.26-8.015-4.407-19.034 6.238-9.925 15.507 3.4 3.459 9.6 6.727 19.807 8.95z"
        fill="url(#dating_b)"
      />
    </Svg>
  );
}

export default SvgComponent;
