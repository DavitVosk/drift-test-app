import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const SuccessWrapper = styled.View`
  width: 90%;
  border: ${({theme}) => theme.spacers.XXXS};
  border-radius: ${({theme}) => theme.spacers.XS};
  border-color: ${({theme}) => theme.colors.darkNavyBlue};
  background-color: ${({theme}) => theme.colors.background.container};
  padding: ${({theme}) => `${theme.spacers.M} ${theme.spacers.L}`};
  gap: ${({theme}) => theme.spacers.M};
  overflow: hidden;
`;

export const SuccessTitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacers.XS};
`;

export const SuccessTitle = styled.Text`
  font-size: ${({theme}) => theme.spacers.M};
  line-height: ${({theme}) => theme.spacers.L};
  color: ${({theme}) => theme.colors.text.default};
  font-weight: ${({theme}) => theme.fonts.medium};
`;

export const SuccessAction = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacers.XXS};
`;

export const SuccessDesc = styled.Text`
  font-size: ${({theme}) => theme.spacers.M};
  line-height: ${({theme}) => theme.spacers.L};
  color: ${({theme}) => theme.colors.text.positive};
  font-weight: ${({theme}) => theme.fonts.medium};
`;
