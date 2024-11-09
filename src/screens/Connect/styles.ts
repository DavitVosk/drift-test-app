import {ImageBackground, Linking} from 'react-native';
import styled from 'styled-components/native';

import HighlightText, {HighlightTextProps} from '@src/components/HighlightText';
import {DRIFT_PROTOCOL, DRIFT_TERMS_AND_CONDITIONS} from '@src/constants/links';

export const StyledBgImage = styled(ImageBackground)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.primary};
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  gap: ${({theme}) => theme.spacers['2XL']};
  padding-horizontal: ${({theme}) => theme.spacers.L};
  padding-bottom: ${({theme}) => theme.spacers['4XL']};
`;

export const Text = styled(HighlightText).attrs<Partial<HighlightTextProps>>(
  ({theme}) => ({
    highlights: [
      {
        substring: 'Drift Terms and Conditions',
        style: {
          color: theme.colors.lightPurple,
          fontWeight: theme.fonts.medium,
        },
        onPress: () => Linking.openURL(DRIFT_TERMS_AND_CONDITIONS),
      },
      {
        substring: 'Drift Protocol Disclaimer.',
        style: {
          color: theme.colors.lightPurple,
          fontWeight: theme.fonts.medium,
        },
        onPress: () => Linking.openURL(DRIFT_PROTOCOL),
      },
    ],
  }),
)`
  text-align: center;
`;
