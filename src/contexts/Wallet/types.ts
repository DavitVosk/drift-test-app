import {ReactNode} from 'react';

interface TokenCommonProps {
  name: string;
  volume: string;
  amount: string;
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
}
