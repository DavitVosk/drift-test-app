import React, {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

import { DEFAULT_TOKEN } from './Wallet/constants';

interface ModalsProviderProps {
  children: ReactNode;
}

interface ModalsContextProps {
  showDepositModal: boolean;
  setShowDepositModal: (visibility: boolean) => void;
  transactionTokenName: string;
  setTransactionTokenName: (tokenName: string) => void;
}

const ModalsContext = createContext<ModalsContextProps>({
  showDepositModal: false,
  setShowDepositModal: () => {},
  transactionTokenName: DEFAULT_TOKEN,
  setTransactionTokenName: () => {},
});

export const ModalsProvider: FC<ModalsProviderProps> = ({children}) => {
  const [showDepositModal, setShowDepositModal] = useState<boolean>(false);
  const [transactionTokenName, setTransactionTokenName] =
    useState<string>(DEFAULT_TOKEN);

  return (
    <ModalsContext.Provider
      value={{
        showDepositModal,
        setShowDepositModal,
        transactionTokenName,
        setTransactionTokenName,
      }}>
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = (): ModalsContextProps => {
  return useContext(ModalsContext);
};
