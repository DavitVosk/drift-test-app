import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const RightArrow = ({color}: typeof SvgProps) => (
  <Svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.64649 0.979779C5.84175 0.784517 6.15833 0.784517 6.35359 0.979779L11.0203 5.64645C11.2155 5.84171 11.2155 6.15829 11.0203 6.35355L6.35359 11.0202C6.15833 11.2155 5.84175 11.2155 5.64649 11.0202C5.45123 10.825 5.45123 10.5084 5.64649 10.3131L9.4596 6.5H1.33337C1.05723 6.5 0.833374 6.27614 0.833374 6C0.833374 5.72386 1.05723 5.5 1.33337 5.5H9.4596L5.64649 1.68689C5.45123 1.49162 5.45123 1.17504 5.64649 0.979779Z"
      fill={color}
    />
  </Svg>
);

export default RightArrow;
