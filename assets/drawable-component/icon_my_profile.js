import * as React from "react"
import Svg, { LinearGradient, Stop, Path } from "react-native-svg"

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
        id="myprofile_a"
        x1={10.0647}
        y1={11.3339}
        x2={17.8583}
        y2={23.9935}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <LinearGradient
        id="myprofile_b"
        x1={10.065}
        y1={0.857}
        x2={14.6101}
        y2={15.7761}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#5597ff" />
        <Stop offset={1} stopColor="#185ece" />
      </LinearGradient>
      <Path
        d="M16.673 13.202a12.63 12.63 0 00-13.221 0 2.589 2.589 0 00-1.179 2.183v3.706h15.584v-3.706a2.59 2.59 0 00-1.184-2.183z"
        fill="url(#myprofile_a)"
      />
      <Path
        d="M13.279 2.24a4.545 4.545 0 11-6.428 0 4.545 4.545 0 016.428 0"
        fill="url(#myprofile_b)"
      />
    </Svg>
  )
}

export default SvgComponent
