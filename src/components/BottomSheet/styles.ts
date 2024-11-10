import styled from 'styled-components/native';

export const Content = styled.View`
  border-top-left-radius: ${({theme}) => theme.spacers.M};
  border-top-right-radius: ${({theme}) => theme.spacers.M};
  padding: ${({theme}) => theme.spacers.L};
  background-color: ${({theme}) => theme.colors.background.container};
`;
