import {Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

import {useConnection} from '@src/contexts/Connection';
import {Account, useAuth} from '@src/contexts/Auth';

import * as S from './styles';
import {shortenText} from '@src/utils/string';
import Icon, {IconNames} from '@src/assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Details = () => {
  const {connection} = useConnection();
  const {selectedAccount} = useAuth();

  const [balance, setBalance] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const fetchBalance = useCallback(
    async (account: Account) => {
      console.log('Fetching balance for: ' + account.publicKey);
      const fetchedBalance = await connection.getBalance(account.publicKey);

      setBalance(fetchedBalance);
    },
    [connection],
  );

  useEffect(() => {
    if (!selectedAccount) {
      return;
    }
    fetchBalance(selectedAccount);
  }, [fetchBalance, selectedAccount]);

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2000);
  }, [copied]);

  const stringPublicKey = selectedAccount?.publicKey?.toString() || '';

  const onClipboardPress = useCallback(() => {
    Clipboard.setString(stringPublicKey);
    setCopied(true);
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.PublicKeyWrapper>
          <S.PublicKey>{shortenText(stringPublicKey)}</S.PublicKey>

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
        </S.BalanceInfo>

        <S.VerticalDivider />

        <S.BalanceInfo>
          <S.TitleWrapper>
            <Icon name={IconNames.settings} />
            <S.AccountName>Drift Account</S.AccountName>
          </S.TitleWrapper>
        </S.BalanceInfo>
      </S.BalancesWrapper>
    </S.Wrapper>
  );
};

export default Details;
