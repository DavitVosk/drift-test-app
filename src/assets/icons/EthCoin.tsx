import * as React from 'react';
import Svg, {
  Path,
  Defs,
  G,
  Rect,
  ClipPath,
  Mask,
  RadialGradient,
  Stop,
} from 'react-native-svg';

const EthCoin = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clip-path="url(#clip0_128_1121)">
      <Mask
        id="mask0_128_1121"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24">
        <Path d="M24 0H0V24H24V0Z" fill="white" />
      </Mask>
      <G mask="url(#mask0_128_1121)">
        <Mask
          id="mask1_128_1121"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24">
          <Path d="M24 0H0V24H24V0Z" fill="white" />
        </Mask>
        <G mask="url(#mask1_128_1121)">
          <Path
            d="M12 24C18.6275 24 24 18.6275 24 12C24 5.37258 18.6275 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6275 5.37258 24 12 24Z"
            fill="#F3F3F3"
          />
          <Path
            d="M11.9984 2.25V9.34597L17.996 12.0259L11.9984 2.25Z"
            fill="#343434"
          />
          <Path
            d="M11.9984 2.25L6 12.0259L11.9984 9.34597V2.25Z"
            fill="#8C8C8C"
          />
          <Path
            d="M11.9984 16.6245V21.4461L18 13.1429L11.9984 16.6245Z"
            fill="#3C3C3B"
          />
          <Path
            d="M11.9984 21.4461V16.6237L6 13.1429L11.9984 21.4461Z"
            fill="#8C8C8C"
          />
          <Path
            d="M11.9984 15.5084L17.996 12.026L11.9984 9.34763V15.5084Z"
            fill="#141414"
          />
          <Path
            d="M6 12.026L11.9984 15.5084V9.34763L6 12.026Z"
            fill="#393939"
          />
        </G>
        <Path
          d="M20.25 7.5C22.3211 7.5 24 5.82107 24 3.75C24 1.67893 22.3211 0 20.25 0C18.1789 0 16.5 1.67893 16.5 3.75C16.5 5.82107 18.1789 7.5 20.25 7.5Z"
          fill="url(#paint0_radial_128_1121)"
        />
        <Path
          d="M20.25 6.5625C21.8033 6.5625 23.0625 5.3033 23.0625 3.75C23.0625 2.1967 21.8033 0.9375 20.25 0.9375C18.6967 0.9375 17.4375 2.1967 17.4375 3.75C17.4375 5.3033 18.6967 6.5625 20.25 6.5625Z"
          fill="url(#paint1_radial_128_1121)"
        />
        <Path
          d="M20.25 5.625C21.2855 5.625 22.125 4.78553 22.125 3.75C22.125 2.71447 21.2855 1.875 20.25 1.875C19.2145 1.875 18.375 2.71447 18.375 3.75C18.375 4.78553 19.2145 5.625 20.25 5.625Z"
          fill="url(#paint2_radial_128_1121)"
        />
      </G>
    </G>
    <Defs>
      <RadialGradient
        id="paint0_radial_128_1121"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20.25 3.75) rotate(90) scale(3.75)">
        <Stop offset="0.739583" stopColor="#49266B" />
        <Stop offset="1" stopColor="#976EC0" />
      </RadialGradient>
      <RadialGradient
        id="paint1_radial_128_1121"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20.25 3.75) rotate(90) scale(2.8125)">
        <Stop offset="0.713542" stopColor="#3E2755" />
        <Stop offset="1" stopColor="#845EAA" />
      </RadialGradient>
      <RadialGradient
        id="paint2_radial_128_1121"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20.25 3.75) rotate(90) scale(1.875)">
        <Stop offset="0.494792" />
        <Stop offset="1" stopColor="#845EAA" />
      </RadialGradient>
      <ClipPath id="clip0_128_1121">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EthCoin;
