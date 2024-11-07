import {Connection, type ConnectionConfig} from '@solana/web3.js';
import React, {
  type FC,
  type ReactNode,
  useMemo,
  createContext,
  useContext,
} from 'react';

interface ConnectionProviderProps {
  children: ReactNode;
  endpoint: string;
  config?: ConnectionConfig;
}

interface ConnectionContextProps {
  connection: Connection;
}

const ConnectionContext = createContext<ConnectionContextProps>(
  {} as ConnectionContextProps,
);

export const ConnectionProvider: FC<ConnectionProviderProps> = ({
  children,
  endpoint,
  config = {commitment: 'confirmed'},
}) => {
  const connection = useMemo(
    () => new Connection(endpoint, config),
    [endpoint, config],
  );

  return (
    <ConnectionContext.Provider value={{connection}}>
      {children}
    </ConnectionContext.Provider>
  );
};

export const useConnection = (): ConnectionContextProps => {
  return useContext(ConnectionContext);
};
