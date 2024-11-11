import {Image, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  height: 96%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalControllers = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.spacers.L};
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.spacers['2XL']};
  line-height: ${({theme}) => theme.spacers['3XL']};
  font-weight: ${({theme}) => theme.fonts.semibold};
  padding-vertical: ${({theme}) => theme.spacers['2XL']};
`;

export const Body = styled.View`
  gap: ${({theme}) => theme.spacers.L};
`;

export const Desc = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.spacers.XM};
  line-height: ${({theme}) => theme.spacers.L};
`;

export const DepositInfoWrapper = styled.View`
  gap: ${({theme}) => theme.spacers.XS};
`;

export const AssetInfo = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.spacers.XS};
  justify-content: space-between;
  align-items: center;
`;

export const AssetAmountTitle = styled.Text`
  color: ${({theme}) => theme.colors.text.secondary};
  font-size: ${({theme}) => theme.spacers.M};
  line-height: ${({theme}) => theme.spacers.L};
  font-weight: ${({theme}) => theme.fonts.medium};
`;

export const AssetAmountWrapper = styled.View`
  border-radius: ${({theme}) => theme.spacers.XXS};
  padding-horizontal: ${({theme}) => theme.spacers.XS};
  background-color: ${({theme}) => theme.colors.background.secondary};
`;

export const AssetVolume = styled.Text`
  color: ${({theme}) => theme.colors.text.secondary};
  font-size: ${({theme}) => theme.spacers.M};
  line-height: ${({theme}) => theme.spacers.L};
  font-weight: ${({theme}) => theme.fonts.medium};
`;

export const AssetPickerRow = styled.View`
  border-width: ${({theme}) => theme.spacers.XXXS};
  border-radius: ${({theme}) => theme.spacers.XXS};
  border-color: ${({theme}) => theme.colors.deepNavyBlue};
  padding-vertical: ${({theme}) => theme.spacers.XS};
  padding-horizontal: ${({theme}) => theme.spacers.S};
  background-color: ${({theme}) => theme.colors.darkNavyBlue};
  flex-direction: row;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacers.S};
  align-items: center;
`;

export const AmountInput = styled(TextInput)`
  padding: 0;
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.spacers.XM};
  line-height: ${({theme}) => theme.spacers.L};
`;

export const AmountInputWrapper = styled(Pressable)`
  flex: 1;
  align-items: flex-end;
`;

export const HorizontalDivider = styled.View`
  width: 100%;
  height: ${({theme}) => theme.spacers.XXXS};
  background-color: ${({theme}) => theme.colors.darkNavyBlue};
`;

export const AssetBalanceWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacers.XS};
`;

export const AssetBalanceOnDrift = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${({theme}) => theme.spacers.XS};
`;

export const AssetBalance = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.spacers.M};
  line-height: ${({theme}) => theme.spacers.L};
`;

export const TokenNameWrapper = styled(Pressable)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacers.XS};
`;

export const LogoImage = styled(Image)`
  width: ${({theme}) => theme.spacers.L};
  height: ${({theme}) => theme.spacers.L};
`;

export const TokenName = styled.Text`
  font-size: ${({theme}) => theme.spacers.XM};
  line-height: ${({theme}) => theme.spacers.L};
  color: ${({theme}) => theme.colors.text.default};
  font-weight: ${({theme}) => theme.fonts.medium};
`;
