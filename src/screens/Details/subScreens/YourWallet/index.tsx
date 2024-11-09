import React from 'react';
import {FlatList} from 'react-native';

import Button from '@src/components/Button';
import CheckBox from '@src/components/CheckBox';
import {useWallet} from '@src/contexts/Wallet';

import * as S from './styles';
import Token from './Token';

const YourWallet = () => {
  const {tokens} = useWallet();

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

            <CheckBox onPress={() => {}} />
          </S.SmallBalancesWrapper>
        </S.TitleWrapper>

        <FlatList
          data={tokens}
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
