import React, {memo, useCallback, useEffect, useState} from 'react';
import Button from '@src/components/ColorButton';

import * as S from './styles';
import useConnect from '@src/hooks/useConnect';
import {useAuth} from '@src/contexts/Auth';
import {useNavigation} from '@react-navigation/native';
import {Routes, StackParamList} from '@src/navigation/types';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

const Connect = () => {
  const {handleConnect} = useConnect();
  const {selectedAccount} = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  useEffect(() => {
    if (!!selectedAccount) return navigation.replace(Routes.Details);
  }, [selectedAccount]);

  return (
    <S.StyledBgImage source={require('@assets/images/background.png')}>
      <S.Wrapper>
        <Button onPress={handleConnect} title="Connect Wallet" />

        <S.Text text="By continue, you agree to the Drift Terms and Conditions and acknowledge that you have read and understood the Drift Protocol Disclaimer." />
      </S.Wrapper>
    </S.StyledBgImage>
  );
};

export default memo(Connect);
