import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  ClipPath,
} from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={49}
      height={48}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_68_35)">
        <Path
          d="M49 23.5a24.5 24.5 0 11-49 0 24.5 24.5 0 0149 0z"
          fill="#DFE8F5"
        />
        <Path
          fill="url(#paint0_linear_68_35)"
          d="M23.4592 9.00053H27.27876V14.50076H23.4592z"
        />
        <Path
          d="M24.796 11.824l1.092-.508a.7.7 0 01.751.1l.898.782a.695.695 0 00.567.158l1.197-.197a.683.683 0 01.69.297l.628.99c.107.17.292.281.497.305l1.206.132c.275.03.505.216.575.471l.31 1.117c.053.19.196.348.387.423l1.12.451c.254.1.416.343.408.603l-.032 1.155a.633.633 0 00.244.514l.942.73a.622.622 0 01.214.69l-.377 1.1a.614.614 0 00.083.556l.685.953a.603.603 0 010 .72l-.685.953a.606.606 0 00-.083.557l.377 1.098a.62.62 0 01-.214.691l-.942.732a.635.635 0 00-.244.511l.032 1.155a.636.636 0 01-.408.606l-1.12.449a.645.645 0 00-.387.425l-.31 1.115a.67.67 0 01-.575.473l-1.207.132a.667.667 0 00-.496.304l-.628.988a.684.684 0 01-.69.3l-1.197-.199a.7.7 0 00-.567.158l-.898.783a.7.7 0 01-.75.1l-1.093-.51a.71.71 0 00-.592 0l-1.092.51a.704.704 0 01-.751-.1l-.896-.783a.707.707 0 00-.569-.158l-1.197.198a.684.684 0 01-.69-.299l-.628-.988a.67.67 0 00-.497-.304l-1.207-.132a.667.667 0 01-.574-.473l-.31-1.115a.64.64 0 00-.387-.425l-1.12-.45a.636.636 0 01-.408-.605l.032-1.155a.63.63 0 00-.244-.511l-.942-.732c-.212-.165-.298-.44-.212-.69l.375-1.1a.617.617 0 00-.082-.556l-.686-.954a.603.603 0 010-.718l.686-.954a.603.603 0 00.082-.555l-.375-1.1a.62.62 0 01.212-.692l.942-.73a.638.638 0 00.244-.513l-.032-1.155a.635.635 0 01.409-.603l1.119-.45a.642.642 0 00.387-.424l.31-1.117a.668.668 0 01.574-.471l1.207-.132a.678.678 0 00.497-.304l.628-.99a.683.683 0 01.69-.298l1.197.197a.7.7 0 00.57-.158l.895-.781a.693.693 0 01.75-.101l1.093.508a.697.697 0 00.592 0z"
          fill="#598EEF"
        />
        <Path
          d="M35.382 22.828a9.777 9.777 0 01-.903 4.136 10.219 10.219 0 01-2.56 3.403c-1.902 1.668-4.444 2.692-7.234 2.699-2.796.009-5.345-.996-7.26-2.653-.492-.425-.944-.895-1.347-1.4a9.994 9.994 0 01-1.704-3.175 9.69 9.69 0 01-.464-2.933c-.017-5.636 4.773-10.218 10.7-10.238 5.929-.02 10.751 4.529 10.772 10.161z"
          fill="url(#paint1_radial_68_35)"
        />
        <Path
          d="M33.001 23.073c.185-4.553-3.51-8.389-8.25-8.566-4.745-.18-8.74 3.369-8.924 7.92-.187 4.553 3.508 8.389 8.25 8.568 4.743.177 8.74-3.369 8.924-7.922z"
          fill="url(#paint2_linear_68_35)"
        />
        <Path
          d="M24.411 23.425v-.003l-3.336 1.098-3.337-3.283h-.008l.005-.002-.005-.003.01.003 4.61-.677 2.064-4.224v.698-.698l2.07 4.224 4.614.674-3.34 3.288-3.344-1.095h-.003zm.003-.117v-.003.115-.112zm4.134 5.86l-.79-4.648-3.339-1.092h-.002l-3.342 1.098-.787 4.631-.005.01.002-.004v.005l.008-.01 4.121-2.189v.006l4.134 2.193z"
          fill="url(#paint3_linear_68_35)"
        />
        <Path
          d="M27.254-2.967L21.549 9.006h9.028V7.078L33.98-.047l-3.877-.16-2.85-2.76z"
          fill="#6194FA"
        />
        <Path
          d="M29.45 6.995h-5.809L27.825-2 29.92.183l3.134-.185-3.603 6.997z"
          fill="url(#paint4_linear_68_35)"
        />
        <Path
          d="M23.166-2.96l6.052 12.01H19.34c-.077-.162.075-1.842 0-1.998-1.424-2.986-1.734-3.938-3.277-7.172l4.075-.115 3.029-2.725z"
          fill="url(#paint5_linear_68_35)"
        />
        <Path
          d="M20.543 6.83L17.098-.003l3.18.1L22.585-2l4.195 8.83h-6.238z"
          fill="url(#paint6_linear_68_35)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_68_35"
          x1={25.3689}
          y1={9.00053}
          x2={25.3689}
          y2={14.5008}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.490385} stopColor="#0F4FC3" />
          <Stop offset={0.995192} stopColor="#07265D" />
        </LinearGradient>
        <RadialGradient
          id="paint1_radial_68_35"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 -10.1993 10.7359 0 24.646 22.867)"
        >
          <Stop offset={0.774038} stopColor="#3F6099" />
          <Stop offset={0.975962} stopColor="#69A0FF" />
        </RadialGradient>
        <LinearGradient
          id="paint2_linear_68_35"
          x1={24.4141}
          y1={14.5007}
          x2={24.4141}
          y2={31.0014}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#144BC0" />
          <Stop offset={0.894231} stopColor="#09235A" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_68_35"
          x1={24.4141}
          y1={16.3341}
          x2={24.4141}
          y2={29.1679}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E9D46C" />
          <Stop offset={1} stopColor="#EB6923" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_68_35"
          x1={28.8707}
          y1={-1.00103}
          x2={28.3722}
          y2={7.02518}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5893FE" />
          <Stop offset={1} stopColor="#1D58CD" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_68_35"
          x1={22.6906}
          y1={-2.9628}
          x2={22.6229}
          y2={9.06905}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.730769} stopColor="#6194FA" />
          <Stop offset={1} stopColor="#395894" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_68_35"
          x1={21.9763}
          y1={-2.00418}
          x2={21.9265}
          y2={6.8372}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3C75EA" />
          <Stop offset={1} stopColor="#1D58CD" />
        </LinearGradient>
        <ClipPath id="clip0_68_35">
          <Path fill="#fff" d="M0 0H49V48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
