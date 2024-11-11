import {useCallback, useState} from 'react';

import {useAuth} from '@src/contexts/Auth';
import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';

const useConnect = () => {
  const {authorizeSession} = useAuth();
  const [connecting, setConnecting] = useState<boolean>(false);

  const handleConnect = useCallback(async () => {
    try {
      if (connecting) {
        return;
      }
      setConnecting(true);
      await transact(async wallet => {
        await authorizeSession(wallet);
      });
    } catch (err: any) {
      const message = err instanceof Error ? err.message : err;
      console.log('Error during connection', message);
    } finally {
      setConnecting(false);
    }
  }, [connecting, authorizeSession]);

  return {
    connecting,
    handleConnect,
  };
};

export default useConnect;
