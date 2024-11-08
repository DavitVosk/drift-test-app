import {Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';

import {formatCurrency, shortenText} from '@src/utils/string';
import Icon, {IconNames} from '@src/assets/icons';
import Button from '@src/components/Button';
import TabView from '@src/components/TabView';

import * as S from './styles';
import {useDetails} from './hooks';
import {routes} from './constants';
import YourWallet from './subScreens/YourWallet';
import DriftAccount from './subScreens/DriftAccount';

const Details = () => {
  const {walletBalance, driftBalance, publicKeyString} = useDetails();
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2000);
  }, [copied]);

  const onClipboardPress = useCallback(() => {
    Clipboard.setString(publicKeyString);
    setCopied(true);
  }, []);

  const renderScene = ({
    route,
  }: {
    route: {
      key: string;
    };
  }) => {
    switch (route.key) {
      case 'your_wallet':
        return <YourWallet />;
      case 'drift_account':
        return <DriftAccount />;
      default:
        return <></>;
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.PublicKeyWrapper>
          <S.PublicKey>{shortenText(publicKeyString)}</S.PublicKey>

          <TouchableOpacity onPress={onClipboardPress}>
            <Icon name={copied ? IconNames.success : IconNames.copy} />
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
        <Button
          onPress={() => {}}
          fullWidth
          title="Deposit to Drift / Withdraw to Wallet"
        />
      </S.ButtonWrapper>

      <TabView routes={routes} renderScene={renderScene} />
    </S.Wrapper>
  );
};

export default Details;
