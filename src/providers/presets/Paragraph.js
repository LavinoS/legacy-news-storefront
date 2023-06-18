import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import alignmentTypes from '../../types/alignmentTypes';
import paragraphSizes from '../../types/paragraphSizes';
import { CustomSpan, LegacyDiv } from '../../components';
import textPresetStyleProps from './styles/textPresetStyleProps';

export default (props) => {
  const {
    options: {
      text = 'Here is the default paragraph',
      size = paragraphSizes.MEDIUM,
      alignment = alignmentTypes.CENTER,
    } = {},
  } = props;

  const parsedContent = ReactHtmlParser(text);

  return (
    <LegacyDiv
      styleProps={{ ALL_DEVICES: { width: '100%', padding: '0 46px' } }}
    >
      <CustomSpan
        styleProps={textPresetStyleProps(
          paragraphSizes[size],
          alignmentTypes[alignment],
        )}
      >
        {parsedContent}
      </CustomSpan>
    </LegacyDiv>
  );
};
