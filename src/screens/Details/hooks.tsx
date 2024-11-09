import {useAuth} from '@src/contexts/Auth';
import {useDrift} from '@src/contexts/Drift';
import {useWallet} from '@src/contexts/Wallet';

export const useDetails = () => {
  const {selectedAccount} = useAuth();
  const {balance: driftBalance} = useDrift();
  const {balance: walletBalance} = useWallet();

  const publicKeyString = selectedAccount?.publicKey?.toString() || '';

  return {
    walletBalance,
    publicKeyString,
    driftBalance,
  };
};
