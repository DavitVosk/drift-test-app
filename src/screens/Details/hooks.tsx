import {useCallback, useEffect, useState} from 'react';

import {useAuth} from '@src/contexts/Auth';
import {useDrift} from '@src/contexts/Drift';
import {useModals} from '@src/contexts/Modals';
import {useWallet} from '@src/contexts/Wallet';
import {DEFAULT_TOKEN} from '@src/contexts/Wallet/constants';
import Clipboard from '@react-native-clipboard/clipboard';

import YourWallet from './subScreens/YourWallet';
import DriftAccount from './subScreens/DriftAccount';

export const useDetails = () => {
  const {selectedAccount} = useAuth();
  const {balance: driftBalance} = useDrift();
  const {balance: walletBalance} = useWallet();
  const {setShowDepositModal, setTransactionTokenName} = useModals();
  const [addressCopied, setAddressCopied] = useState<boolean>(false);

  useEffect(() => {
    if (addressCopied) setTimeout(() => setAddressCopied(false), 2000);
  }, [addressCopied]);

  const onClipboardPress = useCallback(() => {
    Clipboard.setString(publicKeyString);
    setAddressCopied(true);
  }, []);

  const renderScene = ({
    route,
  }: {
    route: {
      key: string;
    };
  }) => {
    switch (route.key) {
      case 'your_wallet':
        return <YourWallet />;
      case 'drift_account':
        return <DriftAccount />;
      default:
        return <></>;
    }
  };

  const publicKeyString = selectedAccount?.publicKey?.toString() || '';

  const onButtonPress = useCallback(() => {
    setShowDepositModal(true);
    setTransactionTokenName(DEFAULT_TOKEN);
  }, []);

  return {
    walletBalance,
    publicKeyString,
    driftBalance,
    onButtonPress,
    renderScene,
    onClipboardPress,
    addressCopied,
  };
};
