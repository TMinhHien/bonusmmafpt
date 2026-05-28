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
export default function IcIconBotNavProfile({
  width = 19,
  height = 19,
  color = "#000",
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 19">
      <G>
        <Path
          d="M15.842,12.543a12,12 0,0 0,-12.56 0A2.459,2.459 0,0 0,2.159 14.617v3.521L16.964,18.138L16.964,14.617A2.46,2.46 0,0 0,15.842 12.543Z"
          fill="#000000"
          fillOpacity="0.4"
        />
        <Path
          d="M12.615,2.129a4.318,4.318 0,1 1,-6.107 0,4.318 4.318,0 0,1 6.107,0"
          fill="#000000"
          fillOpacity="0.4"
        />
      </G>
    </Svg>
  );
}
