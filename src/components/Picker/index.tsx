import React, {memo} from 'react';
import Modal from 'react-native-modal';

import Icon, {IconNames} from '@src/assets/icons';

import * as S from './styles';

type PickerItem = {name: string; logoUrl?: string} & Record<string, any>;

interface PickerProps {
  items: PickerItem[];
  pickerVisible: boolean;
  selectedItem: PickerItem;
  onClose: () => void;
  onValueChange: (item: any) => void;
  itemBuilder?: (item: PickerItem) => JSX.Element;
}

const Picker = ({
  items,
  itemBuilder,
  selectedItem,
  pickerVisible,
  onClose,
  onValueChange,
}: PickerProps) => {
  const buildItems = (item: PickerItem) => {
    const isItemSelected = selectedItem.name == item.name;
    return (
      <S.ItemWrapper
        selected={isItemSelected}
        key={item.name}
        onPress={() => onValueChange(item)}>
        {item.logoUrl && <S.LogoImage source={{uri: item?.logoUrl}} />}

        {item.icon && <Icon name={item?.icon as IconNames} />}
        <S.ItemText selected={isItemSelected}>{item.name}</S.ItemText>
      </S.ItemWrapper>
    );
  };
  const pickerItems = items.map(itemBuilder || buildItems);

  return (
    <Modal
      isVisible={pickerVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <S.ModalContent>{pickerItems}</S.ModalContent>
    </Modal>
  );
};

export default memo(Picker);
