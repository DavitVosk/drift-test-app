import React from 'react';

import * as S from './styles';
import Button from '@src/components/Button';

const Connect = () => {
  return (
    <S.StyledBgImage source={require('@assets/images/background.png')}>
      <S.Wrapper>
        <Button onPress={() => {}} title="Connect Wallet" />
      </S.Wrapper>
    </S.StyledBgImage>
  );
};

export default Connect;
