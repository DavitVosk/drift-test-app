import {ThemeProvider} from 'styled-components';

import AppNavigation from '@src/navigation';
import {theme} from '@src/constants/theme';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
    </ThemeProvider>
  );
};
