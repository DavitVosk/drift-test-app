import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Wrapper = styled(AnimatedPressable)`
  flex: 1;
  padding: ${({theme}) => `${theme.spacers.S} ${theme.spacers.M}`};
  background-color: ${({theme}) => theme.colors.background.secondary};
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.spacers.XM};
  line-height: ${({theme}) => theme.spacers.L};
  font-weight: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text.default};
`;
