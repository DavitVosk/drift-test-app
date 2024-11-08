import Copy from './Copy';
import Success from './Success';
import Settings from './Settings';
import WalletDummy from './WalletDummy';
import DriftLogo from './DriftLogo';

const icons = {
  copy: Copy,
  success: Success,
  settings: Settings,
  walletDummy: WalletDummy,
  driftLogo: DriftLogo,
};

export enum IconNames {
  copy = 'copy',
  success = 'success',
  settings = 'settings',
  walletDummy = 'walletDummy',
  driftLogo = 'driftLogo',
}

interface IconProps {
  name: IconNames;
}

const Icon = (props: IconProps) => {
  const IconComponent = icons[props.name as keyof typeof icons];
  return <IconComponent />;
};

export default Icon;