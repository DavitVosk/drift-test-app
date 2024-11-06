import React, {memo} from 'react';

import * as S from './styles';
import Button from '@src/components/Button';

const Connect = () => {
  return (
    <S.StyledBgImage source={require('@assets/images/background.png')}>
      <S.Wrapper>
        <Button onPress={() => {}} title="Connect Wallet" />

        <S.Text text="By continue, you agree to the Drift Terms and Conditions and acknowledge that you have read and understood the Drift Protocol Disclaimer." />
      </S.Wrapper>
    </S.StyledBgImage>
  );
};

export default memo(Connect);
