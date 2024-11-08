import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding-top: ${({theme}) => theme.spacers.L};
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
  margin-top: ${({theme}) => theme.spacers.L};
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
  width: 1px;
  background-color: ${({theme}) => theme.colors.darkNavyBlue};
  gap: ${({theme}) => theme.spacers.XS};
  align-items: center;
`;
