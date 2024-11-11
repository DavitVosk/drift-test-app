import {useCallback} from 'react';

import {useAuth} from '@src/contexts/Auth';
import {useDrift} from '@src/contexts/Drift';
import {useModals} from '@src/contexts/Modals';
import {useWallet} from '@src/contexts/Wallet';
import {DEFAULT_TOKEN} from '@src/contexts/Wallet/constants';

export const useDetails = () => {
  const {selectedAccount} = useAuth();
  const {balance: driftBalance} = useDrift();
  const {balance: walletBalance} = useWallet();
  const {setShowDepositModal, setTransactionTokenName} = useModals();

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
  };
};
