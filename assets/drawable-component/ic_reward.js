import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, Rect } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={48.001}
      height={48}
      viewBox="-10.684 -12.415 52.004 52.084"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="a"
          x1={14.418}
          y1={14.86}
          x2={14.4}
          y2={18.133}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#1856c3" />
          <Stop offset={1} stopColor="#003b7b" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={26.757}
          y1={17.23}
          x2={26.748}
          y2={18.44}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#1856c3" />
          <Stop offset={1} stopColor="#003b7b" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={29.057}
          y1={10.479}
          x2={31.942}
          y2={10.613}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#4f8eff" />
          <Stop offset={1} stopColor="#0056b3" />
        </LinearGradient>
        <LinearGradient
          id="d"
          x1={6.867}
          y1={13.817}
          x2={6.867}
          y2={29.642}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#ffe195" />
          <Stop offset={0.494} stopColor="#fe8013" />
          <Stop offset={0.715} stopColor="#ff750b" />
          <Stop offset={1} stopColor="#fa832e" />
        </LinearGradient>
        <LinearGradient
          id="e"
          x1={4.396}
          y1={14.161}
          x2={4.396}
          y2={29.315}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#ffe49d" />
          <Stop offset={0.26} stopColor="#fbc946" />
          <Stop offset={0.714} stopColor="#fd9a25" />
          <Stop offset={1} stopColor="#fe8215" />
        </LinearGradient>
        <LinearGradient
          id="f"
          x1={3.82}
          y1={16.036}
          x2={3.82}
          y2={27.624}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#f7610c" />
          <Stop offset={0.325} stopColor="#ff8d4d" />
          <Stop offset={0.691} stopColor="#de5000" />
          <Stop offset={1} stopColor="#f88b28" />
        </LinearGradient>
        <LinearGradient
          id="g"
          x1={4.109}
          y1={16.271}
          x2={4.08}
          y2={27.432}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#facd48" />
          <Stop offset={0.224} stopColor="#fbaf3d" />
          <Stop offset={0.535} stopColor="#ff820f" />
          <Stop offset={0.835} stopColor="#fe7c11" />
        </LinearGradient>
      </Defs>
      <Path
        d="M-10.714 13.569c0-20.017 21.668-32.528 39.004-22.519a26.002 26.002 0 0113 22.519c0 20.017-21.668 32.528-39.004 22.519a26.002 26.002 0 01-13-22.519"
        fill="#dfe8f5"
      />
      <Rect
        x={3.186}
        y={2.656}
        width={23.008}
        height={21.095}
        fill="url(#a)"
        rx={1.983}
        ry={1.983}
      />
      <Path
        fill="url(#b)"
        d="M23.935 17.09l-.024 6.659c2.711-.032 2.964.089 4.313-.337.145-.047.602-.319.772-.452.099-.076.412-.381.524-.47.399-.317.755-1.102.867-1.505.162-.577.178-1.176.186-1.735.003-.186-.065-.399-.191-.699a1.99 1.99 0 00-.172-.32 1.96 1.96 0 00-.352-.406c-.076-.065-.134-.116-.18-.153-.335-.268-.916-.44-1.788-.533-.254-.027-.543-.05-.852-.06a55.809 55.809 0 00-3.103.011z"
      />
      <Path
        fill="url(#c)"
        d="M23.884-1.516c.004-.152.134-.243.287-.266 3.329-.509 6.535.784 6.614 3.263l-.198 17.797c-.335-1.696-1.529-2.185-4.15-2.183-.717 0-1.517-.011-2.437.016-.026.003-.042-.021-.041-.043.048-6.866-.196-11.833-.075-18.584z"
      />
      <Path
        d="M8.435 7.19l12.102.011c.411.087.695.304.722.692.025.387-.339.568-.74.699H8.383c-.385-.066-.629-.312-.629-.699 0-.388.275-.619.681-.703zM8.624 10.848l12.118.027c.411.088.679.291.706.679.025.388-.304.709-.74.702H8.572c-.385-.066-.629-.314-.629-.702 0-.388.275-.62.681-.706zM15.867 14.373l4.614.009c.17.073.396.252.406.573.012.321-.198.47-.364.578h-4.632c-.159-.055-.45-.257-.45-.578 0-.321.258-.513.426-.582z"
        fill="#8badfb"
        stroke="#3456a8"
        strokeWidth={0.05}
        strokeOpacity={0.99}
      />
      <Path
        d="M13.427 21.75c0-4.182-2.575-7.715-5.849-7.933H4.86C1.476 13.926.307 17.611.307 21.86c0 4.249 1.16 7.574 4.543 7.771l.041.011H7.51c3.273-.327 5.917-3.709 5.917-7.892z"
        fill="url(#d)"
      />
      <Path
        d="M4.71 29.576c3.368 0 6.098-3.538 6.098-7.903S8.078 13.77 4.71 13.77s-6.098 3.538-6.098 7.903 2.73 7.903 6.098 7.903z"
        fill="#ffd6ac"
      />
      <Path
        d="M4.396 29.315c3.194 0 5.784-3.393 5.784-7.577 0-4.185-2.59-7.577-5.784-7.577s-5.784 3.392-5.784 7.577c0 4.184 2.59 7.577 5.784 7.577z"
        fill="url(#e)"
      />
      <Path
        d="M3.82 27.624c2.35 0 4.255-2.594 4.255-5.794 0-3.2-1.905-5.794-4.255-5.794-2.35 0-4.255 2.594-4.255 5.794 0 3.2 1.905 5.794 4.255 5.794z"
        fill="url(#f)"
      />
      <Path
        d="M4.08 27.432c2.204 0 3.991-2.478 3.991-5.534 0-3.057-1.787-5.534-3.991-5.534-2.205 0-3.991 2.477-3.991 5.534 0 3.056 1.786 5.534 3.991 5.534z"
        fill="url(#g)"
      />
      <Path
        d="M-1.019 21.3c.198.04.402.042.6.006.166-3.15 2.132-5.637 4.534-5.637 2.422 0 4.4 2.529 4.538 5.717.215.029.434.024.647-.016.214.001.427-.032.63-.1-.282-4.019-2.623-7-5.765-7-3.142 0-5.236 2.8-5.522 6.812a.608.608 0 00.338.218z"
        fill="#fff"
        fillOpacity={0.1}
      />
      <Path
        d="M7.503 21.5c-.107-2.677-1.669-4.8-3.581-4.8s-3.5 2.156-3.583 4.862c2.357.559 4.816.538 7.164-.062z"
        fill="#fff"
        fillOpacity={0.2}
      />
      <Path
        d="M10.025 31.386c0 .211-1.8.382-4.027.382-2.227 0-4.027-.171-4.027-.382s1.8-.382 4.027-.382c2.227 0 4.027.171 4.027.382z"
        fillOpacity={0.1}
      />
    </Svg>
  );
}

export default SvgComponent;
