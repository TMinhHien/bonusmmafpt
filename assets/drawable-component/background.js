import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={300} height={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <LinearGradient id="bg_a" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#8fcbec" stopOpacity={1} />
          <Stop offset="100%" stopColor="#43a6dd" stopOpacity={1} />
        </LinearGradient>
      </Defs>
      <Rect width={370} height={150} rx={12} ry={12} fill="url(#bg_a)" />
    </Svg>
  );
}

export default SvgComponent;
