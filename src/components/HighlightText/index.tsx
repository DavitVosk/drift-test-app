import React, {memo} from 'react';
import {TextStyle} from 'react-native';

import * as S from './styles';

export interface Highlight {
  substring: string;
  style?: TextStyle;
  onPress?: () => {};
}
export interface HighlightTextProps {
  text: string;
  highlights: Highlight[];
  style?: TextStyle;
}

const HighlightText = ({text, style, highlights}: HighlightTextProps) => {
  const regex = new RegExp(
    `(${highlights.map(h => h.substring).join('|')})`,
    'g',
  );
  const parts = text.split(regex);

  return (
    <S.Text style={style}>
      {parts.map((part, index) => {
        const highlightConfig = highlights.find(h => h.substring === part);

        if (highlightConfig) {
          return (
            <S.Text
              key={index}
              style={[highlightConfig.style, style]}
              onPress={highlightConfig.onPress}>
              {part}
            </S.Text>
          );
        }

        return (
          <S.Text style={style} key={index}>
            {part}
          </S.Text>
        );
      })}
    </S.Text>
  );
};

export default memo(HighlightText);
