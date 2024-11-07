import {ThemeProvider} from 'styled-components';
import {clusterApiUrl} from '@solana/web3.js';
import {StatusBar} from 'react-native';

import AppNavigation from '@src/navigation';
import {theme} from '@src/constants/theme';
import {RPC_ENDPOINT} from '@src/constants/appConfigs';
import {AuthProvider} from '@src/contexts/Auth';
import {ConnectionProvider} from '@src/contexts/Connection';

export default () => {
  return (
    <ConnectionProvider
      config={{commitment: 'processed'}}
      endpoint={clusterApiUrl(RPC_ENDPOINT)}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.background}
          />
          <AppNavigation />
        </ThemeProvider>
      </AuthProvider>
    </ConnectionProvider>
  );
};
