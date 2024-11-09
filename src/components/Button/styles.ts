import {Pressable} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(Pressable)`
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
