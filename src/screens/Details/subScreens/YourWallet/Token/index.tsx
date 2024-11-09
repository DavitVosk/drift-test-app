import React, {memo} from 'react';

import Icon, {IconNames} from '@src/assets/icons';

import * as S from './styles';
import {TokenProps} from '@src/contexts/Wallet/types';

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
        <S.Amount>{volume}</S.Amount>
        <S.Amount>{amount}</S.Amount>
      </S.TokenAmountInfo>
    </S.Wrapper>
  );
};

export default memo(Token);
