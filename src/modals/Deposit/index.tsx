import {
  TouchableOpacity,
  Alert,
  Text,
  View,
  Pressable,
  Keyboard,
} from 'react-native';
import React from 'react';

import BottomSheet from '@src/components/BottomSheet';
import Icon, {IconNames} from '@src/assets/icons';
import {useModals} from '@src/contexts/Modals';

import * as S from './styles';
import {useDepositModal} from './hooks';

const DepositModal = () => {
  const {transactionTokenName} = useModals();
  const {
    depositAmount,
    setDepositAmount,
    showDepositModal,
    formattedTokenVolume,
    closeModal,
    inputRef,
    setInputRef,
  } = useDepositModal(transactionTokenName);

  return (
    <BottomSheet isOpen={showDepositModal} onClose={closeModal}>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <S.Wrapper>
          <S.Header>
            <TouchableOpacity onPress={closeModal}>
              <Icon name={IconNames.backArrow} />
            </TouchableOpacity>
            <S.ModalControllers>
              <TouchableOpacity onPress={() => Alert.alert('Will come soon')}>
                <Icon name={IconNames.help} />
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal}>
                <Icon name={IconNames.close} />
              </TouchableOpacity>
            </S.ModalControllers>
          </S.Header>

          <S.Title>Deposit to Drift</S.Title>

          <S.Body>
            <S.Desc>
              Deposited assets automatically earn yield through lending.
            </S.Desc>
            <S.DepositInfoWrapper>
              <S.AssetInfo>
                <S.AssetAmountTitle>
                  Asset and amount to deposit
                </S.AssetAmountTitle>
                <S.AssetAmountWrapper>
                  <S.AssetVolume>{formattedTokenVolume}</S.AssetVolume>
                </S.AssetAmountWrapper>
              </S.AssetInfo>

              <S.AssetPickerRow>
                <View style={{flex: 1}}>
                  <Text>Tokens picker</Text>
                </View>

                <S.AmountInputWrapper onPress={() => inputRef.current?.focus()}>
                  <S.AmountInput
                    ref={setInputRef}
                    value={depositAmount}
                    onChangeText={setDepositAmount}
                    keyboardType="numeric"
                  />
                </S.AmountInputWrapper>
              </S.AssetPickerRow>
            </S.DepositInfoWrapper>
          </S.Body>
        </S.Wrapper>
      </Pressable>
    </BottomSheet>
  );
};

export default DepositModal;
