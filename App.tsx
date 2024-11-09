import {ThemeProvider} from 'styled-components';
import {clusterApiUrl} from '@solana/web3.js';
import {StatusBar} from 'react-native';

import AppNavigation from '@src/navigation';
import {theme} from '@src/constants/theme';
import {RPC_ENDPOINT} from '@src/constants/appConfigs';
import {AuthProvider} from '@src/contexts/Auth';
import {ConnectionProvider} from '@src/contexts/Connection';
import {DriftProvider} from '@src/contexts/Drift';
import {WalletProvider} from '@src/contexts/Wallet';

export default () => {
  return (
    <ConnectionProvider endpoint={clusterApiUrl(RPC_ENDPOINT)}>
      <AuthProvider>
        <DriftProvider>
          <WalletProvider>
            <ThemeProvider theme={theme}>
              <StatusBar
                barStyle="light-content"
                backgroundColor={theme.colors.background.primary}
              />
              <AppNavigation />
            </ThemeProvider>
          </WalletProvider>
        </DriftProvider>
      </AuthProvider>
    </ConnectionProvider>
  );
};
