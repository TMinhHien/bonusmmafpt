import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.439 14.936h5.932v1.049h-5.932zm0 0" fill="#8b8b8b" />
      <Path
        d="M20.093 4.399H2.602a.583.583 0 00-.583.583v14.1a.583.583 0 00.583.583h17.49a.583.583 0 00.584-.583v-14.1a.583.583 0 00-.583-.583zm-9.82 12.583V13.79a.583.583 0 01.584-.583h7.1a.583.583 0 01.583.583v3.191a.583.583 0 01-.583.583h-7.1a.583.583 0 01-.583-.583zm0 0"
        fill="#8b8b8b"
      />
      <Path
        d="M11.12 3.234l-.1-.552a.583.583 0 00-.571-.482H3.864a.583.583 0 00-.577.481l-.1.552zm0 0"
        fill="#8b8b8b"
      />
    </Svg>
  );
}

export default SvgComponent;
