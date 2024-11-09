import React, {memo} from 'react';
import {TextStyle} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import * as S from './styles';

interface ColorButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

const ColorButton = ({
  onPress,
  title,
  textStyle,
  fullWidth = false,
}: ColorButtonProps) => {
  const pressed = useSharedValue<boolean>(false);

  const pan = Gesture.Pan()
    .onBegin(() => (pressed.value = true))
    .onFinalize(() => (pressed.value = false));

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{scale: withSpring(pressed.value ? 0.95 : 1)}],
  }));

  return (
    <GestureDetector gesture={pan}>
      <S.Container
        style={animatedStyles}
        start={{x: 0, y: 0}}
        fullWidth={fullWidth}
        end={{x: 1, y: 0}}>
        <S.Wrapper
          onPress={onPress}
          onBlur={() => {
            console.log('on blur');
          }}>
          <S.Title style={textStyle}>{title}</S.Title>
        </S.Wrapper>
      </S.Container>
    </GestureDetector>
  );
};

export default memo(ColorButton);
