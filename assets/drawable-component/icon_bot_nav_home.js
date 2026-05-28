import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.705 20.582H4.292a1.917 1.917 0 01-1.917-1.913V8.822A3.435 3.435 0 013.391 6.51l6.252-4.568a2.017 2.017 0 012.714 0l6.251 4.568a3.436 3.436 0 011.016 2.312v9.847a1.919 1.919 0 01-1.919 1.913zm-8-10.182a.5.5 0 00-.5.5v4.99a.5.5 0 00.5.5h2.592a.5.5 0 00.5-.5v-4.989a.5.5 0 00-.5-.5z"
        fillOpacity={0.4}
      />
    </Svg>
  );
}

export default SvgComponent;
