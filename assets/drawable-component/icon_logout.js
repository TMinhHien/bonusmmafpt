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
        id="logout_a"
        x1={15.3763}
        y1={5.4984}
        x2={18.553}
        y2={14.7294}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="logout_b"
        x1={5.25}
        y1={0.9995}
        x2={8.1375}
        y2={25.6069}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="logout_c"
        x1={7.9632}
        y1={0.9986}
        x2={12.2265}
        y2={7.8355}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="logout_d"
        x1={10.6848}
        y1={11.7136}
        x2={12.8565}
        y2={18.5989}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <Path
        d="M15.729 12.086a.558.558 0 010-.8l1.851-1.847h-5.768a.563.563 0 010-1.126h5.768l-1.851-1.855a.562.562 0 01.8-.794l2.809 2.812a.564.564 0 010 .795l-2.814 2.813a.56.56 0 01-.4.167.567.567 0 01-.395-.165z"
        fill="url(#logout_a)"
      />
      <Path
        d="M7.5 19a1.546 1.546 0 01-.465-.07l-4.514-1.5A1.514 1.514 0 011.5 16V2.5A1.5 1.5 0 013 1a1.547 1.547 0 01.465.07l4.513 1.5A1.514 1.514 0 019 4v13.5A1.5 1.5 0 017.5 19z"
        fill="url(#logout_b)"
      />
      <Path
        d="M12.938 6a.563.563 0 01-.562-.562V3.062a.939.939 0 00-.937-.938H3A.562.562 0 113 .999h8.438A2.064 2.064 0 0113.5 3.062v2.375a.563.563 0 01-.562.563zm0 0"
        fill="url(#logout_c)"
      />
      <Path
        d="M11.438 16.75h-3a.562.562 0 110-1.125h3a.939.939 0 00.937-.938V12.31a.563.563 0 111.125 0v2.375a2.064 2.064 0 01-2.062 2.065zm0 0"
        fill="url(#logout_d)"
      />
    </Svg>
  );
}

export default SvgComponent;
