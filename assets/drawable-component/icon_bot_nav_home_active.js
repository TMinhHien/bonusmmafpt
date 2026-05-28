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
export default function IconBotNavHomeActive({
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
          d="M18.876,19.969L9.121,19.969A1.4,1.4 0,0 1,7.727 18.577L7.727,11.416A2.5,2.5 0,0 1,8.466 9.73L13.013,6.412a1.467,1.467 0,0 1,1.974 0L19.533,9.73a2.5,2.5 0,0 1,0.739 1.682v7.161A1.4,1.4 0,0 1,18.876 19.969ZM13.193,12.564a0.5,0.5 0,0 0,-0.5 0.5L12.693,16.42a0.5,0.5 0,0 0,0.5 0.5L14.806,16.92a0.5,0.5 0,0 0,0.5 -0.5L15.306,13.064a0.5,0.5 0,0 0,-0.5 -0.5Z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}
