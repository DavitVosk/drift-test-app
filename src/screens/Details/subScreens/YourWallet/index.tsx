import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';

import Button from '@src/components/Button';
import CheckBox from '@src/components/CheckBox';
import {useWallet} from '@src/contexts/Wallet';
import {tokenBalanceThreshold} from '@src/constants/appConfigs';

import * as S from './styles';
import Token from './Token';

const YourWallet = () => {
  const {tokens} = useWallet();
  const [filteredTokens, setFilteredTokens] = useState(tokens);
  const [showSmallBalances, setShowSmallBalances] = useState<boolean>(false);

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

  return (
    <S.Wrapper>
      <S.ButtonsWrapper>
        <Button title="Send" onPress={() => {}} />
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
