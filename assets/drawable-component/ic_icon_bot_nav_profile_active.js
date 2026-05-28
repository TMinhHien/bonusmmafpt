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
export default function IcIconBotNavProfileActive({
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
        <Path
          d="M19.005,15.902a9.472,9.472 0,0 0,-9.916 0A1.942,1.942 0,0 0,8.205 17.539L8.205,20.32L19.893,20.32v-2.779A1.942,1.942 0,0 0,19.005 15.902Z"
          fill="#fff"
        />
        <Path
          d="M16.459,7.681a3.409,3.409 0,1 1,-4.821 0,3.409 3.409,0 0,1 4.821,0"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}
