import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const ItemWrapper = styled(TouchableOpacity)<{selected: boolean}>`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacers.M};
  background-color: ${({theme, selected}) =>
    selected ? theme.colors.text.secondary : 'transparent'};
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: ${({theme}) => theme.spacers.XL};
  border-radius: ${({theme}) => theme.spacers.S};
  gap: ${({theme}) => theme.spacers.M};
`;

export const ItemText = styled.Text<{selected: boolean}>`
  font-size: ${({theme}) => theme.spacers.XM};
  line-height: ${({theme}) => theme.spacers.L};
  font-weight: ${({theme}) => theme.fonts.medium};
  color: ${({theme, selected}) =>
    selected ? theme.colors.text.default : theme.colors.darkNavyBlue};
`;

export const LogoImage = styled(Image)`
  width: ${({theme}) => theme.spacers.L};
  height: ${({theme}) => theme.spacers.L};
`;
