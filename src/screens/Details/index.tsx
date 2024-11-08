import {Alert, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';

import {formatCurrency, shortenText} from '@src/utils/string';
import Icon, {IconNames} from '@src/assets/icons';

import * as S from './styles';
import {useDetails} from './hooks';

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
            <Icon name={IconNames.settings} />
            <S.AccountName>Wallet Balance</S.AccountName>
          </S.TitleWrapper>
          <S.Amount>{formatCurrency(walletBalance)}</S.Amount>
        </S.BalanceInfo>

        <S.VerticalDivider />

        <S.BalanceInfo>
          <S.TitleWrapper>
            <Image source={require('@src/assets/images/Logo.png')} />
            <S.AccountName>Drift Account</S.AccountName>
          </S.TitleWrapper>
          <S.Amount>{formatCurrency(driftBalance)}</S.Amount>
        </S.BalanceInfo>
      </S.BalancesWrapper>
    </S.Wrapper>
  );
};

export default Details;
