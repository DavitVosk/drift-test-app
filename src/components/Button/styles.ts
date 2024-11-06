import {TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {css} from 'styled-components';
import styled from 'styled-components/native';

export const Wrapper = styled(TouchableHighlight).attrs(() => ({
  underlayColor: 'transparent',
}))`
  padding: ${({theme}) => `${theme.spacers.M} ${theme.spacers.L}`};
  align-items: center;
`;

export const Container = styled(LinearGradient)<{fullWidth: boolean}>`
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
`;
