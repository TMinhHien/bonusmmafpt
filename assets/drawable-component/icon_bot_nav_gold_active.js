import React from "react";
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Rect,
} from "react-native-svg";
export default function IconBotNavGoldActive({
  width = 28,
  height = 28,
  color = "#000",
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28">
      <Path
        d="M14,14m-14,0a14,14 0,1 1,28 0a14,14 0,1 1,-28 0"
        fill="#185ece"
        stroke="#000000"
        strokeOpacity="0"
        strokeWidth="1"
      />
      <Path
        d="M14,14m-13.5,0a13.5,13.5 0,1 1,27 0a13.5,13.5 0,1 1,-27 0"
        fill="#000000"
        fillOpacity="0"
        stroke="#fafafa"
        strokeWidth="1"
      />
      <G>
        <Path d="M14,14m-8,0a8,8 0,1 1,16 0a8,8 0,1 1,-16 0" fill="#fff" />
        <Path
          d="M14,14m-6.4,0a6.4,6.4 0,1 1,12.8 0a6.4,6.4 0,1 1,-12.8 0"
          fill="#fff"
          stroke="#000000"
          strokeOpacity="0"
          strokeWidth="1"
        />
        <Path
          d="M14,14m-5.9,0a5.9,5.9 0,1 1,11.8 0a5.9,5.9 0,1 1,-11.8 0"
          fill="#000000"
          fillOpacity="0"
          stroke="#185ece"
          strokeWidth="1"
        />
        <Path
          d="M14,11.333L14,11.333A0.8,0.8 0,0 1,14.8 12.133L14.8,15.866A0.8,0.8 0,0 1,14 16.666L14,16.666A0.8,0.8 0,0 1,13.2 15.866L13.2,12.133A0.8,0.8 0,0 1,14 11.333z"
          fill="#185ece"
        />
      </G>
    </Svg>
  );
}
