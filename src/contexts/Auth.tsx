import {PublicKey} from '@solana/web3.js';
import {
  AuthorizationResult,
  AuthorizeAPI,
  AuthToken,
  Base64EncodedAddress,
  DeauthorizeAPI,
  ReauthorizeAPI,
} from '@solana-mobile/mobile-wallet-adapter-protocol';
import {
  useState,
  useCallback,
  useMemo,
  ReactNode,
  useEffect,
  useContext,
  createContext,
  FC,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  APP_IDENTITY,
  RPC_ENDPOINT,
  STORAGE_KEY,
} from '@src/constants/appConfigs';
import {
  cacheReviver,
  getAuthorizationFromAuthorizationResult,
} from '@src/utils/wallet';

export interface Account {
  address: Base64EncodedAddress;
  label?: string;
  publicKey: PublicKey;
}

export interface Authorization {
  accounts: Account[];
  authToken: AuthToken;
  selectedAccount: Account;
}

interface AuthProviderContext {
  accounts: Account[] | null;
  authorizeSession: (
    wallet: AuthorizeAPI & ReauthorizeAPI,
  ) => Promise<Account | null>;
  deauthorizeSession: (wallet: DeauthorizeAPI) => void;
  onChangeAccount: (nextSelectedAccount: Account) => void;
  selectedAccount: Account | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthProviderContext>({
  accounts: null,
  authorizeSession: async () => null,
  deauthorizeSession: () => {},
  onChangeAccount: () => {},
  selectedAccount: null,
});

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const [authorization, setAuthorization] = useState<Authorization | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      try {
        const cacheFetchResult = await AsyncStorage.getItem(STORAGE_KEY);
        if (cacheFetchResult !== null) {
          const priorAuthorization = JSON.parse(cacheFetchResult, cacheReviver);
          setAuthorization(priorAuthorization);
        }
      } catch (error) {
        // TODO add logger for future investigation
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(authorization));
      } catch (error) {
        // TODO add logger for future investigation
        console.error(error);
      }
    })();
  }, [authorization]);

  const handleAuthorizationResult = useCallback(
    async (
      authorizationResult: AuthorizationResult,
    ): Promise<Authorization> => {
      const nextAuthorization = getAuthorizationFromAuthorizationResult(
        authorizationResult,
        authorization?.selectedAccount,
      );
      await setAuthorization(nextAuthorization);
      return nextAuthorization;
    },
    [authorization, setAuthorization],
  );

  const authorizeSession = useCallback(
    async (wallet: AuthorizeAPI & ReauthorizeAPI) => {
      const authorizationResult = await (authorization
        ? wallet.reauthorize({
            auth_token: authorization.authToken,
            identity: APP_IDENTITY,
          })
        : wallet.authorize({
            cluster: RPC_ENDPOINT,
            identity: APP_IDENTITY,
          }));
      return (await handleAuthorizationResult(authorizationResult))
        .selectedAccount;
    },
    [authorization, handleAuthorizationResult],
  );

  const deauthorizeSession = useCallback(
    async (wallet: DeauthorizeAPI) => {
      if (authorization?.authToken == null) {
        return;
      }
      await wallet.deauthorize({auth_token: authorization.authToken});
      setAuthorization(null);
    },
    [authorization, setAuthorization],
  );

  const onChangeAccount = useCallback(
    (nextSelectedAccount: Account) => {
      setAuthorization(currentAuthorization => {
        if (
          !currentAuthorization?.accounts.some(
            ({address}) => address === nextSelectedAccount.address,
          )
        ) {
          throw new Error(
            `${nextSelectedAccount.address} is not one of the available addresses`,
          );
        }
        return {
          ...currentAuthorization,
          selectedAccount: nextSelectedAccount,
        };
      });
    },
    [setAuthorization],
  );

  const value = useMemo(
    () => ({
      accounts: authorization?.accounts ?? null,
      authorizeSession,
      deauthorizeSession,
      onChangeAccount,
      selectedAccount: authorization?.selectedAccount ?? null,
    }),
    [authorization, authorizeSession, deauthorizeSession, onChangeAccount],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
