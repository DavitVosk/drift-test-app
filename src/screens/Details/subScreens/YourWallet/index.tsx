import React from 'react';

import Button from '@src/components/Button';
import CheckBox from '@src/components/CheckBox';

import * as S from './styles';
import Token from './Token';
import {IconNames} from '@src/assets/icons';

const YourWallet = () => {
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

        <S.TokensWrapper>
          <Token
            data={{
              iconName: IconNames.walletDummy,
              tokenName: 'Token Name',
              volume: 1,
              amount: '$15',
            }}
          />
        </S.TokensWrapper>
      </S.TokensSectionWrapper>
    </S.Wrapper>
  );
};

export default YourWallet;
