import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackArrow = () => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.53033 15.5303C8.23744 15.8232 7.76256 15.8232 7.46967 15.5303L0.469671 8.53033C0.176778 8.23744 0.176778 7.76256 0.469671 7.46967L7.46967 0.46967C7.76256 0.176776 8.23744 0.176776 8.53033 0.46967C8.82322 0.762562 8.82322 1.23744 8.53033 1.53033L2.81066 7.25L15 7.25C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75L2.81066 8.75L8.53033 14.4697C8.82322 14.7626 8.82322 15.2374 8.53033 15.5303Z"
      fill="#6683A7"
    />
  </Svg>
);

export default BackArrow;
