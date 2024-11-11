import React, {memo, useCallback} from 'react';

import Icon, {IconNames} from '@src/assets/icons';
import {TokenProps} from '@src/contexts/Wallet/types';
import {formatCurrency, formatNumber} from '@src/utils/formatting';
import {useModals} from '@src/contexts/Modals';

import * as S from './styles';

const Token = ({data}: {data: TokenProps}) => {
  const {logoUrl, icon, name, volume, amount} = data;
  const {setShowDepositModal, setTransactionTokenName} = useModals();

  const onPress = useCallback(() => {
    setTransactionTokenName(data.name);
    setShowDepositModal(true);
  }, []);

  return (
    <S.Wrapper onPress={onPress}>
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
