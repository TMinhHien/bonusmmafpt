import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={49}
      height={49}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M49 24.5a24.5 24.5 0 11-49 0 24.5 24.5 0 0149 0z"
        fill="#DFE8F5"
      />
      <Path
        d="M49 24.5a24.5 24.5 0 11-49 0 24.5 24.5 0 0149 0z"
        fill="#DFE8F5"
      />
      <Path
        d="M49 24.5a24.5 24.5 0 11-49 0 24.5 24.5 0 0149 0z"
        fill="#DFE8F5"
      />
      <Path
        d="M26.5 31.5L28 38h-7.5l1-6.5h5z"
        fill="url(#paint0_linear_68_37)"
      />
      <Path d="M10 19h28.5l-.062 8H10v-8z" fill="url(#paint1_linear_68_37)" />
      <Path d="M23.5 13h2v2.5h-2V13z" fill="#9A8329" />
      <Path
        d="M11.5 32h24.694c1.01 0 1.977-.198 2.69-.549.273-.134.5-.286.676-.451.645-.155.95-.715.94-1-.01-.285 0-.5 0-.5V29v-.5c0 .134 0-.127 0 0V28c0-.158 0-1-.5-1H8.5C8 27 8 28 8 28v1.5l.5.5s.286 1.149 1 1.5.99.5 2 .5z"
        fill="url(#paint2_linear_68_37)"
      />
      <Path
        d="M19 39.5h9.5c.34 0 .76.07 1 0 .092-.027.198-.31.257-.344.217-.03.171-.499.168-.556-.003-.057 0-.1 0-.1v-.1c0-.02.168-.1 0-.1 0 .027 0-.025 0 0V38c0-.032-.168 0-.168 0H19c-.417 0-.362-.138-.5 0s-.067.317 0 .5c.09.247-.24.43 0 .5s.16.5.5.5z"
        fill="#062259"
      />
      <Path
        d="M38.5 18l-25.35.038c-.148 0-.488-.05-.625 0-.136.05-.395-.093-.5 0-.104.093-1.943-.121-2 0-.056.122 0 .369 0 .5v2c0 .53 1.5 2 2 2 .422.375 1.403.5 2 .5s1.5-.5 2-1c.422-.375.5-.47.5-1 0 .53.5 1 1 1 .422.375.903.5 1.5.5s1.578-.125 2-.5c.422-.375 1.5-.97 1.5-1.5 0 .53.578 1.125 1 1.5.422.375.903.5 1.5.5.242 0 1.226-.336 1.5-.5.403-.24.5-.5.5-.5.422-.375.5-.47.5-1 0 .53.553 1.087.975 1.462.422.375 1.403.5 2 .5s1.078-.125 1.5-.5c.422-.375.5-.47.5-1-.03.058.307.828.5 1 .193.172.472.528.5.5.39.195 1.11.134 1.5 0 0 0 1.605-.407 1.5-.5.138.066 1-.5 1-.5s.393-.167.5-.5c.048-.15.441-.315.5-.5.042-.133-.044-.359 0-.5 0-1 .082-2 0-2z"
        fill="#B6CAF6"
      />
      <Path
        d="M35.5 15h-22c-.929 0-1.818.198-2.475.549-.656.351-1.024.827-1.025 1.324V20h28.5v-3c0-.497-.343-1.149-1-1.5s-1.072-.5-2-.5z"
        fill="#B6CAF6"
      />
      <Path
        d="M24.503 14a2.59 2.59 0 001.766-.682c.468-.437.731-1.03.731-1.647a2.22 2.22 0 00-.356-1.202L24.504 7l-2.148 3.46a2.22 2.22 0 00-.168 2.097c.125.284.31.542.542.76.233.217.51.39.814.507.304.117.63.177.96.176z"
        fill="url(#paint3_linear_68_37)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_68_37"
          x1={24.25}
          y1={31.5}
          x2={24.25}
          y2={38}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.490357} stopColor="#0D48BF" />
          <Stop offset={1} stopColor="#062259" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_68_37"
          x1={24.4964}
          y1={21.5}
          x2={24.5032}
          y2={28.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4B72D3" />
          <Stop offset={0.615385} stopColor="#0C53E1" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_68_37"
          x1={24.5}
          y1={32}
          x2={24.5}
          y2={26.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.581731} stopColor="#0D48BF" />
          <Stop offset={1} stopColor="#062259" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_68_37"
          x1={24.5}
          y1={7}
          x2={24.5}
          y2={13.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.350962} stopColor="#E6BF24" />
          <Stop offset={1} stopColor="#9A8329" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
