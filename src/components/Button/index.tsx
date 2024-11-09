import React, {memo} from 'react';

import * as S from './styles';
import {TextStyle} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: TextStyle;
}

const Button = ({onPress, title, textStyle}: ButtonProps) => {
  return (
    <S.Wrapper onPress={onPress}>
      <S.Title style={textStyle}>{title}</S.Title>
    </S.Wrapper>
  );
};

export default memo(Button);
