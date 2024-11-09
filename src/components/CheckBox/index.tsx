import React, {memo, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useTheme} from 'styled-components';

const CheckBoxComponent = ({onPress}: {onPress: (ticked: boolean) => void}) => {
  const theme = useTheme();
  const [ticked, setTicked] = useState<boolean>(false);

  const onValueChange = () => {
    setTicked(prevValue => !prevValue);
    onPress(ticked);
  };

  return (
    <CheckBox
      value={ticked}
      onValueChange={onValueChange}
      tintColors={{
        true: theme.colors.lightPurple,
        false: theme.colors.text.secondary,
      }}
    />
  );
};

export default memo(CheckBoxComponent);
