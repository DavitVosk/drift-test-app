import React, {memo} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useTheme} from 'styled-components';

const CheckBoxComponent = ({
  onPress,
  ticked,
}: {
  onPress: () => void;
  ticked: boolean;
}) => {
  const theme = useTheme();

  return (
    <CheckBox
      value={ticked}
      onValueChange={onPress}
      tintColors={{
        true: theme.colors.lightPurple,
        false: theme.colors.text.secondary,
      }}
    />
  );
};

export default memo(CheckBoxComponent);
