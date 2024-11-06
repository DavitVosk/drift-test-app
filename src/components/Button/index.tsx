import React, { memo } from 'react';

import * as S from './styles';
import {TextStyle} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

const Button = ({
  onPress,
  title,
  textStyle,
  fullWidth = false,
}: ButtonProps) => {
  return (
    <S.Container
      start={{x: 0, y: 0}}
      fullWidth={fullWidth}
      end={{x: 1, y: 0}}>
      <S.Wrapper onPress={onPress}>
        <S.Title style={textStyle}>{title}</S.Title>
      </S.Wrapper>
    </S.Container>
  );
};

export default memo(Button);
