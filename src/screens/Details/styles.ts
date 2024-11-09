import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.primary};
  padding-top: ${({theme}) => theme.spacers.L};
  gap: ${({theme}) => theme.spacers.L};
`;

export const Header = styled.View`
  padding-horizontal: ${({theme}) => theme.spacers.L};
  flex-direction: row;
  justify-content: space-between;
`;

export const PublicKeyWrapper = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.spacers.S};
  align-items: center;
`;

export const PublicKey = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.spacers.L};
  line-height: ${({theme}) => theme.spacers.XL};
`;

export const BalancesWrapper = styled.View`
  padding-horizontal: ${({theme}) => theme.spacers.L};
  flex-direction: row;
  gap: ${({theme}) => theme.spacers.M};
`;

export const BalanceInfo = styled.View`
  gap: ${({theme}) => theme.spacers.XS};
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.spacers.XS};
  align-items: center;
`;

export const AccountName = styled.Text`
  color: ${({theme}) => theme.colors.text.secondary};
  font-size: ${({theme}) => theme.spacers.M};
`;

export const VerticalDivider = styled.View`
  width: ${({theme}) => theme.spacers.XXXS};
  background-color: ${({theme}) => theme.colors.darkNavyBlue};
`;

export const HorizontalDivider = styled.View`
  width: 100%;
  height: ${({theme}) => theme.spacers.XXXS};
  background-color: ${({theme}) => theme.colors.darkNavyBlue};
`;

export const Amount = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.spacers.XL};
  font-weight: ${({theme}) => theme.fonts.medium};
`;

export const ButtonWrapper = styled.View`
  padding-horizontal: ${({theme}) => theme.spacers.L};
`;
