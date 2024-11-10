import * as React from 'react';
import Svg, {
  Path,
  Defs,
  G,
  Rect,
  ClipPath,
  Circle,
  Mask,
  RadialGradient,
  Stop,
} from 'react-native-svg';

const BtcCoin = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="12" fill="#F7931A" />
    <Path
      d="M16.7115 8.8632C16.529 7.25903 15.1325 6.74457 13.3785 6.62171L13.3396 4.39284L11.9829 4.41666L12.0209 6.58678C11.6642 6.59306 11.2998 6.60646 10.9377 6.62001L10.8998 4.43552L9.54379 4.45915L9.58218 6.68739C9.28856 6.69851 9.0002 6.709 8.71893 6.7141L8.71863 6.70719L6.84741 6.73922L6.87306 8.1882C6.87306 8.1882 7.87459 8.15161 7.85826 8.17035C8.4078 8.16093 8.59222 8.47683 8.64905 8.75123L8.69349 11.2904C8.73142 11.2899 8.78091 11.2906 8.83706 11.2973C8.79186 11.2982 8.74348 11.2987 8.69374 11.3L8.75549 14.8571C8.73439 15.0305 8.63755 15.308 8.25362 15.3154C8.27125 15.3304 7.26741 15.3323 7.26741 15.3323L7.02613 16.9573L8.79167 16.9264C9.12023 16.921 9.4436 16.921 9.76101 16.9174L9.80093 19.1717L11.1562 19.1482L11.1172 16.9178C11.4894 16.919 11.8496 16.9157 12.2012 16.9092L12.2393 19.1294L13.596 19.1055L13.5572 16.8553C15.8357 16.6846 17.4221 16.0821 17.583 13.9368C17.7129 12.2093 16.8882 11.4539 15.588 11.1656C16.3676 10.7513 16.847 10.037 16.7115 8.8632ZM14.8976 13.7164C14.9277 15.401 12.0399 15.2598 11.1204 15.2767L11.0686 12.2899C11.9884 12.2741 14.867 11.9593 14.8976 13.7164ZM14.193 9.51357C14.2193 11.0462 11.8106 10.9094 11.0447 10.9228L10.9975 8.21397C11.7634 8.20054 14.1649 7.91499 14.193 9.51357Z"
      fill="white"
    />
    <G clipPath="url(#clip0_2_64421)">
      <Mask
        id="mask0_2_64421"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24">
        <Path d="M24 0H0V24H24V0Z" fill="white" />
      </Mask>
      <G mask="url(#mask0_2_64421)">
        <Path
          d="M20.25 7.5C22.3211 7.5 24 5.82107 24 3.75C24 1.67893 22.3211 0 20.25 0C18.1789 0 16.5 1.67893 16.5 3.75C16.5 5.82107 18.1789 7.5 20.25 7.5Z"
          fill="url(#paint0_radial_2_64421)"
        />
        <Path
          d="M20.25 6.5625C21.8033 6.5625 23.0625 5.3033 23.0625 3.75C23.0625 2.1967 21.8033 0.9375 20.25 0.9375C18.6967 0.9375 17.4375 2.1967 17.4375 3.75C17.4375 5.3033 18.6967 6.5625 20.25 6.5625Z"
          fill="url(#paint1_radial_2_64421)"
        />
        <Path
          d="M20.25 5.625C21.2855 5.625 22.125 4.78553 22.125 3.75C22.125 2.71447 21.2855 1.875 20.25 1.875C19.2145 1.875 18.375 2.71447 18.375 3.75C18.375 4.78553 19.2145 5.625 20.25 5.625Z"
          fill="url(#paint2_radial_2_64421)"
        />
      </G>
    </G>
    <Defs>
      <RadialGradient
        id="paint0_radial_2_64421"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20.25 3.75) rotate(90) scale(3.75)">
        <Stop offset="0.739583" stopColor="#49266B" />
        <Stop offset="1" stopColor="#976EC0" />
      </RadialGradient>
      <RadialGradient
        id="paint1_radial_2_64421"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20.25 3.75) rotate(90) scale(2.8125)">
        <Stop offset="0.713542" stopColor="#3E2755" />
        <Stop offset="1" stopColor="#845EAA" />
      </RadialGradient>
      <RadialGradient
        id="paint2_radial_2_64421"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20.25 3.75) rotate(90) scale(1.875)">
        <Stop offset="0.494792" />
        <Stop offset="1" stopColor="#845EAA" />
      </RadialGradient>
      <ClipPath id="clip0_2_64421">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BtcCoin;
