import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <LinearGradient
        id="admin_a"
        x1={6.289}
        y1={9.316}
        x2={10.937}
        y2={27.179}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="admin_b"
        x1={7.465}
        y1={0}
        x2={11.563}
        y2={13.375}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="admin_c"
        x1={14.896}
        y1={9.223}
        x2={20.531}
        y2={26.639}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <Path
        d="M12.418 19.129l-.203-.117-.41.176a1.729 1.729 0 01-2.176-.727l-.703-1.219a1.733 1.733 0 01.461-2.25l.355-.265v-.118-.117l-.355-.265a1.738 1.738 0 01-.461-2.25l.703-1.219c.211-.363.543-.637.937-.77a7.404 7.404 0 00-3.101-.672A7.462 7.462 0 000 16.777v2.164C0 19.527.473 20 1.059 20h11.519a1.74 1.74 0 01-.109-.43l-.051-.441z"
        fill="url(#admin_a)"
      />
      <Path
        d="M7.465 8.195A4.097 4.097 0 107.466 0a4.097 4.097 0 00-.001 8.195z"
        fill="url(#admin_b)"
      />
      <Path
        d="M19.746 15.867l-.84-.629c.067-.414.067-.84 0-1.254l.84-.628a.638.638 0 00.168-.829l-.703-1.218a.633.633 0 00-.801-.266l-.965.41a4.11 4.11 0 00-1.086-.629l-.125-1.043a.634.634 0 00-.633-.558h-1.41a.64.64 0 00-.632.558l-.125 1.043a4.048 4.048 0 00-1.086.629l-.965-.41a.638.638 0 00-.801.266l-.703 1.218a.64.64 0 00.168.829l.84.628c-.067.414-.067.84 0 1.254l-.84.629a.639.639 0 00-.168.828l.703 1.219a.64.64 0 00.801.27l.965-.414a4.08 4.08 0 001.086.628l.125 1.043a.633.633 0 00.632.559h1.41a.64.64 0 00.633-.559l.125-1.043a4.08 4.08 0 001.086-.628l.965.41a.636.636 0 00.801-.27l.703-1.219a.634.634 0 00-.168-.824zm-4.852.266a1.526 1.526 0 01-1.523-1.524c0-.84.684-1.523 1.523-1.523.84 0 1.524.683 1.524 1.523 0 .84-.684 1.524-1.524 1.524z"
        fill="url(#admin_c)"
      />
    </Svg>
  );
}

export default SvgComponent;
