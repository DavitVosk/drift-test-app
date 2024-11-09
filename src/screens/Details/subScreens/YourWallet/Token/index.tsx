import React, {memo} from 'react';

import Icon, {IconNames} from '@src/assets/icons';
import {TokenProps} from '@src/contexts/Wallet/types';
import { formatCurrency, formatNumber } from '@src/utils/formatting';

import * as S from './styles';

const Token = ({data}: {data: TokenProps}) => {
  const {logoUrl, icon, name, volume, amount} = data;
  return (
    <S.Wrapper>
      <S.TokenInfo>
        {logoUrl ? (
          <S.LogoImage source={{uri: logoUrl}} />
        ) : (
          <Icon name={icon as IconNames} />
        )}

        <S.TokenName>{name}</S.TokenName>
      </S.TokenInfo>

      <S.TokenAmountInfo>
        <S.Amount>{formatNumber(volume)}</S.Amount>
        <S.Amount>{formatCurrency(amount)}</S.Amount>
      </S.TokenAmountInfo>
    </S.Wrapper>
  );
};

export default memo(Token);
