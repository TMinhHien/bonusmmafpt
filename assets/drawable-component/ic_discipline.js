import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          x1={14.65}
          y1={13.024}
          x2={17.934}
          y2={10.006}
          id="discipline_b"
        >
          <Stop offset={0} stopColor="#f3f04c" />
          <Stop offset={1} stopColor="#888a00" />
        </LinearGradient>
        <LinearGradient
          id="discipline_a"
          x1={-8.127}
          y1={14.552}
          x2={-4.265}
          y2={-2.981}
          gradientUnits="userSpaceOnUse"
          spreadMethod="reflect"
        >
          <Stop offset={0} stopColor="#4c8bfb" />
          <Stop offset={1} stopColor="#1051c1" />
        </LinearGradient>
      </Defs>
      <Path d="M0 16a16 16 0 1132 0 16 16 0 11-32 0" fill="#dfe8f5" />
      <Path
        d="M16.039 7.093a.686.686 0 01-.194.327l-4.357 3.69a4.01 4.01 0 01-.787-.109.665.665 0 001.093.659l4.091-3.783a.672.672 0 00.154-.784z"
        fill="#1258c9"
      />
      <Path
        d="M10.447 11.089a.678.678 0 01-.962-.043l-.581-.636a.693.693 0 01.037-.97l4.989-4.612a.68.68 0 01.963.038l.582.641a.694.694 0 01-.042.97l-4.986 4.612zM16.397 17.626a.69.69 0 00-.043.97l.581.64a.679.679 0 00.963.041l4.99-4.613a.693.693 0 00.043-.97l-.583-.641a.68.68 0 00-.962-.039l-4.989 4.612z"
        fill="#4d86ff"
      />
      <Path
        d="M20.834 12.352a.658.658 0 00-.345.167l-4.015 4.056c-.014.266 0 .533.039.797a.669.669 0 01-.553-1.154l4.085-3.782a.66.66 0 01.789-.084z"
        fill="#1258c9"
      />
      <Path
        d="M4.084 20.557l1.012-.942.328.358 7.547-6.889-1.36-1.498 4.214-3.899 4.4 4.83-4.217 3.9-1.044-1.146-7.538 6.883.478.523-1.011.942-2.809-3.062z"
        fill="url(#discipline_a)"
      />
      <Path
        d="M11.795 11.665a.662.662 0 01-.945-.039.675.675 0 01.04-.951l4.097-3.784a.66.66 0 01.944.04.672.672 0 01-.04.945l-4.096 3.789zM15.953 16.225a.675.675 0 00-.04.951.66.66 0 00.943.038l4.092-3.776a.673.673 0 00.039-.952.661.661 0 00-.944-.04l-4.09 3.779z"
        fill="#0c48bf"
      />
      <Path
        d="M16.056 14.579l-2.812-3.108 3.285-3.018 2.812 3.108z"
        fill="url(#discipline_b)"
      />
      <Path
        d="M24.867 21.024l-10.306.009c-.469.003-.674.46-.72.545l-.739 1.967c-.087.173-.135.672.468.573l12.556-.043c.411.034.426-.406.273-.67l-.78-1.832c-.19-.368-.362-.519-.752-.549z"
        stroke="#000"
        fill="#0e48c2"
        strokeOpacity={0.99}
        strokeWidth={0}
      />
    </Svg>
  );
}

export default SvgComponent;
