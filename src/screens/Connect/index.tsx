import React, {memo} from 'react';
import {AuthorizationResult} from '@solana-mobile/mobile-wallet-adapter-protocol';
import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';

import Button from '@src/components/Button';
import {APP_IDENTITY, WALLET_CLUSTER} from '@src/constants/appConfigs';
import {getPublicKeyFromAddress} from '@src/utils/wallet';

import * as S from './styles';

const Connect = () => {
  const onPress = async () => {
    await transact(async wallet => {
      const authResult: AuthorizationResult = await wallet.authorize({
        cluster: WALLET_CLUSTER,
        identity: APP_IDENTITY,
      });
      const {accounts, auth_token} = authResult;
      const publicKey = getPublicKeyFromAddress(accounts[0].address);
    });
  };

  return (
    <S.StyledBgImage source={require('@assets/images/background.png')}>
      <S.Wrapper>
        <Button onPress={onPress} title="Connect Wallet" />

        <S.Text text="By continue, you agree to the Drift Terms and Conditions and acknowledge that you have read and understood the Drift Protocol Disclaimer." />
      </S.Wrapper>
    </S.StyledBgImage>
  );
};

export default memo(Connect);
