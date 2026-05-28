import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M0 14a14 14 0 1128 0 14 14 0 11-28 0" fill="#185ece" />
      <Path
        d="M.5 14a13.5 13.5 0 1127 0 13.5 13.5 0 11-27 0"
        stroke="#fafafa"
        fill="none"
      />
      <Path d="M13.981 15.82h3.916v.692h-3.916zm0 0" fill="#fff" />
      <Path
        d="M19.694 8.865H8.148a.385.385 0 00-.385.384v9.309a.385.385 0 00.385.385h11.546a.385.385 0 00.385-.385V9.249a.385.385 0 00-.385-.384zm-6.482 8.306v-2.106a.385.385 0 01.385-.385h4.685a.385.385 0 01.385.385v2.106a.385.385 0 01-.385.385h-4.685a.385.385 0 01-.385-.385zm0 0"
        fill="#fff"
      />
      <Path
        d="M13.771 8.095l-.065-.364a.385.385 0 00-.374-.318H8.981a.385.385 0 00-.379.318l-.064.365zm0 0"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
