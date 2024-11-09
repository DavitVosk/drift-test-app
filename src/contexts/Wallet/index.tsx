import React, {
  type FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import {TokenProps, WalletContextProps, WalletProviderProps} from './types';
import {dummyTokens} from './constants';

const WalletContext = createContext<WalletContextProps>({
  tokens: [],
});

export const WalletProvider: FC<WalletProviderProps> = ({children}) => {
  const [tokens, setTokens] = useState<TokenProps[]>([]);

  useEffect(() => {
    setTokens(dummyTokens);
  }, []);

  return (
    <WalletContext.Provider value={{tokens}}>{children}</WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextProps => {
  return useContext(WalletContext);
};
