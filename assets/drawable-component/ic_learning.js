import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={48.001}
      height={48}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="learning_a"
          x1={12.662}
          y1={14.047}
          x2={12.916}
          y2={23.926}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#f0cb3a" />
          <Stop offset={1} stopColor="#8e7300" />
        </LinearGradient>
      </Defs>
      <Path d="M32 16A16 16 0 1116 0a16 16 0 0116 16z" fill="#dee6f5" />
      <Path
        d="M15.796 11.217c-3.8 0-6.885 1.816-6.885 4.058v5.227c0 2.24 5.134 2.89 6.885 2.832s6.885-.591 6.885-2.832v-5.227c-.001-2.241-3.084-4.058-6.885-4.058z"
        fill="#1145b8"
      />
      <Path
        d="M27.152 14.197l-11.28 6.63-11.28-6.63 11.28-6.63z"
        fill="#4e8dfe"
      />
      <Path
        d="M16.867 14.172l-.477-.333-.4-.275-6.367 3.776v3.817a3.781 3.781 0 00-.658 2.147.221.221 0 000 .05.3.3 0 00.01.04v.008a.176.176 0 00.02.042 1.429 1.429 0 001 .482c.457 0 1.17-.115 1.377-.528a4.572 4.572 0 00-.664-2.246v-3.333z"
        fill="url(#learning_a)"
        fillOpacity={0.96}
      />
      <Path
        d="M26.733 14.443l-10.69 6.285a.294.294 108 01-.41-.082.294.294 108 01.086-.408l10.69-6.288a.294.294 108 01.406.084.294.294 108 01-.082.409z"
        fill="#fff"
        fillOpacity={0.59}
      />
    </Svg>
  );
}

export default SvgComponent;
