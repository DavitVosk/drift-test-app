import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {TextInput} from 'react-native';

import {useModals} from '@src/contexts/Modals';
import {useWallet} from '@src/contexts/Wallet';
import {formatNumberWithCommas, parseString} from '@src/utils/formatting';
import {useDrift} from '@src/contexts/Drift';

export const useDepositModal = (tokenName: string) => {
  const [depositAmount, setDepositAmount] = useState<string>('');
  const {showDepositModal, setShowDepositModal, transactionTokenName} =
    useModals();
  const {tokens} = useWallet();
  const {tokens: driftTokens} = useDrift();

  const inputRef = useRef<TextInput | null>();
  // we need to have this here to solve styled-component issue with typescript
  const setInputRef = useCallback((ref: any) => {
    inputRef.current = ref;
  }, []);

  const closeModal = useCallback(() => {
    setShowDepositModal(false);
  }, []);

  const tokenVolume = useMemo(() => {
    return tokens.find(token => token.name === tokenName)?.volume || 0;
  }, [tokens, tokenName]);

  const formattedTokenVolume = useMemo(() => {
    return `${formatNumberWithCommas(tokenVolume)} ${transactionTokenName}`;
  }, [tokenVolume, transactionTokenName]);

  useEffect(() => {
    setDepositAmount(formatNumberWithCommas(tokenVolume));
  }, [tokenVolume, tokenName]);

  const driftAssetVolume = useMemo(() => {
    return driftTokens.find(token => token.name === tokenName)?.volume || 0;
  }, [driftTokens, tokenName]);

  const driftCurrentAssetVolume = useMemo(() => {
    return formatNumberWithCommas(driftAssetVolume);
  }, [driftAssetVolume]);

  const driftNewAssetVolume = useMemo(() => {
    return formatNumberWithCommas(
      driftAssetVolume + parseString(depositAmount || '0'),
    );
  }, [driftAssetVolume, depositAmount]);

  return {
    depositAmount,
    setDepositAmount,
    showDepositModal,
    tokenVolume,
    formattedTokenVolume,
    closeModal,
    inputRef,
    setInputRef,
    driftCurrentAssetVolume,
    driftNewAssetVolume,
  };
};
