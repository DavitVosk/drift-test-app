import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Alert, TextInput} from 'react-native';
import Toast from 'react-native-toast-message';

import {useModals} from '@src/contexts/Modals';
import {useWallet} from '@src/contexts/Wallet';
import {formatNumberWithCommas, parseString} from '@src/utils/formatting';
import {useDrift} from '@src/contexts/Drift';
import {TokenProps} from '@src/contexts/Wallet/types';

export const useDepositModal = () => {
  const [depositAmount, setDepositAmount] = useState<string>('');
  const [pickerVisible, setPickerVisible] = useState(false);
  const {
    showDepositModal,
    setShowDepositModal,
    transactionTokenName,
    setTransactionTokenName,
  } = useModals();
  const {tokens} = useWallet();
  const {tokens: driftTokens} = useDrift();

  const inputRef = useRef<TextInput | null>();
  // we need to have this here to solve styled-component issue with typescript
  const setInputRef = useCallback((ref: any) => {
    inputRef.current = ref;
  }, []);

  const closeModal = useCallback(() => {
    setShowDepositModal(false);
    setPickerVisible(false);
  }, []);

  const closePicker = useCallback(() => {
    setPickerVisible(false);
  }, []);

  const onPickerValueChange = useCallback((item: TokenProps) => {
    setTransactionTokenName(item.name);
    setPickerVisible(false);
  }, []);

  const selectedToken = useMemo(() => {
    return tokens.find(token => token.name === transactionTokenName);
  }, [tokens, transactionTokenName]);

  const tokenVolume = useMemo(() => {
    return selectedToken?.volume || 0;
  }, [selectedToken]);

  const formattedTokenVolume = useMemo(() => {
    return `${formatNumberWithCommas(tokenVolume)} ${transactionTokenName}`;
  }, [tokenVolume, transactionTokenName]);

  useEffect(() => {
    setDepositAmount(formatNumberWithCommas(tokenVolume));
  }, [tokenVolume, transactionTokenName]);

  const driftAssetVolume = useMemo(() => {
    return (
      driftTokens.find(token => token.name === transactionTokenName)?.volume ||
      0
    );
  }, [driftTokens, transactionTokenName]);

  const driftCurrentAssetVolume = useMemo(() => {
    return formatNumberWithCommas(driftAssetVolume);
  }, [driftAssetVolume]);

  const driftNewAssetVolume = useMemo(() => {
    return formatNumberWithCommas(
      driftAssetVolume + parseString(depositAmount || '0'),
    );
  }, [driftAssetVolume, depositAmount]);

  const onDepositConfirm = useCallback(() => {
    closeModal();
    Toast.show({
      type: 'success',
      props: {
        title: 'Deposit Successful',
        desc: 'View transaction',
        onActionPress: () => Alert.alert('Will come soon'),
      },
      position: 'bottom',
    });
  }, [closeModal]);

  return {
    selectedToken,
    depositAmount,
    setDepositAmount,
    showDepositModal,
    tokenVolume,
    formattedTokenVolume,
    closeModal,
    closePicker,
    inputRef,
    setInputRef,
    driftCurrentAssetVolume,
    driftNewAssetVolume,
    pickerVisible,
    setPickerVisible,
    onPickerValueChange,
    onDepositConfirm,
  };
};
