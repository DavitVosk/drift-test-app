import React, {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

interface ModalsProviderProps {
  children: ReactNode;
}

interface ModalsContextProps {
  showDepositModal: boolean;
  setShowDepositModal: (visibility: boolean) => void;
}

const ModalsContext = createContext<ModalsContextProps>({
  showDepositModal: false,
  setShowDepositModal: () => {},
});

export const ModalsProvider: FC<ModalsProviderProps> = ({children}) => {
  const [showDepositModal, setShowDepositModal] = useState<boolean>(false);

  return (
    <ModalsContext.Provider value={{showDepositModal, setShowDepositModal}}>
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = (): ModalsContextProps => {
  return useContext(ModalsContext);
};
