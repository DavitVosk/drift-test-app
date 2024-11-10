import Copy from './Copy';
import Success from './Success';
import Settings from './Settings';
import WalletDummy from './WalletDummy';
import DriftLogo from './DriftLogo';
import SolCoin from './SolCoin';
import UsdcCoin from './UsdcCoin';
import MsolCoin from './MsolCoin';
import BtcCoin from './BtcCoin';
import EthCoin from './EthCoin';
import UsdtCoin from './UsdtCoin';

const icons = {
  copy: Copy,
  success: Success,
  settings: Settings,
  walletDummy: WalletDummy,
  driftLogo: DriftLogo,
  solCoin: SolCoin,
  usdcCoin: UsdcCoin,
  msolCoin: MsolCoin,
  btcCoin: BtcCoin,
  ethCoin: EthCoin,
  usdtCoin: UsdtCoin,
};

export enum IconNames {
  copy = 'copy',
  success = 'success',
  settings = 'settings',
  walletDummy = 'walletDummy',
  driftLogo = 'driftLogo',
  solCoin = 'solCoin',
  usdcCoin = 'usdcCoin',
  msolCoin = 'msolCoin',
  btcCoin = 'btcCoin',
  ethCoin = 'ethCoin',
  usdtCoin = 'usdtCoin',
}

interface IconProps {
  name: IconNames;
}

const Icon = (props: IconProps) => {
  const IconComponent = icons[props.name as keyof typeof icons];
  return <IconComponent />;
};

export default Icon;
