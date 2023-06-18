import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import { LegacyDiv, LegacyHeading } from '../../components';
import textPresetStyleProps from './styles/textPresetStyleProps';
import { headingVariants } from '../../types/headingVariants';
import headingSizes from '../../types/headingSizes';
import alignmentTypes from '../../types/alignmentTypes';

export default (props) => {
  const {
    options: {
      text = 'Here is the default heading',
      size = headingSizes.MEDIUM,
      alignment = alignmentTypes.CENTER,
      variant = headingVariants.H1,
    } = {},
  } = props;
  const parsedContent = ReactHtmlParser(text);

  return (
    <LegacyDiv
      styleProps={{ ALL_DEVICES: { width: '100%', padding: '0 46px' } }}
    >
      <LegacyHeading
        text={parsedContent}
        styleProps={textPresetStyleProps(
          headingSizes[size],
          alignmentTypes[alignment],
        )}
        variant={headingVariants[variant]}
      />
    </LegacyDiv>
  );
};
