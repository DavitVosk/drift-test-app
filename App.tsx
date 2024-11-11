import {ThemeProvider} from 'styled-components';
import {clusterApiUrl} from '@solana/web3.js';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import AppNavigation from '@src/navigation';
import {theme} from '@src/constants/theme';
import {RPC_ENDPOINT} from '@src/constants/appConfigs';
import {AuthProvider} from '@src/contexts/Auth';
import {ConnectionProvider} from '@src/contexts/Connection';
import {DriftProvider} from '@src/contexts/Drift';
import {WalletProvider} from '@src/contexts/Wallet';
import {ModalsProvider} from '@src/contexts/Modals';
import {toastConfig} from '@src/components/Toast';

export default () => {
  return (
    <GestureHandlerRootView>
      <ConnectionProvider endpoint={clusterApiUrl(RPC_ENDPOINT)}>
        <AuthProvider>
          <DriftProvider>
            <WalletProvider>
              <ThemeProvider theme={theme}>
                <ModalsProvider>
                  <StatusBar
                    barStyle="light-content"
                    backgroundColor={theme.colors.background.primary}
                  />
                  <AppNavigation />
                  <Toast config={toastConfig} />
                </ModalsProvider>
              </ThemeProvider>
            </WalletProvider>
          </DriftProvider>
        </AuthProvider>
      </ConnectionProvider>
    </GestureHandlerRootView>
  );
};
