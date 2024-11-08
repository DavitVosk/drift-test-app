import Copy from "./Copy";
import Success from "./Success";
import Settings from "./Settings";

const icons = {
  copy: Copy,
  success: Success,
  settings: Settings,
};

export enum IconNames {
  copy = 'copy',
  success = 'success',
  settings = 'settings',
}

interface IconProps {
  name: IconNames;
}

const Icon = (props: IconProps) => {
  const IconComponent = icons[props.name as keyof typeof icons];
  return <IconComponent />;
};

export default Icon;
