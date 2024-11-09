interface TokenCommonProps {
  tokenName: string;
  volume: number | string;
  amount: string;
}

interface TokenWithLogoProps extends TokenCommonProps {
  logoUrl: string;
  iconName?: never;
}

interface TokenWithIconProps extends TokenCommonProps {
  iconName: string;
  logoUrl?: never;
}

export interface TokenProps {
  data: TokenWithLogoProps | TokenWithIconProps;
}
