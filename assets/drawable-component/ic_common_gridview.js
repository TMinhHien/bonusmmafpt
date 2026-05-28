import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.111 2.037a.37.37 0 00-.37-.37H2.037a.37.37 0 00-.37.37v6.7a.37.37 0 00.37.37h6.7a.37.37 0 00.37-.37zm-.744 6.33H2.408V2.408h5.959zm0 0"
        fill="#666"
        stroke="#666"
        strokeWidth={0.6}
      />
      <Path
        d="M18.333 2.037a.37.37 0 00-.37-.37h-6.7a.37.37 0 00-.37.37v6.7a.37.37 0 00.37.37h6.7a.37.37 0 00.37-.37zm-.74 6.33H11.63V2.408h5.963zm0 0"
        fill="#666"
        stroke="#666"
        strokeWidth={0.6}
      />
      <Path
        d="M9.111 11.259a.37.37 0 00-.37-.37H2.037a.37.37 0 00-.37.37v6.7a.37.37 0 00.37.37h6.7a.37.37 0 00.37-.37zm-.741 6.3H2.408v-5.926h5.959zm0 0"
        fill="#666"
        stroke="#666"
        strokeWidth={0.6}
      />
      <Path
        d="M18.333 11.259a.37.37 0 00-.37-.37h-6.7a.37.37 0 00-.37.37v6.7a.37.37 0 00.37.37h6.7a.37.37 0 00.37-.37zm-.741 6.3h-5.963v-5.926h5.963zm0 0"
        fill="#666"
        stroke="#666"
        strokeWidth={0.6}
      />
    </Svg>
  );
}

export default SvgComponent;
