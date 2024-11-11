import {Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';

import {formatCurrency, shortenText} from '@src/utils/formatting';
import Icon, {IconNames} from '@src/assets/icons';
import ColorButton from '@src/components/ColorButton';
import TabView from '@src/components/TabView';
import DepositModal from '@src/modals/Deposit';

import * as S from './styles';
import {useDetails} from './hooks';
import {routes} from './constants';
import YourWallet from './subScreens/YourWallet';
import DriftAccount from './subScreens/DriftAccount';

const Details = () => {
  const {
    walletBalance,
    driftBalance,
    publicKeyString,
    onButtonPress,
    renderScene,
    onClipboardPress,
    addressCopied,
  } = useDetails();
  
  return (
    <S.Wrapper>
      <S.HorizontalDivider />

      <S.Header>
        <S.PublicKeyWrapper>
          <S.PublicKey>{shortenText(publicKeyString)}</S.PublicKey>

          <TouchableOpacity onPress={onClipboardPress}>
            <Icon name={addressCopied ? IconNames.success : IconNames.copy} />
          </TouchableOpacity>
        </S.PublicKeyWrapper>
        <TouchableOpacity onPress={() => Alert.alert('Will come soon')}>
          <Icon name={IconNames.settings} />
        </TouchableOpacity>
      </S.Header>

      <S.BalancesWrapper>
        <S.BalanceInfo>
          <S.TitleWrapper>
            <Icon name={IconNames.walletDummy} />
            <S.AccountName>Wallet Balance</S.AccountName>
          </S.TitleWrapper>
          <S.Amount>{formatCurrency(walletBalance)}</S.Amount>
        </S.BalanceInfo>

        <S.VerticalDivider />

        <S.BalanceInfo>
          <S.TitleWrapper>
            <Icon name={IconNames.driftLogo} />
            <S.AccountName>Drift Account</S.AccountName>
          </S.TitleWrapper>
          <S.Amount>{formatCurrency(driftBalance)}</S.Amount>
        </S.BalanceInfo>
      </S.BalancesWrapper>

      <S.ButtonWrapper>
        <ColorButton
          onPress={onButtonPress}
          fullWidth
          title="Deposit to Drift / Withdraw to Wallet"
        />
      </S.ButtonWrapper>

      <TabView routes={routes} renderScene={renderScene} />
      <DepositModal />
    </S.Wrapper>
  );
};

export default Details;
