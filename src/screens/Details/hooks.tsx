import {useCallback, useEffect, useState} from 'react';
import {PublicKey} from '@solana/web3.js';
import axios from 'axios';

import {COINGECKO_URL} from '@src/constants/links';
import {useAuth} from '@src/contexts/Auth';
import {useConnection} from '@src/contexts/Connection';
import {convertLamportsToSOL} from '@src/utils/wallet';
import {useDrift} from '@src/contexts/Drift';

export const useDetails = () => {
  const {connection} = useConnection();
  const {selectedAccount} = useAuth();
  const {balance: driftBalance, setBalance: setDriftBalance} = useDrift();

  const [walletBalance, setWalletBalance] = useState<number>(0);

  const fetchSolBalance = async (): Promise<number> => {
    try {
      const lamports = await connection.getBalance(
        selectedAccount?.publicKey as PublicKey,
      );
      return convertLamportsToSOL(lamports);
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
      return 0;
    }
  };

  const fetchSolPriceInUSD = async (): Promise<number> => {
    try {
      const response = await axios.get(COINGECKO_URL);
      console.log('response', response);
      return response.data.solana.usd;
    } catch (error) {
      console.error('Error fetching SOL price:', error);
      return 0;
    }
  };

  const fetchWalletBalance = useCallback(async () => {
    const [solBalance, price] = await Promise.all([
      fetchSolBalance(),
      fetchSolPriceInUSD(),
    ]);
    setWalletBalance(solBalance * price);
  }, [connection]);

  useEffect(() => {
    if (!selectedAccount) {
      return;
    }
    fetchWalletBalance();
  }, [fetchWalletBalance, selectedAccount]);

  useEffect(() => {
    // Lets use dummy info for drift account
    setDriftBalance(100);
  }, []);

  const publicKeyString = selectedAccount?.publicKey?.toString() || '';

  return {
    walletBalance,
    publicKeyString,
    driftBalance,
  };
};
