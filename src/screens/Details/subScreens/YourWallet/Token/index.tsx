import React, {memo} from 'react';

import Icon, {IconNames} from '@src/assets/icons';

import * as S from './styles';
import {TokenProps} from './types';

const Token = ({data}: TokenProps) => {
  const {logoUrl, iconName, tokenName, volume, amount} = data;
  return (
    <S.Wrapper>
      <S.TokenInfo>
        {logoUrl ? (
          <S.LogoImage source={{uri: logoUrl}} />
        ) : (
          <Icon name={iconName as IconNames} />
        )}

        <S.TokenName>{tokenName}</S.TokenName>
      </S.TokenInfo>

      <S.TokenAmountInfo>
        <S.Amount>{volume}</S.Amount>
        <S.Amount>{amount}</S.Amount>
      </S.TokenAmountInfo>
    </S.Wrapper>
  );
};

export default memo(Token);
