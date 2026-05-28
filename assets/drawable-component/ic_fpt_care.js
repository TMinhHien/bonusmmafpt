import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path, Rect } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={48.001}
      height={48}
      viewBox="-10.157 -10.194 52.503 52.425"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="fptcare_b"
          x1={16.269}
          y1={12.049}
          x2={16.269}
          y2={14.536}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#f6d43b" />
          <Stop offset={1} stopColor="#917900" />
        </LinearGradient>
        <LinearGradient
          id="fptcare_a"
          x1={16.1}
          y1={7.459}
          x2={16.1}
          y2={17.291}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#4a8bfc" />
          <Stop offset={1} stopColor="#0055ae" />
        </LinearGradient>
      </Defs>
      <Path
        d="M-10.002 16.014c0-20.017 21.668-32.528 39.004-22.519a26.002 26.002 0 0113 22.519c0 20.017-21.668 32.528-39.004 22.519a26.002 26.002 0 01-13-22.519"
        fill="#dfe8f5"
      />
      <Rect
        x={4.488}
        y={5.227}
        width={24.004}
        height={6.247}
        fill="#154bbf"
        rx={3.124}
        ry={3.124}
      />
      <Rect
        x={-0.403}
        y={7.84}
        width={33.005}
        height={19.664}
        fill="url(#fptcare_a)"
        rx={2.759}
        ry={2.759}
      />
      <Path fill="url(#fptcare_b)" d="M-0.306 9.908H32.664V14.728H-0.306z" />
      <Path
        d="M5.217 15.601h2.565v2.874h2.902v2.566H7.782v2.874H5.217v-2.874H2.315v-2.566h2.902z"
        fill="#d8d8d8"
      />
      <Path
        d="M16.604 20.851h5.897c.205 0 .372.221.372.493s-.167.491-.372.491h-5.897c-.205 0-.374-.219-.374-.491s.169-.493.374-.493zM16.67 18.259l9.268.008c.317.061.364.213.384.485.02.272-.089.399-.398.491H16.63c-.295-.047-.4-.219-.4-.491s.129-.434.44-.493z"
        fill="#8badfb"
        stroke="#3456a8"
        strokeWidth={0.05}
        strokeOpacity={0.99}
      />
    </Svg>
  )
}

export default SvgComponent
