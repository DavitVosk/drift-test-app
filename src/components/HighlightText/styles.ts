import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${({theme}) => theme.spacers.M};
  line-height: ${({theme}) => theme.spacers.XL};
  font-weight: ${({theme}) => theme.fonts.normal};
  color: ${({theme}) => theme.colors.secondary};
`;
