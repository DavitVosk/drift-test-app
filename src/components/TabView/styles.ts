import styled from 'styled-components/native';
import {TabBar} from 'react-native-tab-view';

export const StylesTabBar = styled(TabBar)`
  background-color: transparent;
`;

export const Indicator = styled.View`
  width: ${({theme}) => theme.spacers.XXS};
`;
