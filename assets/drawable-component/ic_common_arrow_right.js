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
export default function IcCommonArrowRight({
  width = 14,
  height = 14,
  color = "#000",
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14">
      <G>
        <Path
          d="M3.524,13.295a0.725,0.725 0,0 0,0.45 -0.158L10.927,7.545a0.717,0.717 0,0 0,-0 -1.117L4.003,0.864a0.717,0.717 0,1 0,-0.9 1.117L9.333,6.987 3.074,12.02a0.716,0.716 0,0 0,0.45 1.275Z"
          fill="#8b8b8b"
        />
      </G>
    </Svg>
  );
}
