import {ReactNode} from 'react';

interface TokenCommonProps {
  name: string;
  volume: number;
  amount: number;
}

interface TokenWithLogoProps extends TokenCommonProps {
  logoUrl: string;
  icon?: never;
}

interface TokenWithIconProps extends TokenCommonProps {
  icon: string;
  logoUrl?: never;
}

export type TokenProps = TokenWithLogoProps | TokenWithIconProps;

export interface WalletProviderProps {
  children: ReactNode;
}

export interface WalletContextProps {
  tokens: TokenProps[];
  setTokens: (tokens: TokenProps[]) => void;
  balance: number;
  setBalance: (balance: number) => void;
}
