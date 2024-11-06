import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';

export const StyledBgImage = styled(ImageBackground)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
