import Icon, {IconNames} from '@src/assets/icons';
import {theme} from '@src/constants/theme';

import * as S from './styles';

interface SuccessToastProps {
  props: {
    title: string;
    desc?: string;
    onActionPress?: () => {};
  };
}

export const toastConfig = {
  success: ({props}: SuccessToastProps) => (
    <S.SuccessWrapper>
      <S.SuccessTitleWrapper>
        <Icon name={IconNames.success} />
        <S.SuccessTitle>{props.title}</S.SuccessTitle>
      </S.SuccessTitleWrapper>

      {props.desc && (
        <S.SuccessAction onPress={props.onActionPress}>
          <S.SuccessDesc>{props.desc}</S.SuccessDesc>
          <Icon
            name={IconNames.rightArrow}
            color={theme.colors.text.positive}
          />
        </S.SuccessAction>
      )}
    </S.SuccessWrapper>
  ),
};
