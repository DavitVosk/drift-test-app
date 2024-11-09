import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.spacers.L};
  gap: ${({theme}) => theme.spacers.L};
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.spacers.S};
`;

export const TokensSectionWrapper = styled.View`
  flex: 1;
  gap: ${({theme}) => theme.spacers.M};
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectTokenTitle = styled.Text`
  font-size: ${({theme}) => theme.spacers.XM};
  line-height: ${({theme}) => theme.spacers.L};
  font-weight: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text.secondary};
`;

export const SmallBalancesWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacers.XS};
`;

export const SmallBalances = styled.Text`
  font-size: ${({theme}) => theme.spacers.M};
  line-height: ${({theme}) => theme.spacers.XM};
  color: ${({theme}) => theme.colors.text.secondary};
`;

export const TokenWrapper = styled.View`
  margin-bottom: ${({theme}) => theme.spacers.XS};
`;
