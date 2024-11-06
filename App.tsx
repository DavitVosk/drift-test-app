import {ThemeProvider} from 'styled-components';

import AppNavigation from '@src/navigation';
import {theme} from '@src/constants/theme';
import {StatusBar} from 'react-native';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <AppNavigation />
    </ThemeProvider>
  );
};
