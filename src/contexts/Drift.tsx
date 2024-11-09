import React, {
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface DriftProviderProps {
  children: ReactNode;
}

interface DriftContextProps {
  balance: number;
  setBalance: (balance: number) => void;
}

const DriftContext = createContext<DriftContextProps>({
  balance: 0,
  setBalance: () => {},
});

export const DriftProvider: FC<DriftProviderProps> = ({children}) => {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    // Lets use dummy info for drift account
    setBalance(100);
  }, []);

  return (
    <DriftContext.Provider value={{balance, setBalance}}>
      {children}
    </DriftContext.Provider>
  );
};

export const useDrift = (): DriftContextProps => {
  return useContext(DriftContext);
};
