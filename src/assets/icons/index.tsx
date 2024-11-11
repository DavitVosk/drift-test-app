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
import BackArrow from './BackArrow';
import Help from './Help';
import Close from './Close';
import RightArrow from './RightArrow';
import Vector from './Vector';

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
  backArrow: BackArrow,
  help: Help,
  close: Close,
  rightArrow: RightArrow,
  vector: Vector,
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
  backArrow = 'backArrow',
  help = 'help',
  close = 'close',
  rightArrow = 'rightArrow',
  vector = 'vector',
}

export interface IconProps {
  name: IconNames;
  color?: string;
  size?: string;
}

const Icon = (props: IconProps) => {
  const IconComponent = icons[props.name as keyof typeof icons];
  return <IconComponent {...props} />;
};

export default Icon;
