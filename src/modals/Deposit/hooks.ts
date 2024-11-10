import {useCallback, useMemo, useRef, useState} from 'react';
import {TextInput} from 'react-native';

import {useModals} from '@src/contexts/Modal';
import {useWallet} from '@src/contexts/Wallet';

export const useDepositModal = (tokenName: string) => {
  const [depositAmount, setDepositAmount] = useState('');
  const {showDepositModal, setShowDepositModal} = useModals();
  const {tokens} = useWallet();

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

  return {
    depositAmount,
    setDepositAmount,
    showDepositModal,
    tokenVolume,
    closeModal,
    inputRef,
    setInputRef,
  };
};
