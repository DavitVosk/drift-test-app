import React, {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import {TokenProps} from '../Wallet/types';
import {dummyTokens} from './constants';

interface DriftProviderProps {
  children: ReactNode;
}

interface DriftContextProps {
  balance: number;
  setBalance: (balance: number) => void;
  tokens: TokenProps[];
  setTokens: (tokens: TokenProps[]) => void;
}

const DriftContext = createContext<DriftContextProps>({
  balance: 0,
  setBalance: () => {},
  tokens: [],
  setTokens: () => {},
});

export const DriftProvider: FC<DriftProviderProps> = ({children}) => {
  const [balance, setBalance] = useState<number>(0);
  const [tokens, setTokens] = useState<TokenProps[]>([]);

  useEffect(() => {
    // Lets use dummy info for drift account
    setBalance(100);
    setTokens(dummyTokens);
  }, []);

  return (
    <DriftContext.Provider value={{balance, setBalance, tokens, setTokens}}>
      {children}
    </DriftContext.Provider>
  );
};

export const useDrift = (): DriftContextProps => {
  return useContext(DriftContext);
};
