import * as React from 'react';
import Svg, {
  Defs, LinearGradient, Stop, Rect, Path, G,
} from 'react-native-svg';

/**
 * Blue cityscape banner — replicates the myFPT Profile header background.
 * Buildings + wave silhouettes on a blue gradient.
 */
function ProfileBackground(props) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 375 150"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        {/* Main blue gradient */}
        <LinearGradient id="bg_grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%"   stopColor="#4a85e8" />
          <Stop offset="100%" stopColor="#5b9cf6" />
        </LinearGradient>
        {/* Wave overlay — lighter blue */}
        <LinearGradient id="wave_grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%"   stopColor="#6fa8f7" stopOpacity={0.7} />
          <Stop offset="100%" stopColor="#4a85e8" stopOpacity={0} />
        </LinearGradient>
      </Defs>

      {/* Background fill */}
      <Rect width={375} height={150} fill="url(#bg_grad)" />

      {/* Wave / hill shape */}
      <Path
        d="M0 90 Q80 55 160 80 Q240 105 375 60 L375 150 L0 150 Z"
        fill="#5b9cf6"
        opacity={0.5}
      />
      <Path
        d="M0 105 Q100 70 200 95 Q290 115 375 80 L375 150 L0 150 Z"
        fill="#6faaff"
        opacity={0.3}
      />

      {/* Left building (tall) */}
      <G opacity={0.35} fill="#3a6cc4">
        <Rect x={10} y={55} width={22} height={95} rx={2} />
        {/* windows */}
        <Rect x={14} y={62} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        <Rect x={22} y={62} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        <Rect x={14} y={72} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        <Rect x={22} y={72} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        <Rect x={14} y={82} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        <Rect x={22} y={82} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        {/* short building left */}
        <Rect x={0} y={80} width={14} height={70} rx={2} />
      </G>

      {/* Right buildings */}
      <G opacity={0.3} fill="#3a6cc4">
        {/* tall right */}
        <Rect x={338} y={45} width={25} height={105} rx={2} />
        <Rect x={342} y={52} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        <Rect x={350} y={52} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        <Rect x={342} y={62} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        <Rect x={350} y={62} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        <Rect x={342} y={72} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        <Rect x={350} y={72} width={5} height={5} fill="#7fb3ff" opacity={0.6}/>
        {/* short building right */}
        <Rect x={360} y={70} width={15} height={80} rx={2} />
      </G>
    </Svg>
  );
}

export default ProfileBackground;
