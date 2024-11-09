import React, {memo} from 'react';
import {TextStyle} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import * as S from './styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: TextStyle;
}

const Button = ({onPress, title, textStyle}: ButtonProps) => {
  const pressed = useSharedValue<boolean>(false);

  const pan = Gesture.Pan()
    .onBegin(() => (pressed.value = true))
    .onFinalize(() => (pressed.value = false));

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{scale: withSpring(pressed.value ? 0.95 : 1)}],
  }));

  return (
    <GestureDetector gesture={pan}>
      <S.Wrapper onPress={onPress} style={animatedStyles}>
        <S.Title style={textStyle}>{title}</S.Title>
      </S.Wrapper>
    </GestureDetector>
  );
};

export default memo(Button);
