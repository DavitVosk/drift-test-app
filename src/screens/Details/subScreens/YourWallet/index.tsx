import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';

import Button from '@src/components/Button';
import CheckBox from '@src/components/CheckBox';
import {useWallet} from '@src/contexts/Wallet';
import {tokenBalanceThreshold} from '@src/constants/appConfigs';
import {DEFAULT_TOKEN} from '@src/contexts/Wallet/constants';
import {useModals} from '@src/contexts/Modals';

import * as S from './styles';
import Token from './Token';

const YourWallet = () => {
  const {tokens} = useWallet();
  const [filteredTokens, setFilteredTokens] = useState(tokens);
  const [showSmallBalances, setShowSmallBalances] = useState<boolean>(false);
  const {setShowDepositModal, setTransactionTokenName} = useModals();

  const filterTokens = useCallback(() => {
    setShowSmallBalances(prevValue => {
      const newValue = !prevValue;
      if (newValue) {
        setFilteredTokens(tokensList =>
          tokensList.filter(token => token.amount < tokenBalanceThreshold),
        );
      } else {
        setFilteredTokens(tokens);
      }
      return newValue;
    });
  }, [tokens]);

  const onSendPress = useCallback(() => {
    setShowDepositModal(true);
    setTransactionTokenName(DEFAULT_TOKEN);
  }, []);

  return (
    <S.Wrapper>
      <S.ButtonsWrapper>
        <Button title="Send" onPress={onSendPress} />
        <Button title="Receive" onPress={() => {}} />
      </S.ButtonsWrapper>

      <S.TokensSectionWrapper>
        <S.TitleWrapper>
          <S.SelectTokenTitle>Select Token to Deposit</S.SelectTokenTitle>
          <S.SmallBalancesWrapper>
            <S.SmallBalances>View small balances</S.SmallBalances>

            <CheckBox onPress={filterTokens} ticked={showSmallBalances} />
          </S.SmallBalancesWrapper>
        </S.TitleWrapper>

        <FlatList
          data={filteredTokens}
          keyExtractor={media => media.name.toString()}
          renderItem={({item}) => (
            <S.TokenWrapper>
              <Token data={item} />
            </S.TokenWrapper>
          )}
        />
      </S.TokensSectionWrapper>
    </S.Wrapper>
  );
};

export default YourWallet;
