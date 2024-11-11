import React, {
  type FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {TokenProps, WalletContextProps, WalletProviderProps} from './types';
import {dummyTokens} from './constants';
import {useAuth} from '../Auth';
import {useConnection} from '../Connection';
import {PublicKey} from '@solana/web3.js';
import {convertLamportsToSOL} from '@src/utils/wallet';
import axios from 'axios';
import {COINGECKO_URL} from '@src/constants/links';

const WalletContext = createContext<WalletContextProps>({
  tokens: [],
  balance: 0,
  setBalance: () => {},
  setTokens: () => {},
});

export const WalletProvider: FC<WalletProviderProps> = ({children}) => {
  const {selectedAccount} = useAuth();
  const {connection} = useConnection();

  const [tokens, setTokens] = useState<TokenProps[]>([]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    // Lets use dummy info for wallet tokens
    setTokens(dummyTokens);
  }, []);

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
    setBalance(solBalance * price);
  }, [connection, selectedAccount]);

  useEffect(() => {
    if (!selectedAccount) {
      return;
    }
    fetchWalletBalance();
  }, [fetchWalletBalance, selectedAccount]);

  return (
    <WalletContext.Provider value={{tokens, setTokens, balance, setBalance}}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextProps => {
  return useContext(WalletContext);
};
