import React, {ReactNode} from 'react';
import Modal from 'react-native-modal';

import * as S from './styles';

type BottomSheetProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};

const BottomSheet = ({
  children,
  isOpen,
  onClose,
}: BottomSheetProps): JSX.Element => (
  <Modal
    isVisible={isOpen}
    swipeDirection={'down'}
    onSwipeComplete={onClose}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    style={{
      margin: 0,
      justifyContent: 'flex-end',
    }}>
    <S.Content>{children}</S.Content>
  </Modal>
);

export default BottomSheet;
