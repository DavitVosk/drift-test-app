import {Image} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  padding: ${({theme}) => theme.spacers.S};
  justify-content: space-between;
  align-items: center;
  bottomborder: ${({theme}) => theme.spacers.XXXS};
`;

export const TokenInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacers.S};
`;

export const LogoImage = styled(Image)`
  width: ${({theme}) => theme.spacers['2XL']};
  height: ${({theme}) => theme.spacers['2XL']};
`;

export const TokenName = styled.Text`
  flex: 1;
  font-size: ${({theme}) => theme.spacers.XM};
  line-height: ${({theme}) => theme.spacers.L};
  color: ${({theme}) => theme.colors.text.default};
`;

export const TokenAmountInfo = styled.View`
  align-items: flex-end;
`;

export const Amount = styled.Text`
  font-size: ${({theme}) => theme.spacers.XM};
  line-height: ${({theme}) => theme.spacers.L};
  color: ${({theme}) => theme.colors.text.default};
`;
