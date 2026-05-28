import * as React from 'react';
import Svg, {
  Defs, LinearGradient, Stop, Rect, Path, G, Circle,
} from 'react-native-svg';

/**
 * Blue cityscape banner — replicates the myFPT Profile header background (ảnh Khang).
 * Dark blue buildings on each side + white wave silhouette in the middle.
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
        <LinearGradient id="bg_grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%"   stopColor="#4a7fe8" />
          <Stop offset="50%"  stopColor="#5b8ff5" />
          <Stop offset="100%" stopColor="#4a7fe8" />
        </LinearGradient>
      </Defs>

      {/* Sky background */}
      <Rect width={375} height={150} fill="url(#bg_grad)" />

      {/* ── LEFT BUILDINGS ── */}
      <G opacity={0.28} fill="#1a4fa0">
        {/* Far-left tiny building */}
        <Rect x={0}  y={90} width={12} height={60} />
        {/* Short building */}
        <Rect x={12} y={75} width={20} height={75} />
        {/* Tall main left building */}
        <Rect x={30} y={40} width={28} height={110} />
        {/* Antenna */}
        <Rect x={42} y={30} width={3}  height={12} />
        {/* Side small */}
        <Rect x={56} y={65} width={16} height={85} />
      </G>
      {/* Left building windows */}
      <G opacity={0.4} fill="#7fb8ff">
        <Rect x={33} y={48}  width={6} height={5} />
        <Rect x={42} y={48}  width={6} height={5} />
        <Rect x={33} y={58}  width={6} height={5} />
        <Rect x={42} y={58}  width={6} height={5} />
        <Rect x={33} y={68}  width={6} height={5} />
        <Rect x={42} y={68}  width={6} height={5} />
      </G>

      {/* ── RIGHT BUILDINGS ── */}
      <G opacity={0.28} fill="#1a4fa0">
        {/* Far-right tiny */}
        <Rect x={363} y={90} width={12} height={60} />
        {/* Short right */}
        <Rect x={343} y={75} width={20} height={75} />
        {/* Tall main right building */}
        <Rect x={317} y={40} width={28} height={110} />
        {/* Antenna */}
        <Rect x={330} y={30} width={3}  height={12} />
        {/* Side small right */}
        <Rect x={303} y={65} width={16} height={85} />
      </G>
      {/* Right building windows */}
      <G opacity={0.4} fill="#7fb8ff">
        <Rect x={320} y={48} width={6} height={5} />
        <Rect x={329} y={48} width={6} height={5} />
        <Rect x={320} y={58} width={6} height={5} />
        <Rect x={329} y={58} width={6} height={5} />
        <Rect x={320} y={68} width={6} height={5} />
        <Rect x={329} y={68} width={6} height={5} />
      </G>

      {/* ── WHITE WAVE in the middle ── */}
      <Path
        d="M80 95 Q140 55 187 85 Q230 115 295 75 L375 80 L375 150 L0 150 L0 100 Z"
        fill="#ffffff"
        opacity={0.18}
      />
      <Path
        d="M0 110 Q90 75 187 100 Q270 120 375 90 L375 150 L0 150 Z"
        fill="#ffffff"
        opacity={0.12}
      />
    </Svg>
  );
}

export default ProfileBackground;
