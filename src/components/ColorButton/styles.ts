import {Pressable} from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import {css} from 'styled-components';
import styled from 'styled-components/native';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const Wrapper = styled(Pressable)`
  padding: ${({theme}) => `${theme.spacers.M} ${theme.spacers.L}`};
  align-items: center;
`;

export const Container = styled(AnimatedLinearGradient).attrs<
  Partial<LinearGradientProps> & {fullWidth: boolean}
>(({theme}) => ({
  colors: [
    theme.colors.blushPink,
    theme.colors.lavenderPurple,
    theme.colors.aquaBlue,
  ],
}))`
  align-self: center;
  ${({fullWidth}) =>
    fullWidth &&
    css`
      width: 100%;
    `};
  border-radius: ${({theme}) => theme.spacers.XS};
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.spacers.L};
  line-height: ${({theme}) => theme.spacers.XL};
  font-weight: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text.primary};
`;
